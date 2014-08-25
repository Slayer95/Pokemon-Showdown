module.exports = {
	inherit: 'gen5',
	init: function () {
		for (var i in this.data.Pokedex) {
			delete this.data.Pokedex[i].abilities['H'];
		}
	},
	Battle: {
		inherit: true,
		gen: 4
	}
};
