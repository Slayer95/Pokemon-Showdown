exports.BattleItems = {
	"absorbbulb": {
		id: "absorbbulb",
		name: "Absorb Bulb",
		spritenum: 2,
		fling: {
			basePower: 30
		},
		onAfterDamage: function(damage, target, source, move) {
			if (move.type === 'Water' && target.useItem()) {
				this.boost({spa: 1});
			}
		},
		desc: "Raises Sp. Atk by 1 if hit by a Water-type attack. Single use."
	},
	"adamantorb": {
		id: "adamantorb",
		name: "Adamant Orb",
		spritenum: 4,
		fling: {
			basePower: 60
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && user.template.species === 'Dialga' && (move.type === 'Steel' || move.type === 'Dragon')) {
				return basePower * 1.2;
			}
		},
		desc: "If holder is a Dialga, its Steel- and Dragon-type attacks have 1.2x power."
	},
	"aguavberry": {
		id: "aguavberry",
		name: "Aguav Berry",
		spritenum: 5,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Dragon"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/8);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"airballoon": {
		id: "airballoon",
		name: "Air Balloon",
		spritenum: 6,
		fling: {
			basePower: 10
		},
		onStart: function(target) {
			this.add('-item', target, 'Air Balloon');
		},
		onImmunity: function(type) {
			if (type === 'Ground') return false;
		},
		onAfterDamage: function(damage, target, source, effect) {
			this.debug('effect: '+effect.id);
			if (effect.effectType === 'Move') {
				this.add('-enditem', target, 'Air Balloon');
				target.setItem('');
			}
		},
		onAfterSubDamage: function(damage, target, source, effect) {
			this.debug('effect: '+effect.id);
			if (effect.effectType === 'Move') {
				this.add('-enditem', target, 'Air Balloon');
				target.setItem('');
			}
		},
		desc: "Holder is immune to Ground-type attacks. Pops when holder is hit."
	},
	"apicotberry": {
		id: "apicotberry",
		name: "Apicot Berry",
		spritenum: 10,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ground"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4|| (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.boost({spd:1});
		},
		desc: "Raises Sp. Def by 1 when at 1/4 max HP or less. Single use."
	},
	"armorfossil": {
		id: "armorfossil",
		name: "Armor Fossil",
		spritenum: 12,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Shieldon."
	},
	"aspearberry": {
		id: "aspearberry",
		name: "Aspear Berry",
		spritenum: 13,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Ice"
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			if (pokemon.status === 'frz') {
				pokemon.cureStatus();
			}
		},
		desc: "Holder is cured if it is frozen. Single use."
	},
	"babiriberry": {
		id: "babiriberry",
		name: "Babiri Berry",
		spritenum: 17,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Steel"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Steel' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Steel-type attack. Single use."
	},
	"belueberry": {
		id: "belueberry",
		name: "Belue Berry",
		spritenum: 21,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Electric"
		},
		desc: "No competitive use."
	},
	"berryjuice": {
		id: "berryjuice",
		name: "Berry Juice",
		spritenum: 22,
		fling: {
			basePower: 30
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				if (pokemon.useItem()) {
					this.heal(20);
				}
			}
		},
		desc: "Restores 20HP when at 1/2 max HP or less. Single use."
	},
	"bigroot": {
		id: "bigroot",
		name: "Big Root",
		spritenum: 29,
		fling: {
			basePower: 10
		},
		onTryHealPriority: 1,
		onTryHeal: function(damage, target, source, effect) {
			var heals = {drain: 1, leechseed: 1, ingrain: 1, aquaring: 1};
			if (heals[effect.id]) {
				return Math.ceil((damage * 1.3) - 0.5); // Big Root rounds half down
			}
		},
		desc: "Holder gains 1.3x HP from draining moves, Aqua Ring, Ingrain, and Leech Seed."
	},
	"bindingband": {
		id: "bindingband",
		name: "Binding Band",
		spritenum: 31,
		fling: {
			basePower: 30
		},
		// implemented in statuses
		desc: "Holder's partial-trapping moves deal 1/8 max HP per turn instead of 1/16."
	},
	"blackbelt": {
		id: "blackbelt",
		name: "Black Belt",
		spritenum: 32,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Fighting-type attacks have 1.2x power."
	},
	"blacksludge": {
		id: "blacksludge",
		name: "Black Sludge",
		spritenum: 34,
		fling: {
			basePower: 30
		},
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function(pokemon) {
			if (pokemon.hasType('Poison')) {
				this.heal(pokemon.maxhp/16);
			} else {
				this.damage(pokemon.maxhp/8);
			}
		},
		desc: "Each turn, if holder is a Poison-type, restores 1/16 max HP; loses 1/8 if not."
	},
	"blackglasses": {
		id: "blackglasses",
		name: "BlackGlasses",
		spritenum: 35,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Dark-type attacks have 1.2x power."
	},
	"blukberry": {
		id: "blukberry",
		name: "Bluk Berry",
		spritenum: 44,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Fire"
		},
		desc: "No competitive use."
	},
	"brightpowder": {
		id: "brightpowder",
		name: "BrightPowder",
		spritenum: 51,
		fling: {
			basePower: 10
		},
		onAccuracy: function(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('brightpowder - decreasing accuracy');
			return accuracy * 0.9;
		},
		desc: "The accuracy of attacks against the holder is 0.9x."
	},
	"buggem": {
		id: "buggem",
		name: "Bug Gem",
		spritenum: 53,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Bug') {
				if (user.useItem(user, move)) {
					this.add('-enditem', user, 'Bug Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Bug-type attack will have 1.5x power. Single use."
	},
	"burndrive": {
		id: "burndrive",
		name: "Burn Drive",
		spritenum: 54,
		fling: {
			basePower: 70
		},
		onDrive: 'Fire',
		desc: "Holder's Techno Blast is Fire-type."
	},
	"cellbattery": {
		id: "cellbattery",
		name: "Cell Battery",
		spritenum: 60,
		fling: {
			basePower: 30
		},
		onAfterDamage: function(damage, target, source, move) {
			if (move.type === 'Electric' && target.useItem()) {
				this.boost({atk: 1});
			}
		},
		desc: "Raises Attack by 1 if hit by an Electric-type attack. Single use."
	},
	"charcoal": {
		id: "charcoal",
		name: "Charcoal",
		spritenum: 61,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Fire-type attacks have 1.2x power."
	},
	"chartiberry": {
		id: "chartiberry",
		name: "Charti Berry",
		spritenum: 62,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Rock"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Rock' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Rock-type attack. Single use."
	},
	"cheriberry": {
		id: "cheriberry",
		name: "Cheri Berry",
		spritenum: 63,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Fire"
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			if (pokemon.status === 'par') {
				pokemon.cureStatus();
			}
		},
		desc: "Holder cures itself if it is paralyzed. Single use."
	},
	"cherishball": {
		id: "cherishball",
		name: "Cherish Ball",
		spritenum: 66,
		desc: "A quite rare Poké Ball that has been especially crafted to commemorate an occasion of some sort."
	},
	"chestoberry": {
		id: "chestoberry",
		name: "Chesto Berry",
		spritenum: 65,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Water"
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			if (pokemon.status === 'slp') {
				pokemon.cureStatus();
			}
		},
		desc: "Holder wakes up if it is asleep. Single use."
	},
	"chilanberry": {
		id: "chilanberry",
		name: "Chilan Berry",
		spritenum: 66,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Normal"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Normal' && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a Normal-type attack. Single use."
	},
	"chilldrive": {
		id: "chilldrive",
		name: "Chill Drive",
		spritenum: 67,
		fling: {
			basePower: 70
		},
		onDrive: 'Ice',
		desc: "Holder's Techno Blast is Ice-type."
	},
	"choiceband": {
		id: "choiceband",
		name: "Choice Band",
		spritenum: 68,
		fling: {
			basePower: 10
		},
		onStart: function(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: '+pokemon.volatiles.choicelock);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove: function(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifyAtk: function(atk) {
			return atk * 1.5;
		},
		isChoice: true,
		desc: "Holder's Attack is 1.5x, but it can only use the first move it selects."
	},
	"choicescarf": {
		id: "choicescarf",
		name: "Choice Scarf",
		spritenum: 69,
		fling: {
			basePower: 10
		},
		onStart: function(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: '+pokemon.volatiles.choicelock);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove: function(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifySpe: function(spe) {
			return spe * 1.5;
		},
		isChoice: true,
		desc: "Holder's Speed is 1.5x, but it can only use the first move it selects."
	},
	"choicespecs": {
		id: "choicespecs",
		name: "Choice Specs",
		spritenum: 70,
		fling: {
			basePower: 10
		},
		onStart: function(pokemon) {
			if (pokemon.volatiles['choicelock']) {
				this.debug('removing choicelock: '+pokemon.volatiles.choicelock);
			}
			pokemon.removeVolatile('choicelock');
		},
		onModifyMove: function(move, pokemon) {
			pokemon.addVolatile('choicelock');
		},
		onModifySpA: function(spa) {
			return spa * 1.5;
		},
		isChoice: true,
		desc: "Holder's Sp. Atk is 1.5x, but it can only use the first move it selects."
	},
	"chopleberry": {
		id: "chopleberry",
		name: "Chople Berry",
		spritenum: 71,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Fighting"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Fighting' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Fighting-type attack. Single use."
	},
	"clawfossil": {
		id: "clawfossil",
		name: "Claw Fossil",
		spritenum: 72,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Anorith."
	},
	"cobaberry": {
		id: "cobaberry",
		name: "Coba Berry",
		spritenum: 76,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Flying"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Flying' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Flying-type attack. Single use."
	},
	"colburberry": {
		id: "colburberry",
		name: "Colbur Berry",
		spritenum: 78,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Dark"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Dark' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Dark-type attack. Single use."
	},
	"cornnberry": {
		id: "cornnberry",
		name: "Cornn Berry",
		spritenum: 81,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Bug"
		},
		desc: "No competitive use."
	},
	"coverfossil": {
		id: "coverfossil",
		name: "Cover Fossil",
		spritenum: 85,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Tirtouga."
	},
	"custapberry": {
		id: "custapberry",
		name: "Custap Berry",
		spritenum: 86,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ghost"
		},
		onModifyPriority: function(priority, pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				if (pokemon.eatItem()) {
					this.add('-activate', pokemon, 'Custap Berry');
					pokemon.removeVolatile('custapberry');
					return priority + 0.1;
				}
			}
		},
		desc: "Holder moves first in its priority bracket when at 1/4 max HP or less. Single use."
	},
	"damprock": {
		id: "damprock",
		name: "Damp Rock",
		spritenum: 88,
		fling: {
			basePower: 60
		},
		desc: "Holder's use of Rain Dance lasts 8 turns instead of 5."
	},
	"darkgem": {
		id: "darkgem",
		name: "Dark Gem",
		spritenum: 89,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Dark') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Dark Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Dark-type attack will have 1.5x power. Single use."
	},
	"deepseascale": {
		id: "deepseascale",
		name: "DeepSeaScale",
		spritenum: 93,
		fling: {
			basePower: 30
		},
		onModifySpD: function(spd, pokemon) {
			if (pokemon.template.species === 'Clamperl') {
				return spd * 2;
			}
		},
		desc: "If holder is a Clamperl, its Sp. Def is doubled."
	},
	"deepseatooth": {
		id: "deepseatooth",
		name: "DeepSeaTooth",
		spritenum: 94,
		fling: {
			basePower: 90
		},
		onModifySpA: function(spa, pokemon) {
			if (pokemon.template.species === 'Clamperl') {
				return spa * 2;
			}
		},
		desc: "If holder is a Clamperl, its Sp. Atk is doubled."
	},
	"destinyknot": {
		id: "destinyknot",
		name: "Destiny Knot",
		spritenum: 95,
		fling: {
			basePower: 10
		},
		onAttractPriority: -100,
		onAttract: function(target, source) {
			this.debug('attract intercepted: '+target+' from '+source);
			if (!source || source === target) return;
			if (!source.volatiles.attract) source.addVolatile('attract', target);
		},
		desc: "If holder becomes infatuated, the other Pokemon also becomes infatuated."
	},
	"diveball": {
		id: "diveball",
		name: "Dive Ball",
		spritenum: 101,
		desc: "A somewhat different Poké Ball that works especially well on Pokémon that live underwater."
	},
	"duskball": {
		id: "duskball",
		name: "Dusk Ball",
		spritenum: 115,
		desc: "A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places like caves."
	},
	"domefossil": {
		id: "domefossil",
		name: "Dome Fossil",
		spritenum: 102,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Kabuto."
	},
	"dousedrive": {
		id: "dousedrive",
		name: "Douse Drive",
		spritenum: 103,
		fling: {
			basePower: 70
		},
		onDrive: 'Water',
		desc: "Holder's Techno Blast is Water-type."
	},
	"dracoplate": {
		id: "dracoplate",
		name: "Draco Plate",
		spritenum: 105,
		fling: {
			basePower: 90
		},
		onPlate: 'Dragon',
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Dragon-type attacks have 1.2x power. Judgment is Dragon-type."
	},
	"dragonfang": {
		id: "dragonfang",
		name: "Dragon Fang",
		spritenum: 106,
		fling: {
			basePower: 70
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Dragon') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Dragon-type attacks have 1.2x power."
	},
	"dragongem": {
		id: "dragongem",
		name: "Dragon Gem",
		spritenum: 107,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Dragon') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Dragon Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Dragon-type attack will have 1.5x power. Single use."
	},
	"dreadplate": {
		id: "dreadplate",
		name: "Dread Plate",
		spritenum: 110,
		fling: {
			basePower: 90
		},
		onPlate: 'Dark',
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Dark') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Dark-type attacks have 1.2x power. Judgment is Dark-type."
	},
	"dreamball": {
		id: "dreamball",
		name: "Dream Ball",
		spritenum: 111,
		desc: "A special Poké Ball that appears out of nowhere in a bag at the Entree Forest. It can catch any Pokémon."
	},
	"durinberry": {
		id: "durinberry",
		name: "Durin Berry",
		spritenum: 114,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Water"
		},
		desc: "No competitive use."
	},
	"earthplate": {
		id: "earthplate",
		name: "Earth Plate",
		spritenum: 117,
		fling: {
			basePower: 90
		},
		onPlate: 'Ground',
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Ground') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Ground-type attacks have 1.2x power. Judgment is Ground-type."
	},
	"ejectbutton": {
		id: "ejectbutton",
		name: "Eject Button",
		spritenum: 118,
		fling: {
			basePower: 30
		},
		onHit: function(target, source, move) {
			if (source && source !== target && target.hp && move && move.selfSwitch) {
				move.selfSwitch = false;
			}
		},
		onAfterMoveSecondary: function(target, source, move) {
			if (source && source !== target && target.hp && move && move.category !== 'Status') {
				if (target.useItem()) {
					target.switchFlag = true;
				}
			}
		},
		desc: "If holder is hit, it immediately switches out with a chosen ally. Single use."
	},
	"electirizer": {
		id: "electirizer",
		name: "Electirizer",
		spritenum: 119,
		fling: {
			basePower: 80
		},
		desc: "Evolves Electabuzz into Electivire when traded."
	},
	"electricgem": {
		id: "electricgem",
		name: "Electric Gem",
		spritenum: 120,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Electric') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Electric Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Electric-type attack will have 1.5x power. Single use."
	},
	"energypowder": {
		id: "energypowder",
		name: "EnergyPowder",
		spritenum: 123,
		fling: {
			basePower: 30
		},
		desc: "Restores 50HP to one Pokemon but lowers Happiness."
	},
	"enigmaberry": {
		id: "enigmaberry",
		name: "Enigma Berry",
		spritenum: 124,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Bug"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move && this.getEffectiveness(move.type, target) > 0) {
				target.addVolatile('enigmaberry');
			}
		},
		effect: {
			duration: 1,
			onUpdate: function(target) {
				if (target.eatItem()) {
					target.removeVolatile('enigmaberry');
				}
			}
		},
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/4);
		},
		desc: "Restores 1/4 max HP when holder is hit by a super effective move. Single use."
	},
	"eviolite": {
		id: "eviolite",
		name: "Eviolite",
		spritenum: 130,
		fling: {
			basePower: 40
		},
		onModifyDef: function(def, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return def * 1.5;
			}
		},
		onModifySpD: function(spd, pokemon) {
			if (pokemon.baseTemplate.nfe) {
				return spd * 1.5;
			}
		},
		desc: "If holder's species can evolve, its Defense and Sp. Def are 1.5x."
	},
	"expertbelt": {
		id: "expertbelt",
		name: "Expert Belt",
		spritenum: 132,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && this.getEffectiveness(move.type, target) > 0) {
				return basePower * 1.2;
			}
		},
		desc: "Holder's super effective attacks against other Pokemon do 1.2x damage."
	},
	"fastball": {
		id: "fastball",
		name: "Fast Ball",
		spritenum: 137,
		desc: "A Poké Ball that makes it easier to catch Pokémon which are quick to run away."
	},
	"fightinggem": {
		id: "fightinggem",
		name: "Fighting Gem",
		spritenum: 139,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Fighting') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Fighting Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Fighting-type attack will have 1.5x power. Single use."
	},
	"figyberry": {
		id: "figyberry",
		name: "Figy Berry",
		spritenum: 140,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Bug"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/8);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"firegem": {
		id: "firegem",
		name: "Fire Gem",
		spritenum: 141,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Fire') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Fire Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Fire-type attack will have 1.5x power. Single use."
	},
	"fistplate": {
		id: "fistplate",
		name: "Fist Plate",
		spritenum: 143,
		fling: {
			basePower: 90
		},
		onPlate: 'Fighting',
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Fighting') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Fighting-type attacks have 1.2x power. Judgment is Fighting-type."
	},
	"flameorb": {
		id: "flameorb",
		name: "Flame Orb",
		spritenum: 145,
		fling: {
			basePower: 30,
			status: 'brn'
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual: function(pokemon) {
			if (!pokemon.status && !pokemon.hasType('Fire') && pokemon.ability !== 'waterveil') {
				this.add('-activate', pokemon, 'item: Flame Orb');
				pokemon.trySetStatus('brn');
			}
		},
		desc: "At the end of every turn, this item attempts to burn the holder."
	},
	"flameplate": {
		id: "flameplate",
		name: "Flame Plate",
		spritenum: 146,
		fling: {
			basePower: 90
		},
		onPlate: 'Fire',
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Fire') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Fire-type attacks have 1.2x power. Judgment is Fire-type."
	},
	"floatstone": {
		id: "floatstone",
		name: "Float Stone",
		spritenum: 147,
		fling: {
			basePower: 30
		},
		onModifyPokemon: function(pokemon) {
			pokemon.weightkg /= 2;
		},
		desc: "Holder's weight is halved."
	},
	"flyinggem": {
		id: "flyinggem",
		name: "Flying Gem",
		spritenum: 149,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Flying') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Flying Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Flying-type attack will have 1.5x power. Single use."
	},
	"focusband": {
		id: "focusband",
		name: "Focus Band",
		spritenum: 150,
		fling: {
			basePower: 10
		},
		onDamage: function(damage, target, source, effect) {
			if (this.random(10) === 0 && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-message",target.name+" held on using its Focus Band! (placeholder)");
				return target.hp - 1;
			}
		},
		desc: "Holder has a 10% chance to survive an attack that would KO it with 1HP."
	},
	"focussash": {
		id: "focussash",
		name: "Focus Sash",
		spritenum: 151,
		fling: {
			basePower: 10
		},
		onDamage: function(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				if (target.useItem()) {
					return target.hp - 1;
				}
			}
		},
		desc: "If holder's HP is full, will survive an attack that would KO it with 1HP. Single use."
	},
	"fullincense": {
		id: "fullincense",
		name: "Full Incense",
		spritenum: 155,
		fling: {
			basePower: 10
		},
		onModifyPriority: function(priority, pokemon) {
			if (pokemon.ability !== 'stall') {
				return priority - 0.1;
			}
		},
		desc: "Holder moves last in its priority bracket."
	},
	"ganlonberry": {
		id: "ganlonberry",
		name: "Ganlon Berry",
		spritenum: 158,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Ice"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.boost({def:1});
		},
		desc: "Raises Defense by 1 when at 1/4 max HP or less. Single use."
	},
	"ghostgem": {
		id: "ghostgem",
		name: "Ghost Gem",
		spritenum: 161,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ghost') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Ghost Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Ghost-type attack will have 1.5x power. Single use."
	},
	"grassgem": {
		id: "grassgem",
		name: "Grass Gem",
		spritenum: 172,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Grass') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Grass Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Grass-type attack will have 1.5x power. Single use."
	},
	"greatball": {
		id: "greatball",
		name: "Great Ball",
		spritenum: 174,
		desc: "A good, high-performance Ball that provides a higher Pokémon catch rate than a standard."
	},
	"grepaberry": {
		id: "grepaberry",
		name: "Grepa Berry",
		spritenum: 178,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Flying"
		},
		desc: "No competitive use."
	},
	"gripclaw": {
		id: "gripclaw",
		name: "Grip Claw",
		spritenum: 179,
		fling: {
			basePower: 90
		},
		// implemented in statuses
		desc: "Holder's partial-trapping moves always last 7 turns."
	},
	"griseousorb": {
		id: "griseousorb",
		name: "Griseous Orb",
		spritenum: 180,
		fling: {
			basePower: 60
		},
		onBasePower: function(basePower, user, target, move) {
			if (user.template.num === 487 && (move.type === 'Ghost' || move.type === 'Dragon')) {
				return basePower * 1.2;
			}
		},
		onTakeItem: function(item, pokemon, source) {
			if ((source && source.template.num === 487) || pokemon.template.num === 487) {
				return false;
			}
		},
		desc: "If holder is a Giratina, its Ghost- and Dragon-type attacks have 1.2x power."
	},
	"groundgem": {
		id: "groundgem",
		name: "Ground Gem",
		spritenum: 182,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ground') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Ground Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Ground-type attack will have 1.5x power. Single use."
	},
	"habanberry": {
		id: "habanberry",
		name: "Haban Berry",
		spritenum: 185,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Dragon"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Dragon' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Dragon-type attack. Single use."
	},
	"hardstone": {
		id: "hardstone",
		name: "Hard Stone",
		spritenum: 187,
		fling: {
			basePower: 100
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Rock') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Rock-type attacks have 1.2x power."
	},
	"healball": {
		id: "healball",
		name: "Heal Ball",
		spritenum: 188,
		desc: "A remedial Poké Ball that restores the caught Pokémon's HP and eliminates any status problem."
	},
	"heatrock": {
		id: "heatrock",
		name: "Heat Rock",
		spritenum: 193,
		fling: {
			basePower: 60
		},
		desc: "Holder's use of Sunny Day lasts 8 turns instead of 5."
	},
	"heavyball": {
		id: "heavyball",
		name: "Heavy Ball",
		spritenum: 194,
		desc: "A Poké Ball for catching very heavy Pokémon."
	},
	"helixfossil": {
		id: "helixfossil",
		name: "Helix Fossil",
		spritenum: 195,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Omanyte."
	},
	"hondewberry": {
		id: "hondewberry",
		name: "Hondew Berry",
		spritenum: 213,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Ground"
		},
		desc: "No competitive use."
	},
	"iapapaberry": {
		id: "iapapaberry",
		name: "Iapapa Berry",
		spritenum: 217,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Dark"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/8);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"icegem": {
		id: "icegem",
		name: "Ice Gem",
		spritenum: 218,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ice') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Ice Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Ice-type attack will have 1.5x power. Single use."
	},
	"icicleplate": {
		id: "icicleplate",
		name: "Icicle Plate",
		spritenum: 220,
		fling: {
			basePower: 90
		},
		onPlate: 'Ice',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ice') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Ice-type attacks have 1.2x power. Judgment is Ice-type."
	},
	"icyrock": {
		id: "icyrock",
		name: "Icy Rock",
		spritenum: 221,
		fling: {
			basePower: 40
		},
		desc: "Holder's use of Hail lasts 8 turns instead of 5."
	},
	"insectplate": {
		id: "insectplate",
		name: "Insect Plate",
		spritenum: 223,
		fling: {
			basePower: 90
		},
		onPlate: 'Bug',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Bug') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Bug-type attacks have 1.2x power. Judgment is Bug-type."
	},
	"ironball": {
		id: "ironball",
		name: "Iron Ball",
		spritenum: 224,
		fling: {
			basePower: 130
		},
		onModifyPokemon: function(pokemon) {
			pokemon.negateImmunity['Ground'] = true;
		},
		onModifySpe: function(spe) {
			return spe / 2;
		},
		desc: "Holder's Speed is halved and it becomes grounded."
	},
	"ironplate": {
		id: "ironplate",
		name: "Iron Plate",
		spritenum: 225,
		fling: {
			basePower: 90
		},
		onPlate: 'Steel',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Steel') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Steel-type attacks have 1.2x power. Judgment is Steel-type."
	},
	"jabocaberry": {
		id: "jabocaberry",
		name: "Jaboca Berry",
		spritenum: 230,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dragon"
		},
		onAfterMoveSecondary: function(target, source, move) {
			if (source && source !== target && move && move.category === 'Physical') {
				if (target.eatItem()) {
					this.damage(source.maxhp/8, source, target);
				}
			}
		},
		onEat: function() { },
		desc: "If holder is hit by a physical move, attacker loses 1/8 of its max HP. Single use."
	},
	"kasibberry": {
		id: "kasibberry",
		name: "Kasib Berry",
		spritenum: 233,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Ghost"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ghost' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Ghost-type attack. Single use."
	},
	"kebiaberry": {
		id: "kebiaberry",
		name: "Kebia Berry",
		spritenum: 234,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Poison"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Poison' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Poison-type attack. Single use."
	},
	"kelpsyberry": {
		id: "kelpsyberry",
		name: "Kelpsy Berry",
		spritenum: 235,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Fighting"
		},
		desc: "No competitive use."
	},
	"kingsrock": {
		id: "kingsrock",
		name: "King's Rock",
		spritenum: 236,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch'
		},
		onModifyMove: function(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (var i=0; i<move.secondaries.length; i++) {
					if (move.secondaries[i].volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch'
				});
			}
		},
		desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch."
	},
	"laggingtail": {
		id: "laggingtail",
		name: "Lagging Tail",
		spritenum: 237,
		fling: {
			basePower: 10
		},
		onModifyPriority: function(priority, pokemon) {
			if (pokemon.ability !== 'stall') {
				return priority - 0.1;
			}
		},
		desc: "Holder moves last in its priority bracket."
	},
	"lansatberry": {
		id: "lansatberry",
		name: "Lansat Berry",
		spritenum: 238,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Flying"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			pokemon.addVolatile('focusenergy');
		},
		desc: "Holder gains the Focus Energy effect when at 1/4 max HP or less. Single use."
	},
	"laxincense": {
		id: "laxincense",
		name: "Lax Incense",
		spritenum: 240,
		fling: {
			basePower: 10
		},
		onAccuracy: function(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('lax incense - decreasing accuracy');
			return accuracy * 0.9;
		},
		desc: "The accuracy of attacks against the holder is 0.9x."
	},
	"leftovers": {
		id: "leftovers",
		name: "Leftovers",
		spritenum: 242,
		fling: {
			basePower: 10
		},
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function(pokemon) {
			this.heal(pokemon.maxhp/16);
		},
		desc: "At the end of every turn, holder restores 1/16 of its max HP."
	},
	"leppaberry": {
		id: "leppaberry",
		name: "Leppa Berry",
		spritenum: 244,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Fighting"
		},
		onUpdate: function(pokemon) {
			var move = pokemon.getMoveData(pokemon.lastMove);
			if (move && move.pp === 0) {
				pokemon.addVolatile('leppaberry');
				pokemon.volatiles['leppaberry'].move = move;
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			var move;
			if (pokemon.volatiles['leppaberry']) {
				move = pokemon.volatiles['leppaberry'].move;
				pokemon.removeVolatile('leppaberry');
			} else {
				var pp = 99;
				for (var i in pokemon.moveset) {
					if (pokemon.moveset[i].pp < pp) {
						move = pokemon.moveset[i];
						pp = move.pp;
					}
				}
			}
			move.pp += 10;
			if (move.pp > move.maxpp) move.pp = move.maxpp;
			this.add("-message",pokemon.name+" restored "+move.move+"'s PP using its Leppa Berry! (placeholder)");
		},
		desc: "Restores 10PP to the first of the holder's moves to reach 0PP. Single use."
	},
	"levelball": {
		id: "levelball",
		name: "Level Ball",
		spritenum: 246,
		desc: "A Poké Ball for catching Pokémon that are a lower level than your own."
	},
	"liechiberry": {
		id: "liechiberry",
		name: "Liechi Berry",
		spritenum: 248,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Grass"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.boost({atk:1});
		},
		desc: "Raises Attack by 1 when at 1/4 max HP or less. Single use."
	},
	"lifeorb": {
		id: "lifeorb",
		name: "Life Orb",
		spritenum: 249,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user) {
			user.addVolatile('lifeorb');
			return basePower * 1.3;
		},
		effect: {
			duration: 1,
			onAfterMoveSecondarySelf: function(source, target, move) {
				if (move && move.effectType === 'Move' && source && source.volatiles['lifeorb']) {
					this.damage(source.maxhp/10, source, source, this.getItem('lifeorb'));
					source.removeVolatile('lifeorb');
				}
			}
		},
		desc: "Holder's damaging moves do 1.3x damage; loses 1/10 max HP after the attack."
	},
	"lightball": {
		id: "lightball",
		name: "Light Ball",
		spritenum: 251,
		fling: {
			basePower: 30,
			status: 'par'
		},
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.template.species === 'Pikachu') {
				return atk * 2;
			}
		},
		onModifySpA: function(spa, pokemon) {
			if (pokemon.template.species === 'Pikachu') {
				return spa * 2;
			}
		},
		desc: "If holder is a Pikachu, its Attack and Sp. Atk are doubled."
	},
	"lightclay": {
		id: "lightclay",
		name: "Light Clay",
		spritenum: 252,
		fling: {
			basePower: 30
		},
		// implemented in the corresponding thing
		desc: "Holder's use of Light Screen or Reflect lasts 8 turns instead of 5."
	},
	"loveball": {
		id: "loveball",
		name: "Love Ball",
		spritenum: 258,
		desc: "Poké Ball for catching Pokémon that are the opposite gender of your Pokémon."
	},
	"luckypunch": {
		id: "luckypunch",
		name: "Lucky Punch",
		spritenum: 261,
		fling: {
			basePower: 40
		},
		onModifyMove: function(move, user) {
			if (user.template.species === 'Chansey') {
				move.critRatio += 2;
			}
		},
		desc: "If holder is a Chansey, its critical hit ratio is boosted by 2."
	},
	"lumberry": {
		id: "lumberry",
		name: "Lum Berry",
		spritenum: 262,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Flying"
		},
		onUpdate: function(pokemon) {
			if (pokemon.status || pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			pokemon.cureStatus();
			pokemon.removeVolatile('confusion');
		},
		desc: "Holder cures itself if it is confused or has a major status problem. Single use."
	},
	"lureball": {
		id: "lureball",
		name: "Lure Ball",
		spritenum: 264,
		desc: "A Poké Ball for catching Pokémon hooked by a Rod when fishing."
	},
	"lustrousorb": {
		id: "lustrousorb",
		name: "Lustrous Orb",
		spritenum: 265,
		fling: {
			basePower: 60
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && user.template.species === 'Palkia' && (move.type === 'Water' || move.type === 'Dragon')) {
				return basePower * 1.2;
			}
		},
		desc: "If holder is a Palkia, its Water- and Dragon-type attacks have 1.2x power."
	},
	"luxuryball": {
		id: "luxuryball",
		name: "Luxury Ball",
		spritenum: 266,
		desc: "A comfortable Poké Ball that makes a caught wild Pokémon quickly grow friendly."
	},
	"machobrace": {
		id: "machobrace",
		name: "Macho Brace",
		spritenum: 269,
		fling: {
			basePower: 60
		},
		onModifySpe: function(spe) {
			return spe / 2;
		},
		desc: "Holder's Speed is halved."
	},
	"magnet": {
		id: "magnet",
		name: "Magnet",
		spritenum: 273,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Electric') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Electric-type attacks have 1.2x power."
	},
	"magoberry": {
		id: "magoberry",
		name: "Mago Berry",
		spritenum: 274,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Ghost"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/8);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"magostberry": {
		id: "magostberry",
		name: "Magost Berry",
		spritenum: 275,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Rock"
		},
		desc: "No competitive use."
	},
	"masterball": {
		id: "masterball",
		name: "Master Ball",
		spritenum: 276,
		desc: "The best Ball with the ultimate level of performance. It will catch any wild Pokémon."
	},
	"meadowplate": {
		id: "meadowplate",
		name: "Meadow Plate",
		spritenum: 282,
		fling: {
			basePower: 90
		},
		onPlate: 'Grass',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Grass-type attacks have 1.2x power. Judgment is Grass-type."
	},
	"mentalherb": {
		id: "mentalherb",
		name: "Mental Herb",
		spritenum: 285,
		fling: {
			basePower: 10,
			effect: function(pokemon) {
				var conditions = ['attract','taunt','encore','torment','disable'];
				for (var i=0; i<conditions.length; i++) {
					if (pokemon.volatiles[conditions[i]]) {
						for (var j=0; j<conditions.length; j++) {
							pokemon.removeVolatile(conditions[j]);
						}
						return;
					}
				}
			}
		},
		onUpdate: function(pokemon) {
			var conditions = ['attract','taunt','encore','torment','disable'];
			for (var i=0; i<conditions.length; i++) {
				if (pokemon.volatiles[conditions[i]]) {
					if (!pokemon.useItem()) return;
					for (var j=0; j<conditions.length; j++) {
						pokemon.removeVolatile(conditions[j]);
					}
					return;
				}
			}
		},
		desc: "Cures holder if affected by Attract, Disable, Encore, Taunt, Torment. Single use."
	},
	"metalcoat": {
		id: "metalcoat",
		name: "Metal Coat",
		spritenum: 286,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Steel') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Steel-type attacks have 1.2x power."
	},
	"metalpowder": {
		id: "metalpowder",
		name: "Metal Powder",
		fling: {
			basePower: 10
		},
		spritenum: 287,
		onModifyDef: function(def, pokemon) {
			if (pokemon.template.species === 'Ditto') {
				return def * 2;
			}
		},
		desc: "If holder is a Ditto that hasn't Transformed, its Defense is doubled."
	},
	"metronome": {
		id: "metronome",
		name: "Metronome",
		spritenum: 289,
		fling: {
			basePower: 30
		},
		onStart: function(pokemon) {
			pokemon.addVolatile('metronome');
		},
		effect: {
			onBasePower: function(basePower, pokemon, target, move) {
				if (pokemon.item !== 'metronome') {
					pokemon.removeVolatile('metronome');
					return;
				}
				if (!this.effectData.move || this.effectData.move !== move.id) {
					this.effectData.move = move.id;
					this.effectData.numConsecutive = 0;
				} else if (this.effectData.numConsecutive < 5) {
					this.effectData.numConsecutive++;
				}
				var bpMod = [1, 1.2, 1.4, 1.6, 1.8, 2];
				return basePower * bpMod[this.effectData.numConsecutive];
			}
		},
		desc: "Damage of moves used on consecutive turns is increased. Max 2x after 5 turns."
	},
	"micleberry": {
		id: "micleberry",
		name: "Micle Berry",
		spritenum: 290,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Rock"
		},
		onResidual: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'Gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			pokemon.addVolatile('MicleBerry');
		},
		effect: {
			duration: 2,
			onModifyMove: function(move, pokemon) {
				this.add('-enditem', pokemon, 'Micle Berry');
				pokemon.removeVolatile('MicleBerry');
				if (typeof move.accuracy === 'number') {
					move.accuracy *= 1.2;
				}
			}
		},
		desc: "Holder's next move has 1.2x accuracy when at 1/4 max HP or less. Single use."
	},
	"moonball": {
		id: "moonball",
		name: "Moon Ball",
		spritenum: 294,
		desc: "A Poké Ball for catching Pokémon that evolve using the Moon Stone."
	},
	"mindplate": {
		id: "mindplate",
		name: "Mind Plate",
		spritenum: 291,
		fling: {
			basePower: 90
		},
		onPlate: 'Psychic',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Psychic-type attacks have 1.2x power. Judgment is Psychic-type."
	},
	"miracleseed": {
		id: "miracleseed",
		name: "Miracle Seed",
		fling: {
			basePower: 30
		},
		spritenum: 292,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Grass-type attacks have 1.2x power."
	},
	"muscleband": {
		id: "muscleband",
		name: "Muscle Band",
		spritenum: 297,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.category === 'Physical') {
				return basePower * 1.1;
			}
		},
		desc: "Holder's physical attacks have 1.1x power."
	},
	"mysticwater": {
		id: "mysticwater",
		name: "Mystic Water",
		spritenum: 300,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Water') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Water-type attacks have 1.2x power."
	},
	"nanabberry": {
		id: "nanabberry",
		name: "Nanab Berry",
		spritenum: 302,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Water"
		},
		desc: "No competitive use."
	},
	"nestball": {
		id: "nestball",
		name: "Nest Ball",
		spritenum: 303,
		desc: "A somewhat different Poké Ball that works especially well on weaker Pokémon in the wild."
	},
	"netball": {
		id: "netball",
		name: "Net Ball",
		spritenum: 304,
		desc: "A somewhat different Poké Ball that works especially well on Water- and Bug-type Pokémon."
	},
	"nevermeltice": {
		id: "nevermeltice",
		name: "NeverMeltIce",
		spritenum: 305,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ice') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Ice-type attacks have 1.2x power."
	},
	"nomelberry": {
		id: "nomelberry",
		name: "Nomel Berry",
		spritenum: 306,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Dragon"
		},
		desc: "No competitive use."
	},
	"normalgem": {
		id: "normalgem",
		name: "Normal Gem",
		spritenum: 307,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Normal') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Normal Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Normal-type attack will have 1.5x power. Single use."
	},
	"occaberry": {
		id: "occaberry",
		name: "Occa Berry",
		spritenum: 311,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Fire"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Fire' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Fire-type attack. Single use."
	},
	"oddincense": {
		id: "oddincense",
		name: "Odd Incense",
		spritenum: 312,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Psychic-type attacks have 1.2x power."
	},
	"oldamber": {
		id: "oldamber",
		name: "Old Amber",
		spritenum: 314,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Aerodactyl."
	},
	"oranberry": {
		id: "oranberry",
		name: "Oran Berry",
		spritenum: 319,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Poison"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.heal(10);
		},
		desc: "Restores 10HP when at 1/2 max HP or less. Single use."
	},
	"pamtreberry": {
		id: "pamtreberry",
		name: "Pamtre Berry",
		spritenum: 323,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Steel"
		},
		desc: "No competitive use."
	},
	"parkball": {
		id: "parkball",
		name: "Park Ball",
		spritenum: 325,
		desc: "A special Poké Ball for the Pal Park."
	},
	"passhoberry": {
		id: "passhoberry",
		name: "Passho Berry",
		spritenum: 329,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Water"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Water' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Water-type attack. Single use."
	},
	"payapaberry": {
		id: "payapaberry",
		name: "Payapa Berry",
		spritenum: 330,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Psychic"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Psychic' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Psychic-type attack. Single use."
	},
	"pechaberry": {
		id: "pechaberry",
		name: "Pecha Berry",
		spritenum: 333,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Electric"
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				pokemon.cureStatus();
			}
		},
		desc: "Holder is cured if it is poisoned. Single use."
	},
	"persimberry": {
		id: "persimberry",
		name: "Persim Berry",
		spritenum: 334,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Ground"
		},
		onUpdate: function(pokemon) {
			if (pokemon.volatiles['confusion']) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			pokemon.removeVolatile('confusion');
		},
		desc: "Holder is cured if it is confused. Single use."
	},
	"petayaberry": {
		id: "petayaberry",
		name: "Petaya Berry",
		spritenum: 335,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Poison"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.boost({spa:1});
		},
		desc: "Raises Sp. Atk by 1 when at 1/4 max HP or less. Single use."
	},
	"pinapberry": {
		id: "pinapberry",
		name: "Pinap Berry",
		spritenum: 337,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Grass"
		},
		desc: "No competitive use."
	},
	"plumefossil": {
		id: "plumefossil",
		name: "Plume Fossil",
		spritenum: 339,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Archen."
	},
	"poisonbarb": {
		id: "poisonbarb",
		name: "Poison Barb",
		spritenum: 343,
		fling: {
			basePower: 70,
			status: 'psn'
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Poison') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Poison-type attacks have 1.2x power."
	},
	"poisongem": {
		id: "poisongem",
		name: "Poison Gem",
		spritenum: 344,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Poison') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Poison Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Poison-type attack will have 1.5x power. Single use."
	},
	"pokeball": {
		id: "pokeball",
		name: "Poke Ball",
		spritenum: 345,
		desc: "A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system."
	},
	"pomegberry": {
		id: "pomegberry",
		name: "Pomeg Berry",
		spritenum: 351,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Ice"
		},
		desc: "No competitive use."
	},
	"powerherb": {
		id: "powerherb",
		onChargeMove: function(pokemon, target, move) {
			if (pokemon.useItem()) {
				this.debug('power herb - remove charge turn for '+move.id);
				return false; // skip charge turn
			}
		},
		name: "Power Herb",
		spritenum: 358,
		fling: {
			basePower: 10
		},
		desc: "Holder's two-turn moves complete in one turn (except Sky Drop). Single use."
	},
	"premierball": {
		id: "premierball",
		name: "Premier Ball",
		spritenum: 363,
		desc: "A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort."
	},
	"psychicgem": {
		id: "psychicgem",
		name: "Psychic Gem",
		spritenum: 369,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Psychic Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Psychic-type attack will have 1.5x power. Single use."
	},
	"qualotberry": {
		id: "qualotberry",
		name: "Qualot Berry",
		spritenum: 371,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Poison"
		},
		desc: "No competitive use."
	},
	"quickball": {
		id: "quickball",
		name: "Quick Ball",
		spritenum: 372,
		desc: "A somewhat different Poké Ball that provides a better catch rate if it is used at the start of a wild encounter."
	},
	"quickclaw": {
		id: "quickclaw",
		onModifyPriority: function(priority, pokemon) {
			if (this.random(5) === 0) {
				this.add('-activate', pokemon, 'item: Quick Claw');
				return priority + 0.1;
			}
		},
		name: "Quick Claw",
		spritenum: 373,
		fling: {
			basePower: 80
		},
		desc: "Each turn, holder has a 20% chance to move first in its priority bracket."
	},
	"quickpowder": {
		id: "quickpowder",
		name: "Quick Powder",
		spritenum: 374,
		fling: {
			basePower: 10
		},
		onModifySpe: function(spe, pokemon) {
			if (pokemon.template.species === 'Ditto') {
				return spe * 2;
			}
		},
		desc: "If holder is a Ditto that hasn't Transformed, its Speed is doubled."
	},
	"rabutaberry": {
		id: "rabutaberry",
		name: "Rabuta Berry",
		spritenum: 375,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Ghost"
		},
		desc: "No competitive use."
	},
	"rarebone": {
		id: "rarebone",
		name: "Rare Bone",
		spritenum: 379,
		fling: {
			basePower: 100
		},
		desc: "No competitive use."
	},
	"rawstberry": {
		id: "rawstberry",
		name: "Rawst Berry",
		spritenum: 381,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Grass"
		},
		onUpdate: function(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.cureStatus();
			}
		},
		desc: "Holder is cured if it is burned. Single use."
	},
	"razorclaw": {
		id: "razorclaw",
		name: "Razor Claw",
		spritenum: 382,
		fling: {
			basePower: 80
		},
		onModifyMove: function(move) {
			move.critRatio++;
		},
		desc: "Holder's critical hit ratio is boosted by 1."
	},
	"razorfang": {
		id: "razorfang",
		name: "Razor Fang",
		spritenum: 383,
		fling: {
			basePower: 30,
			volatileStatus: 'flinch'
		},
		onModifyMove: function(move) {
			if (move.category !== "Status") {
				if (!move.secondaries) move.secondaries = [];
				for (var i=0; i<move.secondaries.length; i++) {
					if (move.secondaries[i].volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch'
				});
			}
		},
		desc: "Holder's attacks without a chance to flinch gain a 10% chance to flinch."
	},
	"razzberry": {
		id: "razzberry",
		name: "Razz Berry",
		spritenum: 384,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Steel"
		},
		desc: "No competitive use."
	},
	"redcard": {
		id: "redcard",
		name: "Red Card",
		spritenum: 387,
		fling: {
			basePower: 10
		},
		onAfterMoveSecondary: function(target, source, move) {
			if (source && source !== target && source.hp && target.hp && move && move.category !== 'Status') {
				if (target.useItem(source)) { // This order is correct - the item is used up even against a pokemon with Ingrain or that otherwise can't be forced out
					if (this.runEvent('DragOut', source, target, move)) {
						this.dragIn(source.side, source.position);
					}
				}
			}
		},
		desc: "If holder is hit, it forces the attacker to switch to a random ally. Single use."
	},
	"repeatball": {
		id: "repeatball",
		name: "Repeat Ball",
		spritenum: 401,
		desc: "A somewhat different Poké Ball that works especially well on Pokémon species that were previously caught."
	},
	"rindoberry": {
		id: "rindoberry",
		name: "Rindo Berry",
		spritenum: 409,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Grass"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Grass' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Grass-type attack. Single use."
	},
	"ringtarget": {
		id: "ringtarget",
		name: "Ring Target",
		spritenum: 410,
		fling: {
			basePower: 10
		},
		onModifyPokemon: function(pokemon) {
			pokemon.negateImmunity['Type'] = true;
		},
		desc: "Holder's type immunities granted by its own typing are negated."
	},
	"rockgem": {
		id: "rockgem",
		name: "Rock Gem",
		spritenum: 415,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Rock') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Rock Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Rock-type attack will have 1.5x power. Single use."
	},
	"rockincense": {
		id: "rockincense",
		name: "Rock Incense",
		spritenum: 416,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Rock') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Rock-type attacks have 1.2x power."
	},
	"rockyhelmet": {
		id: "rockyhelmet",
		name: "Rocky Helmet",
		spritenum: 417,
		fling: {
			basePower: 60
		},
		onAfterDamageOrder: 2,
		onAfterDamage: function(damage, target, source, move) {
			if (source && source !== target && move && move.isContact) {
				this.damage(source.maxhp/6, source, target);
			}
		},
		desc: "If holder is hit by a contact move, the attacker loses 1/6 of its max HP."
	},
	"rootfossil": {
		id: "rootfossil",
		name: "Root Fossil",
		spritenum: 418,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Lileep."
	},
	"roseincense": {
		id: "roseincense",
		name: "Rose Incense",
		spritenum: 419,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Grass') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Grass-type attacks have 1.2x power."
	},
	"rowapberry": {
		id: "rowapberry",
		name: "Rowap Berry",
		spritenum: 420,
		isUnreleased: true,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Dark"
		},
		onAfterMoveSecondary: function(target, source, move) {
			if (source && source !== target && move && move.category === 'Special') {
				if (target.eatItem()) {
					this.damage(source.maxhp/8, source, target);
				}
			}
		},
		onEat: function() { },
		desc: "If holder is hit by a special move, attacker loses 1/8 of its max HP. Single use."
	},
	"safariball": {
		id: "safariball",
		name: "Safari Ball",
		spritenum: 425,
		desc: "A special Poké Ball that is used only in the Great Marsh. It is decorated in a camouflage pattern."
	},
	"salacberry": {
		id: "salacberry",
		name: "Salac Berry",
		spritenum: 426,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fighting"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.boost({spe:1});
		},
		desc: "Raises Speed by 1 when at 1/4 max HP or less. Single use."
	},
	"scopelens": {
		id: "scopelens",
		name: "Scope Lens",
		spritenum: 429,
		fling: {
			basePower: 30
		},
		onModifyMove: function(move) {
			move.critRatio++;
		},
		desc: "Holder's critical hit ratio is boosted by 1."
	},
	"seaincense": {
		id: "seaincense",
		name: "Sea Incense",
		spritenum: 430,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Water') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Water-type attacks have 1.2x power."
	},
	"sharpbeak": {
		id: "sharpbeak",
		name: "Sharp Beak",
		spritenum: 436,
		fling: {
			basePower: 50
		},
		onBasePower: function(basePower, user, target, move) {
			if (move && move.type === 'Flying') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Flying-type attacks have 1.2x power."
	},
	"shedshell": {
		id: "shedshell",
		name: "Shed Shell",
		spritenum: 437,
		fling: {
			basePower: 10
		},
		onModifyPokemonPriority: -10,
		onModifyPokemon: function(pokemon) {
			pokemon.trapped = false;
		},
		desc: "Holder may switch out even when trapped by another Pokemon."
	},
	"shellbell": {
		id: "shellbell",
		name: "Shell Bell",
		spritenum: 438,
		fling: {
			basePower: 30
		},
		onAfterMoveSelf: function(source, target) {
			if (source.lastDamage > 0) {
				this.heal(source.lastDamage/8, source);
			}
		},
		desc: "After an attack, holder gains 1/8 of the damage in HP dealt to other Pokemon."
	},
	"shockdrive": {
		id: "shockdrive",
		name: "Shock Drive",
		spritenum: 442,
		fling: {
			basePower: 70
		},
		onDrive: 'Electric',
		desc: "Holder's Techno Blast is Electric-type."
	},
	"shucaberry": {
		id: "shucaberry",
		name: "Shuca Berry",
		spritenum: 443,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Ground"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ground' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Ground-type attack. Single use."
	},
	"silkscarf": {
		id: "silkscarf",
		name: "Silk Scarf",
		spritenum: 444,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Normal') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Normal-type attacks have 1.2x power."
	},
	"silverpowder": {
		id: "silverpowder",
		name: "SilverPowder",
		spritenum: 447,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Bug') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Bug-type attacks have 1.2x power."
	},
	"sitrusberry": {
		id: "sitrusberry",
		name: "Sitrus Berry",
		spritenum: 448,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Psychic"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/4);
		},
		desc: "Restores 1/4 max HP when at 1/2 max HP or less. Single use."
	},
	"skullfossil": {
		id: "skullfossil",
		name: "Skull Fossil",
		spritenum: 449,
		fling: {
			basePower: 100
		},
		desc: "Can be revived into Cranidos."
	},
	"skyplate": {
		id: "skyplate",
		name: "Sky Plate",
		spritenum: 450,
		fling: {
			basePower: 90
		},
		onPlate: 'Flying',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Flying') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Flying-type attacks have 1.2x power. Judgment is Flying-type."
	},
	"smoothrock": {
		id: "smoothrock",
		name: "Smooth Rock",
		spritenum: 453,
		fling: {
			basePower: 10
		},
		desc: "Holder's use of Sandstorm lasts 8 turns instead of 5."
	},
	"softsand": {
		id: "softsand",
		name: "Soft Sand",
		spritenum: 456,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ground') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Ground-type attacks have 1.2x power."
	},
	"souldew": {
		id: "souldew",
		name: "Soul Dew",
		spritenum: 459,
		fling: {
			basePower: 30
		},
		onModifySpA: function(spa, pokemon) {
			if (pokemon.template.species === 'Latios' || pokemon.template.species === 'Latias') {
				return spa * 1.5;
			}
		},
		onModifySpD: function(spd, pokemon) {
			if (pokemon.template.species === 'Latios' || pokemon.template.species === 'Latias') {
				return spd * 1.5;
			}
		},
		desc: "If holder is a Latias or a Latios, its Sp. Atk and Sp. Def are 1.5x."
	},
	"spelltag": {
		id: "spelltag",
		name: "Spell Tag",
		spritenum: 461,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ghost') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Ghost-type attacks have 1.2x power."
	},
	"spelonberry": {
		id: "spelonberry",
		name: "Spelon Berry",
		spritenum: 462,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Dark"
		},
		desc: "No competitive use."
	},
	"splashplate": {
		id: "splashplate",
		name: "Splash Plate",
		spritenum: 463,
		fling: {
			basePower: 90
		},
		onPlate: 'Water',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Water') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Water-type attacks have 1.2x power. Judgment is Water-type."
	},
	"spookyplate": {
		id: "spookyplate",
		name: "Spooky Plate",
		spritenum: 464,
		fling: {
			basePower: 90
		},
		onPlate: 'Ghost',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ghost') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Ghost-type attacks have 1.2x power. Judgment is Ghost-type."
	},
	"sportball": {
		id: "sportball",
		name: "Sport Ball",
		spritenum: 465,
		desc: "A special Poké Ball for the Bug-Catching Contest."
	},
	"starfberry": {
		id: "starfberry",
		name: "Starf Berry",
		spritenum: 472,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Psychic"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/4 || (pokemon.hp <= pokemon.maxhp/2 && pokemon.ability === 'gluttony')) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			var stats = [];
			for (var i in pokemon.boosts) {
				if (i !== 'accuracy' && i !== 'evasion' && pokemon.boosts[i] < 6) {
					stats.push(i);
				}
			}
			if (stats.length) {
				var i = stats[this.random(stats.length)];
				var boost = {};
				boost[i] = 2;
				this.boost(boost);
			}
		},
		desc: "Raises a random stat by 2 when at 1/4 max HP or less. Single use."
	},
	"steelgem": {
		id: "steelgem",
		name: "Steel Gem",
		spritenum: 473,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Steel') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Steel Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Steel-type attack will have 1.5x power. Single use."
	},
	"stick": {
		id: "stick",
		name: "Stick",
		fling: {
			basePower: 60
		},
		spritenum: 475,
		onModifyMove: function(move, user) {
			if (user.template.species === 'Farfetch\'d') {
				move.critRatio += 2;
			}
		},
		desc: "If holder is a Farfetch'd, its critical hit ratio is boosted by 2."
	},
	"stickybarb": {
		id: "stickybarb",
		name: "Sticky Barb",
		spritenum: 476,
		fling: {
			basePower: 80
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual: function(pokemon) {
			this.damage(pokemon.maxhp/8);
		},
		onHit: function(target, source, move) {
			if (source && source !== target && !source.item && move && move.isContact) {
				var barb = target.takeItem();
				source.setItem(barb);
				// no message for Sticky Barb changing hands
			}
		},
		desc: "Each turn, holder loses 1/8 max HP. An attacker making contact can receive it."
	},
	"stoneplate": {
		id: "stoneplate",
		name: "Stone Plate",
		spritenum: 477,
		fling: {
			basePower: 90
		},
		onPlate: 'Rock',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Rock') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Rock-type attacks have 1.2x power. Judgment is Rock-type."
	},
	"tamatoberry": {
		id: "tamatoberry",
		name: "Tamato Berry",
		spritenum: 486,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Psychic"
		},
		desc: "No competitive use."
	},
	"tangaberry": {
		id: "tangaberry",
		name: "Tanga Berry",
		spritenum: 487,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Bug"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Bug' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Bug-type attack. Single use."
	},
	"thickclub": {
		id: "thickclub",
		name: "Thick Club",
		spritenum: 491,
		fling: {
			basePower: 90
		},
		onModifyAtk: function(atk, pokemon) {
			if (pokemon.template.species === 'Cubone' || pokemon.template.species === 'Marowak') {
				return atk * 2;
			}
		},
		desc: "If holder is a Cubone or a Marowak, its Attack is doubled."
	},
	"timerball": {
		id: "timerball",
		name: "Timer Ball",
		spritenum: 494,
		desc: "A somewhat different Ball that becomes progressively better the more turns there are in a battle."
	},
	"toxicorb": {
		id: "toxicorb",
		name: "Toxic Orb",
		spritenum: 515,
		fling: {
			basePower: 30,
			status: 'tox'
		},
		onResidualOrder: 26,
		onResidualSubOrder: 2,
		onResidual: function(pokemon) {
			if (!pokemon.status && !pokemon.hasType('Poison') && !pokemon.hasType('Steel') && pokemon.ability !== 'immunity') {
				this.add('-activate', pokemon, 'item: Toxic Orb');
				pokemon.trySetStatus('tox');
			}
		},
		desc: "At the end of every turn, this item attempts to badly poison the holder."
	},
	"toxicplate": {
		id: "toxicplate",
		name: "Toxic Plate",
		spritenum: 516,
		fling: {
			basePower: 90
		},
		onPlate: 'Poison',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Poison') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Poison-type attacks have 1.2x power. Judgment is Poison-type."
	},
	"twistedspoon": {
		id: "twistedspoon",
		name: "TwistedSpoon",
		spritenum: 520,
		fling: {
			basePower: 30
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Psychic') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Psychic-type attacks have 1.2x power."
	},
	"ultraball": {
		id: "ultraball",
		name: "Ultra Ball",
		spritenum: 521,
		desc: "An ultra-performance Ball that provides a higher Pokémon catch rate than a Great Ball."
	},
	"wacanberry": {
		id: "wacanberry",
		name: "Wacan Berry",
		spritenum: 526,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Electric"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Electric' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Electric-type attack. Single use."
	},
	"watergem": {
		id: "watergem",
		name: "Water Gem",
		spritenum: 528,
		isGem: true,
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Water') {
				if (user.useItem()) {
					this.add('-enditem', user, 'Water Gem', '[from] gem', '[move] '+move.name);
					return basePower * 1.5;
				}
			}
		},
		desc: "Holder's first successful Water-type attack will have 1.5x power. Single use."
	},
	"watmelberry": {
		id: "watmelberry",
		name: "Watmel Berry",
		spritenum: 530,
		isBerry: true,
		naturalGift: {
			basePower: 80,
			type: "Fire"
		},
		desc: "No competitive use."
	},
	"waveincense": {
		id: "waveincense",
		name: "Wave Incense",
		spritenum: 531,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Water') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Water-type attacks have 1.2x power."
	},
	"wepearberry": {
		id: "wepearberry",
		name: "Wepear Berry",
		spritenum: 533,
		isBerry: true,
		naturalGift: {
			basePower: 70,
			type: "Electric"
		},
		desc: "No competitive use."
	},
	"whiteherb": {
		id: "whiteherb",
		name: "White Herb",
		spritenum: 535,
		fling: {
			basePower: 10,
			effect: function(pokemon) {
				var activate = false;
				var boosts = {};
				for (var i in pokemon.boosts) {
					if (pokemon.boosts[i] < 0) {
						activate = true;
						boosts[i] = 0;
					}
				}
				if (activate) {
					pokemon.setBoost(boosts);
				}
			}
		},
		onUpdate: function(pokemon) {
			var activate = false;
			var boosts = {};
			for (var i in pokemon.boosts) {
				if (pokemon.boosts[i] < 0) {
					activate = true;
					boosts[i] = 0;
				}
			}
			if (activate && pokemon.useItem()) {
				pokemon.setBoost(boosts);
				this.add('-restoreboost', pokemon, '[silent]');
			}
		},
		desc: "Restores all lowered stat stages to 0 when one is less than 0. Single use."
	},
	"widelens": {
		id: "widelens",
		name: "Wide Lens",
		spritenum: 537,
		fling: {
			basePower: 10
		},
		onModifyMove: function(move) {
			if (typeof move.accuracy === 'number') {
				move.accuracy *= 1.1;
			}
		},
		desc: "The accuracy of attacks by the holder is 1.1x."
	},
	"wikiberry": {
		id: "wikiberry",
		name: "Wiki Berry",
		spritenum: 538,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Rock"
		},
		onUpdate: function(pokemon) {
			if (pokemon.hp <= pokemon.maxhp/2) {
				pokemon.eatItem();
			}
		},
		onEat: function(pokemon) {
			this.heal(pokemon.maxhp/8);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
		desc: "Restores 1/8 max HP when at 1/2 max HP or less. May confuse. Single use."
	},
	"wiseglasses": {
		id: "wiseglasses",
		name: "Wise Glasses",
		spritenum: 539,
		fling: {
			basePower: 10
		},
		onBasePower: function(basePower, user, target, move) {
			if (move.category === 'Special') {
				return basePower * 1.1;
			}
		},
		desc: "Holder's special attacks have 1.1x power."
	},
	"yacheberry": {
		id: "yacheberry",
		name: "Yache Berry",
		spritenum: 567,
		isBerry: true,
		naturalGift: {
			basePower: 60,
			type: "Ice"
		},
		onSourceBasePower: function(basePower, user, target, move) {
			if (move.type === 'Ice' && this.getEffectiveness(move.type, target) > 0 && !target.volatiles['substitute']) {
				if (target.eatItem()) {
					this.debug('-50% reduction');
					return basePower * 0.5;
				}
			}
		},
		onEat: function() { },
		desc: "Halves damage taken from a super effective Ice-type attack. Single use."
	},
	"zapplate": {
		id: "zapplate",
		name: "Zap Plate",
		spritenum: 572,
		fling: {
			basePower: 90
		},
		onPlate: 'Electric',
		onBasePower: function(basePower, user, target, move) {
			if (move.type === 'Electric') {
				return basePower * 1.2;
			}
		},
		desc: "Holder's Electric-type attacks have 1.2x power. Judgment is Electric-type."
	},
	"zoomlens": {
		id: "zoomlens",
		name: "Zoom Lens",
		spritenum: 574,
		fling: {
			basePower: 10
		},
		onModifyMove: function(move, user, target) {
			if (typeof move.accuracy === 'number' && !this.willMove(target)) {
				this.debug('Zoom Lens boosting accuracy');
				move.accuracy *= 1.2;
			}
		},
		desc: "The accuracy of attacks by the holder is 1.2x if it moves after the target."
	}
};
