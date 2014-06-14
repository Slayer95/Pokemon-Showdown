/**
 * This is the mod for OU Theorymon (https://smogon.com/forums/threads/3499219/)
 * Each month roughly 6 Pokémon are changed to fit the OU metagame and tested within.
 */
exports.BattleScripts = {
	gen: 6,
	init: function () {
		// May
		this.modData('Learnsets', 'braviary').learnset.extremespeed = ['6L1'];
		this.modData('Pokedex', 'tangrowth').types = ['Poison'];
		this.modData('Learnsets', 'blastoise').learnset.slackoff = ['6L1'];
		this.modData('Learnsets', 'hydreigon').learnset.defog = ['6L1'];
		this.modData('Pokedex', 'zygarde').abilities['1'] = 'Shed Skin';

		// June
		this.modData('Pokedex', 'torterra').abilities['1'] = 'Drought';
	}
};
