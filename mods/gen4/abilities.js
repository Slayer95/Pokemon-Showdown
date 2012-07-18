exports.BattleAbilities = {
	"angerpoint": {
		inherit: true,
		desc: "If this Pokemon, or its Substitute, is struck by a Critical Hit, its Attack is boosted to six stages.",
		shortDesc: "If this Pokemon is hit by a critical hit, its Attack is boosted by 12.",
		onCriticalHit: function(target) {
			target.setBoost({atk: 6});
			this.add('-setboost',target,'atk',12,'[from] ability: Anger Point');
		}
	},
	"lightningrod": {
		desc: "During double battles, this Pokemon draws any single-target Electric-type attack to itself. If an opponent uses an Electric-type attack that affects multiple Pokemon, those targets will be hit. This ability does not affect Electric Hidden Power or Judgment. The user is immune to Electric.",
		shortDesc: "This Pokemon draws Electric moves to itself; Electric immunity.",
		onImmunity: function(type, pokemon) {
			if (type === 'Electric') {
				return false;
			}
		},
		id: "lightningrod",
		name: "Lightningrod",
		rating: 3,
		num: 32
	},
	"pickup": {
		desc: "No in-battle effect.",
		shortDesc: "No in-battle effect.",
		id: "pickup",
		name: "Pickup",
		rating: 0,
		num: 1
	},
	"stench": {
		desc: "No in-battle effect.",
		shortDesc: "No in-battle effect.",
		id: "stench",
		name: "Stench",
		rating: 0,
		num: 1
	},
	"stormdrain": {
		desc: "During double battles, this Pokemon draws any single-target Water-type attack to itself. If an opponent uses an Water-type attack that affects multiple Pokemon, those targets will be hit. This ability does not affect Water Hidden Power, Judgment or Weather Ball. The user is immune to Water.",
		shortDesc: "This Pokemon draws Water moves to itself; Water immunity.",
		onImmunity: function(type, pokemon) {
			if (type === 'Water') {
				return false;
			}
		},
		id: "stormdrain",
		name: "Storm Drain",
		rating: 3,
		num: 114
	},
	"sturdy": {
		desc: "This Pokemon is immune to OHKO moves.",
		shortDesc: "OHKO moves fail on this Pokemon.",
		onDamagePriority: -100,
		onDamage: function(damage, target, source, effect) {
			if (effect && effect.ohko) {
				this.add('-activate',target,'Sturdy');
				return 0;
			}
		},
		id: "sturdy",
		name: "Sturdy",
		rating: 0.5,
		num: 5
	},
	"synchronize": {
		inherit: true,
		onAfterSetStatus: function(status, target, source) {
			if (!source || source === target) return;
			var status = status.id;
			if (status === 'slp' || status === 'frz') return;
			if (status === 'tox') status = 'psn';
			source.trySetStatus(status);
		}
	},
	"trace": {
		inherit: true,
		onUpdate: function(pokemon) {
			var target = pokemon.side.foe.randomActive();
			if (!target || target.fainted) return;
			var ability = this.getAbility(target.ability);
			var bannedAbilities = {forecast:1, multitype:1, trace:1};
			if (bannedAbilities[target.ability]) {
				return;
			}
			if (pokemon.setAbility(ability)) {
				this.add('-ability',pokemon, ability,'[from] ability: Trace','[of] '+target);
			}
		}
	},
	"wonderguard": {
		inherit: true,
		onDamage: function(damage, target, source, effect) {
			if (effect.effectType !== 'Move') return;
			if (effect.type === '???' || effect.id === 'struggle' || effect.id === 'firefang') return;
			if (this.getEffectiveness(effect.type, target) <= 0) {
				this.add('-activate',target,'ability: Wonder Guard');
				return null;
			}
		},
		onSubDamage: function(damage, target, source, effect) {
			if (effect.effectType !== 'Move') return;
			if (target.negateImmunity[effect.type] || effect.id === 'firefang') return;
			if (this.getEffectiveness(effect.type, target) <= 0) {
				this.add('-activate',target,'ability: Wonder Guard');
				return null;
			}
		}
	}
};
