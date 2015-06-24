/**
 * Command parser
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This is the command parser. Call it with CommandParser.parse
 * (scroll down to its definition for details)
 *
 * Individual commands are put in:
 *   commands.js - "core" commands that shouldn't be modified
 *   chat-plugins/ - other commands that can be safely modified
 *
 * The command API is (mostly) documented in chat-plugins/COMMANDS.md
 *
 * @license MIT license
 */

/*

To reload chat commands:

/hotpatch chat

*/

const MAX_MESSAGE_LENGTH = 300;

const BROADCAST_COOLDOWN = -1;

const MESSAGE_COOLDOWN = -1;

const MAX_PARSE_RECURSION = 10;

var fs = require('fs');
var path = require('path');

/*********************************************************
 * Load command files
 *********************************************************/

var commands = exports.commands = require('./commands.js').commands;

// Install plug-in commands

fs.readdirSync(path.resolve(__dirname, 'chat-plugins')).forEach(function (file) {
	if (file.substr(-3) === '.js') Object.merge(commands, require('./chat-plugins/' + file).commands);
});

/*********************************************************
 * Parser
 *********************************************************/

var modlog = exports.modlog = {lobby: fs.createWriteStream(path.resolve(__dirname, 'logs/modlog/modlog_lobby.txt'), {flags:'a+'}), battle: fs.createWriteStream(path.resolve(__dirname, 'logs/modlog/modlog_battle.txt'), {flags:'a+'})};

/**
 * Can this user talk?
 * Shows an error message if not.
 */
function canTalk(user, room, connection, message, targetUser) {
	if (!user.named) {
		connection.popup("You must choose a name before you can talk.");
		return false;
	}
	if (room && user.locked) {
		connection.sendTo(room, "You are locked from talking in chat.");
		return false;
	}
	if (room && room.isMuted(user)) {
		connection.sendTo(room, "You are muted and cannot talk in this room.");
		return false;
	}
	if (room && room.modchat) {
		if (room.modchat === 'crash') {
			if (!user.can('ignorelimits')) {
				connection.sendTo(room, "Because the server has crashed, you cannot speak in lobby chat.");
				return false;
			}
		} else {
			var userGroup = user.group;
			if (room.auth) {
				if (room.auth[user.userid]) {
					userGroup = room.auth[user.userid];
				} else if (room.isPrivate === true) {
					userGroup = ' ';
				}
			}
			if (room.modchat === 'autoconfirmed') {
				if (!user.autoconfirmed && userGroup === ' ') {
					connection.sendTo(room, "Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.");
					return false;
				}
			} else if (Config.groupsranking.indexOf(userGroup) < Config.groupsranking.indexOf(room.modchat)) {
				var groupName = Config.groups[room.modchat].name || room.modchat;
				connection.sendTo(room, "Because moderated chat is set, you must be of rank " + groupName + " or higher to speak in this room.");
				return false;
			}
		}
	}
	if (room && !(user.userid in room.users)) {
		connection.popup("You can't send a message to this room without being in it.");
		return false;
	}

	if (typeof message === 'string') {
		if (!message) {
			connection.popup("Your message can't be blank.");
			return false;
		}
		if (message.length > MAX_MESSAGE_LENGTH && !user.can('ignorelimits')) {
			connection.popup("Your message is too long:\n\n" + message);
			return false;
		}

		// remove zalgo
		message = message.replace(/[\u0300-\u036f\u0483-\u0489\u064b-\u065f\u0670\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]{3,}/g, '');

		if (room && room.id === 'lobby') {
			var normalized = message.trim();
			if ((normalized === user.lastMessage) &&
					((Date.now() - user.lastMessageTime) < MESSAGE_COOLDOWN)) {
				connection.popup("You can't send the same message again so soon.");
				return false;
			}
			user.lastMessage = message;
			user.lastMessageTime = Date.now();
		}

		if (Config.chatfilter) {
			return Config.chatfilter(message, user, room, connection, targetUser);
		}
		return message;
	}

	return true;
}

var CommandContext = exports.Context = (function () {
	function CommandContext (options) {
		this.cmd = options.cmd || '';
		this.fullCmd = options.fullCmd || '';

		this.target = options.target || '';
		this.message = options.message || '';
		this.originalMessage = options.originalMessage || '';

		this.levelsDeep = options.levelsDeep || 0;
		this.namespaces = options.namespaces || null;

		this.room = options.room || null;
		this.user = options.user || null;
		this.connection = options.connection || null;

		this.targetUserName = '';
		this.targetUser = null;
	}

	CommandContext.prototype.sendReply = function (data) {
		if (this.broadcasting) {
			this.room.add(data);
		} else {
			this.connection.sendTo(this.room, data);
		}
	};
	CommandContext.prototype.sendReplyBox = function (html) {
		this.sendReply('|raw|<div class="infobox">' + html + '</div>');
	};
	CommandContext.prototype.popupReply = function (message) {
		this.connection.popup(message);
	};
	CommandContext.prototype.add = function (data) {
		this.room.add(data);
	};
	CommandContext.prototype.send = function (data) {
		this.room.send(data);
	};
	CommandContext.prototype.privateModCommand = function (data, noLog) {
		this.sendModCommand(data);
		this.logEntry(data);
		this.logModCommand(data);
	};
	CommandContext.prototype.sendModCommand = function (data) {
		var users = this.room.users;
		var auth = this.room.auth;

		for (var i in users) {
			var user = users[i];
			// hardcoded for performance reasons (this is an inner loop)
			if (user.isStaff || (auth && (auth[user.userid] || '+') !== '+')) {
				user.sendTo(this.room, data);
			}
		}
	};
	CommandContext.prototype.logEntry = function (data) {
		this.room.logEntry(data);
	};
	CommandContext.prototype.addModCommand = function (text, logOnlyText) {
		this.add(text);
		this.logModCommand(text + (logOnlyText || ""));
	};
	CommandContext.prototype.logModCommand = function (result, targetRoom) {
		if (!targetRoom) targetRoom = this.room;
		if (!modlog[targetRoom.id]) {
			if (targetRoom.battle) {
				modlog[targetRoom.id] = modlog['battle'];
			} else {
				modlog[targetRoom.id] = fs.createWriteStream(path.resolve(__dirname, 'logs/modlog/modlog_' + targetRoom.id + '.txt'), {flags:'a+'});
			}
		}
		modlog[targetRoom.id].write('[' + (new Date().toJSON()) + '] (' + targetRoom.id + ') ' + result + '\n');
	};
	CommandContext.prototype.can = function (permission, target, room) {
		if (!this.user.can(permission, target, room)) {
			this.sendReply("/" + this.fullCmd + " - Access denied.");
			return false;
		}
		return true;
	};
	CommandContext.prototype.canBroadcast = function (suppressMessage) {
		if (this.broadcast) {
			var message = this.canTalk(this.originalMessage);
			if (!message) return false;
			if (!this.user.can('broadcast', null, this.room)) {
				this.connection.sendTo(this.room, "You need to be voiced to broadcast this command's information.");
				this.connection.sendTo(this.room, "To see it for yourself, use: /" + message.substr(1));
				return false;
			}

			// broadcast cooldown
			var normalized = message.toLowerCase().replace(/[^a-z0-9\s!,]/g, '');
			if (this.room.lastBroadcast === normalized &&
					this.room.lastBroadcastTime >= Date.now() - BROADCAST_COOLDOWN) {
				this.connection.sendTo(this.room, "You can't broadcast this because it was just broadcast.");
				return false;
			}
			this.add('|c|' + this.user.getIdentity(this.room.id) + '|' + (suppressMessage || message));
			this.room.lastBroadcast = normalized;
			this.room.lastBroadcastTime = Date.now();

			this.broadcasting = true;
		}
		return true;
	};
	CommandContext.prototype.parse = function (message, inNamespace) {
		if (inNamespace && (message[0] === '/' || message[0] === '!')) {
			message = message[0] + this.namespaces.concat(message.slice(1)).join(" ");
		}
		return CommandParser.parse(message, this.room, this.user, this.connection, this.levelsDeep + 1);
	};
	CommandContext.prototype.canTalk = function (message, relevantRoom, targetUser) {
		var innerRoom = (relevantRoom !== undefined) ? relevantRoom : this.room;
		return canTalk(this.user, innerRoom, this.connection, message, targetUser);
	};
	CommandContext.prototype.canHTML = function (html) {
		html = '' + (html || '');
		var images = html.match(/<img\b[^<>]*/ig);
		if (!images) return true;
		for (var i = 0; i < images.length; i++) {
			if (!/width=([0-9]+|"[0-9]+")/i.test(images[i]) || !/height=([0-9]+|"[0-9]+")/i.test(images[i])) {
				this.sendReply('All images must have a width and height attribute');
				return false;
			}
		}
		if (/>here.?</i.test(html) || /click here/i.test(html)) {
			this.sendReply('Do not use "click here"');
			return false;
		}

		// check for mismatched tags
		var tags = html.toLowerCase().match(/<\/?(div|a|button|b|i|u|center|font)\b/g);
		if (tags) {
			var stack = [];
			for (var i = 0; i < tags.length; i++) {
				var tag = tags[i];
				if (tag.charAt(1) === '/') {
					if (!stack.length) {
						this.sendReply("Extraneous </" + tag.substr(2) + "> without an opening tag.");
						return false;
					}
					if (tag.substr(2) !== stack.pop()) {
						this.sendReply("Missing </" + tag.substr(2) + "> or it's in the wrong place.");
						return false;
					}
				} else {
					stack.push(tag.substr(1));
				}
			}
			if (stack.length) {
				this.sendReply("Missing </" + stack.pop() + ">.");
				return false;
			}
		}

		return true;
	};
	CommandContext.prototype.targetUserOrSelf = function (target, exactName) {
		if (!target) {
			this.targetUsername = this.user.name;
			return this.user;
		}
		this.splitTarget(target, exactName);
		return this.targetUser;
	};
	CommandContext.prototype.getLastIdOf = function (user) {
		if (typeof user === 'string') user = Users.get(user);
		return (user.named ? user.userid : (Object.keys(user.prevNames).last() || user.userid));
	};
	CommandContext.prototype.splitTarget = function (target, exactName) {
		var commaIndex = target.indexOf(',');
		if (commaIndex < 0) {
			var targetUser = Users.get(target, exactName);
			this.targetUser = targetUser;
			this.targetUsername = targetUser ? targetUser.name : target;
			return '';
		}
		var targetUser = Users.get(target.substr(0, commaIndex), exactName);
		if (!targetUser) {
			targetUser = null;
		}
		this.targetUser = targetUser;
		this.targetUsername = targetUser ? targetUser.name : target.substr(0, commaIndex);
		return target.substr(commaIndex + 1).trim();
	};

	return CommandContext;
})();

/**
 * Command parser
 *
 * Usage:
 *   CommandParser.parse(message, room, user, connection)
 *
 * message - the message the user is trying to say
 * room - the room the user is trying to say it in
 * user - the user that sent the message
 * connection - the connection the user sent the message from
 *
 * Returns the message the user should say, or a falsy value which
 * means "don't say anything"
 *
 * Examples:
 *   CommandParser.parse("/join lobby", room, user, connection)
 *     will make the user join the lobby, and return false.
 *
 *   CommandParser.parse("Hi, guys!", room, user, connection)
 *     will return "Hi, guys!" if the user isn't muted, or
 *     if he's muted, will warn him that he's muted, and
 *     return false.
 */
var parse = exports.parse = function (message, room, user, connection, levelsDeep) {
	var cmd = '', target = '';
	if (!message || !message.trim().length) return;
	if (!levelsDeep) {
		levelsDeep = 0;
	} else {
		if (levelsDeep > MAX_PARSE_RECURSION) {
			return connection.sendTo(room, "Error: Too much recursion");
		}
	}

	if (message.substr(0, 3) === '>> ') {
		// multiline eval
		message = '/eval ' + message.substr(3);
	} else if (message.substr(0, 4) === '>>> ') {
		// multiline eval
		message = '/evalbattle ' + message.substr(4);
	}

	if (message.charAt(0) === '/' && message.charAt(1) !== '/') {
		var spaceIndex = message.indexOf(' ');
		if (spaceIndex > 0) {
			cmd = message.substr(1, spaceIndex - 1);
			target = message.substr(spaceIndex + 1);
		} else {
			cmd = message.substr(1);
			target = '';
		}
	} else if (message.charAt(0) === '!') {
		var spaceIndex = message.indexOf(' ');
		if (spaceIndex > 0) {
			cmd = message.substr(0, spaceIndex);
			target = message.substr(spaceIndex + 1);
		} else {
			cmd = message;
			target = '';
		}
	}
	cmd = cmd.toLowerCase();
	var broadcast = false;
	if (cmd.charAt(0) === '!') {
		broadcast = true;
		cmd = cmd.substr(1);
	}

	var namespaces = [];
	var currentCommands = commands;
	var originalMessage = message;
	var commandHandler;
	do {
		commandHandler = currentCommands[cmd];
		if (typeof commandHandler === 'string') {
			// in case someone messed up, don't loop
			commandHandler = currentCommands[commandHandler];
		}
		if (commandHandler && typeof commandHandler === 'object') {
			namespaces.push(cmd);

			var newCmd = target;
			var newTarget = '';
			var spaceIndex = target.indexOf(' ');
			if (spaceIndex > 0) {
				newCmd = target.substr(0, spaceIndex);
				newTarget = target.substr(spaceIndex + 1);
			}
			newCmd = newCmd.toLowerCase();
			var newMessage = message.replace(cmd + (target ? ' ' : ''), '');

			cmd = newCmd;
			target = newTarget;
			message = newMessage;
			currentCommands = commandHandler;
		}
	} while (commandHandler && typeof commandHandler === 'object');
	if (!commandHandler && currentCommands.default) {
		commandHandler = currentCommands.default;
		if (typeof commandHandler === 'string') {
			commandHandler = currentCommands[commandHandler];
		}
	}
	var fullCmd = namespaces.concat(cmd).join(' ');

	if (commandHandler) {
		var context = new CommandContext({
			target: target, room: room, user: user, connection: connection, cmd: cmd, message: message,
			levelsDeep: levelsDeep, namespaces: namespaces, broadcast: broadcast
		});

		var result;
		try {
			result = commandHandler.call(context, target, room, user, connection, cmd, message);
		} catch (err) {
			var stack = err.stack + '\n\n' +
					'Additional information:\n' +
					'user = ' + user.name + '\n' +
					'room = ' + room.id + '\n' +
					'message = ' + originalMessage;
			var fakeErr = {stack: stack};

			if (!require('./crashlogger.js')(fakeErr, 'A chat command')) {
				var ministack = ("" + err.stack).escapeHTML().split("\n").slice(0, 2).join("<br />");
				Rooms.lobby.send('|html|<div class="broadcast-red"><b>POKEMON SHOWDOWN HAS CRASHED:</b> ' + ministack + '</div>');
			} else {
				context.sendReply('|html|<div class="broadcast-red"><b>Pokemon Showdown crashed!</b><br />Don\'t worry, we\'re working on fixing it.</div>');
			}
		}
		if (result === undefined) result = false;

		return result;
	} else {
		// Check for mod/demod/admin/deadmin/etc depending on the group ids
		for (var g in Config.groups) {
			var groupid = Config.groups[g].id;
			if (cmd === groupid || cmd === 'global' + groupid) {
				return parse('/promote ' + toId(target) + ', ' + g, room, user, connection);
			} else if (cmd === 'de' + groupid || cmd === 'un' + groupid || cmd === 'globalde' + groupid || cmd === 'deglobal' + groupid) {
				return parse('/demote ' + toId(target), room, user, connection);
			} else if (cmd === 'room' + groupid) {
				return parse('/roompromote ' + toId(target) + ', ' + g, room, user, connection);
			} else if (cmd === 'roomde' + groupid || cmd === 'deroom' + groupid || cmd === 'roomun' + groupid) {
				return parse('/roomdemote ' + toId(target), room, user, connection);
			}
		}

		if (message.charAt(0) === '/' && fullCmd) {
			// To guard against command typos, we now emit an error message
			return connection.sendTo(room.id, "The command '/" + fullCmd + "' was unrecognized. To send a message starting with '/" + fullCmd + "', type '//" + fullCmd + "'.");
		}
	}

	if (message.charAt(0) === '/' && message.charAt(1) !== '/') {
		message = '/' + message;
	}
	message = canTalk(user, room, connection, message);
	if (!message) return false;
	if (message.charAt(0) === '/' && message.charAt(1) !== '/') {
		return parse(message, room, user, connection, levelsDeep + 1);
	}

	return message;
};

exports.package = {};
fs.readFile(path.resolve(__dirname, 'package.json'), function (err, data) {
	if (err) return;
	exports.package = JSON.parse(data);
});

exports.uncacheTree = function (root) {
	var uncache = [require.resolve(root)];
	function getFilename(module) {
		return module.filename;
	}
	do {
		var newuncache = [];
		for (var i = 0; i < uncache.length; ++i) {
			if (require.cache[uncache[i]]) {
				newuncache.push.apply(newuncache,
					require.cache[uncache[i]].children.map(getFilename)
				);
				delete require.cache[uncache[i]];
			}
		}
		uncache = newuncache;
	} while (uncache.length > 0);
};
