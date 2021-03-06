'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Decisions', function () {
	afterEach(function () {
		battle.destroy();
	});

	describe('Generic', function () {
		it('should wait for players to send their decisions and run them as soon as they are all received', function (done) {
			battle = common.createBattle();
			battle.join('p1', 'Guest 1', 1, [{species: "Mew", ability: 'synchronize', moves: ['recover']}]);
			battle.join('p2', 'Guest 2', 1, [{species: "Rhydon", ability: 'prankster', moves: ['sketch']}]);

			setTimeout(() => {
				battle.choose('p2', 'move 1');
			}, 20);
			setTimeout(() => {
				battle.choose('p1', 'move 1');
				assert.strictEqual(battle.turn, 2);
				done();
			}, 40);
		});

		it('should allow input of move commands in a per Pokémon basis', function () {
			battle = common.createBattle({gameType: 'doubles', partialDecisions: true}, [
				[{species: "Mew", ability: 'synchronize', moves: ['recover']}, {species: "Bulbasaur", ability: 'overgrow', moves: ['growl', 'synthesis']}],
				[{species: "Pupitar", ability: 'shedskin', moves: ['surf']}, {species: "Arceus", ability: 'multitype', moves: ['calmmind']}],
				// Pupitar is faster than Bulbasaur
			]);

			battle.choose('p1', 'move recover');
			battle.choose('p1', 'move growl');
			battle.choose('p2', 'move surf');
			battle.choose('p2', 'move calmmind');

			assert.strictEqual(battle.turn, 2);
			assert.statStage(battle.p2.active[0], 'atk', -1);

			battle.choose('p1', 'move recover');
			battle.choose('p1', 'move synthesis');
			battle.choose('p2', 'move surf');
			battle.choose('p2', 'move calmmind');

			assert.strictEqual(battle.turn, 3);
			assert.fullHP(battle.p1.active[1]);

			battle.choose('p1', 'move recover');
			battle.choose('p1', 'move 2');
			battle.choose('p2', 'move 1');
			battle.choose('p2', 'move calmmind');

			assert.strictEqual(battle.turn, 4);
			assert.fullHP(battle.p1.active[1]);
		});
	});

	describe('Move requests', function () {
		it('should allow specifying moves', function () {
			const MOVES = [['growl', 'tackle'], ['growl', 'scratch']];
			battle = common.createBattle([
				[{species: "Bulbasaur", ability: 'Overgrow', moves: MOVES[0]}],
				[{species: "Charmander", ability: 'Blaze', moves: MOVES[1]}],
			]);

			const activeMons = battle.sides.map(side => side.active[0]);
			for (let i = 0; i < 2; i++) {
				for (let j = 0; i < 2; i++) {
					const beforeHP = activeMons.map(pokemon => pokemon.hp);
					const beforeAtk = activeMons.map(pokemon => pokemon.boosts.atk);
					battle.p1.chooseMove(i + 1);
					battle.p2.chooseMove(j + 1);
					assert.strictEqual(activeMons[0].lastMove, MOVES[0][i]);
					assert.strictEqual(activeMons[1].lastMove, MOVES[1][j]);

					if (i >= 1) { // p1 used a damaging move
						assert.atMost(activeMons[1].hp, beforeHP[1] - 1);
						assert.statStage(activeMons[1], beforeAtk[1]);
					} else {
						assert.strictEqual(activeMons[1].hp, beforeHP[1]);
						assert.statStage(activeMons[1], beforeAtk[1] - 1);
					}
					if (j >= 1) { // p2 used a damaging move
						assert.atMost(activeMons[0].hp, beforeHP[0] - 1);
						assert.statStage(activeMons[0], beforeAtk[0]);
					} else {
						assert.strictEqual(activeMons[0].hp, beforeHP[0]);
						assert.statStage(activeMons[0], beforeAtk[0] - 1);
					}
				}
			}
		});

		it('should allow specifying move targets', function () {
			battle = common.createBattle({gameType: 'doubles'}, [
				[{species: "Gastrodon", ability: 'stickyhold', moves: ['gastroacid']}, {species: "Venusaur", ability: 'thickfat', moves: ['leechseed']}],
				[{species: "Tyranitar", ability: 'unnerve', moves: ['knockoff']}, {species: "Zapdos", ability: 'pressure', moves: ['thunderwave']}],
			]);
			const p2active = battle.p2.active;

			battle.p1.chooseMove(1, 1).chooseMove(1, 2);
			battle.p2.chooseMove(1, -2).chooseMove(1, -1);
			assert.strictEqual(battle.turn, 2);

			assert(p2active[0].volatiles['gastroacid']);
			assert(p2active[1].volatiles['leechseed']);
			assert.false.holdsItem(p2active[1]);
			assert.strictEqual(p2active[0].status, 'par');
		});

		it('should allow specifying switch targets', function () {
			battle = common.createBattle([[
				{species: 'Bulbasaur', ability: 'overgrow', moves: ['tackle']},
				{species: 'Ivysaur', ability: 'overgrow', moves: ['tackle']},
				{species: 'Venusaur', ability: 'overgrow', moves: ['tackle']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['scratch']},
				{species: 'Charmeleon', ability: 'blaze', moves: ['scratch']},
				{species: 'Charizard', ability: 'blaze', moves: ['scratch']},
			]]);

			battle.p1.chooseSwitch(2);
			battle.p2.chooseSwitch(3);

			assert.species(battle.p1.active[0], 'Ivysaur');
			assert.species(battle.p2.active[0], 'Charizard');

			battle.p1.chooseSwitch(3);
			battle.p2.chooseSwitch(3);

			assert.species(battle.p1.active[0], 'Venusaur');
			assert.species(battle.p2.active[0], 'Charmander');

			battle.p1.chooseSwitch(2);
			battle.p2.chooseSwitch(2);

			assert.species(battle.p1.active[0], 'Bulbasaur');
			assert.species(battle.p2.active[0], 'Charmeleon');
		});

		it('should allow shifting the Pokémon on the left to the center', function () {
			battle = common.createBattle({gameType: 'triples'});
			const p1 = battle.join('p1', 'Guest 1', 1, [
				{species: "Pineco", ability: 'sturdy', moves: ['harden']},
				{species: "Geodude", ability: 'sturdy', moves: ['defensecurl']},
				{species: "Gastly", ability: 'levitate', moves: ['spite']},
			]);
			const p2 = battle.join('p2', 'Guest 2', 1, [
				{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
				{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
				{species: "Golem", ability: 'sturdy', moves: ['defensecurl']},
			]);
			p1.chooseMove(1).chooseMove(1).chooseShift();
			p2.chooseMove(1).chooseMove(1).chooseShift();

			['Pineco', 'Gastly', 'Geodude'].forEach((species, index) => assert.species(battle.p1.active[index], species));
			['Skarmory', 'Golem', 'Aggron'].forEach((species, index) => assert.species(battle.p2.active[index], species));
		});

		it('should allow shifting the Pokémon on the right to the center', function () {
			battle = common.createBattle({gameType: 'triples'});
			const p1 = battle.join('p1', 'Guest 1', 1, [
				{species: "Pineco", ability: 'sturdy', moves: ['harden']},
				{species: "Geodude", ability: 'sturdy', moves: ['defensecurl']},
				{species: "Gastly", ability: 'levitate', moves: ['spite']},
			]);
			const p2 = battle.join('p2', 'Guest 2', 1, [
				{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
				{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
				{species: "Golem", ability: 'sturdy', moves: ['defensecurl']},
			]);
			p1.chooseShift();
			p2.chooseShift();
			battle.commitDecisions();

			['Geodude', 'Pineco', 'Gastly'].forEach((species, index) => assert.species(battle.p1.active[index], species));
			['Aggron', 'Skarmory', 'Golem'].forEach((species, index) => assert.species(battle.p2.active[index], species));
		});

		it('should force Struggle usage on move attempt for no valid moves', function () {
			battle = common.createBattle();
			battle.join('p1', 'Guest 1', 1, [{species: "Mew", ability: 'synchronize', moves: ['recover']}]);
			battle.join('p2', 'Guest 2', 1, [{species: "Rhydon", ability: 'prankster', moves: ['sketch']}]);

			// First turn
			battle.choose('p1', 'move 1');
			battle.choose('p2', 'move 1');

			// Second turn
			battle.choose('p1', 'move recover');
			battle.choose('p2', 'move sketch');

			// Implementation-dependent paths
			if (battle.turn === 3) {
				assert.strictEqual(battle.p2.active[0].lastMove, 'struggle');
			} else {
				battle.choose('p2', 'move 1');
				assert.strictEqual(battle.turn, 3);
				assert.strictEqual(battle.p2.active[0].lastMove, 'struggle');
			}
		});

		it('should not force Struggle usage on move attempt for valid moves', function () {
			battle = common.createBattle();
			battle.join('p1', 'Guest 1', 1, [{species: "Mew", ability: 'synchronize', moves: ['recover']}]);
			battle.join('p2', 'Guest 2', 1, [{species: "Rhydon", ability: 'prankster', moves: ['struggle', 'surf']}]);

			battle.p1.chooseMove(1);
			battle.p2.chooseMove(2);

			assert.strictEqual(battle.turn, 2);
			assert.notStrictEqual(battle.p2.active[0].lastMove, 'struggle');
		});

		it('should not force Struggle usage on move attempt when choosing a disabled move', function () {
			battle = common.createBattle();
			battle.join('p1', 'Guest 1', 1, [{species: "Mew", item: 'assaultvest', ability: 'synchronize', moves: ['recover', 'icebeam']}]);
			battle.join('p2', 'Guest 2', 1, [{species: "Rhydon", item: '', ability: 'prankster', moves: ['struggle', 'surf']}]);
			const failingAttacker = battle.p1.active[0];
			battle.p2.chooseMove(2);

			battle.p1.chooseMove(1);
			assert.strictEqual(battle.turn, 1);
			assert.notStrictEqual(failingAttacker.lastMove, 'struggle');

			battle.p1.chooseMove('recover');
			assert.strictEqual(battle.turn, 1);
			assert.notStrictEqual(failingAttacker.lastMove, 'struggle');
		});

		it('should send meaningful feedback to players if they try to use a disabled move', function () {
			battle = common.createBattle();
			battle.join('p1', 'Guest 1', 1, [{species: "Skarmory", ability: 'sturdy', moves: ['spikes', 'roost']}]);
			battle.join('p2', 'Guest 2', 1, [{species: "Smeargle", ability: 'owntempo', moves: ['imprison', 'spikes']}]);

			battle.commitDecisions();

			const buffer = [];
			battle.send = (type, data) => {
				if (type === 'sideupdate') buffer.push(Array.isArray(data) ? data.join('\n') : data);
			};
			battle.p1.chooseMove(1);
			assert(buffer.length >= 1);
			assert(buffer.some(message => {
				return message.startsWith('p1\n') && /\bcant\b/.test(message) && (/\|0\b/.test(message) || /\|p1a\b/.test(message));
			}));
		});

		it('should send meaningful feedback to players if they try to switch a trapped Pokémon out', function () {
			battle = common.createBattle();
			battle.join('p1', 'Guest 1', 1, [
				{species: "Scizor", ability: 'swarm', moves: ['bulletpunch']},
				{species: "Azumarill", ability: 'sapsipper', moves: ['aquajet']},
			]);
			battle.join('p2', 'Guest 2', 1, [{species: "Gothitelle", ability: 'shadowtag', moves: ['calmmind']}]);

			const buffer = [];
			battle.send = (type, data) => {
				if (type === 'sideupdate') buffer.push(Array.isArray(data) ? data.join('\n') : data);
			};
			battle.p1.chooseSwitch(2);
			assert(buffer.length >= 1);
			assert(buffer.some(message => {
				return message.startsWith('p1\n') && /\btrapped\b/.test(message) && (/\|0\b/.test(message) || /\|p1a\b/.test(message));
			}));
		});
	});

	describe('Switch requests', function () {
		it('should allow specifying switch targets', function () {
			battle = common.createBattle([[
				{species: 'Latias', ability: 'levitate', moves: ['lunardance']},
				{species: 'Ivysaur', ability: 'overgrow', moves: ['tackle']},
				{species: 'Venusaur', ability: 'overgrow', moves: ['tackle']},
			], [
				{species: 'Latias', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charmeleon', ability: 'blaze', moves: ['scratch']},
				{species: 'Charizard', ability: 'blaze', moves: ['scratch']},
			]]);

			battle.commitDecisions();
			battle.p1.chooseSwitch(2);
			battle.p2.chooseSwitch(3);

			assert.species(battle.p1.active[0], 'Ivysaur');
			assert.species(battle.p2.active[0], 'Charizard');
		});

		it('should allow passing when there are not enough available switch-ins', function () {
			battle = common.createBattle({gameType: 'doubles'}, [[
				{species: 'Latias', ability: 'levitate', moves: ['lunardance']},
				{species: 'Ivysaur', ability: 'overgrow', moves: ['lunardance']},
				{species: 'Venusaur', ability: 'overgrow', moves: ['tackle']},
			], [
				{species: 'Latias', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charmeleon', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charizard', ability: 'blaze', moves: ['scratch']},
			]]);

			battle.commitDecisions();
			battle.sides.forEach(side => side.active.forEach(pokemon => assert.fainted(pokemon)));

			battle.p1.choosePass();
			battle.p1.chooseSwitch(3);
			battle.p2.chooseSwitch(3);
			battle.p2.choosePass();

			['Latias', 'Venusaur'].forEach((species, index) => assert.species(battle.p1.active[index], species));
			['Charizard', 'Charmeleon'].forEach((species, index) => assert.species(battle.p2.active[index], species));

			assert.fainted(battle.p1.active[0]);
			assert.fainted(battle.p2.active[1]);
		});

		it('should allow passing when there are not enough available switch-ins even if an active Pokémon is not fainted', function () {
			battle = common.createBattle({gameType: 'triples'}, [[
				{species: 'Bulbasaur', ability: 'overgrow', moves: ['tackle']},
				{species: 'Clefable', ability: 'unaware', moves: ['healingwish']},
				{species: 'Latias', ability: 'levitate', moves: ['lunardance']},
				{species: 'Venusaur', ability: 'overgrow', moves: ['tackle']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['scratch']},
				{species: 'Clefable', ability: 'unaware', moves: ['healingwish']},
				{species: 'Latias', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charizard', ability: 'blaze', moves: ['scratch']},
			]]);

			battle.commitDecisions();
			assert.sets(() => battle.turn, battle.turn + 1, () => {
				battle.p1.choosePass();
				battle.p1.choosePass();
				battle.p1.chooseSwitch(4);
				battle.p2.choosePass();
				battle.p2.chooseSwitch(4);
				battle.p2.choosePass();
			}, "The turn should be resolved");

			['Bulbasaur', 'Clefable', 'Venusaur'].forEach((species, index) => assert.species(battle.p1.active[index], species));
			['Charmander', 'Charizard', 'Latias'].forEach((species, index) => assert.species(battle.p2.active[index], species));
		});

		it('should disallow passing when there are enough available switch-ins', function () {
			battle = common.createBattle({gameType: 'doubles'}, [[
				{species: 'Latias', ability: 'levitate', moves: ['lunardance']},
				{species: 'Bulbasaur', ability: 'overgrow', moves: ['lunardance']},
				{species: 'Ivysaur', ability: 'overgrow', moves: ['tackle']},
				{species: 'Venusaur', ability: 'overgrow', moves: ['tackle']},
			], [
				{species: 'Latias', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charmander', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charmeleon', ability: 'blaze', moves: ['scratch']},
				{species: 'Charizard', ability: 'blaze', moves: ['scratch']},
			]]);

			battle.commitDecisions();
			battle.sides.forEach(side => side.active.forEach(pokemon => assert.fainted(pokemon)));

			assert.constant(() => battle.turn, () => {
				battle.p1.choosePass();
				battle.p1.chooseSwitch(3);
				battle.p2.chooseSwitch(3);
				battle.p2.choosePass();
			});

			battle.sides.forEach(side => side.active.forEach(pokemon => assert.fainted(pokemon)));
		});
	});

	describe('Team Preview requests', function () {
		it('should allow specifying the team order', function () {
			const TEAMS = [[
				{species: 'Bulbasaur', ability: 'overgrow', moves: ['tackle']},
				{species: 'Clefable', ability: 'unaware', moves: ['healingwish']},
				{species: 'Latias', ability: 'levitate', moves: ['lunardance']},
				{species: 'Venusaur', ability: 'overgrow', moves: ['tackle']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['scratch']},
				{species: 'Clefable', ability: 'unaware', moves: ['healingwish']},
				{species: 'Latias', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charizard', ability: 'blaze', moves: ['scratch']},
			]];

			const BASE_TEAM_ORDER = [[1, 2, 3, 4], [1, 2, 3, 4]];
			for (let i = 0; i < 10; i++) {
				const teamOrder = BASE_TEAM_ORDER.map(Tools.shuffle);
				battle = common.createBattle({preview: true}, TEAMS);
				battle.p1.chooseTeam(teamOrder[0].join(''));
				battle.p2.chooseTeam(teamOrder[1].join(''));
				battle.p1.pokemon.forEach((pokemon, index) => assert.species(pokemon, TEAMS[0][teamOrder[0][index] - 1].species));
				battle.p2.pokemon.forEach((pokemon, index) => assert.species(pokemon, TEAMS[1][teamOrder[1][index] - 1].species));

				if (i < 9) battle.destroy();
			}
		});
	});

	describe('Logging', function () {
		it('should privately log the ID of chosen moves', function () {
			battle = common.createBattle([
				[{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle', 'growl']}],
				[{species: "Charmander", ability: 'blaze', moves: ['scratch', 'growl']}],
			]);
			battle.p1.chooseMove(1);
			battle.p2.chooseMove('growl');

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|move tackle|', '|choice||move growl', '|choice|move tackle|move growl'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should privately log the target of targetted chosen moves', function () {
			battle = common.createBattle({gameType: 'doubles'}, [[
				{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle']},
				{species: "Ivysaur", ability: 'overgrow', moves: ['tackle']},
			], [
				{species: "Charmander", ability: 'blaze', moves: ['scratch']},
				{species: "Charizard", ability: 'blaze', moves: ['scratch']},
			]]);
			battle.p1.chooseMove(1, 1).chooseMove(1, 2);
			battle.p2.chooseMove(1, 2).chooseMove(1, 1);

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|move tackle 1, move tackle 2|', '|choice||move scratch 2, move scratch 1', '|choice|move tackle 1, move tackle 2|move scratch 2, move scratch 1'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should not log the target of targetless chosen moves', function () {
			battle = common.createBattle({gameType: 'doubles'}, [[
				{species: "Bulbasaur", ability: 'overgrow', moves: ['magnitude']},
				{species: "Ivysaur", ability: 'overgrow', moves: ['rockslide']},
			], [
				{species: "Charmander", ability: 'blaze', moves: ['scratch']},
				{species: "Charizard", ability: 'blaze', moves: ['scratch']},
			]]);
			battle.p1.chooseMove(1).chooseMove(1);
			battle.p2.chooseMove(1, 1).chooseMove(1, 1);

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|move magnitude, move rockslide|', '|choice||move scratch 1, move scratch 1', '|choice|move magnitude, move rockslide|move scratch 1, move scratch 1'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should privately log the user intention of mega evolving', function () {
			battle = common.createBattle([
				[{species: "Venusaur", item: 'venusaurite', ability: 'overgrow', moves: ['tackle']}],
				[{species: "Blastoise", item: 'blastoisinite', ability: 'blaze', moves: ['tailwhip']}],
			]);
			battle.p1.chooseMove(1, null, true);
			battle.p2.chooseMove(1, null, true);

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|move tackle mega|', '|choice||move tailwhip mega', '|choice|move tackle mega|move tailwhip mega'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should privately log the user intention of mega evolving for Mega-X and Mega-Y', function () {
			battle = common.createBattle([
				[{species: "Charizard", item: 'charizarditex', ability: 'blaze', moves: ['scratch']}],
				[{species: "Charizard", item: 'charizarditey', ability: 'blaze', moves: ['ember']}],
			]);
			battle.p1.chooseMove(1, null, true);
			battle.p2.chooseMove(1, null, true);

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|move scratch mega|', '|choice||move ember mega', '|choice|move scratch mega|move ember mega'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should privately log the target of switches', function () {
			battle = common.createBattle([[
				{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle']},
				{species: "Ivysaur", ability: 'overgrow', moves: ['tackle']},
				{species: "Venusaur", ability: 'overgrow', moves: ['tackle']},
			], [
				{species: "Charmander", ability: 'blaze', moves: ['scratch']},
				{species: "Charmeleon", ability: 'blaze', moves: ['scratch']},
				{species: "Charizard", ability: 'blaze', moves: ['scratch']},
			]]);

			battle.p1.chooseSwitch(2);
			battle.p2.chooseSwitch(3);

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|switch 2|', '|choice||switch 3', '|choice|switch 2|switch 3'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should privately log the team order chosen', function () {
			battle = common.createBattle({preview: true}, [[
				{species: 'Bulbasaur', ability: 'overgrow', moves: ['tackle']},
				{species: 'Clefable', ability: 'unaware', moves: ['healingwish']},
				{species: 'Latias', ability: 'levitate', moves: ['lunardance']},
				{species: 'Venusaur', ability: 'overgrow', moves: ['tackle']},
			], [
				{species: 'Charmander', ability: 'blaze', moves: ['scratch']},
				{species: 'Clefable', ability: 'unaware', moves: ['healingwish']},
				{species: 'Latias', ability: 'blaze', moves: ['lunardance']},
				{species: 'Charizard', ability: 'blaze', moves: ['scratch']},
			]]);

			battle.p1.chooseTeam('1342');
			battle.p2.chooseTeam('1234');

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|team 1342|', '|choice||team 1234', '|choice|team 1342|team 1234'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should privately log shifting decisions for the Pokémon on the left', function () {
			battle = common.createBattle({gameType: 'triples'});
			const p1 = battle.join('p1', 'Guest 1', 1, [
				{species: "Pineco", ability: 'sturdy', moves: ['harden']},
				{species: "Geodude", ability: 'sturdy', moves: ['defensecurl']},
				{species: "Gastly", ability: 'levitate', moves: ['haze']},
			]);
			const p2 = battle.join('p2', 'Guest 2', 1, [
				{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
				{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
				{species: "Golem", ability: 'sturdy', moves: ['defensecurl']},
			]);
			p1.chooseShift(1).chooseMove(1).chooseMove(1);
			p2.chooseMove(1).chooseMove(1).chooseMove(1);

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|shift, move defensecurl, move haze|', '|choice||move roost, move irondefense, move defensecurl', '|choice|shift, move defensecurl, move haze|move roost, move irondefense, move defensecurl'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});

		it('should privately log shifting decisions for the Pokémon on the right', function () {
			battle = common.createBattle({gameType: 'triples'});
			const p1 = battle.join('p1', 'Guest 1', 1, [
				{species: "Pineco", ability: 'sturdy', moves: ['harden']},
				{species: "Geodude", ability: 'sturdy', moves: ['defensecurl']},
				{species: "Gastly", ability: 'levitate', moves: ['haze']},
			]);
			const p2 = battle.join('p2', 'Guest 2', 1, [
				{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
				{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
				{species: "Golem", ability: 'sturdy', moves: ['defensecurl']},
			]);
			p1.chooseMove(1).chooseMove(1).chooseShift();
			p2.chooseMove(1).chooseMove(1).chooseMove(1);

			const logText = battle.log.join('\n');
			const logs = ['|choice||', '|choice|move harden, move defensecurl, shift|', '|choice||move roost, move irondefense, move defensecurl', '|choice|move harden, move defensecurl, shift|move roost, move irondefense, move defensecurl'];
			const subString = '|split\n' + logs.join('\n');
			assert(logText.includes(subString), `${logText} does not include ${subString}`);
		});
	});
});

describe('Decision extensions', function () {
	it('should not allow revoking decisions after every player has sent an unrevoked decision', function () {
		battle = common.createBattle({cancel: true});
		battle.join('p1', 'Guest 1', 1, [{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle', 'growl']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Charmander", ability: 'blaze', moves: ['tackle', 'growl']}]);

		// First turn
		battle.choose('p1', 'move tackle');
		battle.choose('p2', 'move growl');
		battle.undoChoice('p1');
		battle.choose('p1', 'move growl');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].lastMove, 'tackle');
		assert.strictEqual(battle.p2.active[0].lastMove, 'growl');
	});

	it('should not allow overriding decisions after every player has sent an unrevoked decision', function () {
		battle = common.createBattle({cancel: true});
		battle.join('p1', 'Guest 1', 1, [{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle', 'growl']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Charmander", ability: 'blaze', moves: ['tackle', 'growl']}]);

		// First turn
		battle.choose('p1', 'move tackle');
		battle.choose('p2', 'move growl');
		battle.choose('p1', 'move growl');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].lastMove, 'tackle');
		assert.strictEqual(battle.p2.active[0].lastMove, 'growl');
	});

	it('should support revoking decisions', function () {
		battle = common.createBattle({cancel: true});
		battle.join('p1', 'Guest 1', 1, [{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle', 'growl']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Charmander", ability: 'blaze', moves: ['tackle', 'growl']}]);

		// First turn
		battle.choose('p1', 'move tackle');
		battle.undoChoice('p1');
		battle.choose('p1', 'move growl');
		battle.choose('p2', 'move growl');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].lastMove, 'growl');
		assert.strictEqual(battle.p2.active[0].lastMove, 'growl');
	});

	it('should support overriding decisions', function () {
		battle = common.createBattle({cancel: true});
		battle.join('p1', 'Guest 1', 1, [{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle', 'growl']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Charmander", ability: 'blaze', moves: ['tackle', 'growl']}]);

		// First turn
		battle.choose('p1', 'move 1');
		battle.choose('p1', 'move growl');
		battle.choose('p2', 'move 2');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].lastMove, 'growl');
		assert.strictEqual(battle.p2.active[0].lastMove, 'growl');
	});

	it('should disallow revoking decisions by default', function () {
		battle = common.createBattle();
		battle.join('p1', 'Guest 1', 1, [{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle', 'growl']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Charmander", ability: 'blaze', moves: ['tackle', 'growl']}]);

		// First turn
		battle.choose('p1', 'move tackle');
		battle.undoChoice('p1');
		battle.choose('p1', 'move growl');
		battle.choose('p2', 'move growl');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].lastMove, 'tackle');
		assert.strictEqual(battle.p2.active[0].lastMove, 'growl');
	});

	it('should support revoking decisions on double switches', function () {
		battle = common.createBattle({cancel: true});
		battle.join('p1', 'Guest 1', 1, [
			{species: "Deoxys-Attack", ability: 'pressure', moves: ['explosion']},
			{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle']},
			{species: "Chikorita", ability: 'overgrow', moves: ['tackle']},
		]);
		battle.join('p2', 'Guest 2', 1, [
			{species: "Caterpie", ability: 'shielddust', moves: ['tackle']},
			{species: "Charmander", ability: 'blaze', moves: ['tackle']},
		]);

		battle.commitDecisions();

		// First turn
		battle.choose('p1', 'switch 2');
		battle.undoChoice('p1');
		battle.choose('p1', 'switch 3');
		battle.choose('p2', 'switch 2');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].template.species, 'Chikorita');
		assert.strictEqual(battle.p2.active[0].template.species, 'Charmander');
	});

	it('should support overriding decisions on double switches', function () {
		battle = common.createBattle({cancel: true});
		battle.join('p1', 'Guest 1', 1, [
			{species: "Deoxys-Attack", ability: 'pressure', moves: ['explosion']},
			{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle']},
			{species: "Chikorita", ability: 'overgrow', moves: ['tackle']},
		]);
		battle.join('p2', 'Guest 2', 1, [
			{species: "Caterpie", ability: 'shielddust', moves: ['tackle']},
			{species: "Charmander", ability: 'blaze', moves: ['tackle']},
		]);

		battle.commitDecisions();

		battle.choose('p1', 'switch 2');
		battle.choose('p1', 'switch 3');
		battle.choose('p2', 'switch 2');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].template.species, 'Chikorita');
		assert.strictEqual(battle.p2.active[0].template.species, 'Charmander');
	});

	it('should disallow overriding decisions by default', function () {
		battle = common.createBattle();
		battle.join('p1', 'Guest 1', 1, [{species: "Bulbasaur", ability: 'overgrow', moves: ['tackle', 'growl']}]);
		battle.join('p2', 'Guest 2', 1, [{species: "Charmander", ability: 'blaze', moves: ['tackle', 'growl']}]);

		battle.choose('p1', 'move 1');
		battle.choose('p1', 'move growl');
		battle.choose('p2', 'move 2');

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(battle.p1.active[0].lastMove, 'tackle');
		assert.strictEqual(battle.p2.active[0].lastMove, 'growl');
	});
});

describe('Decision internals', function () {
	afterEach(function () {
		battle.destroy();
	});

	it('should allow input of move commands in a per Pokémon basis', function () {
		battle = common.createBattle({gameType: 'doubles'});
		const p1 = battle.join('p1', 'Guest 1', 1, [
			{species: "Mew", ability: 'synchronize', moves: ['recover']},
			{species: "Bulbasaur", ability: 'overgrow', moves: ['growl', 'synthesis']},
		]);
		const p2 = battle.join('p2', 'Guest 2', 1, [
			{species: "Pupitar", ability: 'shedskin', moves: ['surf']}, // faster than Bulbasaur
			{species: "Arceus", ability: 'multitype', moves: ['calmmind']},
		]);

		assert.strictEqual(battle.turn, 1);
		p1.chooseMove(1).chooseMove(1, 1);
		p2.chooseMove(1).chooseMove(1);

		assert.strictEqual(battle.turn, 2);
		assert.statStage(p2.active[0], 'atk', -1);
		p1.chooseMove('recover').chooseMove('synthesis');
		p2.chooseMove('surf').chooseMove('calmmind');

		assert.strictEqual(battle.turn, 3);
		assert.fullHP(p1.active[1]);

		p1.chooseMove('recover').chooseMove('2');
		p2.chooseMove('1').chooseMove('calmmind');

		assert.strictEqual(battle.turn, 4);
		assert.fullHP(p1.active[1]);
	});

	it('should allow input of switch commands in a per Pokémon basis', function () {
		battle = common.createBattle({gameType: 'doubles'});
		const p1 = battle.join('p1', 'Guest 1', 1, [
			{species: "Mew", ability: 'synchronize', moves: ['selfdestruct']},
			{species: "Bulbasaur", ability: 'overgrow', moves: ['selfdestruct']},
			{species: "Koffing", ability: 'levitate', moves: ['smog']},
			{species: "Ekans", ability: 'shedskin', moves: ['leer']},
		]);
		const p2 = battle.join('p2', 'Guest 2', 1, [
			{species: "Deoxys-Defense", ability: 'pressure', moves: ['recover']},
			{species: "Arceus", ability: 'multitype', moves: ['recover']},
		]);

		assert.strictEqual(battle.turn, 1);
		p1.chooseMove('selfdestruct').chooseMove('selfdestruct');
		p2.chooseMove('recover').chooseMove('recover');

		assert.fainted(p1.active[0]);
		assert.fainted(p1.active[1]);
		p1.chooseSwitch(4).chooseSwitch(3);
		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(p1.active[0].name, 'Ekans');
		assert.strictEqual(p1.active[1].name, 'Koffing');
	});

	it('should allow input of move and switch commands in a per Pokémon basis', function () {
		battle = common.createBattle({gameType: 'doubles'});
		const p1 = battle.join('p1', 'Guest 1', 1, [
			{species: "Mew", ability: 'synchronize', moves: ['recover']},
			{species: "Bulbasaur", ability: 'overgrow', moves: ['growl', 'synthesis']},
			{species: "Koffing", ability: 'levitate', moves: ['smog']},
			{species: "Ekans", ability: 'shedskin', moves: ['leer']},
		]);
		const p2 = battle.join('p2', 'Guest 2', 1, [
			{species: "Deoxys-Defense", ability: 'pressure', moves: ['recover']},
			{species: "Arceus", ability: 'multitype', moves: ['recover']},
		]);

		assert.strictEqual(battle.turn, 1);
		p1.chooseMove(1).chooseSwitch(4);
		assert(!p2.chooseSwitch(3));
		p2.chooseMove(1).chooseMove(1);

		assert.strictEqual(battle.turn, 2);
		assert.strictEqual(p1.active[0].name, 'Mew');
		assert.strictEqual(p1.active[1].name, 'Ekans');

		p1.chooseSwitch(4).chooseMove(1);
		assert(!p2.chooseSwitch(3));
		p2.chooseMove(1).chooseMove(1);

		assert.strictEqual(battle.turn, 3);
		assert.strictEqual(p1.active[0].name, 'Bulbasaur');
		assert.strictEqual(p1.active[1].name, 'Ekans');
	});

	it('should empty the decisions list when undoing a move', function () {
		battle = common.createBattle({gameType: 'doubles', cancel: true});
		const p1 = battle.join('p1', 'Guest 1', 1, [
			{species: "Pineco", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Geodude", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Koffing", ability: 'levitate', moves: ['smog']},
		]);
		const p2 = battle.join('p2', 'Guest 2', 1, [
			{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
			{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
		]);

		p1.chooseMove(1);
		assert(p1.choiceData.decisions.length > 0);
		battle.undoChoice('p1');
		assert.false(p1.choiceData.decisions.length > 0);
		p1.chooseDefault();
		p2.chooseDefault();

		assert.fainted(p1.active[0]);
		assert.fainted(p1.active[1]);
	});

	it('should empty the decisions list when undoing a switch', function () {
		battle = common.createBattle({gameType: 'doubles', cancel: true});
		const p1 = battle.join('p1', 'Guest 1', 1, [
			{species: "Pineco", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Geodude", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Koffing", ability: 'levitate', moves: ['smog']},
		]);
		battle.join('p2', 'Guest 2', 1, [
			{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
			{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
		]);

		battle.commitDecisions();

		p1.chooseSwitch(3);
		assert(p1.choiceData.decisions.length > 0);
		battle.undoChoice('p1');
		assert.false(p1.choiceData.decisions.length > 0);
		p1.choosePass().chooseSwitch(3);

		assert.fainted(p1.active[0]);
		assert.species(p1.active[1], 'Koffing');
	});

	it('should empty the decisions list when undoing a pass', function () {
		battle = common.createBattle({gameType: 'doubles', cancel: true});
		const p1 = battle.join('p1', 'Guest 1', 1, [
			{species: "Pineco", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Geodude", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Koffing", ability: 'levitate', moves: ['smog']},
		]);
		battle.join('p2', 'Guest 2', 1, [
			{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
			{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
		]);

		battle.commitDecisions();

		p1.choosePass();
		assert(p1.choiceData.decisions.length > 0);
		battle.undoChoice('p1');
		assert.false(p1.choiceData.decisions.length > 0);
		p1.choosePass().chooseSwitch(3);

		assert.fainted(p1.active[0]);
		assert.species(p1.active[1], 'Koffing');
	});

	it('should empty the decisions list when undoing a shift', function () {
		battle = common.createBattle({gameType: 'triples', cancel: true});
		battle.supportCancel = true;
		const p1 = battle.join('p1', 'Guest 1', 1, [
			{species: "Pineco", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Geodude", ability: 'sturdy', moves: ['selfdestruct']},
			{species: "Gastly", ability: 'levitate', moves: ['lick']},
		]);
		const p2 = battle.join('p2', 'Guest 2', 1, [
			{species: "Skarmory", ability: 'sturdy', moves: ['roost']},
			{species: "Aggron", ability: 'sturdy', moves: ['irondefense']},
			{species: "Golem", ability: 'sturdy', moves: ['defensecurl']},
		]);

		p1.chooseShift();
		assert(p1.choiceData.decisions.length > 0);
		battle.undoChoice('p1');
		assert.false(p1.choiceData.decisions.length > 0);
		p1.chooseMove(1).chooseMove(1).chooseShift();
		p2.chooseDefault();

		assert.fainted(p1.active[0]);
		assert.fainted(p1.active[2]);
		assert.species(p1.active[1], 'Gastly');
		assert.false.fainted(p1.active[1]);
	});
});

