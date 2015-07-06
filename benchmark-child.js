require('sugar');

global.toId = function (text) {
	if (text && text.id) {
		text = text.id;
	} else if (text && text.userid) {
		text = text.userid;
	}
	if (typeof text !== 'string' && typeof str !== 'number') return '';
	return ('' + text).toLowerCase().replace(/[^a-z0-9]+/g, '');
};

function originalMethod () {
	var Tools = global.Tools = require('./tools.js').mod('base');
}

function newMethod () {
	var Tools = global.Tools = require('./tools.js').includeData();
	var moddedTools = Object.getPrototypeOf(Tools).moddedTools;
	for (var id in moddedTools) {
		if (!moddedTools[id].isLoaded) moddedTools[id].includeData();
	}
}

var testFunction = process.env.type === 'old' ? originalMethod : newMethod;
var option = '';

var hrtime = process.hrtime();
testFunction();
var diff = process.hrtime(hrtime);
process.stdout.write('' + (diff[0] * 1e9 + diff[1]));
