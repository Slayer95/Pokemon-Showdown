exports.BattleFormatsData = {
	bulbasaur: {
		viableMoves: {"sleeppowder":1,"gigadrain":1,"hiddenpowerfire":1,"hiddenpowerice":1,"sludgebomb":1,"powerwhip":1,"leechseed":1,"synthesis":1},
		viableDoublesMoves: {"sleeppowder":1,"gigadrain":1,"hiddenpowerfire":1,"hiddenpowerice":1,"sludgebomb":1,"powerwhip":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["sweetscent","growth","solarbeam","synthesis"]},
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","leechseed","vinewhip"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","growl","leechseed","vinewhip"]},
			{"generation":5,"level":1,"isHidden":false,"moves":["falseswipe","block","frenzyplant","weatherball"]}
		],
		tier: "LC"
	},
	ivysaur: {
		viableMoves: {"sleeppowder":1,"gigadrain":1,"hiddenpowerfire":1,"hiddenpowerice":1,"sludgebomb":1,"powerwhip":1,"leechseed":1,"synthesis":1},
		viableDoublesMoves: {"sleeppowder":1,"gigadrain":1,"hiddenpowerfire":1,"hiddenpowerice":1,"sludgebomb":1,"powerwhip":1,"protect":1},
		tier: "NFE"
	},
	venusaur: {
		viableMoves: {"sleeppowder":1,"gigadrain":1,"hiddenpowerfire":1,"hiddenpowerice":1,"sludgebomb":1,"swordsdance":1,"powerwhip":1,"leechseed":1,"synthesis":1,"earthquake":1},
		viableDoublesMoves: {"sleeppowder":1,"gigadrain":1,"hiddenpowerfire":1,"hiddenpowerice":1,"sludgebomb":1,"powerwhip":1,"protect":1},
		tier: "OU"
	},
	venusaurmega: {
		requiredItem: "Venusaurite"
	},
	charmander: {
		viableMoves: {"flamethrower":1,"overheat":1,"dragonpulse":1,"hiddenpowergrass":1,"fireblast":1},
		viableDoublesMoves: {"heatwave":1,"dragonpulse":1,"hiddenpowergrass":1,"fireblast":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","growl","ember"]},
			{"generation":4,"level":40,"gender":"M","nature":"Mild","moves":["return","hiddenpower","quickattack","howl"]},
			{"generation":4,"level":40,"gender":"M","nature":"Naive","moves":["return","hiddenpower","quickattack","howl"]},
			{"generation":4,"level":40,"gender":"M","nature":"Naughty","moves":["return","hiddenpower","quickattack","howl"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["scratch","growl","ember","smokescreen"]},
			{"generation":4,"level":40,"gender":"M","nature":"Hardy","moves":["return","hiddenpower","quickattack","howl"],"pokeball":"cherishball"},
			{"generation":5,"level":1,"isHidden":false,"moves":["falseswipe","block","blastburn","acrobatics"]}
		],
		tier: "LC"
	},
	charmeleon: {
		viableMoves: {"flamethrower":1,"overheat":1,"dragonpulse":1,"hiddenpowergrass":1,"fireblast":1,"dragondance":1,"flareblitz":1,"shadowclaw":1,"dragonclaw":1},
		viableDoublesMoves: {"heatwave":1,"dragonpulse":1,"hiddenpowergrass":1,"fireblast":1,"protect":1},
		tier: "NFE"
	},
	charizard: {
		viableMoves: {"flamethrower":1,"fireblast":1,"substitute":1,"airslash":1,"roost":1,"dragondance":1,"flareblitz":1,"dragonclaw":1,"earthquake":1},
		viableDoublesMoves: {"heatwave":1,"fireblast":1,"solarbeam":1,"airslash":1,"dragondance":1,"flareblitz":1,"dragonclaw":1,"earthquake":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["wingattack","slash","dragonrage","firespin"]}
		],
		tier: "OU"
	},
	charizardmegax: {
		requiredItem: "Charizardite X"
	},
	charizardmegay: {
		requiredItem: "Charizardite Y"
	},
	squirtle: {
		viableMoves: {"icebeam":1,"hydropump":1,"rapidspin":1,"scald":1,"aquajet":1,"toxic":1},
		viableDoublesMoves: {"muddywater":1,"icebeam":1,"hydropump":1,"fakeout":1,"scald":1,"followme":1,"icywind":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","tailwhip","bubble","withdraw"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","tailwhip","bubble","withdraw"]},
			{"generation":5,"level":1,"isHidden":false,"moves":["falseswipe","block","hydrocannon","followme"]}
		],
		tier: "LC"
	},
	wartortle: {
		viableMoves: {"icebeam":1,"hydropump":1,"rapidspin":1,"scald":1,"aquajet":1,"toxic":1},
		viableDoublesMoves: {"muddywater":1,"icebeam":1,"hydropump":1,"fakeout":1,"scald":1,"followme":1,"icywind":1,"protect":1},
		tier: "Limbo"
	},
	blastoise: {
		viableMoves: {"icebeam":1,"hydropump":1,"rapidspin":1,"scald":1,"aquajet":1,"toxic":1,"dragontail":1,"darkpulse":1,"aurasphere":1},
		viableDoublesMoves: {"muddywater":1,"icebeam":1,"hydropump":1,"fakeout":1,"scald":1,"darkpulse":1,"aurasphere":1,"followme":1,"icywind":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["protect","raindance","skullbash","hydropump"]}
		],
		tier: "Limbo A"
	},
	blastoisemega: {
		requiredItem: "Blastoisinite"
	},
	caterpie: {
		viableMoves: {"bugbite":1,"snore":1,"tackle":1,"electroweb":1},
		tier: "LC"
	},
	metapod: {
		viableMoves: {"snore":1,"bugbite":1,"tackle":1,"electroweb":1},
		tier: "NFE"
	},
	butterfree: {
		viableMoves: {"quiverdance":1,"roost":1,"bugbuzz":1,"substitute":1,"sleeppowder":1,"gigadrain":1,"psychic":1,"shadowball":1},
		viableDoublesMoves: {"quiverdance":1,"bugbuzz":1,"substitute":1,"sleeppowder":1,"gigadrain":1,"psychic":1,"shadowball":1,"protect":1,},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["morningsun","psychic","sleeppowder","aerialace"]}
		],
		tier: "Limbo"
	},
	weedle: {
		viableMoves: {"bugbite":1,"stringshot":1,"poisonsting":1,"electroweb":1},
		tier: "LC"
	},
	kakuna: {
		viableMoves: {"electroweb":1,"bugbite":1,"irondefense":1,"poisonsting":1},
		tier: "NFE"
	},
	beedrill: {
		viableMoves: {"toxicspikes":1,"xscissor":1,"swordsdance":1,"uturn":1,"endeavor":1,"poisonjab":1,"drillrun":1,"brickbreak":1,"knockoff":1},
		viableDoublesMoves: {"xscissor":1,"uturn":1,"endeavor":1,"poisonjab":1,"drillrun":1,"brickbreak":1,"knockoff":1,"protect":1,"stringshot":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["batonpass","sludgebomb","twineedle","swordsdance"]}
		],
		tier: "Limbo"
	},
	pidgey: {
		viableMoves: {"roost":1,"bravebird":1,"heatwave":1,"return":1,"workup":1,"uturn":1,"thief":1},
		viableDoublesMoves: {"bravebird":1,"heatwave":1,"return":1,"uturn":1,"tailwind":1,"protect":1},
		tier: "LC"
	},
	pidgeotto: {
		viableMoves: {"roost":1,"bravebird":1,"heatwave":1,"return":1,"workup":1,"uturn":1,"thief":1},
		viableDoublesMoves: {"bravebird":1,"heatwave":1,"return":1,"uturn":1,"tailwind":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":30,"abilities":["keeneye"],"moves":["refresh","wingattack","steelwing","featherdance"]}
		],
		tier: "NFE"
	},
	pidgeot: {
		viableMoves: {"roost":1,"bravebird":1,"pursuit":1,"heatwave":1,"return":1,"uturn":1},
		viableDoublesMoves: {"bravebird":1,"heatwave":1,"return":1,"uturn":1,"tailwind":1,"protect":1},
		eventPokemon: [
			{"generation":5,"level":61,"gender":"M","nature":"Naughty","isHidden":false,"abilities":["keeneye"],"moves":["whirlwind","wingattack","skyattack","mirrormove"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	rattata: {
		viableMoves: {"facade":1,"flamewheel":1,"suckerpunch":1,"uturn":1,"wildcharge":1,"thunderwave":1,"crunch":1,"revenge":1},
		viableDoublesMoves: {"facade":1,"flamewheel":1,"suckerpunch":1,"uturn":1,"wildcharge":1,"superfang":1,"crunch":1,"protect":1},
		tier: "LC"
	},
	raticate: {
		viableMoves: {"facade":1,"flamewheel":1,"suckerpunch":1,"uturn":1,"wildcharge":1,"crunch":1,"revenge":1},
		viableDoublesMoves: {"facade":1,"flamewheel":1,"suckerpunch":1,"uturn":1,"wildcharge":1,"superfang":1,"crunch":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":34,"moves":["refresh","superfang","scaryface","hyperfang"]}
		],
		tier: "Limbo"
	},
	spearow: {
		viableMoves: {"return":1,"drillpeck":1,"doubleedge":1,"uturn":1,"quickattack":1,"pursuit":1,"drillrun":1,"featherdance":1},
		viableDoublesMoves: {"return":1,"drillpeck":1,"doubleedge":1,"uturn":1,"quickattack":1,"drillrun":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":22,"moves":["batonpass","falseswipe","leer","aerialace"]}
		],
		tier: "LC"
	},
	fearow: {
		viableMoves: {"return":1,"drillpeck":1,"doubleedge":1,"uturn":1,"quickattack":1,"pursuit":1,"drillrun":1,"roost":1},
		viableDoublesMoves: {"return":1,"drillpeck":1,"doubleedge":1,"uturn":1,"quickattack":1,"drillrun":1,"protect":1},
		tier: "Limbo"
	},
	ekans: {
		viableMoves: {"coil":1,"gunkshot":1,"seedbomb":1,"glare":1,"suckerpunch":1,"aquatail":1,"earthquake":1,"rest":1,"rockslide":1},
		viableDoublesMoves: {"gunkshot":1,"seedbomb":1,"suckerpunch":1,"aquatail":1,"earthquake":1,"rest":1,"rockslide":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":14,"abilities":["shedskin"],"moves":["leer","wrap","poisonsting","bite"]},
			{"generation":3,"level":10,"gender":"M","moves":["wrap","leer","poisonsting"]}
		],
		tier: "LC"
	},
	arbok: {
		viableMoves: {"coil":1,"gunkshot":1,"seedbomb":1,"glare":1,"suckerpunch":1,"aquatail":1,"crunch":1,"earthquake":1,"rest":1,"rockslide":1},
		viableDoublesMoves: {"gunkshot":1,"seedbomb":1,"suckerpunch":1,"aquatail":1,"crunch":1,"earthquake":1,"rest":1,"rockslide":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":33,"moves":["refresh","sludgebomb","glare","bite"]}
		],
		tier: "Limbo"
	},
	pichu: {
		viableMoves: {"fakeout":1,"volttackle":1,"encore":1,"irontail":1,"toxic":1,"thunderbolt":1},
		viableDoublesMoves: {"fakeout":1,"volttackle":1,"encore":1,"irontail":1,"protect":1,"thunderbolt":1,"discharge":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["thundershock","charm","surf"]},
			{"generation":3,"level":5,"moves":["thundershock","charm","wish"]},
			{"generation":3,"level":5,"moves":["thundershock","charm","teeterdance"]},
			{"generation":3,"level":5,"moves":["thundershock","charm","followme"]},
			{"generation":4,"level":1,"moves":["volttackle","thunderbolt","grassknot","return"]},
			{"generation":4,"level":30,"shiny":true,"gender":"M","nature":"Jolly","moves":["charge","volttackle","endeavor","endure"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"shiny":true,"gender":"M","nature":"Jolly","moves":["volttackle","charge","endeavor","endure"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	pichuspikyeared: {
		eventPokemon: [
			{"generation":4,"level":30,"gender":"F","nature":"Naughty","moves":["helpinghand","volttackle","swagger","painsplit"]}
		],
		tier: ""
	},
	pikachu: {
		viableMoves: {"thunderbolt":1,"volttackle":1,"voltswitch":1,"grassknot":1,"hiddenpowerice":1,"brickbreak":1,"extremespeed":1,"encore":1,"substitute":1,"knockoff":1,"signalbeam":1},
		viableDoublesMoves: {"fakeout":1,"thunderbolt":1,"volttackle":1,"voltswitch":1,"feint":1,"grassknot":1,"hiddenpowerice":1,"brickbreak":1,"extremespeed":1,"encore":1,"substitute":1,"knockoff":1,"protect":1,"discharge":1},
		eventPokemon: [
			{"generation":3,"level":50,"moves":["thunderbolt","agility","thunder","lightscreen"]},
			{"generation":3,"level":10,"moves":["thundershock","growl","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"moves":["fly","tailwhip","growl","thunderwave"]},
			{"generation":3,"level":5,"moves":["surf","growl","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"moves":["fly","growl","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"moves":["thundershock","growl","thunderwave","surf"]},
			{"generation":3,"level":70,"moves":["thunderbolt","thunder","lightscreen","fly"]},
			{"generation":3,"level":70,"moves":["thunderbolt","thunder","lightscreen","surf"]},
			{"generation":3,"level":70,"moves":["thunderbolt","thunder","lightscreen","agility"]},
			{"generation":4,"level":10,"gender":"F","nature":"Hardy","moves":["surf","volttackle","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"gender":"M","moves":["thundershock","growl","tailwhip","thunderwave"]},
			{"generation":4,"level":50,"gender":"M","nature":"Hardy","moves":["surf","thunderbolt","lightscreen","quickattack"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"F","nature":"Bashful","moves":["present","quickattack","thundershock","tailwhip"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"M","nature":"Jolly","moves":["grassknot","thunderbolt","flash","doubleteam"],"pokeball":"cherishball"},
			{"generation":4,"level":40,"gender":"M","nature":"Modest","moves":["surf","thunder","protect"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"F","nature":"Bashful","moves":["quickattack","thundershock","tailwhip","present"],"pokeball":"cherishball"},
			{"generation":4,"level":40,"gender":"M","nature":"Mild","moves":["surf","thunder","protect"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"F","nature":"Bashful","moves":["present","quickattack","thunderwave","tailwhip"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"gender":"M","moves":["lastresort","present","thunderbolt","quickattack"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"gender":"M","nature":"Relaxed","moves":["rest","sleeptalk","yawn","snore"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"M","nature":"Docile","moves":["present","quickattack","thundershock","tailwhip"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"gender":"M","nature":"Naughty","moves":["volttackle","irontail","quickattack","thunderbolt"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"M","nature":"Bashful","moves":["present","quickattack","thundershock","tailwhip"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"F","isHidden":true,"moves":["sing","teeterdance","encore","electroball"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["fly","irontail","electroball","quickattack"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"gender":"F","isHidden":false,"moves":["thunder","volttackle","grassknot","quickattack"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"F","isHidden":false,"moves":["extremespeed","thunderbolt","grassknot","brickbreak"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"F","isHidden":true,"moves":["fly","thunderbolt","grassknot","protect"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["thundershock","tailwhip","thunderwave","headbutt"]},
			{"generation":5,"level":100,"gender":"M","isHidden":true,"moves":["volttackle","quickattack","feint","voltswitch"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"M","nature":"Brave","isHidden":false,"moves":["thunderbolt","quickattack","irontail","electroball"],"pokeball":"cherishball"},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","growl","playnice","quickattack"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	raichu: {
		viableMoves: {"nastyplot":1,"encore":1,"thunderbolt":1,"grassknot":1,"hiddenpowerice":1,"focusblast":1,"substitute":1,"extremespeed":1,"knockoff":1,"signalbeam":1},
		viableDoublesMoves: {"fakeout":1,"encore":1,"thunderbolt":1,"grassknot":1,"hiddenpowerice":1,"focusblast":1,"substitute":1,"extremespeed":1,"knockoff":1,"signalbeam":1,"feint":1,"protect":1},
		tier: "Limbo"
	},
	sandshrew: {
		viableMoves: {"earthquake":1,"rockslide":1,"swordsdance":1,"rapidspin":1,"xscissor":1,"stealthrock":1,"toxic":1,"knockoff":1},
		viableDoublesMoves: {"earthquake":1,"rockslide":1,"swordsdance":1,"xscissor":1,"knockoff":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":12,"moves":["scratch","defensecurl","sandattack","poisonsting"]}
		],
		tier: "LC"
	},
	sandslash: {
		viableMoves: {"earthquake":1,"stoneedge":1,"swordsdance":1,"rapidspin":1,"xscissor":1,"stealthrock":1,"toxic":1,"knockoff":1},
		viableDoublesMoves: {"earthquake":1,"rockslide":1,"stoneedge":1,"swordsdance":1,"xscissor":1,"knockoff":1,"protect":1},
		tier: "Limbo"
	},
	nidoranf: {
		viableMoves: {"toxicspikes":1,"crunch":1,"poisonjab":1,"honeclaws":1},
		viableDoublesMoves: {"helpinghand":1,"crunch":1,"poisonjab":1,"protect":1},
		tier: "LC"
	},
	nidorina: {
		viableMoves: {"toxicspikes":1,"crunch":1,"poisonjab":1,"honeclaws":1,"icebeam":1,"thunderbolt":1,"shadowclaw":1},
		viableDoublesMoves: {"helpinghand":1,"crunch":1,"poisonjab":1,"protect":1,"icebeam":1,"thunderbolt":1,"shadowclaw":1},
		tier: "NFE"
	},
	nidoqueen: {
		viableMoves: {"toxicspikes":1,"stealthrock":1,"fireblast":1,"thunderbolt":1,"icebeam":1,"earthpower":1,"sludgewave":1,"focusblast":1},
		viableDoublesMoves: {"helpinghand":1,"protect":1,"fireblast":1,"thunderbolt":1,"icebeam":1,"earthpower":1,"sludgebomb":1,"focusblast":1},
		tier: "Limbo"
	},
	nidoranm: {
		viableMoves: {"suckerpunch":1,"poisonjab":1,"headsmash":1,"honeclaws":1,"shadowclaw":1},
		viableDoublesMoves: {"suckerpunch":1,"poisonjab":1,"shadowclaw":1,"helpinghand":1,"protect":1},
		tier: "LC"
	},
	nidorino: {
		viableMoves: {"suckerpunch":1,"poisonjab":1,"headsmash":1,"honeclaws":1,"shadowclaw":1},
		viableDoublesMoves: {"suckerpunch":1,"poisonjab":1,"shadowclaw":1,"helpinghand":1,"protect":1},
		tier: "NFE"
	},
	nidoking: {
		viableMoves: {"fireblast":1,"thunderbolt":1,"icebeam":1,"earthpower":1,"sludgewave":1,"focusblast":1},
		viableDoublesMoves: {"helpinghand":1,"protect":1,"fireblast":1,"thunderbolt":1,"icebeam":1,"earthpower":1,"sludgebomb":1,"focusblast":1},
		tier: "Limbo B"
	},
	cleffa: {
		viableMoves: {"reflect":1,"thunderwave":1,"lightscreen":1,"toxic":1,"fireblast":1,"encore":1,"wish":1,"protect":1,"aromatherapy":1,"moonblast":1},
		viableDoublesMoves: {"reflect":1,"thunderwave":1,"lightscreen":1,"safeguard":1,"fireblast":1,"protect":1,"moonblast":1},
		tier: "LC"
	},
	clefairy: {
		viableMoves: {"healingwish":1,"reflect":1,"thunderwave":1,"lightscreen":1,"toxic":1,"fireblast":1,"encore":1,"wish":1,"protect":1,"aromatherapy":1,"stealthrock":1,"moonblast":1,"knockoff":1,"moonlight":1},
		viableDoublesMoves: {"reflect":1,"thunderwave":1,"lightscreen":1,"safeguard":1,"fireblast":1,"followme":1,"protect":1,"moonblast":1},
		tier: "NFE"
	},
	clefable: {
		viableMoves: {"calmmind":1,"softboiled":1,"fireblast":1,"thunderbolt":1,"icebeam":1,"moonblast":1},
		viableDoublesMoves: {"reflect":1,"thunderwave":1,"lightscreen":1,"safeguard":1,"fireblast":1,"followme":1,"protect":1,"moonblast":1,"softboiled":1},
		tier: "OU"
	},
	vulpix: {
		viableMoves: {"flamethrower":1,"fireblast":1,"willowisp":1,"energyball":1,"substitute":1,"toxic":1,"hypnosis":1,"painsplit":1},
		viableDoublesMoves: {"heatwave":1,"fireblast":1,"willowisp":1,"energyball":1,"substitute":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":18,"moves":["tailwhip","roar","quickattack","willowisp"]},
			{"generation":3,"level":18,"moves":["charm","heatwave","ember","dig"]}
		],
		tier: "NFE"
	},
	ninetales: {
		viableMoves: {"flamethrower":1,"fireblast":1,"willowisp":1,"solarbeam":1,"nastyplot":1,"substitute":1,"toxic":1,"painsplit":1},
		viableDoublesMoves: {"heatwave":1,"fireblast":1,"willowisp":1,"solarbeam":1,"substitute":1,"protect":1},
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Bold","isHidden":true,"moves":["heatwave","solarbeam","psyshock","willowisp"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	igglybuff: {
		viableMoves: {"wish":1,"thunderwave":1,"reflect":1,"lightscreen":1,"healbell":1,"seismictoss":1,"counter":1,"protect":1,"knockoff":1,"dazzlinggleam":1},
		viableDoublesMoves: {"wish":1,"thunderwave":1,"reflect":1,"lightscreen":1,"seismictoss":1,"protect":1,"knockoff":1,"dazzlinggleam":1},
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["cutecharm"],"moves":["sing","charm","defensecurl","tickle"]}
		],
		tier: "LC"
	},
	jigglypuff: {
		viableMoves: {"wish":1,"thunderwave":1,"reflect":1,"lightscreen":1,"healbell":1,"seismictoss":1,"counter":1,"stealthrock":1,"protect":1,"knockoff":1,"dazzlinggleam":1},
		viableDoublesMoves: {"wish":1,"thunderwave":1,"reflect":1,"lightscreen":1,"seismictoss":1,"protect":1,"knockoff":1,"dazzlinggleam":1},
		tier: "NFE"
	},
	wigglytuff: {
		viableMoves: {"wish":1,"thunderwave":1,"thunderbolt":1,"healbell":1,"fireblast":1,"counter":1,"stealthrock":1,"icebeam":1,"knockoff":1,"dazzlinggleam":1,"hypervoice":1},
		viableDoublesMoves: {"thunderwave":1,"reflect":1,"lightscreen":1,"seismictoss":1,"protect":1,"knockoff":1,"dazzlinggleam":1,"fireblast":1,"icebeam":1,"hypervoice":1},
		tier: "Limbo"
	},
	zubat: {
		viableMoves: {"bravebird":1,"roost":1,"toxic":1,"taunt":1,"nastyplot":1,"gigadrain":1,"sludgebomb":1,"airslash":1,"uturn":1,"whirlwind":1,"heatwave":1,"superfang":1},
		viableDoublesMoves: {"bravebird":1,"taunt":1,"nastyplot":1,"gigadrain":1,"sludgebomb":1,"airslash":1,"uturn":1,"protect":1,"heatwave":1,"superfang":1},
		tier: "LC"
	},
	golbat: {
		viableMoves: {"bravebird":1,"roost":1,"toxic":1,"taunt":1,"nastyplot":1,"gigadrain":1,"sludgebomb":1,"airslash":1,"uturn":1,"whirlwind":1,"heatwave":1,"superfang":1},
		viableDoublesMoves: {"bravebird":1,"taunt":1,"nastyplot":1,"gigadrain":1,"sludgebomb":1,"airslash":1,"uturn":1,"protect":1,"heatwave":1,"superfang":1},
		tier: "Limbo"
	},
	crobat: {
		viableMoves: {"bravebird":1,"roost":1,"toxic":1,"taunt":1,"nastyplot":1,"gigadrain":1,"sludgebomb":1,"airslash":1,"uturn":1,"whirlwind":1,"heatwave":1,"superfang":1},
		viableDoublesMoves: {"bravebird":1,"taunt":1,"nastyplot":1,"gigadrain":1,"sludgebomb":1,"airslash":1,"uturn":1,"protect":1,"heatwave":1,"superfang":1},
		eventPokemon: [
			{"generation":4,"level":30,"gender":"M","nature":"Timid","moves":["heatwave","airslash","sludgebomb","superfang"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	oddish: {
		viableMoves: {"gigadrain":1,"sludgebomb":1,"synthesis":1,"sleeppowder":1,"stunspore":1,"toxic":1,"hiddenpowerfire":1,"leechseed":1,"dazzlinggleam":1,"sunnyday":1},
		viableDoublesMoves: {"gigadrain":1,"sludgebomb":1,"sleeppowder":1,"stunspore":1,"protect":1,"hiddenpowerfire":1,"leechseed":1,"dazzlinggleam":1,"sunnyday":1},
		eventPokemon: [
			{"generation":3,"level":26,"moves":["poisonpowder","stunspore","sleeppowder","acid"]},
			{"generation":3,"level":5,"moves":["absorb","leechseed"]}
		],
		tier: "LC"
	},
	gloom: {
		viableMoves: {"gigadrain":1,"sludgebomb":1,"synthesis":1,"sleeppowder":1,"stunspore":1,"toxic":1,"hiddenpowerfire":1,"leechseed":1,"dazzlinggleam":1,"sunnyday":1},
		viableDoublesMoves: {"gigadrain":1,"sludgebomb":1,"sleeppowder":1,"stunspore":1,"protect":1,"hiddenpowerfire":1,"leechseed":1,"dazzlinggleam":1,"sunnyday":1},
		eventPokemon: [
			{"generation":3,"level":50,"moves":["sleeppowder","acid","moonlight","petaldance"]}
		],
		tier: "NFE"
	},
	vileplume: {
		viableMoves: {"gigadrain":1,"sludgebomb":1,"synthesis":1,"sleeppowder":1,"stunspore":1,"toxic":1,"hiddenpowerfire":1,"leechseed":1,"aromatherapy":1,"dazzlinggleam":1,"sunnyday":1},
		viableDoublesMoves: {"gigadrain":1,"sludgebomb":1,"sleeppowder":1,"stunspore":1,"protect":1,"hiddenpowerfire":1,"leechseed":1,"dazzlinggleam":1,"sunnyday":1},
		tier: "Limbo"
	},
	bellossom: {
		viableMoves: {"gigadrain":1,"sludgebomb":1,"synthesis":1,"sleeppowder":1,"stunspore":1,"toxic":1,"hiddenpowerfire":1,"leechseed":1,"leafstorm":1,"dazzlinggleam":1,"sunnyday":1},
		viableDoublesMoves: {"gigadrain":1,"sludgebomb":1,"sleeppowder":1,"stunspore":1,"protect":1,"hiddenpowerfire":1,"leechseed":1,"dazzlinggleam":1,"sunnyday":1,"leafstorm":1},
		tier: "Limbo"
	},
	paras: {
		viableMoves: {"spore":1,"stunspore":1,"xscissor":1,"seedbomb":1,"synthesis":1,"leechseed":1,"aromatherapy":1,"knockoff":1},
		viableDoublesMoves: {"spore":1,"stunspore":1,"xscissor":1,"seedbomb":1,"ragepowder":1,"leechseed":1,"protect":1,"knockoff":1,"wideguard":1},
		eventPokemon: [
			{"generation":3,"level":28,"abilities":["effectspore"],"moves":["refresh","spore","slash","falseswipe"]}
		],
		tier: "LC"
	},
	parasect: {
		viableMoves: {"spore":1,"stunspore":1,"xscissor":1,"seedbomb":1,"synthesis":1,"leechseed":1,"aromatherapy":1,"knockoff":1},
		viableDoublesMoves: {"spore":1,"stunspore":1,"xscissor":1,"seedbomb":1,"ragepowder":1,"leechseed":1,"protect":1,"knockoff":1,"wideguard":1},
		tier: "Limbo"
	},
	venonat: {
		viableMoves: {"sleeppowder":1,"morningsun":1,"toxicspikes":1,"sludgebomb":1,"signalbeam":1,"stunspore":1,"psychic":1},
		viableDoublesMoves: {"sleeppowder":1,"morningsun":1,"ragepowder":1,"sludgebomb":1,"signalbeam":1,"stunspore":1,"psychic":1,"protect":1},
		tier: "LC"
	},
	venomoth: {
		viableMoves: {"sleeppowder":1,"roost":1,"toxicspikes":1,"quiverdance":1,"batonpass":1,"bugbuzz":1,"sludgebomb":1,"gigadrain":1,"substitute":1,"psychic":1},
		viableDoublesMoves: {"sleeppowder":1,"roost":1,"ragepowder":1,"quiverdance":1,"protect":1,"bugbuzz":1,"sludgebomb":1,"gigadrain":1,"substitute":1,"psychic":1},
		eventPokemon: [
			{"generation":3,"level":32,"abilities":["shielddust"],"moves":["refresh","silverwind","substitute","psychic"]}
		],
		tier: "Limbo"
	},
	diglett: {
		viableMoves: {"earthquake":1,"rockslide":1,"stealthrock":1,"suckerpunch":1,"reversal":1,"substitute":1,"shadowclaw":1},
		viableDoublesMoves: {"earthquake":1,"rockslide":1,"protect":1,"suckerpunch":1,"shadowclaw":1},
		tier: "LC"
	},
	dugtrio: {
		viableMoves: {"earthquake":1,"stoneedge":1,"stealthrock":1,"suckerpunch":1,"reversal":1,"substitute":1,"shadowclaw":1},
		viableDoublesMoves: {"earthquake":1,"rockslide":1,"protect":1,"suckerpunch":1,"shadowclaw":1,"stoneedge":1},
		eventPokemon: [
			{"generation":3,"level":40,"moves":["charm","earthquake","sandstorm","triattack"]}
		],
		tier: "Limbo C"
	},
	meowth: {
		viableMoves: {"fakeout":1,"uturn":1,"thief":1,"taunt":1,"return":1,"hypnosis":1},
		viableDoublesMoves: {"fakeout":1,"uturn":1,"nightslash":1,"taunt":1,"return":1,"hypnosis":1,"feint":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["scratch","growl","petaldance"]},
			{"generation":3,"level":5,"moves":["scratch","growl"]},
			{"generation":3,"level":10,"gender":"M","moves":["scratch","growl","bite"]},
			{"generation":3,"level":22,"moves":["sing","slash","payday","bite"]},
			{"generation":4,"level":21,"gender":"F","nature":"Jolly","abilities":["pickup"],"moves":["bite","fakeout","furyswipes","screech"],"pokeball":"cherishball"},
			{"generation":4,"level":10,"gender":"M","nature":"Jolly","abilities":["pickup"],"moves":["fakeout","payday","assist","scratch"],"pokeball":"cherishball"},
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["pickup"],"moves":["furyswipes","sing","nastyplot","snatch"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	persian: {
		viableMoves: {"fakeout":1,"uturn":1,"taunt":1,"return":1,"hypnosis":1,"switcheroo":1,"thief":1},
		viableDoublesMoves: {"fakeout":1,"uturn":1,"nightslash":1,"taunt":1,"return":1,"hypnosis":1,"feint":1,"protect":1},
		tier: "Limbo"
	},
	psyduck: {
		viableMoves: {"hydropump":1,"scald":1,"icebeam":1,"hiddenpowergrass":1,"crosschop":1,"encore":1,"psychic":1,"signalbeam":1},
		viableDoublesMoves: {"hydropump":1,"scald":1,"icebeam":1,"hiddenpowergrass":1,"crosschop":1,"encore":1,"psychic":1,"signalbeam":1,"surf":1,"icywind":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":27,"abilities":["damp"],"moves":["tailwhip","confusion","disable"]},
			{"generation":3,"level":5,"moves":["watersport","scratch","tailwhip","mudsport"]}
		],
		tier: "LC"
	},
	golduck: {
		viableMoves: {"hydropump":1,"scald":1,"icebeam":1,"hiddenpowergrass":1,"encore":1,"focusblast":1,"psychic":1,"signalbeam":1},
		viableDoublesMoves: {"hydropump":1,"scald":1,"icebeam":1,"hiddenpowergrass":1,"focusblast":1,"encore":1,"psychic":1,"signalbeam":1,"surf":1,"icywind":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":33,"moves":["charm","waterfall","psychup","brickbreak"]}
		],
		tier: "Limbo"
	},
	mankey: {
		viableMoves: {"closecombat":1,"uturn":1,"icepunch":1,"rockslide":1,"punishment":1,"earthquake":1,"poisonjab":1},
		viableDoublesMoves: {"closecombat":1,"uturn":1,"icepunch":1,"rockslide":1,"punishment":1,"earthquake":1,"poisonjab":1,"protect":1},
		tier: "LC"
	},
	primeape: {
		viableMoves: {"closecombat":1,"uturn":1,"icepunch":1,"stoneedge":1,"punishment":1,"encore":1,"earthquake":1,"poisonjab":1,"bulkup":1},
		viableDoublesMoves: {"closecombat":1,"uturn":1,"icepunch":1,"rockslide":1,"punishment":1,"earthquake":1,"poisonjab":1,"protect":1,"taunt":1,"stoneedge":1},
		eventPokemon: [
			{"generation":3,"level":34,"abilities":["vitalspirit"],"moves":["helpinghand","crosschop","focusenergy","reversal"]}
		],
		tier: "Limbo"
	},
	growlithe: {
		viableMoves: {"flareblitz":1,"wildcharge":1,"hiddenpowergrass":1,"closecombat":1,"morningsun":1,"willowisp":1,"toxic":1,"flamethrower":1},
		viableDoublesMoves: {"flareblitz":1,"wildcharge":1,"hiddenpowergrass":1,"closecombat":1,"willowisp":1,"snarl":1,"heatwave":1,"helpinghand":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":32,"abilities":["intimidate"],"moves":["leer","odorsleuth","takedown","flamewheel"]},
			{"generation":3,"level":10,"gender":"M","moves":["bite","roar","ember"]},
			{"generation":3,"level":28,"moves":["charm","flamethrower","bite","takedown"]}
		],
		tier: "LC"
	},
	arcanine: {
		viableMoves: {"flareblitz":1,"wildcharge":1,"hiddenpowergrass":1,"extremespeed":1,"closecombat":1,"morningsun":1,"willowisp":1,"toxic":1,"flamethrower":1},
		viableDoublesMoves: {"flareblitz":1,"wildcharge":1,"hiddenpowergrass":1,"closecombat":1,"willowisp":1,"snarl":1,"heatwave":1,"helpinghand":1,"protect":1,"extremespeed":1},
		tier: "Limbo A"
	},
	poliwag: {
		viableMoves: {"hydropump":1,"icebeam":1,"encore":1,"bellydrum":1,"hypnosis":1,"waterfall":1,"return":1},
		viableDoublesMoves: {"hydropump":1,"icebeam":1,"encore":1,"icywind":1,"hypnosis":1,"waterfall":1,"return":1,"protect":1,"helpinghand":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["bubble","sweetkiss"]}
		],
		tier: "LC"
	},
	poliwhirl: {
		viableMoves: {"hydropump":1,"icebeam":1,"encore":1,"bellydrum":1,"hypnosis":1,"waterfall":1,"return":1,"earthquake":1},
		viableDoublesMoves: {"hydropump":1,"icebeam":1,"encore":1,"icywind":1,"hypnosis":1,"waterfall":1,"return":1,"protect":1,"helpinghand":1,"earthquake":1},
		tier: "NFE"
	},
	poliwrath: {
		viableMoves: {"substitute":1,"poweruppunch":1,"focuspunch":1,"bulkup":1,"encore":1,"waterfall":1,"toxic":1,"rest":1,"sleeptalk":1,"icepunch":1,"poisonjab":1,"earthquake":1,"circlethrow":1},
		viableDoublesMoves: {"substitute":1,"helpinghand":1,"icywind":1,"encore":1,"waterfall":1,"protect":1,"icepunch":1,"poisonjab":1,"earthquake":1,"brickbreak":1},
		eventPokemon: [
			{"generation":3,"level":42,"moves":["helpinghand","hydropump","raindance","brickbreak"]}
		],
		tier: "Limbo"
	},
	politoed: {
		viableMoves: {"scald":1,"hypnosis":1,"toxic":1,"encore":1,"perishsong":1,"protect":1,"icebeam":1,"focusblast":1,"hydropump":1,"hiddenpowergrass":1},
		viableDoublesMoves: {"scald":1,"hypnosis":1,"icywind":1,"encore":1,"helpinghand":1,"protect":1,"icebeam":1,"focusblast":1,"hydropump":1,"hiddenpowergrass":1},
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Calm","isHidden":true,"moves":["scald","icebeam","perishsong","protect"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	abra: {
		viableMoves: {"calmmind":1,"psychic":1,"psyshock":1,"hiddenpowerfighting":1,"shadowball":1,"encore":1,"substitute":1},
		viableDoublesMoves: {"protect":1,"psychic":1,"psyshock":1,"hiddenpowerfighting":1,"shadowball":1,"encore":1,"substitute":1},
		tier: "LC"
	},
	kadabra: {
		viableMoves: {"calmmind":1,"psychic":1,"psyshock":1,"hiddenpowerfighting":1,"shadowball":1,"encore":1,"substitute":1},
		viableDoublesMoves: {"protect":1,"psychic":1,"psyshock":1,"hiddenpowerfighting":1,"shadowball":1,"encore":1,"substitute":1},
		tier: "Limbo"
	},
	alakazam: {
		viableMoves: {"calmmind":1,"psychic":1,"psyshock":1,"focusblast":1,"shadowball":1,"encore":1,"substitute":1,"energyball":1},
		viableDoublesMoves: {"protect":1,"psychic":1,"psyshock":1,"focusblast":1,"shadowball":1,"encore":1,"substitute":1,"energyball":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["futuresight","calmmind","psychic","trick"]}
		],
		tier: "OU"
	},
	alakazammega: {
		requiredItem: "Alakazite"
	},
	machop: {
		viableMoves: {"dynamicpunch":1,"payback":1,"bulkup":1,"icepunch":1,"rockslide":1,"bulletpunch":1,"knockoff":1},
		viableDoublesMoves: {"dynamicpunch":1,"payback":1,"protect":1,"icepunch":1,"rockslide":1,"bulletpunch":1,"knockoff":1},
		tier: "LC"
	},
	machoke: {
		viableMoves: {"dynamicpunch":1,"payback":1,"bulkup":1,"icepunch":1,"rockslide":1,"bulletpunch":1,"poweruppunch":1,"knockoff":1},
		viableDoublesMoves: {"dynamicpunch":1,"payback":1,"protect":1,"icepunch":1,"rockslide":1,"bulletpunch":1,"knockoff":1},
		eventPokemon: [
			{"generation":3,"level":38,"abilities":["guts"],"moves":["seismictoss","foresight","revenge","vitalthrow"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["lowsweep","foresight","seismictoss","revenge"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	machamp: {
		viableMoves: {"dynamicpunch":1,"bulkup":1,"icepunch":1,"stoneedge":1,"bulletpunch":1,"earthquake":1,"knockoff":1},
		viableDoublesMoves: {"dynamicpunch":1,"payback":1,"protect":1,"icepunch":1,"rockslide":1,"bulletpunch":1,"knockoff":1,"wideguard":1},
		tier: "Limbo B"
	},
	bellsprout: {
		viableMoves: {"swordsdance":1,"sleeppowder":1,"sunnyday":1,"growth":1,"solarbeam":1,"gigadrain":1,"sludgebomb":1,"weatherball":1,"suckerpunch":1,"seedbomb":1},
		viableDoublesMoves: {"swordsdance":1,"sleeppowder":1,"sunnyday":1,"growth":1,"solarbeam":1,"gigadrain":1,"sludgebomb":1,"weatherball":1,"suckerpunch":1,"seedbomb":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["vinewhip","teeterdance"]},
			{"generation":3,"level":10,"gender":"M","moves":["vinewhip","growth"]}
		],
		tier: "LC"
	},
	weepinbell: {
		viableMoves: {"swordsdance":1,"sleeppowder":1,"sunnyday":1,"growth":1,"solarbeam":1,"gigadrain":1,"sludgebomb":1,"weatherball":1,"suckerpunch":1,"seedbomb":1,"knockoff":1},
		viableDoublesMoves: {"swordsdance":1,"sleeppowder":1,"sunnyday":1,"growth":1,"solarbeam":1,"gigadrain":1,"sludgebomb":1,"weatherball":1,"suckerpunch":1,"seedbomb":1,"protect":1,"knockoff":1},
		eventPokemon: [
			{"generation":3,"level":32,"moves":["morningsun","magicalleaf","sludgebomb","sweetscent"]}
		],
		tier: "NFE"
	},
	victreebel: {
		viableMoves: {"swordsdance":1,"sleeppowder":1,"sunnyday":1,"growth":1,"solarbeam":1,"gigadrain":1,"sludgebomb":1,"weatherball":1,"suckerpunch":1,"powerwhip":1,"knockoff":1},
		viableDoublesMoves: {"swordsdance":1,"sleeppowder":1,"sunnyday":1,"growth":1,"solarbeam":1,"gigadrain":1,"sludgebomb":1,"weatherball":1,"suckerpunch":1,"powerwhip":1,"protect":1,"knockoff":1},
		tier: "Limbo"
	},
	tentacool: {
		viableMoves: {"toxicspikes":1,"rapidspin":1,"scald":1,"sludgebomb":1,"icebeam":1,"knockoff":1,"gigadrain":1,"toxic":1,"dazzlinggleam":1},
		viableDoublesMoves: {"muddywater":1,"scald":1,"sludgebomb":1,"icebeam":1,"knockoff":1,"gigadrain":1,"protect":1,"dazzlinggleam":1},
		tier: "LC"
	},
	tentacruel: {
		viableMoves: {"toxicspikes":1,"rapidspin":1,"scald":1,"sludgebomb":1,"icebeam":1,"knockoff":1,"gigadrain":1,"toxic":1,"dazzlinggleam":1},
		viableDoublesMoves: {"muddywater":1,"scald":1,"sludgebomb":1,"icebeam":1,"knockoff":1,"gigadrain":1,"protect":1,"dazzlinggleam":1},
		tier: "Limbo A"
	},
	geodude: {
		viableMoves: {"stealthrock":1,"earthquake":1,"stoneedge":1,"suckerpunch":1,"hammerarm":1,"firepunch":1,"rockblast":1},
		viableDoublesMoves: {"rockslide":1,"earthquake":1,"stoneedge":1,"suckerpunch":1,"hammerarm":1,"firepunch":1,"rockblast":1,"protect":1},
		tier: "LC"
	},
	graveler: {
		viableMoves: {"stealthrock":1,"earthquake":1,"stoneedge":1,"suckerpunch":1,"hammerarm":1,"firepunch":1,"rockblast":1},
		viableDoublesMoves: {"rockslide":1,"earthquake":1,"stoneedge":1,"suckerpunch":1,"hammerarm":1,"firepunch":1,"rockblast":1,"protect":1},
		tier: "NFE"
	},
	golem: {
		viableMoves: {"stealthrock":1,"earthquake":1,"stoneedge":1,"suckerpunch":1,"hammerarm":1,"firepunch":1,"rockblast":1},
		viableDoublesMoves: {"rockslide":1,"earthquake":1,"stoneedge":1,"suckerpunch":1,"hammerarm":1,"firepunch":1,"rockblast":1,"protect":1},
		tier: "Limbo"
	},
	ponyta: {
		viableMoves: {"flareblitz":1,"wildcharge":1,"morningsun":1,"hypnosis":1,"flamecharge":1},
		viableDoublesMoves: {"flareblitz":1,"wildcharge":1,"protect":1,"hypnosis":1,"flamecharge":1},
		tier: "LC"
	},
	rapidash: {
		viableMoves: {"flareblitz":1,"wildcharge":1,"morningsun":1,"hypnosis":1,"flamecharge":1,"megahorn":1,"drillrun":1,"willowisp":1,"sunnyday":1,"solarbeam":1},
		viableDoublesMoves: {"flareblitz":1,"wildcharge":1,"protect":1,"hypnosis":1,"flamecharge":1,"megahorn":1,"drillrun":1,"willowisp":1,"sunnyday":1,"solarbeam":1},
		eventPokemon: [
			{"generation":3,"level":40,"moves":["batonpass","solarbeam","sunnyday","flamethrower"]}
		],
		tier: "Limbo"
	},
	slowpoke: {
		viableMoves: {"scald":1,"aquatail":1,"zenheadbutt":1,"thunderwave":1,"toxic":1,"slackoff":1,"trickroom":1},
		viableDoublesMoves: {"scald":1,"aquatail":1,"zenheadbutt":1,"thunderwave":1,"slackoff":1,"trickroom":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":31,"abilities":["oblivious"],"moves":["watergun","confusion","disable","headbutt"]},
			{"generation":3,"level":10,"gender":"M","moves":["curse","yawn","tackle","growl"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["confusion","disable","headbutt","waterpulse"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	slowbro: {
		viableMoves: {"scald":1,"fireblast":1,"icebeam":1,"psychic":1,"grassknot":1,"calmmind":1,"thunderwave":1,"toxic":1,"slackoff":1,"trickroom":1,"psyshock":1},
		viableDoublesMoves: {"scald":1,"fireblast":1,"icebeam":1,"psychic":1,"grassknot":1,"thunderwave":1,"slackoff":1,"trickroom":1,"protect":1,"psyshock":1},
		tier: "Limbo A"
	},
	slowking: {
		viableMoves: {"scald":1,"fireblast":1,"icebeam":1,"psychic":1,"grassknot":1,"calmmind":1,"thunderwave":1,"toxic":1,"slackoff":1,"trickroom":1,"nastyplot":1,"dragontail":1,"psyshock":1},
		viableDoublesMoves: {"scald":1,"fireblast":1,"icebeam":1,"psychic":1,"grassknot":1,"thunderwave":1,"slackoff":1,"trickroom":1,"protect":1,"psyshock":1},
		tier: "Limbo"
	},
	magnemite: {
		viableMoves: {"thunderbolt":1,"thunderwave":1,"magnetrise":1,"substitute":1,"flashcannon":1,"hiddenpowerice":1,"voltswitch":1},
		viableDoublesMoves: {"thunderbolt":1,"thunderwave":1,"magnetrise":1,"substitute":1,"flashcannon":1,"hiddenpowerice":1,"voltswitch":1,"protect":1,"electroweb":1,"discharge":1},
		tier: "LC"
	},
	magneton: {
		viableMoves: {"thunderbolt":1,"thunderwave":1,"magnetrise":1,"substitute":1,"flashcannon":1,"hiddenpowerice":1,"voltswitch":1,"chargebeam":1,"hiddenpowerfire":1},
		viableDoublesMoves: {"thunderbolt":1,"thunderwave":1,"magnetrise":1,"substitute":1,"flashcannon":1,"hiddenpowerice":1,"voltswitch":1,"protect":1,"electroweb":1,"discharge":1,"hiddenpowerfire":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["refresh","doubleedge","raindance","thunder"]}
		],
		tier: "Limbo"
	},
	magnezone: {
		viableMoves: {"thunderbolt":1,"thunderwave":1,"magnetrise":1,"substitute":1,"flashcannon":1,"hiddenpowerice":1,"voltswitch":1,"chargebeam":1,"hiddenpowerfire":1},
		viableDoublesMoves: {"thunderbolt":1,"thunderwave":1,"magnetrise":1,"substitute":1,"flashcannon":1,"hiddenpowerice":1,"voltswitch":1,"protect":1,"electroweb":1,"discharge":1,"hiddenpowerfire":1},
		tier: "BL"
	},
	farfetchd: {
		viableMoves: {"bravebird":1,"swordsdance":1,"return":1,"leafblade":1,"roost":1},
		viableDoublesMoves: {"bravebird":1,"swordsdance":1,"return":1,"leafblade":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["yawn","wish"]},
			{"generation":3,"level":36,"moves":["batonpass","slash","swordsdance","aerialace"]}
		],
		tier: "Limbo"
	},
	doduo: {
		viableMoves: {"bravebird":1,"return":1,"doubleedge":1,"roost":1,"quickattack":1,"pursuit":1},
		viableDoublesMoves: {"bravebird":1,"return":1,"doubleedge":1,"quickattack":1,"protect":1},
		tier: "LC"
	},
	dodrio: {
		viableMoves: {"bravebird":1,"return":1,"doubleedge":1,"roost":1,"quickattack":1,"pursuit":1,"toxic":1},
		viableDoublesMoves: {"bravebird":1,"return":1,"doubleedge":1,"quickattack":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":34,"moves":["batonpass","drillpeck","agility","triattack"]}
		],
		tier: "Limbo"
	},
	seel: {
		viableMoves: {"surf":1,"icebeam":1,"aquajet":1,"protect":1,"rest":1,"toxic":1,"drillrun":1},
		viableDoublesMoves: {"surf":1,"icebeam":1,"aquajet":1,"protect":1,"rest":1,"fakeout":1,"drillrun":1,"icywind":1},
		eventPokemon: [
			{"generation":3,"level":23,"abilities":["thickfat"],"moves":["helpinghand","surf","safeguard","icebeam"]}
		],
		tier: "LC"
	},
	dewgong: {
		viableMoves: {"surf":1,"icebeam":1,"aquajet":1,"iceshard":1,"protect":1,"rest":1,"toxic":1,"drillrun":1},
		viableDoublesMoves: {"surf":1,"icebeam":1,"aquajet":1,"protect":1,"rest":1,"fakeout":1,"drillrun":1,"icywind":1},
		tier: "Limbo"
	},
	grimer: {
		viableMoves: {"curse":1,"gunkshot":1,"poisonjab":1,"shadowsneak":1,"payback":1,"rest":1,"icepunch":1,"firepunch":1,"sleeptalk":1,"memento":1},
		viableDoublesMoves: {"gunkshot":1,"poisonjab":1,"shadowsneak":1,"payback":1,"protect":1,"icepunch":1,"firepunch":1},
		eventPokemon: [
			{"generation":3,"level":23,"moves":["helpinghand","sludgebomb","shadowpunch","minimize"]}
		],
		tier: "LC"
	},
	muk: {
		viableMoves: {"curse":1,"gunkshot":1,"poisonjab":1,"shadowsneak":1,"payback":1,"brickbreak":1,"rest":1,"icepunch":1,"firepunch":1,"sleeptalk":1,"memento":1},
		viableDoublesMoves: {"gunkshot":1,"poisonjab":1,"shadowsneak":1,"payback":1,"protect":1,"icepunch":1,"firepunch":1,"brickbreak":1},
		tier: "Limbo"
	},
	shellder: {
		viableMoves: {"shellsmash":1,"hydropump":1,"razorshell":1,"rockblast":1,"iciclespear":1,"rapidspin":1},
		viableDoublesMoves: {"shellsmash":1,"hydropump":1,"razorshell":1,"rockblast":1,"iciclespear":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":24,"abilities":["shellarmor"],"moves":["withdraw","iciclespear","supersonic","aurorabeam"]},
			{"generation":3,"level":10,"gender":"M","abilities":["shellarmor"],"moves":["tackle","withdraw","iciclespear"]},
			{"generation":3,"level":29,"abilities":["shellarmor"],"moves":["refresh","takedown","surf","aurorabeam"]}
		],
		tier: "LC"
	},
	cloyster: {
		viableMoves: {"shellsmash":1,"hydropump":1,"razorshell":1,"rockblast":1,"iciclespear":1,"iceshard":1,"rapidspin":1,"spikes":1,"toxicspikes":1},
		viableDoublesMoves: {"shellsmash":1,"hydropump":1,"razorshell":1,"rockblast":1,"iciclespear":1,"protect":1},
		eventPokemon: [
			{"generation":5,"level":30,"gender":"M","nature":"Naughty","isHidden":false,"abilities":["skilllink"],"moves":["iciclespear","rockblast","hiddenpower","razorshell"]}
		],
		tier: "Limbo A"
	},
	gastly: {
		viableMoves: {"shadowball":1,"sludgebomb":1,"hiddenpowerfighting":1,"thunderbolt":1,"substitute":1,"disable":1,"painsplit":1,"hypnosis":1,"gigadrain":1,"trick":1,"dazzlinggleam":1},
		tier: "LC"
	},
	haunter: {
		viableMoves: {"shadowball":1,"sludgebomb":1,"hiddenpowerfighting":1,"thunderbolt":1,"substitute":1,"disable":1,"painsplit":1,"hypnosis":1,"gigadrain":1,"trick":1},
		eventPokemon: [
			{"generation":3,"level":23,"moves":["spite","curse","nightshade","confuseray"]},
			{"generation":5,"level":30,"moves":["confuseray","suckerpunch","shadowpunch","payback"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	gengar: {
		viableMoves: {"shadowball":1,"sludgewave":1,"focusblast":1,"thunderbolt":1,"substitute":1,"disable":1,"painsplit":1,"hypnosis":1,"gigadrain":1},
		eventPokemon: [
			{"generation":6,"level":25,"nature":"Timid","moves":["psychic","confuseray","suckerpunch","shadowpunch"],"pokeball":"cherishball"},
			{"generation":6,"level":25,"moves":["nightshade","confuseray","suckerpunch","shadowpunch"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	gengarmega: {
		requiredItem: "Gengarite"
	},
	onix: {
		viableMoves: {"stealthrock":1,"earthquake":1,"stoneedge":1,"dragontail":1,"curse":1},
		tier: "LC"
	},
	steelix: {
		viableMoves: {"stealthrock":1,"earthquake":1,"ironhead":1,"curse":1,"roar":1,"toxic":1,"rockslide":1,"icefang":1,"firefang":1},
		tier: "Limbo"
	},
	drowzee: {
		viableMoves: {"psychic":1,"seismictoss":1,"thunderwave":1,"wish":1,"protect":1,"toxic":1,"shadowball":1,"trickroom":1,"calmmind":1,"dazzlinggleam":1},
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["insomnia"],"moves":["bellydrum","wish"]}
		],
		tier: "LC"
	},
	hypno: {
		viableMoves: {"psychic":1,"seismictoss":1,"thunderwave":1,"wish":1,"protect":1,"shadowball":1,"trickroom":1,"batonpass":1,"calmmind":1,"bellydrum":1,"zenheadbutt":1,"firepunch":1,"dazzlinggleam":1},
		eventPokemon: [
			{"generation":3,"level":34,"abilities":["insomnia"],"moves":["batonpass","psychic","meditate","shadowball"]}
		],
		tier: "Limbo"
	},
	krabby: {
		viableMoves: {"crabhammer":1,"return":1,"swordsdance":1,"agility":1,"rockslide":1,"substitute":1,"xscissor":1,"superpower":1,"knockoff":1},
		tier: "LC"
	},
	kingler: {
		viableMoves: {"crabhammer":1,"return":1,"swordsdance":1,"agility":1,"rockslide":1,"substitute":1,"xscissor":1,"superpower":1,"knockoff":1},
		tier: "Limbo"
	},
	voltorb: {
		viableMoves: {"voltswitch":1,"thunderbolt":1,"taunt":1,"foulplay":1,"hiddenpowerice":1},
		eventPokemon: [
			{"generation":3,"level":19,"moves":["refresh","mirrorcoat","spark","swift"]}
		],
		tier: "LC"
	},
	electrode: {
		viableMoves: {"voltswitch":1,"thunderbolt":1,"taunt":1,"foulplay":1,"hiddenpowerice":1},
		tier: "Limbo"
	},
	exeggcute: {
		viableMoves: {"substitute":1,"leechseed":1,"gigadrain":1,"psychic":1,"sleeppowder":1,"stunspore":1,"hiddenpowerfire":1,"synthesis":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["sweetscent","wish"]}
		],
		tier: "LC"
	},
	exeggutor: {
		viableMoves: {"substitute":1,"leechseed":1,"gigadrain":1,"leafstorm":1,"psychic":1,"sleeppowder":1,"stunspore":1,"hiddenpowerfire":1,"synthesis":1,"sludgebomb":1,"trickroom":1,"psyshock":1},
		eventPokemon: [
			{"generation":3,"level":46,"moves":["refresh","psychic","hypnosis","ancientpower"]}
		],
		tier: "Limbo"
	},
	cubone: {
		viableMoves: {"substitute":1,"bonemerang":1,"doubleedge":1,"rockslide":1,"firepunch":1,"earthquake":1},
		tier: "LC"
	},
	marowak: {
		viableMoves: {"substitute":1,"doubleedge":1,"stoneedge":1,"swordsdance":1,"firepunch":1,"earthquake":1,"poweruppunch":1,"thunderpunch":1},
		eventPokemon: [
			{"generation":3,"level":44,"moves":["sing","earthquake","swordsdance","rockslide"]}
		],
		tier: "Limbo"
	},
	tyrogue: {
		viableMoves: {"highjumpkick":1,"rapidspin":1,"fakeout":1,"bulletpunch":1,"machpunch":1,"toxic":1,"counter":1},
		tier: "LC"
	},
	hitmonlee: {
		viableMoves: {"highjumpkick":1,"suckerpunch":1,"stoneedge":1,"machpunch":1,"substitute":1,"fakeout":1,"closecombat":1,"earthquake":1,"blazekick":1},
		eventPokemon: [
			{"generation":3,"level":38,"abilities":["limber"],"moves":["refresh","highjumpkick","mindreader","megakick"]}
		],
		tier: "Limbo"
	},
	hitmonchan: {
		viableMoves: {"bulkup":1,"drainpunch":1,"icepunch":1,"machpunch":1,"substitute":1,"earthquake":1,"stoneedge":1,"rapidspin":1},
		eventPokemon: [
			{"generation":3,"level":38,"abilities":["keeneye"],"moves":["helpinghand","skyuppercut","mindreader","megapunch"]}
		],
		tier: "Limbo"
	},
	hitmontop: {
		viableMoves: {"suckerpunch":1,"machpunch":1,"rapidspin":1,"closecombat":1,"stoneedge":1,"toxic":1,"earthquake":1},
		viableDoublesMoves: {"fakeout":1,"feint":1,"suckerpunch":1,"closecombat":1,"helpinghand":1,"machpunch":1,"wideguard":1,"quickguard":1},
		eventPokemon: [
			{"generation":5,"level":55,"gender":"M","nature":"Adamant","isHidden":false,"abilities":["intimidate"],"moves":["fakeout","closecombat","suckerpunch","helpinghand"]}
		],
		tier: "Limbo C"
	},
	lickitung: {
		viableMoves: {"wish":1,"protect":1,"dragontail":1,"curse":1,"bodyslam":1,"return":1,"powerwhip":1,"swordsdance":1,"earthquake":1,"toxic":1,"healbell":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["healbell","wish"]},
			{"generation":3,"level":38,"moves":["helpinghand","doubleedge","defensecurl","rollout"]}
		],
		tier: "LC"
	},
	lickilicky: {
		viableMoves: {"wish":1,"protect":1,"dragontail":1,"curse":1,"bodyslam":1,"return":1,"powerwhip":1,"swordsdance":1,"earthquake":1,"toxic":1,"healbell":1,"explosion":1,"knockoff":1},
		tier: "Limbo"
	},
	koffing: {
		viableMoves: {"painsplit":1,"sludgebomb":1,"willowisp":1,"fireblast":1,"toxic":1,"clearsmog":1,"rest":1,"sleeptalk":1,"thunderbolt":1},
		tier: "LC"
	},
	weezing: {
		viableMoves: {"painsplit":1,"sludgebomb":1,"willowisp":1,"fireblast":1,"toxic":1,"clearsmog":1,"rest":1,"sleeptalk":1,"thunderbolt":1,"explosion":1},
		tier: "Limbo"
	},
	rhyhorn: {
		viableMoves: {"stoneedge":1,"earthquake":1,"aquatail":1,"megahorn":1,"stealthrock":1,"rockblast":1,"rockpolish":1},
		tier: "LC"
	},
	rhydon: {
		viableMoves: {"stoneedge":1,"earthquake":1,"aquatail":1,"megahorn":1,"stealthrock":1,"rockblast":1,"rockpolish":1},
		eventPokemon: [
			{"generation":3,"level":46,"moves":["helpinghand","megahorn","scaryface","earthquake"]}
		],
		tier: "Limbo"
	},
	rhyperior: {
		viableMoves: {"stoneedge":1,"earthquake":1,"aquatail":1,"megahorn":1,"stealthrock":1,"rockblast":1,"rockpolish":1,"dragontail":1},
		tier: "Limbo C"
	},
	happiny: {
		viableMoves: {"aromatherapy":1,"toxic":1,"thunderwave":1,"counter":1,"endeavor":1,"lightscreen":1,"fireblast":1},
		tier: "LC"
	},
	chansey: {
		viableMoves: {"wish":1,"softboiled":1,"protect":1,"toxic":1,"aromatherapy":1,"seismictoss":1,"counter":1,"thunderwave":1,"stealthrock":1,"fireblast":1,"icebeam":1},
		eventPokemon: [
			{"generation":3,"level":5,"gender":"F","moves":["sweetscent","wish"]},
			{"generation":3,"level":10,"gender":"F","moves":["pound","growl","tailwhip","refresh"]},
			{"generation":3,"level":39,"gender":"F","moves":["sweetkiss","thunderbolt","softboiled","skillswap"]}
		],
		tier: "OU"
	},
	blissey: {
		viableMoves: {"wish":1,"softboiled":1,"protect":1,"toxic":1,"aromatherapy":1,"seismictoss":1,"counter":1,"thunderwave":1,"stealthrock":1,"flamethrower":1,"icebeam":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"F","isHidden":true,"moves":["pound","growl","tailwhip","refresh"]}
		],
		tier: "OU"
	},
	tangela: {
		viableMoves: {"gigadrain":1,"sleeppowder":1,"hiddenpowerrock":1,"hiddenpowerice":1,"leechseed":1,"knockoff":1,"leafstorm":1,"stunspore":1,"synthesis":1},
		eventPokemon: [
			{"generation":3,"level":30,"abilities":["chlorophyll"],"moves":["morningsun","solarbeam","sunnyday","ingrain"]}
		],
		tier: "Limbo"
	},
	tangrowth: {
		viableMoves: {"gigadrain":1,"sleeppowder":1,"hiddenpowerice":1,"leechseed":1,"knockoff":1,"leafstorm":1,"stunspore":1,"focusblast":1,"synthesis":1,"powerwhip":1,"earthquake":1},
		tier: "Limbo C"
	},
	kangaskhan: {
		viableMoves: {"fakeout":1,"return":1,"suckerpunch":1,"earthquake":1,"wish":1,"poweruppunch":1,"crunch":1},
		viableDoublesMoves: {"fakeout":1,"return":1,"suckerpunch":1,"earthquake":1,"facade":1,"poweruppunch":1,"crunch":1},
		eventPokemon: [
			{"generation":3,"level":5,"gender":"F","abilities":["earlybird"],"moves":["yawn","wish"]},
			{"generation":3,"level":10,"gender":"F","abilities":["earlybird"],"moves":["cometpunch","leer","bite"]},
			{"generation":3,"level":36,"gender":"F","abilities":["earlybird"],"moves":["sing","earthquake","tailwhip","dizzypunch"]}
		],
		tier: "Limbo A"
	},
	kangaskhanmega: {
		requiredItem: "Kangaskhanite"
	},
	horsea: {
		viableMoves: {"hydropump":1,"icebeam":1,"substitute":1,"hiddenpowergrass":1,"raindance":1},
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["bubble"]}
		],
		tier: "LC"
	},
	seadra: {
		viableMoves: {"hydropump":1,"icebeam":1,"agility":1,"substitute":1,"hiddenpowergrass":1},
		eventPokemon: [
			{"generation":3,"level":45,"abilities":["poisonpoint"],"moves":["leer","watergun","twister","agility"]}
		],
		tier: "Limbo"
	},
	kingdra: {
		viableMoves: {"hydropump":1,"icebeam":1,"dragondance":1,"substitute":1,"outrage":1,"dracometeor":1,"waterfall":1,"rest":1,"sleeptalk":1,"dragonpulse":1},
		eventPokemon: [
			{"generation":3,"level":50,"abilities":["swiftswim"],"moves":["leer","watergun","twister","agility"]},
			{"generation":5,"level":50,"gender":"M","nature":"Timid","isHidden":false,"abilities":["swiftswim"],"moves":["dracometeor","muddywater","dragonpulse","protect"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	goldeen: {
		viableMoves: {"raindance":1,"waterfall":1,"megahorn":1,"return":1,"drillrun":1,"icebeam":1},
		tier: "LC"
	},
	seaking: {
		viableMoves: {"raindance":1,"waterfall":1,"megahorn":1,"return":1,"drillrun":1,"icebeam":1},
		tier: "Limbo"
	},
	staryu: {
		viableMoves: {"scald":1,"thunderbolt":1,"icebeam":1,"rapidspin":1,"recover":1,"dazzlinggleam":1,"hydropump":1},
		eventPokemon: [
			{"generation":3,"level":50,"moves":["minimize","lightscreen","cosmicpower","hydropump"]},
			{"generation":3,"level":18,"abilities":["illuminate"],"moves":["tackle","watergun","rapidspin","recover"]}
		],
		tier: "LC"
	},
	starmie: {
		viableMoves: {"surf":1,"thunderbolt":1,"icebeam":1,"rapidspin":1,"recover":1,"psychic":1,"psyshock":1,"scald":1,"hydropump":1},
		eventPokemon: [
			{"generation":3,"level":41,"moves":["refresh","waterfall","icebeam","recover"]}
		],
		tier: "Limbo A"
	},
	mimejr: {
		viableMoves: {"substitute":1,"batonpass":1,"psychic":1,"thunderwave":1,"hiddenpowerfighting":1,"healingwish":1,"nastyplot":1,"thunderbolt":1,"encore":1},
		tier: "LC"
	},
	mrmime: {
		viableMoves: {"substitute":1,"batonpass":1,"psychic":1,"hiddenpowerfighting":1,"healingwish":1,"nastyplot":1,"thunderbolt":1,"encore":1,"dazzlinggleam":1},
		eventPokemon: [
			{"generation":3,"level":42,"abilities":["soundproof"],"moves":["followme","psychic","encore","thunderpunch"]}
		],
		tier: "Limbo"
	},
	scyther: {
		viableMoves: {"swordsdance":1,"roost":1,"bugbite":1,"quickattack":1,"brickbreak":1,"aerialace":1,"batonpass":1,"uturn":1,"knockoff":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["swarm"],"moves":["quickattack","leer","focusenergy"]},
			{"generation":3,"level":40,"abilities":["swarm"],"moves":["morningsun","razorwind","silverwind","slash"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["agility","wingattack","furycutter","slash"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	scizor: {
		viableMoves: {"swordsdance":1,"roost":1,"bulletpunch":1,"bugbite":1,"superpower":1,"uturn":1,"batonpass":1,"pursuit":1,"defog":1,"knockoff":1},
		eventPokemon: [
			{"generation":3,"level":50,"gender":"M","abilities":["swarm"],"moves":["furycutter","metalclaw","swordsdance","slash"]},
			{"generation":4,"level":50,"gender":"M","nature":"Adamant","abilities":["swarm"],"moves":["xscissor","swordsdance","irondefense","agility"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"gender":"M","isHidden":false,"abilities":["technician"],"moves":["bulletpunch","bugbite","roost","swordsdance"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","focusenergy","pursuit","steelwing"]},
			{"generation":6,"level":50,"gender":"M","isHidden":false,"moves":["xscissor","nightslash","doublehit","ironhead"],"pokeball":"cherishball"},
			{"generation":6,"level":25,"nature":"Adamant","isHidden":false,"abilities":["technician"],"moves":["aerialace","falseswipe","agility","furycutter"],"pokeball":"cherishball"},
			{"generation":6,"level":25,"isHidden":false,"moves":["metalclaw","falseswipe","agility","furycutter"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	scizormega: {
		requiredItem: "Scizorite"
	},
	smoochum: {
		viableMoves: {"icebeam":1,"psychic":1,"hiddenpowerfighting":1,"trick":1,"shadowball":1,"grassknot":1},
		tier: "LC"
	},
	jynx: {
		viableMoves: {"icebeam":1,"psychic":1,"focusblast":1,"trick":1,"shadowball":1,"nastyplot":1,"lovelykiss":1,"substitute":1,"psyshock":1},
		tier: "Limbo"
	},
	elekid: {
		viableMoves: {"thunderbolt":1,"crosschop":1,"voltswitch":1,"substitute":1,"icepunch":1,"psychic":1,"hiddenpowergrass":1},
		eventPokemon: [
			{"generation":3,"level":20,"moves":["icepunch","firepunch","thunderpunch","crosschop"]}
		],
		tier: "LC"
	},
	electabuzz: {
		viableMoves: {"thunderbolt":1,"voltswitch":1,"substitute":1,"hiddenpowerice":1,"hiddenpowergrass":1,"focusblast":1,"psychic":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["quickattack","leer","thunderpunch"]},
			{"generation":3,"level":43,"moves":["followme","crosschop","thunderwave","thunderbolt"]},
			{"generation":4,"level":30,"gender":"M","nature":"Naughty","moves":["lowkick","shockwave","lightscreen","thunderpunch"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["lowkick","swift","shockwave","lightscreen"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	electivire: {
		viableMoves: {"wildcharge":1,"crosschop":1,"icepunch":1,"substitute":1,"flamethrower":1,"earthquake":1},
		eventPokemon: [
			{"generation":4,"level":50,"gender":"M","nature":"Adamant","moves":["thunderpunch","icepunch","crosschop","earthquake"]},
			{"generation":4,"level":50,"gender":"M","nature":"Serious","moves":["lightscreen","thunderpunch","discharge","thunderbolt"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	magby: {
		viableMoves: {"flareblitz":1,"substitute":1,"fireblast":1,"hiddenpowergrass":1,"hiddenpowerice":1,"crosschop":1,"thunderpunch":1,"overheat":1},
		tier: "LC"
	},
	magmar: {
		viableMoves: {"flareblitz":1,"substitute":1,"fireblast":1,"hiddenpowergrass":1,"hiddenpowerice":1,"crosschop":1,"thunderpunch":1,"focusblast":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["leer","smog","firepunch","leer"]},
			{"generation":3,"level":36,"moves":["followme","fireblast","crosschop","thunderpunch"]},
			{"generation":4,"level":30,"gender":"M","nature":"Quiet","moves":["smokescreen","firespin","confuseray","firepunch"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["smokescreen","feintattack","firespin","confuseray"],"pokeball":"cherishball"}
		],
		tier: "NFE"
	},
	magmortar: {
		viableMoves: {"fireblast":1,"substitute":1,"focusblast":1,"hiddenpowergrass":1,"hiddenpowerice":1,"thunderbolt":1,"overheat":1,"willowisp":1},
		eventPokemon: [
			{"generation":4,"level":50,"gender":"F","nature":"Modest","moves":["flamethrower","psychic","hyperbeam","solarbeam"]},
			{"generation":4,"level":50,"gender":"M","nature":"Hardy","moves":["confuseray","firepunch","lavaplume","flamethrower"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	pinsir: {
		viableMoves: {"swordsdance":1,"xscissor":1,"earthquake":1,"closecombat":1,"stealthrock":1,"substitute":1,"stoneedge":1,"quickattack":1,"return":1},
		eventPokemon: [
			{"generation":3,"level":35,"abilities":["hypercutter"],"moves":["helpinghand","guillotine","falseswipe","submission"]}
		],
		tier: "OU"
	},
	pinsirmega: {
		requiredItem: "Pinsirite"
	},
	tauros: {
		viableMoves: {"rockclimb":1,"earthquake":1,"zenheadbutt":1,"rockslide":1,"pursuit":1,"doubleedge":1},
		eventPokemon: [
			{"generation":3,"level":25,"gender":"M","abilities":["intimidate"],"moves":["rage","hornattack","scaryface","pursuit"]},
			{"generation":3,"level":10,"gender":"M","abilities":["intimidate"],"moves":["tackle","tailwhip","rage","hornattack"]},
			{"generation":3,"level":46,"gender":"M","abilities":["intimidate"],"moves":["refresh","earthquake","tailwhip","bodyslam"]}
		],
		tier: "Limbo"
	},
	magikarp: {
		viableMoves: {"bounce":1,"flail":1,"tackle":1,"hydropump":1},
		eventPokemon: [
			{"generation":4,"level":5,"gender":"M","nature":"Relaxed","moves":["splash"]},
			{"generation":4,"level":6,"gender":"F","nature":"Rash","moves":["splash"]},
			{"generation":4,"level":7,"gender":"F","nature":"Hardy","moves":["splash"]},
			{"generation":4,"level":5,"gender":"F","nature":"Lonely","moves":["splash"]},
			{"generation":4,"level":4,"gender":"M","nature":"Modest","moves":["splash"]},
			{"generation":5,"level":99,"shiny":true,"gender":"M","isHidden":false,"moves":["flail","hydropump","bounce","splash"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	gyarados: {
		viableMoves: {"dragondance":1,"waterfall":1,"earthquake":1,"bounce":1,"rest":1,"sleeptalk":1,"dragontail":1,"stoneedge":1,"substitute":1,"icefang":1},
		tier: "OU"
	},
	gyaradosmega: {
		requiredItem: "Gyaradosite"
	},
	lapras: {
		viableMoves: {"icebeam":1,"thunderbolt":1,"healbell":1,"toxic":1,"surf":1,"dragondance":1,"substitute":1,"waterfall":1,"return":1,"avalanche":1,"rest":1,"sleeptalk":1,"curse":1,"iceshard":1},
		eventPokemon: [
			{"generation":3,"level":44,"moves":["hydropump","raindance","blizzard","healbell"]}
		],
		tier: "Limbo"
	},
	ditto: {
		viableMoves: {"transform":1},
		tier: "Limbo A"
	},
	eevee: {
		viableMoves: {"quickattack":1,"return":1,"bite":1,"batonpass":1,"irontail":1,"yawn":1,"protect":1,"wish":1},
		eventPokemon: [
			{"generation":4,"level":10,"gender":"F","nature":"Lonely","abilities":["adaptability"],"moves":["covet","bite","helpinghand","attract"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"shiny":true,"gender":"M","nature":"Hardy","abilities":["adaptability"],"moves":["irontail","trumpcard","flail","quickattack"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"F","nature":"Hardy","isHidden":false,"abilities":["adaptability"],"moves":["sing","return","echoedvoice","attract"],"pokeball":"cherishball"},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","sandattack","babydolleyes","swift"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	vaporeon: {
		viableMoves: {"wish":1,"protect":1,"scald":1,"roar":1,"icebeam":1,"toxic":1,"hydropump":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","watergun"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	jolteon: {
		viableMoves: {"thunderbolt":1,"voltswitch":1,"hiddenpowergrass":1,"hiddenpowerice":1,"chargebeam":1,"batonpass":1,"substitute":1,"signalbeam":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","thundershock"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	flareon: {
		viableMoves: {"flamecharge":1,"facade":1,"flareblitz":1,"superpower":1,"wish":1,"protect":1,"lavaplume":1,"toxic":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","ember"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	espeon: {
		viableMoves: {"psychic":1,"psyshock":1,"substitute":1,"wish":1,"shadowball":1,"hiddenpowerfighting":1,"calmmind":1,"morningsun":1,"storedpower":1,"batonpass":1,"dazzlinggleam":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["psybeam","psychup","psychic","morningsun"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","confusion"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	umbreon: {
		viableMoves: {"curse":1,"moonlight":1,"wish":1,"protect":1,"healbell":1,"toxic":1,"batonpass":1,"foulplay":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["feintattack","meanlook","screech","moonlight"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","pursuit"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	leafeon: {
		viableMoves: {"swordsdance":1,"leafblade":1,"substitute":1,"return":1,"xscissor":1,"synthesis":1,"yawn":1,"roar":1,"healbell":1,"batonpass":1,"knockoff":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","razorleaf"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	glaceon: {
		viableMoves: {"icebeam":1,"hiddenpowerground":1,"shadowball":1,"wish":1,"protect":1,"healbell":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","icywind"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	porygon: {
		viableMoves: {"triattack":1,"icebeam":1,"recover":1,"toxic":1,"thunderwave":1,"discharge":1,"trick":1},
		eventPokemon: [
			{"generation":5,"level":10,"isHidden":true,"moves":["tackle","conversion","sharpen","psybeam"]}
		],
		tier: "LC"
	},
	porygon2: {
		viableMoves: {"triattack":1,"icebeam":1,"recover":1,"toxic":1,"thunderwave":1,"discharge":1,"trick":1,"shadowball":1,"trickroom":1},
		tier: "Limbo B"
	},
	porygonz: {
		viableMoves: {"triattack":1,"darkpulse":1,"hiddenpowerfighting":1,"agility":1,"trick":1,"nastyplot":1},
		tier: "Limbo C"
	},
	omanyte: {
		viableMoves: {"shellsmash":1,"surf":1,"icebeam":1,"earthpower":1,"hiddenpowerelectric":1,"spikes":1,"toxicspikes":1,"stealthrock":1,"hydropump":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["swiftswim"],"moves":["bubblebeam","supersonic","withdraw","bite"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	omastar: {
		viableMoves: {"shellsmash":1,"surf":1,"icebeam":1,"earthpower":1,"hiddenpowerelectric":1,"spikes":1,"toxicspikes":1,"stealthrock":1,"hydropump":1},
		tier: "Limbo"
	},
	kabuto: {
		viableMoves: {"aquajet":1,"rockslide":1,"rapidspin":1,"stealthrock":1,"honeclaws":1,"waterfall":1,"toxic":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["battlearmor"],"moves":["confuseray","dig","scratch","harden"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	kabutops: {
		viableMoves: {"aquajet":1,"stoneedge":1,"rapidspin":1,"stealthrock":1,"swordsdance":1,"waterfall":1,"superpower":1},
		tier: "Limbo"
	},
	aerodactyl: {
		viableMoves: {"stealthrock":1,"taunt":1,"stoneedge":1,"rockslide":1,"earthquake":1,"aquatail":1,"roost":1,"firefang":1,"defog":1,"icefang":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["pressure"],"moves":["steelwing","icefang","firefang","thunderfang"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	aerodactylmega: {
		requiredItem: "Aerodactylite"
	},
	munchlax: {
		viableMoves: {"rest":1,"curse":1,"sleeptalk":1,"bodyslam":1,"earthquake":1,"return":1,"firepunch":1,"icepunch":1,"whirlwind":1,"toxic":1},
		tier: "Limbo"
	},
	snorlax: {
		viableMoves: {"rest":1,"curse":1,"sleeptalk":1,"bodyslam":1,"earthquake":1,"return":1,"firepunch":1,"icepunch":1,"crunch":1,"selfdestruct":1,"pursuit":1,"whirlwind":1},
		eventPokemon: [
			{"generation":3,"level":43,"moves":["refresh","fissure","curse","bodyslam"]}
		],
		tier: "Limbo B"
	},
	articuno: {
		viableMoves: {"icebeam":1,"roost":1,"roar":1,"healbell":1,"toxic":1,"substitute":1,"hurricane":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","mindreader","icebeam","reflect"]},
			{"generation":3,"level":50,"moves":["icebeam","healbell","extrasensory","haze"]}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	zapdos: {
		viableMoves: {"thunderbolt":1,"heatwave":1,"hiddenpowergrass":1,"hiddenpowerice":1,"roost":1,"toxic":1,"substitute":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","detect","drillpeck","charge"]},
			{"generation":3,"level":50,"moves":["thunderbolt","extrasensory","batonpass","metalsound"]}
		],
		unreleasedHidden: true,
		tier: "OU"
	},
	moltres: {
		viableMoves: {"fireblast":1,"hiddenpowergrass":1,"airslash":1,"roost":1,"substitute":1,"toxic":1,"uturn":1,"willowisp":1,"hurricane":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","endure","flamethrower","safeguard"]},
			{"generation":3,"level":50,"moves":["extrasensory","morningsun","willowisp","flamethrower"]}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	dratini: {
		viableMoves: {"dragondance":1,"outrage":1,"waterfall":1,"fireblast":1,"extremespeed":1,"dracometeor":1,"substitute":1,"aquatail":1},
		tier: "LC"
	},
	dragonair: {
		viableMoves: {"dragondance":1,"outrage":1,"waterfall":1,"fireblast":1,"extremespeed":1,"dracometeor":1,"substitute":1,"aquatail":1},
		tier: "Limbo"
	},
	dragonite: {
		viableMoves: {"dragondance":1,"outrage":1,"firepunch":1,"extremespeed":1,"dragonclaw":1,"earthquake":1,"roost":1,"waterfall":1,"substitute":1,"thunderwave":1,"dragontail":1,"hurricane":1,"superpower":1,"dracometeor":1},
		viableDoublesMoves: {"firepunch":1,"extremespeed":1,"dragonclaw":1,"earthquake":1,"roost":1,"waterfall":1,"substitute":1,"thunderwave":1,"hurricane":1,"superpower":1,"dracometeor":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","safeguard","wingattack","outrage"]},
			{"generation":3,"level":55,"moves":["healbell","hyperbeam","dragondance","earthquake"]},
			{"generation":4,"level":50,"gender":"M","nature":"Mild","moves":["dracometeor","thunderbolt","outrage","dragondance"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"gender":"M","isHidden":true,"moves":["extremespeed","firepunch","dragondance","outrage"],"pokeball":"cherishball"},
			{"generation":5,"level":55,"gender":"M","isHidden":true,"moves":["dragonrush","safeguard","wingattack","thunderpunch"]},
			{"generation":5,"level":55,"gender":"M","isHidden":true,"moves":["dragonrush","safeguard","wingattack","extremespeed"]},
			{"generation":5,"level":50,"gender":"M","nature":"Brave","isHidden":false,"abilities":["innerfocus"],"moves":["fireblast","safeguard","outrage","hyperbeam"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	mewtwo: {
		viableMoves: {"psystrike":1,"aurasphere":1,"fireblast":1,"icebeam":1,"calmmind":1,"substitute":1,"recover":1,"thunderbolt":1,"willowisp":1},
		eventPokemon: [
			{"generation":5,"level":70,"isHidden":false,"moves":["psystrike","shadowball","aurasphere","electroball"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"nature":"Timid","isHidden":true,"moves":["psystrike","icebeam","healpulse","hurricane"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	mewtwomegax: {
		requiredItem: "Mewtwonite X"
	},
	mewtwomegay: {
		requiredItem: "Mewtwonite Y"
	},
	mew: {
		viableMoves: {"taunt":1,"willowisp":1,"roost":1,"psychic":1,"nastyplot":1,"aurasphere":1,"fireblast":1,"swordsdance":1,"drainpunch":1,"zenheadbutt":1,"batonpass":1,"substitute":1,"toxic":1,"icebeam":1,"thunderbolt":1,"earthquake":1,"stealthrock":1,"suckerpunch":1,"defog":1},
		viableDoublesMoves: {"taunt":1,"willowisp":1,"transform":1,"roost":1,"psyshock":1,"nastyplot":1,"aurasphere":1,"fireblast":1,"swordsdance":1,"drainpunch":1,"zenheadbutt":1,"icebeam":1,"thunderbolt":1,"earthquake":1,"suckerpunch":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["pound","transform","megapunch","metronome"]},
			{"generation":3,"level":10,"moves":["pound","transform"]},
			{"generation":4,"level":50,"moves":["ancientpower","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["barrier","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["megapunch","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["amnesia","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["transform","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychic","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["synthesis","return","hypnosis","teleport"],"pokeball":"cherishball"},
			{"generation":4,"level":5,"moves":["pound"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	chikorita: {
		viableMoves: {"reflect":1,"lightscreen":1,"aromatherapy":1,"grasswhistle":1,"leechseed":1,"toxic":1,"gigadrain":1,"synthesis":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","razorleaf"]}
		],
		tier: "LC"
	},
	bayleef: {
		viableMoves: {"reflect":1,"lightscreen":1,"aromatherapy":1,"grasswhistle":1,"leechseed":1,"toxic":1,"gigadrain":1,"synthesis":1},
		tier: "NFE"
	},
	meganium: {
		viableMoves: {"reflect":1,"lightscreen":1,"aromatherapy":1,"grasswhistle":1,"leechseed":1,"toxic":1,"gigadrain":1,"synthesis":1,"dragontail":1},
		tier: "Limbo"
	},
	cyndaquil: {
		viableMoves: {"eruption":1,"fireblast":1,"flamethrower":1,"hiddenpowergrass":1,"hiddenpowerice":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","leer","smokescreen"]}
		],
		tier: "LC"
	},
	quilava: {
		viableMoves: {"eruption":1,"fireblast":1,"flamethrower":1,"hiddenpowergrass":1,"hiddenpowerice":1},
		tier: "NFE"
	},
	typhlosion: {
		viableMoves: {"eruption":1,"fireblast":1,"flamethrower":1,"hiddenpowergrass":1,"hiddenpowerice":1,"focusblast":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["quickattack","flamewheel","swift","flamethrower"]}
		],
		tier: "Limbo"
	},
	totodile: {
		viableMoves: {"aquajet":1,"waterfall":1,"crunch":1,"icepunch":1,"superpower":1,"dragondance":1,"swordsdance":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","leer","rage"]}
		],
		tier: "LC"
	},
	croconaw: {
		viableMoves: {"aquajet":1,"waterfall":1,"crunch":1,"icepunch":1,"superpower":1,"dragondance":1,"swordsdance":1},
		tier: "NFE"
	},
	feraligatr: {
		viableMoves: {"aquajet":1,"waterfall":1,"crunch":1,"icepunch":1,"dragondance":1,"swordsdance":1,"earthquake":1,"superpower":1},
		tier: "Limbo"
	},
	sentret: {
		viableMoves: {"superfang":1,"trick":1,"toxic":1,"uturn":1,"knockoff":1},
		tier: "LC"
	},
	furret: {
		viableMoves: {"return":1,"uturn":1,"suckerpunch":1,"trick":1,"icepunch":1,"firepunch":1,"thunderpunch":1,"knockoff":1,"doubleedge":1},
		tier: "Limbo"
	},
	hoothoot: {
		viableMoves: {"reflect":1,"toxic":1,"roost":1,"whirlwind":1,"nightshade":1,"magiccoat":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","foresight"]}
		],
		tier: "LC"
	},
	noctowl: {
		viableMoves: {"roost":1,"whirlwind":1,"airslash":1,"nightshade":1,"toxic":1,"reflect":1,"magiccoat":1},
		tier: "Limbo"
	},
	ledyba: {
		viableMoves: {"roost":1,"agility":1,"lightscreen":1,"encore":1,"reflect":1,"knockoff":1,"swordsdance":1,"batonpass":1,"toxic":1},
		eventPokemon: [
			{"generation":3,"level":10,"moves":["refresh","psybeam","aerialace","supersonic"]}
		],
		tier: "LC"
	},
	ledian: {
		viableMoves: {"roost":1,"bugbuzz":1,"lightscreen":1,"encore":1,"reflect":1,"knockoff":1,"toxic":1,"batonpass":1},
		tier: "Limbo"
	},
	spinarak: {
		viableMoves: {"agility":1,"toxic":1,"xscissor":1,"toxicspikes":1,"poisonjab":1,"batonpass":1,"stickyweb":1},
		eventPokemon: [
			{"generation":3,"level":14,"moves":["refresh","dig","signalbeam","nightshade"]}
		],
		tier: "LC"
	},
	ariados: {
		viableMoves: {"agility":1,"toxic":1,"xscissor":1,"toxicspikes":1,"poisonjab":1,"batonpass":1,"stickyweb":1},
		tier: "Limbo"
	},
	chinchou: {
		viableMoves: {"voltswitch":1,"thunderbolt":1,"hiddenpowergrass":1,"hydropump":1,"icebeam":1,"surf":1,"thunderwave":1,"scald":1,"discharge":1,"healbell":1},
		tier: "LC"
	},
	lanturn: {
		viableMoves: {"voltswitch":1,"thunderbolt":1,"hiddenpowergrass":1,"hydropump":1,"icebeam":1,"surf":1,"thunderwave":1,"scald":1,"discharge":1,"healbell":1},
		tier: "Limbo"
	},
	togepi: {
		viableMoves: {"protect":1,"fireblast":1,"toxic":1,"thunderwave":1,"softboiled":1,"dazzlinggleam":1},
		eventPokemon: [
			{"generation":3,"level":20,"gender":"F","abilities":["serenegrace"],"moves":["metronome","charm","sweetkiss","yawn"]},
			{"generation":3,"level":25,"moves":["triattack","followme","ancientpower","helpinghand"]}
		],
		tier: "LC"
	},
	togetic: {
		viableMoves: {"nastyplot":1,"dazzlinggleam":1,"fireblast":1,"batonpass":1,"roost":1,"encore":1,"healbell":1,"thunderwave":1},
		tier: "Limbo"
	},
	togekiss: {
		viableMoves: {"wish":1,"roost":1,"thunderwave":1,"nastyplot":1,"airslash":1,"aurasphere":1,"batonpass":1,"dazzlinggleam":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["extremespeed","aurasphere","airslash","present"]}
		],
		tier: "OU"
	},
	natu: {
		viableMoves: {"thunderwave":1,"roost":1,"toxic":1,"reflect":1,"lightscreen":1,"uturn":1,"wish":1,"psychic":1,"nightshade":1},
		eventPokemon: [
			{"generation":3,"level":22,"moves":["batonpass","futuresight","nightshade","aerialace"]}
		],
		tier: "Limbo"
	},
	xatu: {
		viableMoves: {"thunderwave":1,"toxic":1,"roost":1,"psychic":1,"nightshade":1,"uturn":1,"reflect":1,"lightscreen":1,"wish":1,"calmmind":1},
		tier: "Limbo C"
	},
	mareep: {
		viableMoves: {"reflect":1,"lightscreen":1,"thunderbolt":1,"discharge":1,"thunderwave":1,"toxic":1,"hiddenpowerice":1,"cottonguard":1,"powergem":1},
		eventPokemon: [
			{"generation":3,"level":37,"gender":"F","moves":["thunder","thundershock","thunderwave","cottonspore"]},
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","thundershock"]},
			{"generation":3,"level":17,"moves":["healbell","thundershock","thunderwave","bodyslam"]}
		],
		tier: "LC"
	},
	flaaffy: {
		viableMoves: {"reflect":1,"lightscreen":1,"thunderbolt":1,"discharge":1,"thunderwave":1,"toxic":1,"hiddenpowerice":1,"cottonguard":1,"powergem":1},
		tier: "NFE"
	},
	ampharos: {
		viableMoves: {"voltswitch":1,"focusblast":1,"hiddenpowerice":1,"hiddenpowergrass":1,"thunderbolt":1,"healbell":1,"dragonpulse":1,"powergem":1},
		tier: "Limbo B"
	},
	ampharosmega: {
		requiredItem: "Ampharosite"
	},	
	azurill: {
		viableMoves: {"scald":1,"return":1,"bodyslam":1,"encore":1,"toxic":1,"protect":1,"knockoff":1},
		tier: "LC"
	},
	marill: {
		viableMoves: {"waterfall":1,"knockoff":1,"encore":1,"toxic":1,"aquajet":1,"superpower":1,"icepunch":1,"protect":1,"play rough":1,"poweruppunch":1},
		tier: "NFE"
	},
	azumarill: {
		viableMoves: {"waterfall":1,"aquajet":1,"playrough":1,"icepunch":1,"superpower":1,"poweruppunch":1,"knockoff":1},
		tier: "OU"
	},
	bonsly: {
		viableMoves: {"rockslide":1,"brickbreak":1,"doubleedge":1,"toxic":1,"stealthrock":1,"suckerpunch":1,"explosion":1},
		tier: "LC"
	},
	sudowoodo: {
		viableMoves: {"hammerarm":1,"stoneedge":1,"earthquake":1,"suckerpunch":1,"woodhammer":1,"explosion":1,"stealthrock":1},
		tier: "Limbo"
	},
	hoppip: {
		viableMoves: {"encore":1,"sleeppowder":1,"uturn":1,"toxic":1,"leechseed":1,"substitute":1,"protect":1},
		tier: "LC"
	},
	skiploom: {
		viableMoves: {"encore":1,"sleeppowder":1,"uturn":1,"toxic":1,"leechseed":1,"substitute":1,"protect":1},
		tier: "NFE"
	},
	jumpluff: {
		viableMoves: {"encore":1,"sleeppowder":1,"uturn":1,"toxic":1,"leechseed":1,"substitute":1,"gigadrain":1,"synthesis":1},
		eventPokemon: [
			{"generation":5,"level":27,"gender":"M","isHidden":true,"moves":["falseswipe","sleeppowder","bulletseed","leechseed"]}
		],
		tier: "Limbo"
	},
	aipom: {
		viableMoves: {"fakeout":1,"return":1,"brickbreak":1,"seedbomb":1,"knockoff":1,"uturn":1,"icepunch":1,"irontail":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","tailwhip","sandattack"]}
		],
		tier: "LC"
	},
	ambipom: {
		viableMoves: {"fakeout":1,"return":1,"knockoff":1,"uturn":1,"poweruppunch":1,"switcheroo":1,"seedbomb":1,"icepunch":1},
		tier: "Limbo C"
	},
	sunkern: {
		viableMoves: {"sunnyday":1,"gigadrain":1,"solarbeam":1,"hiddenpowerfire":1,"toxic":1,"earthpower":1,"leechseed":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["chlorophyll"],"moves":["absorb","growth"]}
		],
		tier: "LC"
	},
	sunflora: {
		viableMoves: {"sunnyday":1,"leafstorm":1,"gigadrain":1,"solarbeam":1,"hiddenpowerfire":1,"earthpower":1,"leechseed":1},
		tier: "Limbo"
	},
	yanma: {
		viableMoves: {"bugbuzz":1,"airslash":1,"hiddenpowerground":1,"uturn":1,"protect":1,"gigadrain":1,"ancientpower":1},
		tier: "NFE"
	},
	yanmega: {
		viableMoves: {"bugbuzz":1,"airslash":1,"hiddenpowerground":1,"uturn":1,"protect":1,"gigadrain":1,"ancientpower":1},
		tier: "Limbo"
	},
	wooper: {
		viableMoves: {"recover":1,"earthquake":1,"scald":1,"toxic":1,"stockpile":1,"yawn":1,"protect":1},
		tier: "LC"
	},
	quagsire: {
		viableMoves: {"recover":1,"earthquake":1,"waterfall":1,"scald":1,"toxic":1,"curse":1,"stoneedge":1,"stockpile":1,"yawn":1,"icepunch":1,"sludgewave":1},
		tier: "Limbo B"
	},
	murkrow: {
		viableMoves: {"substitute":1,"suckerpunch":1,"bravebird":1,"heatwave":1,"hiddenpowergrass":1,"roost":1,"darkpulse":1,"thunderwave":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["insomnia"],"moves":["peck","astonish"]}
		],
		tier: "Limbo"
	},
	honchkrow: {
		viableMoves: {"substitute":1,"superpower":1,"suckerpunch":1,"bravebird":1,"roost":1,"heatwave":1,"pursuit":1},
		tier: "Limbo C"
	},
	misdreavus: {
		viableMoves: {"nastyplot":1,"substitute":1,"calmmind":1,"willowisp":1,"shadowball":1,"thunderbolt":1,"hiddenpowerfighting":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["growl","psywave","spite"]}
		],
		tier: "Limbo"
	},
	mismagius: {
		viableMoves: {"nastyplot":1,"substitute":1,"calmmind":1,"willowisp":1,"shadowball":1,"thunderbolt":1,"hiddenpowerfighting":1,"healbell":1,"painsplit":1},
		tier: "Limbo"
	},
	unown: {
		viableMoves: {"hiddenpowerpsychic":1},
		tier: "Limbo"
	},
	wynaut: {
		viableMoves: {"destinybond":1,"counter":1,"mirrorcoat":1,"encore":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["splash","charm","encore","tickle"]}
		],
		tier: "LC"
	},
	wobbuffet: {
		viableMoves: {"destinybond":1,"counter":1,"mirrorcoat":1,"encore":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["counter","mirrorcoat","safeguard","destinybond"]},
			{"generation":3,"level":10,"gender":"M","moves":["counter","mirrorcoat","safeguard","destinybond"]},
			{"generation":6,"level":10,"gender":"M","isHidden":false,"moves":["counter"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	girafarig: {
		viableMoves: {"psychic":1,"thunderbolt":1,"calmmind":1,"batonpass":1,"agility":1,"hypervoice":1,"thunderwave":1,"dazzlinggleam":1},
		tier: "Limbo"
	},
	pineco: {
		viableMoves: {"rapidspin":1,"toxicspikes":1,"spikes":1,"bugbite":1,"stealthrock":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","protect","selfdestruct"]},
			{"generation":3,"level":22,"moves":["refresh","pinmissile","spikes","counter"]}
		],
		tier: "LC"
	},
	forretress: {
		viableMoves: {"rapidspin":1,"toxicspikes":1,"spikes":1,"bugbite":1,"earthquake":1,"voltswitch":1,"stealthrock":1,"gyroball":1},
		tier: "Limbo A"
	},
	dunsparce: {
		viableMoves: {"coil":1,"rockslide":1,"bite":1,"headbutt":1,"glare":1,"bodyslam":1,"roost":1},
		tier: "Limbo"
	},
	gligar: {
		viableMoves: {"stealthrock":1,"toxic":1,"roost":1,"taunt":1,"swordsdance":1,"earthquake":1,"uturn":1,"stoneedge":1,"knockoff":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["poisonsting","sandattack"]}
		],
		tier: "Limbo"
	},
	gliscor: {
		viableMoves: {"uturn":1,"roost":1,"substitute":1,"taunt":1,"earthquake":1,"protect":1,"toxic":1,"stealthrock":1,"knockoff":1},
		tier: "OU"
	},
	snubbull: {
		viableMoves: {"thunderwave":1,"firepunch":1,"crunch":1,"closecombat":1,"icepunch":1,"earthquake":1,"playrough":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","scaryface","tailwhip","charm"]}
		],
		tier: "LC"
	},
	granbull: {
		viableMoves: {"thunderwave":1,"playrough":1,"crunch":1,"closecombat":1,"healbell":1,"icepunch":1},
		tier: "Limbo"
	},
	qwilfish: {
		viableMoves: {"toxicspikes":1,"waterfall":1,"spikes":1,"swordsdance":1,"poisonjab":1,"painsplit":1,"thunderwave":1,"taunt":1,"destinybond":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","poisonsting","harden","minimize"]}
		],
		tier: "Limbo"
	},
	shuckle: {
		viableMoves: {"rollout":1,"acupressure":1,"powersplit":1,"rest":1,"stickyweb":1,"infestation":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["sturdy"],"moves":["constrict","withdraw","wrap"]},
			{"generation":3,"level":20,"abilities":["sturdy"],"moves":["substitute","toxic","sludgebomb","encore"]}
		],
		tier: "Limbo C"
	},
	heracross: {
		viableMoves: {"closecombat":1,"megahorn":1,"stoneedge":1,"swordsdance":1,"facade":1,"pinmissile":1,"rockblast":1},
		tier: "Limbo A"
	},
	heracrossmega: {
		requiredItem: "Heracronite"
	},
	sneasel: {
		viableMoves: {"iceshard":1,"icepunch":1,"lowkick":1,"pursuit":1,"swordsdance":1,"knockoff":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","leer","taunt","quickattack"]}
		],
		tier: "Limbo"
	},
	weavile: {
		viableMoves: {"iceshard":1,"icepunch":1,"knockoff":1,"pursuit":1,"swordsdance":1,"lowkick":1},
		eventPokemon: [
			{"generation":4,"level":30,"gender":"M","nature":"Jolly","moves":["fakeout","iceshard","nightslash","brickbreak"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	teddiursa: {
		viableMoves: {"swordsdance":1,"protect":1,"facade":1,"closecombat":1,"firepunch":1,"crunch":1,"playrough":1,"gunkshot":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["pickup"],"moves":["scratch","leer","lick"]},
			{"generation":3,"level":11,"abilities":["pickup"],"moves":["refresh","metalclaw","leer","return"]}
		],
		tier: "LC"
	},
	ursaring: {
		viableMoves: {"swordsdance":1,"protect":1,"facade":1,"closecombat":1,"firepunch":1,"crunch":1,"playrough":1},
		tier: "Limbo"
	},
	slugma: {
		viableMoves: {"stockpile":1,"recover":1,"lavaplume":1,"willowisp":1,"toxic":1,"hiddenpowergrass":1,"earthpower":1,"memento":1},
		tier: "LC"
	},
	magcargo: {
		viableMoves: {"stockpile":1,"recover":1,"lavaplume":1,"willowisp":1,"toxic":1,"hiddenpowergrass":1,"hiddenpowerrock":1,"stealthrock":1,"shellsmash":1,"fireblast":1,"earthpower":1},
		eventPokemon: [
			{"generation":3,"level":38,"moves":["refresh","heatwave","earthquake","flamethrower"]}
		],
		tier: "Limbo"
	},
	swinub: {
		viableMoves: {"earthquake":1,"iciclecrash":1,"iceshard":1,"superpower":1,"endeavor":1,"stealthrock":1},
		eventPokemon: [
			{"generation":3,"level":22,"abilities":["oblivious"],"moves":["charm","ancientpower","mist","mudshot"]}
		],
		tier: "LC"
	},
	piloswine: {
		viableMoves: {"earthquake":1,"iciclecrash":1,"iceshard":1,"superpower":1,"endeavor":1,"stealthrock":1},
		tier: "Limbo"
	},
	mamoswine: {
		viableMoves: {"iceshard":1,"earthquake":1,"endeavor":1,"iciclecrash":1,"stoneedge":1,"superpower":1,"stealthrock":1},
		eventPokemon: [
			{"generation":5,"level":34,"gender":"M","isHidden":true,"moves":["hail","icefang","takedown","doublehit"]}
		],
		tier: "OU"
	},
	corsola: {
		viableMoves: {"recover":1,"toxic":1,"powergem":1,"scald":1,"stealthrock":1,"psychic":1,"earthpower":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["tackle","mudsport"]}
		],
		tier: "Limbo"
	},
	remoraid: {
		viableMoves: {"waterspout":1,"hydropump":1,"fireblast":1,"hiddenpowerground":1,"icebeam":1,"seedbomb":1,"rockblast":1},
		tier: "LC"
	},
	octillery: {
		viableMoves: {"hydropump":1,"fireblast":1,"icebeam":1,"energyball":1,"rockblast":1,"thunderwave":1},
		eventPokemon: [
			{"generation":4,"level":50,"gender":"F","nature":"Serious","abilities":["suctioncups"],"moves":["octazooka","icebeam","signalbeam","hyperbeam"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	delibird: {
		viableMoves: {"rapidspin":1,"iceshard":1,"icepunch":1,"aerialace":1,"spikes":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["present"]}
		],
		tier: "Limbo"
	},
	mantyke: {
		viableMoves: {"raindance":1,"hydropump":1,"scald":1,"airslash":1,"icebeam":1,"rest":1,"sleeptalk":1,"toxic":1},
		tier: "LC"
	},
	mantine: {
		viableMoves: {"raindance":1,"hydropump":1,"surf":1,"airslash":1,"icebeam":1,"rest":1,"sleeptalk":1,"toxic":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","bubble","supersonic"]}
		],
		tier: "Limbo"
	},
	skarmory: {
		viableMoves: {"whirlwind":1,"bravebird":1,"roost":1,"spikes":1,"stealthrock":1,"defog":1},
		tier: "OU"
	},
	houndour: {
		viableMoves: {"pursuit":1,"suckerpunch":1,"fireblast":1,"darkpulse":1,"hiddenpowerfighting":1,"nastyplot":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["leer","ember","howl"]},
			{"generation":3,"level":17,"moves":["charm","feintattack","ember","roar"]}
		],
		tier: "LC"
	},
	houndoom: {
		viableMoves: {"nastyplot":1,"pursuit":1,"darkpulse":1,"suckerpunch":1,"fireblast":1,"hiddenpowerfighting":1},
		tier: "Limbo C"
	},
	houndoommega: {
		requiredItem: "Houndoominite"
	},
	phanpy: {
		viableMoves: {"stealthrock":1,"earthquake":1,"iceshard":1,"headsmash":1,"knockoff":1,"seedbomb":1,"superpower":1,"playrough":1},
		tier: "LC"
	},
	donphan: {
		viableMoves: {"stealthrock":1,"rapidspin":1,"iceshard":1,"earthquake":1,"headsmash":1,"seedbomb":1,"superpower":1,"playrough":1},
		tier: "Limbo A"
	},
	stantler: {
		viableMoves: {"return":1,"megahorn":1,"jumpkick":1,"earthquake":1,"thunderwave":1,"suckerpunch":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["intimidate"],"moves":["tackle","leer"]}
		],
		tier: "Limbo"
	},
	smeargle: {
		viableMoves: {"spore":1,"spikes":1,"stealthrock":1,"uturn":1,"destinybond":1,"whirlwind":1,"stickyweb":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["owntempo"],"moves":["sketch"]},
			{"generation":5,"level":50,"gender":"F","nature":"Jolly","abilities":["technician"],"moves":["falseswipe","spore","odorsleuth","meanlook"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	miltank: {
		viableMoves: {"milkdrink":1,"stealthrock":1,"bodyslam":1,"healbell":1,"curse":1,"earthquake":1,"thunderwave":1,"firepunch":1},
		tier: "Limbo"
	},
	raikou: {
		viableMoves: {"thunderbolt":1,"hiddenpowerice":1,"hiddenpowergrass":1,"aurasphere":1,"calmmind":1,"substitute":1,"voltswitch":1,"extrasensory":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["quickattack","spark","reflect","crunch"]},
			{"generation":4,"level":30,"shiny":true,"nature":"Rash","moves":["zapcannon","aurasphere","extremespeed","weatherball"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	entei: {
		viableMoves: {"extremespeed":1,"flareblitz":1,"ironhead":1,"flamecharge":1,"stoneedge":1,"calmmind":1,"lavaplume":1,"hiddenpowergrass":1,"substitute":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["firespin","stomp","flamethrower","swagger"]},
			{"generation":4,"level":30,"shiny":true,"nature":"Adamant","moves":["flareblitz","howl","extremespeed","crushclaw"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	suicune: {
		viableMoves: {"hydropump":1,"icebeam":1,"scald":1,"hiddenpowergrass":1,"hiddenpowerelectric":1,"rest":1,"sleeptalk":1,"roar":1,"calmmind":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["gust","aurorabeam","mist","mirrorcoat"]},
			{"generation":4,"level":30,"shiny":true,"nature":"Relaxed","moves":["sheercold","airslash","extremespeed","aquaring"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "Limbo C"
	},
	larvitar: {
		viableMoves: {"earthquake":1,"stoneedge":1,"facade":1,"dragondance":1,"superpower":1,"crunch":1},
		eventPokemon: [
			{"generation":3,"level":20,"moves":["sandstorm","dragondance","bite","outrage"]},
			{"generation":5,"level":5,"shiny":true,"gender":"M","isHidden":false,"moves":["bite","leer","sandstorm","superpower"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	pupitar: {
		viableMoves: {"earthquake":1,"stoneedge":1,"crunch":1,"dragondance":1,"superpower":1,"stealthrock":1},
		tier: "NFE"
	},
	tyranitar: {
		viableMoves: {"crunch":1,"stoneedge":1,"pursuit":1,"superpower":1,"fireblast":1,"icebeam":1,"stealthrock":1,"dragondance":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["thrash","scaryface","crunch","earthquake"]},
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["fireblast","icebeam","stoneedge","crunch"],"pokeball":"cherishball"},
			{"generation":5,"level":55,"gender":"M","isHidden":true,"moves":["payback","crunch","earthquake","seismictoss"]}
		],
		tier: "OU"
	},
	tyranitarmega: {
		requiredItem: "Tyranitarite"
	},
	lugia: {
		viableMoves: {"toxic":1,"aeroblast":1,"roost":1,"substitute":1,"whirlwind":1,"icebeam":1,"psychic":1,"calmmind":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["swift","raindance","hydropump","recover"]},
			{"generation":3,"level":70,"moves":["recover","hydropump","raindance","swift"]},
			{"generation":3,"level":50,"moves":["psychoboost","recover","hydropump","featherdance"]}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	hooh: {
		viableMoves: {"substitute":1,"sacredfire":1,"bravebird":1,"earthquake":1,"roost":1,"willowisp":1,"flamecharge":1,"tailwind":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["swift","sunnyday","fireblast","recover"]},
			{"generation":3,"level":70,"moves":["recover","fireblast","sunnyday","swift"]}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	celebi: {
		viableMoves: {"nastyplot":1,"psychic":1,"gigadrain":1,"recover":1,"healbell":1,"batonpass":1,"stealthrock":1,"earthpower":1,"hiddenpowerfire":1,"hiddenpowerice":1,"calmmind":1,"leafstorm":1,"uturn":1,"thunderwave":1},
		eventPokemon: [
			{"generation":3,"level":10,"moves":["confusion","recover","healbell","safeguard"]},
			{"generation":3,"level":70,"moves":["ancientpower","futuresight","batonpass","perishsong"]},
			{"generation":3,"level":10,"moves":["leechseed","recover","healbell","safeguard"]},
			{"generation":3,"level":30,"moves":["healbell","safeguard","ancientpower","futuresight"]},
			{"generation":4,"level":50,"moves":["leafstorm","recover","nastyplot","healingwish"],"pokeball":"cherishball"},
			{"generation":6,"level":10,"moves":["recover","healbell","safeguard","holdback"],"pokeball":"luxuryball"}
		],
		tier: "Limbo A"
	},
	treecko: {
		viableMoves: {"substitute":1,"leechseed":1,"leafstorm":1,"hiddenpowerice":1,"hiddenpowerrock":1,"endeavor":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["pound","leer","absorb"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["pound","leer","absorb"]}
		],
		tier: "LC"
	},
	grovyle: {
		viableMoves: {"substitute":1,"leechseed":1,"gigadrain":1,"leafstorm":1,"hiddenpowerice":1,"hiddenpowerrock":1,"endeavor":1},
		tier: "NFE"
	},
	sceptile: {
		viableMoves: {"substitute":1,"leechseed":1,"gigadrain":1,"leafstorm":1,"hiddenpowerice":1,"focusblast":1,"synthesis":1,"hiddenpowerrock":1,"swordsdance":1,"leafblade":1,"earthquake":1},
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"moves":["leafstorm","dragonpulse","focusblast","rockslide"],"pokeball":"cherishball"}
		],
		tier: "Limbo C"
	},
	torchic: {
		viableMoves: {"protect":1,"batonpass":1,"substitute":1,"hiddenpowergrass":1,"swordsdance":1,"firepledge":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","growl","focusenergy","ember"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["scratch","growl","focusenergy","ember"]},
			{"generation":6,"level":10,"gender":"M","isHidden":true,"moves":["scratch","growl","focusenergy","ember"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	combusken: {
		viableMoves: {"flareblitz":1,"skyuppercut":1,"protect":1,"swordsdance":1,"substitute":1,"batonpass":1,"shadowclaw":1},
		tier: "Limbo"
	},
	blaziken: {
		viableMoves: {"flareblitz":1,"highjumpkick":1,"protect":1,"swordsdance":1,"substitute":1,"batonpass":1,"stoneedge":1},
		eventPokemon: [
			{"generation":3,"level":70,"moves":["blazekick","slash","mirrormove","skyuppercut"]},
			{"generation":5,"level":50,"isHidden":false,"moves":["flareblitz","highjumpkick","thunderpunch","stoneedge"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	blazikenmega: {
		requiredItem: "Blazikenite"
	},
	mudkip: {
		viableMoves: {"hydropump":1,"earthpower":1,"hiddenpowerelectric":1,"icebeam":1,"sludgewave":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","mudslap","watergun"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","growl","mudslap","watergun"]}
		],
		tier: "LC"
	},
	marshtomp: {
		viableMoves: {"waterfall":1,"earthquake":1,"superpower":1,"icepunch":1,"rockslide":1,"stealthrock":1},
		tier: "NFE"
	},
	swampert: {
		viableMoves: {"waterfall":1,"earthquake":1,"icebeam":1,"stealthrock":1,"roar":1,"superpower":1,"yawn":1},
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"moves":["earthquake","icebeam","hydropump","hammerarm"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	poochyena: {
		viableMoves: {"superfang":1,"foulplay":1,"suckerpunch":1,"toxic":1,"crunch":1,"firefang":1,"icefang":1,"poisonfang":1},
		eventPokemon: [
			{"generation":3,"level":10,"abilities":["runaway"],"moves":["healbell","dig","poisonfang","growl"]}
		],
		tier: "LC"
	},
	mightyena: {
		viableMoves: {"suckerpunch":1,"crunch":1,"icefang":1,"firefang":1,"superfang":1,"irontail":1},
		tier: "Limbo"
	},
	zigzagoon: {
		viableMoves: {"trick":1,"thunderwave":1,"icebeam":1,"thunderbolt":1,"gunkshot":1,"lastresort":1},
		eventPokemon: [
			{"generation":3,"level":5,"shiny":true,"abilities":["pickup"],"moves":["tackle","growl","tailwhip"]},
			{"generation":3,"level":5,"abilities":["pickup"],"moves":["tackle","growl","extremespeed"]}
		],
		tier: "LC"
	},
	linoone: {
		viableMoves: {"bellydrum":1,"extremespeed":1,"seedbomb":1,"substitute":1,"shadowclaw":1,"playrough":1},
		tier: "Limbo"
	},
	wurmple: {
		viableMoves: {"bugbite":1,"poisonsting":1,"tackle":1,"electroweb":1},
		tier: "LC"
	},
	silcoon: {
		viableMoves: {"bugbite":1,"poisonsting":1,"tackle":1,"electroweb":1},
		tier: "NFE"
	},
	beautifly: {
		viableMoves: {"quiverdance":1,"bugbuzz":1,"gigadrain":1,"hiddenpowerfighting":1,"hiddenpowerrock":1,"substitute":1,"psychic":1,"stunspore":1},
		tier: "Limbo"
	},
	cascoon: {
		viableMoves: {"bugbite":1,"poisonsting":1,"tackle":1,"electroweb":1},
		tier: "NFE"
	},
	dustox: {
		viableMoves: {"toxic":1,"roost":1,"whirlwind":1,"bugbuzz":1,"protect":1,"sludgebomb":1,"quiverdance":1,"shadowball":1,"energyball":1},
		tier: "Limbo"
	},
	lotad: {
		viableMoves: {"gigadrain":1,"icebeam":1,"scald":1,"naturepower":1,"raindance":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["astonish","growl","absorb"]}
		],
		tier: "LC"
	},
	lombre: {
		viableMoves: {"fakeout":1,"swordsdance":1,"waterfall":1,"seedbomb":1,"icepunch":1,"firepunch":1,"thunderpunch":1,"poweruppunch":1,"gigadrain":1,"icebeam":1},
		tier: "NFE"
	},
	ludicolo: {
		viableMoves: {"raindance":1,"hydropump":1,"surf":1,"scald":1,"gigadrain":1,"icebeam":1,"substitute":1,"leechseed":1},
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"abilities":["swiftswim"],"moves":["fakeout","hydropump","icebeam","gigadrain"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"M","nature":"Calm","isHidden":false,"abilities":["swiftswim"],"moves":["scald","gigadrain","icebeam","sunnyday"]}
		],
		tier: "Limbo"
	},
	seedot: {
		viableMoves: {"defog":1,"naturepower":1,"seedbomb":1,"explosion":1,"foulplay":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["bide","harden","growth"]},
			{"generation":3,"level":17,"moves":["refresh","gigadrain","bulletseed","secretpower"]}
		],
		tier: "LC"
	},
	nuzleaf: {
		viableMoves: {"suckerpunch":1,"naturepower":1,"seedbomb":1,"explosion":1,"swordsdance":1,"rockslide":1,"lowsweep":1},
		tier: "NFE"
	},
	shiftry: {
		viableMoves: {"leafstorm":1,"swordsdance":1,"seedbomb":1,"suckerpunch":1,"defog":1,"xscissor":1,"lowsweep":1,"darkpulse":1},
		tier: "Limbo"
	},
	taillow: {
		viableMoves: {"bravebird":1,"facade":1,"quickattack":1,"uturn":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["peck","growl","focusenergy","featherdance"]}
		],
		tier: "LC"
	},
	swellow: {
		viableMoves: {"bravebird":1,"facade":1,"quickattack":1,"uturn":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":43,"moves":["batonpass","skyattack","agility","facade"]}
		],
		tier: "Limbo"
	},
	wingull: {
		viableMoves: {"scald":1,"icebeam":1,"tailwind":1,"uturn":1,"airslash":1,"knockoff":1,"defog":1},
		tier: "LC"
	},
	pelipper: {
		viableMoves: {"scald":1,"icebeam":1,"tailwind":1,"uturn":1,"airslash":1,"hurricane":1,"toxic":1,"roost":1,"defog":1,"knockoff":1},
		tier: "Limbo"
	},
	ralts: {
		viableMoves: {"trickroom":1,"destinybond":1,"psychic":1,"willowisp":1,"hypnosis":1,"dazzlinggleam":1,"substitute":1,"trick":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["growl","wish"]},
			{"generation":3,"level":5,"moves":["growl","charm"]},
			{"generation":3,"level":20,"moves":["sing","shockwave","reflect","confusion"]}
		],
		tier: "LC"
	},
	kirlia: {
		viableMoves: {"trick":1,"dazzlinggleam":1,"psychic":1,"willowisp":1,"signalbeam":1,"thunderbolt":1,"destinybond":1,"substitute":1},
		tier: "NFE"
	},
	gardevoir: {
		viableMoves: {"psychic":1,"focusblast":1,"shadowball":1,"moonblast":1,"calmmind":1,"willowisp":1,"energyball":1,"thunderbolt":1,"hypervoice":1,"healingwish":1},
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"abilities":["trace"],"moves":["hypnosis","thunderbolt","focusblast","psychic"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	gardevoirmega: {
		requiredItem: "Gardevoirite"
	},
	gallade: {
		viableMoves: {"closecombat":1,"trick":1,"stoneedge":1,"shadowsneak":1,"leafblade":1,"bulkup":1,"drainpunch":1,"icepunch":1,"psychocut":1,"swordsdance":1,"knockoff":1,"thunderwave":1},
		tier: "Limbo C"
	},
	surskit: {
		viableMoves: {"hydropump":1,"signalbeam":1,"hiddenpowerfire":1,"stickyweb":1,"gigadrain":1,"powersplit":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["bubble","mudsport"]},
			{"generation":3,"level":10,"gender":"M","moves":["bubble","quickattack"]}
		],
		tier: "LC"
	},
	masquerain: {
		viableMoves: {"hydropump":1,"bugbuzz":1,"airslash":1,"quiverdance":1,"substitute":1,"batonpass":1,"stickyweb":1,"roost":1},
		tier: "Limbo"
	},
	shroomish: {
		viableMoves: {"spore":1,"substitute":1,"leechseed":1,"gigadrain":1,"protect":1,"toxic":1,"stunspore":1},
		eventPokemon: [
			{"generation":3,"level":15,"abilities":["effectspore"],"moves":["refresh","falseswipe","megadrain","stunspore"]}
		],
		tier: "LC"
	},
	breloom: {
		viableMoves: {"spore":1,"substitute":1,"leechseed":1,"focuspunch":1,"machpunch":1,"bulletseed":1,"stoneedge":1,"swordsdance":1,"drainpunch":1},
		tier: "OU"
	},
	slakoth: {
		viableMoves: {"doubleedge":1,"hammerarm":1,"firepunch":1,"counter":1,"retaliate":1,"toxic":1},
		tier: "LC"
	},
	vigoroth: {
		viableMoves: {"bulkup":1,"return":1,"earthquake":1,"firepunch":1,"suckerpunch":1,"slackoff":1,"icepunch":1,"lowkick":1},
		tier: "Limbo"
	},
	slaking: {
		viableMoves: {"return":1,"earthquake":1,"pursuit":1,"firepunch":1,"nightslash":1,"doubleedge":1,"retaliate":1,"gigaimpact":1,"hammerarm":1},
		eventPokemon: [
			{"generation":4,"level":50,"gender":"M","nature":"Adamant","moves":["gigaimpact","return","shadowclaw","aerialace"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	nincada: {
		viableMoves: {"xscissor":1,"dig":1,"aerialace":1,"nightslash":1},
		tier: "LC"
	},
	ninjask: {
		viableMoves: {"batonpass":1,"swordsdance":1,"substitute":1,"protect":1,"xscissor":1,"aerialace":1},
		tier: "Limbo B"
	},
	shedinja: {
		viableMoves: {"swordsdance":1,"willowisp":1,"xscissor":1,"shadowsneak":1,"suckerpunch":1,"protect":1},
		eventPokemon: [
			{"generation":3,"level":50,"moves":["spite","confuseray","shadowball","grudge"]},
			{"generation":3,"level":20,"moves":["doubleteam","furycutter","screech"]},
			{"generation":3,"level":25,"moves":["swordsdance"]},
			{"generation":3,"level":31,"moves":["slash"]},
			{"generation":3,"level":38,"moves":["agility"]},
			{"generation":3,"level":45,"moves":["batonpass"]},
			{"generation":4,"level":52,"moves":["xscissor"]}
		],
		tier: "Limbo"
	},
	whismur: {
		viableMoves: {"hypervoice":1,"fireblast":1,"shadowball":1,"icebeam":1,"extrasensory":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["pound","uproar","teeterdance"]}
		],
		tier: "LC"
	},
	loudred: {
		viableMoves: {"hypervoice":1,"fireblast":1,"shadowball":1,"icebeam":1,"circlethrow":1,"bodyslam":1},
		tier: "NFE"
	},
	exploud: {
		viableMoves: {"boomburst":1,"overheat":1,"shadowball":1,"icebeam":1,"surf":1,"focusblast":1,"extrasensory":1},
		eventPokemon: [
			{"generation":3,"level":100,"moves":["roar","rest","sleeptalk","hypervoice"]},
			{"generation":3,"level":50,"moves":["stomp","screech","hyperbeam","roar"]}
		],
		tier: "Limbo C"
	},
	makuhita: {
		viableMoves: {"crosschop":1,"bulletpunch":1,"closecombat":1,"icepunch":1,"bulkup":1,"fakeout":1,"earthquake":1},
		eventPokemon: [
			{"generation":3,"level":18,"moves":["refresh","brickbreak","armthrust","rocktomb"]}
		],
		tier: "LC"
	},
	hariyama: {
		viableMoves: {"crosschop":1,"bulletpunch":1,"closecombat":1,"icepunch":1,"stoneedge":1,"bulkup":1,"earthquake":1},
		tier: "Limbo"
	},
	nosepass: {
		viableMoves: {"powergem":1,"thunderwave":1,"stealthrock":1,"painsplit":1,"explosion":1,"voltswitch":1},
		eventPokemon: [
			{"generation":3,"level":26,"moves":["helpinghand","thunderbolt","thunderwave","rockslide"]}
		],
		tier: "LC"
	},
	probopass: {
		viableMoves: {"stealthrock":1,"thunderwave":1,"toxic":1,"earthpower":1,"powergem":1,"voltswitch":1,"painsplit":1},
		tier: "Limbo"
	},
	skitty: {
		viableMoves: {"doubleedge":1,"zenheadbutt":1,"thunderwave":1,"fakeout":1,"playrough":1,"healbell":1},
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["cutecharm"],"moves":["tackle","growl","tailwhip","payday"]},
			{"generation":3,"level":5,"abilities":["cutecharm"],"moves":["growl","tackle","tailwhip","rollout"]},
			{"generation":3,"level":10,"gender":"M","abilities":["cutecharm"],"moves":["growl","tackle","tailwhip","attract"]}
		],
		tier: "LC"
	},
	delcatty: {
		viableMoves: {"return":1,"doubleedge":1,"suckerpunch":1,"playrough":1,"wildcharge":1,"zenheadbutt":1,"fakeout":1,"thunderwave":1,"wish":1,"healbell":1},
		eventPokemon: [
			{"generation":3,"level":18,"abilities":["cutecharm"],"moves":["sweetkiss","secretpower","attract","shockwave"]}
		],
		tier: "Limbo"
	},
	sableye: {
		viableMoves: {"recover":1,"willowisp":1,"taunt":1,"trick":1,"toxic":1,"seismictoss":1,"knockoff":1,"foulplay":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["keeneye"],"moves":["leer","scratch","foresight","nightshade"]},
			{"generation":3,"level":33,"abilities":["keeneye"],"moves":["helpinghand","shadowball","feintattack","recover"]},
			{"generation":5,"level":50,"gender":"M","isHidden":true,"moves":["foulplay","octazooka","tickle","trick"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	mawile: {
		viableMoves: {"swordsdance":1,"ironhead":1,"firefang":1,"substitute":1,"playrough":1,"suckerpunch":1,"knockoff":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["astonish","faketears"]},
			{"generation":3,"level":22,"moves":["sing","falseswipe","vicegrip","irondefense"]}
		],
		tier: "OU"
	},
	mawilemega: {
		requiredItem: "Mawilite"
	},
	aron: {
		viableMoves: {"headsmash":1,"ironhead":1,"earthquake":1,"superpower":1,"stealthrock":1,"endeavor":1},
		tier: "LC"
	},
	lairon: {
		viableMoves: {"headsmash":1,"ironhead":1,"earthquake":1,"superpower":1,"stealthrock":1},
		tier: "Limbo"
	},
	aggron: {
		viableMoves: {"autotomize":1,"headsmash":1,"earthquake":1,"superpower":1,"heavyslam":1,"aquatail":1,"icepunch":1,"stealthrock":1,"thunderwave":1},
		eventPokemon: [
			{"generation":3,"level":100,"moves":["irontail","protect","metalsound","doubleedge"]},
			{"generation":3,"level":50,"moves":["takedown","irontail","protect","metalsound"]}
		],
		tier: "Limbo A"
	},
	aggronmega: {
		requiredItem: "Aggronite"
	},
	meditite: {
		viableMoves: {"highjumpkick":1,"psychocut":1,"icepunch":1,"thunderpunch":1,"trick":1,"fakeout":1,"bulletpunch":1,"drainpunch":1,"zenheadbutt":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["bide","meditate","confusion"]},
			{"generation":3,"level":20,"moves":["dynamicpunch","confusion","shadowball","detect"]}
		],
		tier: "NFE"
	},
	medicham: {
		viableMoves: {"highjumpkick":1,"drainpunch":1,"psychocut":1,"icepunch":1,"thunderpunch":1,"fakeout":1,"bulletpunch":1,"zenheadbutt":1},
		tier: "Limbo A"
	},
	medichammega: {
		requiredItem: "Medichamite"
	},
	electrike: {
		viableMoves: {"voltswitch":1,"thunderbolt":1,"hiddenpowerice":1,"switcheroo":1,"flamethrower":1,"hiddenpowergrass":1},
		tier: "LC"
	},
	manectric: {
		viableMoves: {"voltswitch":1,"thunderbolt":1,"hiddenpowerice":1,"hiddenpowergrass":1,"overheat":1,"flamethrower":1,"signalbeam":1},
		eventPokemon: [
			{"generation":3,"level":44,"moves":["refresh","thunder","raindance","bite"]}
		],
		tier: "Limbo A"
	},
	manectricmega: {
		requiredItem: "Manectite"
	},
	plusle: {
		viableMoves: {"nastyplot":1,"thunderbolt":1,"substitute":1,"batonpass":1,"hiddenpowerice":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["growl","thunderwave","watersport"]},
			{"generation":3,"level":10,"gender":"M","moves":["growl","thunderwave","quickattack"]}
		],
		tier: "Limbo"
	},
	minun: {
		viableMoves: {"nastyplot":1,"thunderbolt":1,"substitute":1,"batonpass":1,"hiddenpowerice":1,"encore":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["growl","thunderwave","mudsport"]},
			{"generation":3,"level":10,"gender":"M","moves":["growl","thunderwave","quickattack"]}
		],
		tier: "Limbo"
	},
	volbeat: {
		viableMoves: {"tailglow":1,"batonpass":1,"substitute":1,"bugbuzz":1,"thunderwave":1,"encore":1,"tailwind":1,"trick":1,"uturn":1},
		tier: "Limbo"
	},
	illumise: {
		viableMoves: {"substitute":1,"batonpass":1,"wish":1,"bugbuzz":1,"encore":1,"thunderbolt":1,"tailwind":1,"uturn":1},
		tier: "Limbo"
	},
	budew: {
		viableMoves: {"spikes":1,"sludgebomb":1,"sleeppowder":1,"gigadrain":1,"stunspore":1,"rest":1},
		tier: "LC"
	},
	roselia: {
		viableMoves: {"spikes":1,"toxicspikes":1,"sleeppowder":1,"gigadrain":1,"stunspore":1,"rest":1,"sludgebomb":1,"synthesis":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["absorb","growth","poisonsting"]},
			{"generation":3,"level":22,"moves":["sweetkiss","magicalleaf","leechseed","grasswhistle"]}
		],
		tier: "Limbo"
	},
	roserade: {
		viableMoves: {"sludgebomb":1,"gigadrain":1,"sleeppowder":1,"leafstorm":1,"spikes":1,"toxicspikes":1,"rest":1,"synthesis":1,"hiddenpowerfire":1,"extrasensory":1},
		tier: "Limbo B"
	},
	gulpin: {
		viableMoves: {"stockpile":1,"sludgebomb":1,"sludgewave":1,"icebeam":1,"toxic":1,"painsplit":1,"yawn":1,"encore":1},
		eventPokemon: [
			{"generation":3,"level":17,"moves":["sing","shockwave","sludge","toxic"]}
		],
		tier: "LC"
	},
	swalot: {
		viableMoves: {"stockpile":1,"sludgebomb":1,"icebeam":1,"toxic":1,"yawn":1,"encore":1,"painsplit":1,"earthquake":1},
		tier: "Limbo"
	},
	carvanha: {
		viableMoves: {"protect":1,"hydropump":1,"surf":1,"icebeam":1,"waterfall":1,"crunch":1,"aquajet":1,"destinybond":1},
		eventPokemon: [
			{"generation":3,"level":15,"moves":["refresh","waterpulse","bite","scaryface"]}
		],
		tier: "NFE"
	},
	sharpedo: {
		viableMoves: {"protect":1,"hydropump":1,"surf":1,"icebeam":1,"crunch":1,"earthquake":1,"waterfall":1,"darkpulse":1,"aquajet":1,"destinybond":1},
		tier: "Limbo"
	},
	wailmer: {
		viableMoves: {"waterspout":1,"surf":1,"hydropump":1,"icebeam":1,"hiddenpowergrass":1,"hiddenpowerelectric":1},
		tier: "LC"
	},
	wailord: {
		viableMoves: {"waterspout":1,"surf":1,"hydropump":1,"icebeam":1,"hiddenpowergrass":1,"hiddenpowerfire":1},
		eventPokemon: [
			{"generation":3,"level":100,"moves":["rest","waterspout","amnesia","hydropump"]},
			{"generation":3,"level":50,"moves":["waterpulse","mist","rest","waterspout"]}
		],
		tier: "Limbo"
	},
	numel: {
		viableMoves: {"curse":1,"earthquake":1,"rockslide":1,"fireblast":1,"flamecharge":1,"rest":1,"sleeptalk":1,"stockpile":1,"hiddenpowerelectric":1,"earthpower":1,"lavaplume":1},
		eventPokemon: [
			{"generation":3,"level":14,"abilities":["oblivious"],"moves":["charm","takedown","dig","ember"]}
		],
		tier: "LC"
	},
	camerupt: {
		viableMoves: {"rockpolish":1,"fireblast":1,"earthpower":1,"stoneedge":1,"lavaplume":1,"stealthrock":1,"earthquake":1,"eruption":1,"hiddenpowergrass":1},
		tier: "Limbo"
	},
	torkoal: {
		viableMoves: {"rapidspin":1,"stealthrock":1,"yawn":1,"lavaplume":1,"earthquake":1,"toxic":1,"willowisp":1,"shellsmash":1,"fireblast":1},
		tier: "Limbo"
	},
	spoink: {
		viableMoves: {"psychic":1,"reflect":1,"lightscreen":1,"thunderwave":1,"trick":1,"healbell":1,"calmmind":1,"hiddenpowerfighting":1,"shadowball":1},
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["owntempo"],"moves":["splash","uproar"]}
		],
		tier: "LC"
	},
	grumpig: {
		viableMoves: {"calmmind":1,"psychic":1,"psyshock":1,"focusblast":1,"shadowball":1,"thunderwave":1,"trick":1,"healbell":1,"whirlwind":1},
		tier: "Limbo"
	},
	spinda: {
		viableMoves: {"doubleedge":1,"wish":1,"protect":1,"return":1,"superpower":1,"suckerpunch":1,"trickroom":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["tackle","uproar","sing"]}
		],
		tier: "Limbo"
	},
	trapinch: {
		viableMoves: {"earthquake":1,"rockslide":1,"crunch":1,"quickattack":1,"superpower":1},
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["bite"]}
		],
		tier: "LC"
	},
	vibrava: {
		viableMoves: {"substitute":1,"earthquake":1,"outrage":1,"roost":1,"uturn":1,"superpower":1,"defog":1},
		tier: "NFE"
	},
	flygon: {
		viableMoves: {"earthquake":1,"outrage":1,"dragonclaw":1,"uturn":1,"roost":1,"substitute":1,"stoneedge":1,"firepunch":1,"superpower":1,"defog":1},
		eventPokemon: [
			{"generation":3,"level":45,"moves":["sandtomb","crunch","dragonbreath","screech"]},
			{"generation":4,"level":50,"gender":"M","nature":"Naive","moves":["dracometeor","uturn","earthquake","dragonclaw"],"pokeball":"cherishball"}
		],
		tier: "Limbo C"
	},
	cacnea: {
		viableMoves: {"swordsdance":1,"spikes":1,"suckerpunch":1,"seedbomb":1,"drainpunch":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["poisonsting","leer","absorb","encore"]}
		],
		tier: "LC"
	},
	cacturne: {
		viableMoves: {"swordsdance":1,"spikes":1,"suckerpunch":1,"seedbomb":1,"drainpunch":1,"substitute":1,"focuspunch":1},
		eventPokemon: [
			{"generation":3,"level":45,"moves":["ingrain","feintattack","spikes","needlearm"]}
		],
		tier: "Limbo"
	},
	swablu: {
		viableMoves: {"roost":1,"toxic":1,"cottonguard":1,"pluck":1,"hypervoice":1,"return":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["peck","growl","falseswipe"]},
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["peck","growl"]}
		],
		tier: "LC"
	},
	altaria: {
		viableMoves: {"dragondance":1,"dracometeor":1,"dragonpulse":1,"outrage":1,"dragonclaw":1,"earthquake":1,"roost":1,"fireblast":1,"healbell":1},
		eventPokemon: [
			{"generation":3,"level":45,"moves":["takedown","dragonbreath","dragondance","refresh"]},
			{"generation":3,"level":36,"moves":["healbell","dragonbreath","solarbeam","aerialace"]},
			{"generation":5,"level":35,"gender":"M","isHidden":true,"moves":["takedown","naturalgift","dragonbreath","falseswipe"]}
		],
		tier: "Limbo"
	},
	zangoose: {
		viableMoves: {"swordsdance":1,"closecombat":1,"nightslash":1,"quickattack":1,"facade":1},
		eventPokemon: [
			{"generation":3,"level":18,"moves":["leer","quickattack","swordsdance","furycutter"]},
			{"generation":3,"level":10,"gender":"M","moves":["scratch","leer","quickattack","swordsdance"]},
			{"generation":3,"level":28,"moves":["refresh","brickbreak","counter","crushclaw"]}
		],
		tier: "Limbo"
	},
	seviper: {
		viableMoves: {"flamethrower":1,"gigadrain":1,"earthquake":1,"suckerpunch":1,"aquatail":1,"coil":1,"glare":1,"poisonjab":1,"sludgewave":1},
		eventPokemon: [
			{"generation":3,"level":18,"moves":["wrap","lick","bite","poisontail"]},
			{"generation":3,"level":30,"moves":["poisontail","screech","glare","crunch"]},
			{"generation":3,"level":10,"gender":"M","moves":["wrap","lick","bite"]}
		],
		tier: "Limbo"
	},
	lunatone: {
		viableMoves: {"psychic":1,"earthpower":1,"stealthrock":1,"rockpolish":1,"batonpass":1,"calmmind":1,"icebeam":1,"hiddenpowerrock":1,"moonlight":1,"trickroom":1,"explosion":1},
		eventPokemon: [
			{"generation":3,"level":10,"moves":["tackle","harden","confusion"]},
			{"generation":3,"level":25,"moves":["batonpass","psychic","raindance","rocktomb"]}
		],
		tier: "Limbo"
	},
	solrock: {
		viableMoves: {"stealthrock":1,"explosion":1,"stoneedge":1,"zenheadbutt":1,"earthquake":1,"batonpass":1,"willowisp":1,"rockpolish":1,"morningsun":1,"trickroom":1},
		eventPokemon: [
			{"generation":3,"level":10,"moves":["tackle","harden","confusion"]},
			{"generation":3,"level":41,"moves":["batonpass","psychic","sunnyday","cosmicpower"]}
		],
		tier: "Limbo"
	},
	barboach: {
		viableMoves: {"dragondance":1,"waterfall":1,"earthquake":1,"return":1,"bounce":1},
		tier: "LC"
	},
	whiscash: {
		viableMoves: {"dragondance":1,"waterfall":1,"earthquake":1,"stoneedge":1,"zenheadbutt":1},
		eventPokemon: [
			{"generation":4,"level":51,"gender":"F","nature":"Gentle","abilities":["oblivious"],"moves":["earthquake","aquatail","zenheadbutt","gigaimpact"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	corphish: {
		viableMoves: {"dragondance":1,"waterfall":1,"crunch":1,"superpower":1,"swordsdance":1,"knockoff":1,"aquajet":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["bubble","watersport"]}
		],
		tier: "LC"
	},
	crawdaunt: {
		viableMoves: {"dragondance":1,"waterfall":1,"crunch":1,"superpower":1,"swordsdance":1,"knockoff":1,"aquajet":1},
		eventPokemon: [
			{"generation":3,"level":100,"moves":["taunt","crabhammer","swordsdance","guillotine"]},
			{"generation":3,"level":50,"moves":["knockoff","taunt","crabhammer","swordsdance"]}
		],
		tier: "BL"
	},
	baltoy: {
		viableMoves: {"stealthrock":1,"earthquake":1,"toxic":1,"psychic":1,"reflect":1,"lightscreen":1,"icebeam":1,"rapidspin":1},
		eventPokemon: [
			{"generation":3,"level":17,"moves":["refresh","rocktomb","mudslap","psybeam"]}
		],
		tier: "LC"
	},
	claydol: {
		viableMoves: {"stealthrock":1,"toxic":1,"psychic":1,"icebeam":1,"earthquake":1,"rapidspin":1,"reflect":1,"lightscreen":1},
		tier: "Limbo"
	},
	lileep: {
		viableMoves: {"stealthrock":1,"recover":1,"ancientpower":1,"hiddenpowerfire":1,"gigadrain":1,"stockpile":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["recover","rockslide","constrict","acid"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	cradily: {
		viableMoves: {"stealthrock":1,"recover":1,"seedbomb":1,"rockslide":1,"earthquake":1,"curse":1,"swordsdance":1},
		tier: "Limbo"
	},
	anorith: {
		viableMoves: {"stealthrock":1,"brickbreak":1,"toxic":1,"xscissor":1,"rockslide":1,"swordsdance":1,"rockpolish":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["harden","mudsport","watergun","crosspoison"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	armaldo: {
		viableMoves: {"stealthrock":1,"stoneedge":1,"toxic":1,"xscissor":1,"swordsdance":1,"earthquake":1,"superpower":1,"rapidspin":1},
		tier: "Limbo"
	},
	feebas: {
		viableMoves: {"protect":1,"confuseray":1,"hypnosis":1,"scald":1,"toxic":1},
		tier: "LC"
	},
	milotic: {
		viableMoves: {"recover":1,"scald":1,"toxic":1,"icebeam":1,"dragontail":1,"rest":1,"sleeptalk":1,"hiddenpowergrass":1,"hypnosis":1},
		eventPokemon: [
			{"generation":3,"level":35,"moves":["waterpulse","twister","recover","raindance"]},
			{"generation":4,"level":50,"gender":"F","nature":"Bold","moves":["recover","raindance","icebeam","hydropump"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"shiny":true,"gender":"M","nature":"Timid","moves":["raindance","recover","hydropump","icywind"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["recover","hydropump","icebeam","mirrorcoat"],"pokeball":"cherishball"},
			{"generation":5,"level":58,"gender":"M","nature":"Lax","isHidden":false,"moves":["recover","surf","icebeam","toxic"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	castform: {
		viableMoves: {"sunnyday":1,"raindance":1,"fireblast":1,"hydropump":1,"thunder":1,"icebeam":1,"solarbeam":1,"weatherball":1},
		tier: "Limbo"
	},
	kecleon: {
		viableMoves: {"foulplay":1,"toxic":1,"stealthrock":1,"recover":1,"return":1,"thunderwave":1,"suckerpunch":1,"poweruppunch":1,"shadowsneak":1},
		tier: "Limbo"
	},
	shuppet: {
		viableMoves: {"trickroom":1,"destinybond":1,"taunt":1,"shadowsneak":1,"suckerpunch":1,"willowisp":1},
		eventPokemon: [
			{"generation":3,"level":45,"abilities":["insomnia"],"moves":["spite","willowisp","feintattack","shadowball"]}
		],
		tier: "LC"
	},
	banette: {
		viableMoves: {"destinybond":1,"taunt":1,"shadowclaw":1,"suckerpunch":1,"willowisp":1,"shadowsneak":1},
		eventPokemon: [
			{"generation":3,"level":37,"abilities":["insomnia"],"moves":["helpinghand","feintattack","shadowball","curse"]},
			{"generation":5,"level":37,"gender":"F","isHidden":true,"moves":["feintattack","hex","shadowball","cottonguard"]}
		],
		tier: "Limbo B"
	},
	banettemega: {
		requiredItem: "Banettite"
	},
	duskull: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"icebeam":1,"painsplit":1,"substitute":1,"nightshade":1},
		eventPokemon: [
			{"generation":3,"level":45,"moves":["pursuit","curse","willowisp","meanlook"]},
			{"generation":3,"level":19,"moves":["helpinghand","shadowball","astonish","confuseray"]}
		],
		tier: "LC"
	},
	dusclops: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"icebeam":1,"painsplit":1,"substitute":1,"seismictoss":1,"toxic":1,"trickroom":1},
		tier: "Limbo C"
	},
	dusknoir: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"icebeam":1,"painsplit":1,"substitute":1,"earthquake":1,"focuspunch":1,"trickroom":1},
		tier: "Limbo"
	},
	tropius: {
		viableMoves: {"leechseed":1,"substitute":1,"airslash":1,"gigadrain":1,"earthquake":1,"hiddenpowerfire":1,"roost":1,"leafstorm":1,"defog":1,"growth":1},
		eventPokemon: [
			{"generation":4,"level":53,"gender":"F","nature":"Jolly","abilities":["chlorophyll"],"moves":["airslash","synthesis","sunnyday","solarbeam"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	chingling: {
		viableMoves: {"hypnosis":1,"reflect":1,"lightscreen":1,"toxic":1,"recover":1,"psychic":1,"signalbeam":1,"healbell":1},
		tier: "LC"
	},
	chimecho: {
		viableMoves: {"hypnosis":1,"toxic":1,"wish":1,"psychic":1,"thunderwave":1,"recover":1,"calmmind":1,"shadowball":1,"hiddenpowerfighting":1,"healingwish":1,"healbell":1,"taunt":1},
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["wrap","growl","astonish"]}
		],
		tier: "Limbo"
	},
	absol: {
		viableMoves: {"swordsdance":1,"suckerpunch":1,"nightslash":1,"fireblast":1,"superpower":1,"pursuit":1,"megahorn":1,"playrough":1},
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["pressure"],"moves":["scratch","leer","wish"]},
			{"generation":3,"level":5,"abilities":["pressure"],"moves":["scratch","leer","spite"]},
			{"generation":3,"level":35,"abilities":["pressure"],"moves":["razorwind","bite","swordsdance","spite"]},
			{"generation":3,"level":70,"abilities":["pressure"],"moves":["doubleteam","slash","futuresight","perishsong"]}
		],
		tier: "Limbo A"
	},
	absolmega: {
		requiredItem: "Absolite"
	},
	snorunt: {
		viableMoves: {"spikes":1,"icebeam":1,"hiddenpowerground":1,"iceshard":1,"crunch":1,"switcheroo":1},
		eventPokemon: [
			{"generation":3,"level":22,"abilities":["innerfocus"],"moves":["sing","waterpulse","bite","icywind"]}
		],
		tier: "LC"
	},
	glalie: {
		viableMoves: {"spikes":1,"icebeam":1,"iceshard":1,"crunch":1,"earthquake":1,"switcheroo":1},
		tier: "Limbo"
	},
	froslass: {
		viableMoves: {"icebeam":1,"spikes":1,"destinybond":1,"shadowball":1,"substitute":1,"taunt":1,"thunderbolt":1,"thunderwave":1,"switcheroo":1},
		tier: "Limbo C"
	},
	spheal: {
		viableMoves: {"substitute":1,"protect":1,"toxic":1,"surf":1,"icebeam":1,"yawn":1,"superfang":1},
		eventPokemon: [
			{"generation":3,"level":17,"abilities":["thickfat"],"moves":["charm","aurorabeam","watergun","mudslap"]}
		],
		tier: "LC"
	},
	sealeo: {
		viableMoves: {"substitute":1,"protect":1,"toxic":1,"surf":1,"icebeam":1,"yawn":1,"superfang":1},
		tier: "NFE"
	},
	walrein: {
		viableMoves: {"substitute":1,"protect":1,"toxic":1,"surf":1,"icebeam":1,"roar":1},
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"abilities":["thickfat"],"moves":["icebeam","surf","hail","sheercold"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	clamperl: {
		viableMoves: {"shellsmash":1,"icebeam":1,"surf":1,"hiddenpowergrass":1,"hiddenpowerelectric":1,"substitute":1},
		tier: "LC"
	},
	huntail: {
		viableMoves: {"shellsmash":1,"return":1,"hydropump":1,"batonpass":1,"suckerpunch":1},
		tier: "Limbo"
	},
	gorebyss: {
		viableMoves: {"shellsmash":1,"batonpass":1,"hydropump":1,"icebeam":1,"hiddenpowergrass":1,"substitute":1},
		tier: "Limbo"
	},
	relicanth: {
		viableMoves: {"headsmash":1,"waterfall":1,"earthquake":1,"doubleedge":1,"stealthrock":1,"toxic":1,"zenheadbutt":1},
		tier: "Limbo"
	},
	luvdisc: {
		viableMoves: {"surf":1,"icebeam":1,"toxic":1,"sweetkiss":1,"protect":1,"bounce":1},
		tier: "Limbo"
	},
	bagon: {
		viableMoves: {"outrage":1,"dragondance":1,"firefang":1,"rockslide":1,"dragonclaw":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["rage","bite","wish"]},
			{"generation":3,"level":5,"moves":["rage","bite","irondefense"]},
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["rage"]}
		],
		tier: "LC"
	},
	shelgon: {
		viableMoves: {"outrage":1,"brickbreak":1,"dragonclaw":1,"dragondance":1,"crunch":1,"zenheadbutt":1},
		tier: "Limbo"
	},
	salamence: {
		viableMoves: {"outrage":1,"fireblast":1,"earthquake":1,"dracometeor":1,"roost":1,"dragondance":1,"dragonclaw":1,"hydropump":1,"stoneedge":1},
		eventPokemon: [
			{"generation":3,"level":50,"moves":["protect","dragonbreath","scaryface","fly"]},
			{"generation":3,"level":50,"moves":["refresh","dragonclaw","dragondance","aerialace"]},
			{"generation":4,"level":50,"gender":"M","nature":"Naughty","moves":["hydropump","stoneedge","fireblast","dragonclaw"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["dragondance","dragonclaw","outrage","aerialace"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	beldum: {
		viableMoves: {"ironhead":1,"zenheadbutt":1,"headbutt":1,"irondefense":1},
		tier: "LC"
	},
	metang: {
		viableMoves: {"stealthrock":1,"meteormash":1,"toxic":1,"earthquake":1,"bulletpunch":1,"zenheadbutt":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["takedown","confusion","metalclaw","refresh"]}
		],
		tier: "Limbo"
	},
	metagross: {
		viableMoves: {"meteormash":1,"earthquake":1,"agility":1,"stealthrock":1,"zenheadbutt":1,"bulletpunch":1,"trick":1,"thunderpunch":1,"explosion":1},
		eventPokemon: [
			{"generation":4,"level":62,"nature":"Brave","moves":["bulletpunch","meteormash","hammerarm","zenheadbutt"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["meteormash","earthquake","bulletpunch","hammerarm"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"isHidden":false,"moves":["bulletpunch","zenheadbutt","hammerarm","icepunch"],"pokeball":"cherishball"},
			{"generation":5,"level":45,"isHidden":false,"moves":["earthquake","zenheadbutt","protect","meteormash"]},
			{"generation":5,"level":45,"isHidden":true,"moves":["irondefense","agility","hammerarm","doubleedge"]},
			{"generation":5,"level":45,"isHidden":true,"moves":["psychic","meteormash","hammerarm","doubleedge"]},
			{"generation":5,"level":58,"nature":"Serious","isHidden":false,"moves":["earthquake","hyperbeam","psychic","meteormash"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	regirock: {
		viableMoves: {"stealthrock":1,"thunderwave":1,"stoneedge":1,"earthquake":1,"curse":1,"rest":1,"sleeptalk":1,"rockslide":1,"toxic":1,"hammerarm":1},
		eventPokemon: [
			{"generation":3,"level":40,"moves":["curse","superpower","ancientpower","hyperbeam"]}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	regice: {
		viableMoves: {"thunderwave":1,"icebeam":1,"thunderbolt":1,"rest":1,"sleeptalk":1,"focusblast":1},
		eventPokemon: [
			{"generation":3,"level":40,"moves":["curse","superpower","ancientpower","hyperbeam"]}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	registeel: {
		viableMoves: {"stealthrock":1,"ironhead":1,"curse":1,"rest":1,"thunderwave":1,"toxic":1,"explosion":1},
		eventPokemon: [
			{"generation":3,"level":40,"moves":["curse","superpower","ancientpower","hyperbeam"]}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	latias: {
		viableMoves: {"dragonpulse":1,"surf":1,"thunderbolt":1,"roost":1,"calmmind":1,"healingwish":1,"defog":1,"psychoshift":1},
		eventPokemon: [
			{"generation":3,"level":50,"gender":"F","moves":["charm","recover","psychic","mistball"]},
			{"generation":3,"level":70,"gender":"F","moves":["mistball","psychic","recover","charm"]},
			{"generation":4,"level":40,"gender":"F","moves":["watersport","refresh","mistball","zenheadbutt"]}
		],
		tier: "OU"
	},
	latiasmega: {
		requiredItem: "Latiasite",
		tier: "Unreleased"
	},
	latios: {
		viableMoves: {"dracometeor":1,"dragonpulse":1,"surf":1,"thunderbolt":1,"psyshock":1,"roost":1,"trick":1},
		eventPokemon: [
			{"generation":3,"level":50,"gender":"M","moves":["dragondance","recover","psychic","lusterpurge"]},
			{"generation":3,"level":70,"gender":"M","moves":["lusterpurge","psychic","recover","dragondance"]},
			{"generation":4,"level":40,"gender":"M","moves":["protect","refresh","lusterpurge","zenheadbutt"]}
		],
		tier: "OU"
	},
	latiosmega: {
		requiredItem: "Latiosite",
		tier: "Unreleased"
	},
	kyogre: {
		viableMoves: {"waterspout":1,"surf":1,"thunder":1,"icebeam":1,"calmmind":1,"rest":1,"sleeptalk":1},
		eventPokemon: [
			{"generation":5,"level":80,"moves":["icebeam","ancientpower","waterspout","thunder"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["waterspout","thunder","icebeam","sheercold"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	groudon: {
		viableMoves: {"earthquake":1,"dragontail":1,"stealthrock":1,"stoneedge":1,"swordsdance":1,"rockpolish":1,"thunderwave":1,"lavaplume":1},
		eventPokemon: [
			{"generation":5,"level":80,"moves":["earthquake","ancientpower","eruption","solarbeam"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["eruption","hammerarm","earthpower","solarbeam"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	rayquaza: {
		viableMoves: {"outrage":1,"vcreate":1,"extremespeed":1,"dragondance":1,"earthquake":1,"dracometeor":1,"dragonclaw":1,"ironhead":1},
		eventPokemon: [
			{"generation":5,"level":70,"shiny":true,"moves":["dragonpulse","ancientpower","outrage","dragondance"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["extremespeed","hyperbeam","dragonpulse","vcreate"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	jirachi: {
		viableMoves: {"bodyslam":1,"ironhead":1,"firepunch":1,"thunderwave":1,"stealthrock":1,"wish":1,"uturn":1,"calmmind":1,"psychic":1,"thunder":1,"icepunch":1,"flashcannon":1},
		eventPokemon: [
			{"generation":3,"level":5,"moves":["wish","confusion","rest"]},
			{"generation":3,"level":30,"moves":["helpinghand","psychic","refresh","rest"]},
			{"generation":4,"level":5,"moves":["wish","confusion","rest"],"pokeball":"cherishball"},
			{"generation":4,"level":5,"moves":["wish","confusion","rest","dracometeor"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["healingwish","psychic","swift","meteormash"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["dracometeor","meteormash","wish","followme"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["wish","healingwish","cosmicpower","meteormash"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["wish","healingwish","swift","return"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	deoxys: {
		viableMoves: {"psychoboost":1,"superpower":1,"extremespeed":1,"icebeam":1,"thunderbolt":1,"firepunch":1,"spikes":1,"stealthrock":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "Uber"
	},
	deoxysattack: {
		viableMoves: {"psychoboost":1,"superpower":1,"extremespeed":1,"icebeam":1,"thunderbolt":1,"firepunch":1,"spikes":1,"stealthrock":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "Uber"
	},
	deoxysdefense: {
		viableMoves: {"spikes":1,"stealthrock":1,"recover":1,"taunt":1,"toxic":1,"seismictoss":1,"magiccoat":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "OU"
	},
	deoxysspeed: {
		viableMoves: {"spikes":1,"stealthrock":1,"superpower":1,"icebeam":1,"psychoboost":1,"taunt":1,"lightscreen":1,"reflect":1,"magiccoat":1,"trick":1,"extremespeed":1},
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "OU"
	},
	turtwig: {
		viableMoves: {"reflect":1,"lightscreen":1,"stealthrock":1,"seedbomb":1,"substitute":1,"leechseed":1,"toxic":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","withdraw","absorb"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","withdraw","absorb","stockpile"]}
		],
		tier: "LC"
	},
	grotle: {
		viableMoves: {"reflect":1,"lightscreen":1,"stealthrock":1,"seedbomb":1,"substitute":1,"leechseed":1,"toxic":1},
		tier: "NFE"
	},
	torterra: {
		viableMoves: {"stealthrock":1,"earthquake":1,"woodhammer":1,"stoneedge":1,"synthesis":1,"leechseed":1,"rockpolish":1},
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["woodhammer","earthquake","outrage","stoneedge"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	chimchar: {
		viableMoves: {"stealthrock":1,"overheat":1,"hiddenpowergrass":1,"fakeout":1,"u-turn":1,"gunkshot":1},
		eventPokemon: [
			{"generation":4,"level":40,"gender":"M","nature":"Mild","moves":["flamethrower","thunderpunch","grassknot","helpinghand"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["scratch","leer","ember","taunt"]},
			{"generation":4,"level":40,"gender":"M","nature":"Hardy","moves":["flamethrower","thunderpunch","grassknot","helpinghand"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","ember","taunt","fakeout"]}
		],
		tier: "LC"
	},
	monferno: {
		viableMoves: {"stealthrock":1,"overheat":1,"hiddenpowergrass":1,"fakeout":1,"vacuumwave":1,"u-turn":1,"gunkshot":1},
		tier: "Limbo"
	},
	infernape: {
		viableMoves: {"stealthrock":1,"fireblast":1,"closecombat":1,"uturn":1,"grassknot":1,"stoneedge":1,"machpunch":1,"swordsdance":1,"nastyplot":1,"flareblitz":1,"hiddenpowerice":1,"thunderpunch":1},
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["fireblast","closecombat","uturn","grassknot"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	piplup: {
		viableMoves: {"stealthrock":1,"hydropump":1,"scald":1,"icebeam":1,"hiddenpowerelectric":1,"hiddenpowerfire":1,"yawn":1,"defog":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["pound","growl","bubble"]},
			{"generation":5,"level":15,"isHidden":false,"moves":["hydropump","featherdance","watersport","peck"],"pokeball":"cherishball"},
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["sing","round","featherdance","peck"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["pound","growl","bubble","featherdance"]}
		],
		tier: "LC"
	},
	prinplup: {
		viableMoves: {"stealthrock":1,"hydropump":1,"scald":1,"icebeam":1,"hiddenpowerelectric":1,"hiddenpowerfire":1,"yawn":1,"defog":1},
		tier: "NFE"
	},
	empoleon: {
		viableMoves: {"stealthrock":1,"hydropump":1,"scald":1,"icebeam":1,"hiddenpowerelectric":1,"hiddenpowerfire":1,"roar":1,"grassknot":1,"flashcannon":1,"signalbeam":1,"defog":1},
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["hydropump","icebeam","aquajet","grassknot"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	starly: {
		viableMoves: {"bravebird":1,"return":1,"uturn":1,"pursuit":1},
		eventPokemon: [
			{"generation":4,"level":1,"gender":"M","nature":"Mild","moves":["tackle","growl"]}
		],
		tier: "LC"
	},
	staravia: {
		viableMoves: {"bravebird":1,"return":1,"uturn":1,"pursuit":1,"defog":1},
		tier: "NFE"
	},
	staraptor: {
		viableMoves: {"bravebird":1,"closecombat":1,"uturn":1,"quickattack":1,"substitute":1,"roost":1,"doubleedge":1},
		tier: "BL"
	},
	bidoof: {
		viableMoves: {"return":1,"aquatail":1,"curse":1,"quickattack":1,"stealthrock":1,"superfang":1},
		eventPokemon: [
			{"generation":4,"level":1,"gender":"M","nature":"Lonely","abilities":["simple"],"moves":["tackle"]}
		],
		tier: "LC"
	},
	bibarel: {
		viableMoves: {"return":1,"waterfall":1,"curse":1,"quickattack":1,"stealthrock":1,"superfang":1},
		tier: "Limbo"
	},
	kricketot: {
		viableMoves: {"endeavor":1,"mudslap":1,"bugbite":1,"strugglebug":1},
		tier: "LC"
	},
	kricketune: {
		viableMoves: {"swordsdance":1,"bugbite":1,"aerialace":1,"brickbreak":1,"toxic":1,"stickyweb":1,"knockoff":1},
		tier: "Limbo"
	},
	shinx: {
		viableMoves: {"wildcharge":1,"icefang":1,"firefang":1,"crunch":1},
		tier: "LC"
	},
	luxio: {
		viableMoves: {"wildcharge":1,"icefang":1,"firefang":1,"crunch":1},
		tier: "NFE"
	},
	luxray: {
		viableMoves: {"wildcharge":1,"icefang":1,"firefang":1,"crunch":1,"superpower":1},
		tier: "Limbo"
	},
	cranidos: {
		viableMoves: {"headsmash":1,"rockslide":1,"earthquake":1,"zenheadbutt":1,"firepunch":1,"rockpolish":1,"crunch":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["pursuit","takedown","crunch","headbutt"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	rampardos: {
		viableMoves: {"headsmash":1,"rockslide":1,"earthquake":1,"zenheadbutt":1,"firepunch":1,"rockpolish":1,"crunch":1},
		tier: "Limbo"
	},
	shieldon: {
		viableMoves: {"stealthrock":1,"metalburst":1,"fireblast":1,"icebeam":1,"protect":1,"toxic":1,"roar":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["metalsound","takedown","bodyslam","protect"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	bastiodon: {
		viableMoves: {"stealthrock":1,"metalburst":1,"fireblast":1,"icebeam":1,"protect":1,"toxic":1,"roar":1},
		tier: "Limbo"
	},
	burmy: {
		viableMoves: {"bugbite":1,"hiddenpowerice":1,"electroweb":1,"protect":1},
		tier: "LC"
	},
	wormadam: {
		viableMoves: {"leafstorm":1,"gigadrain":1,"signalbeam":1,"hiddenpowerice":1,"hiddenpowerrock":1,"toxic":1,"psychic":1,"protect":1},
		tier: "Limbo"
	},
	wormadamsandy: {
		viableMoves: {"earthquake":1,"toxic":1,"rockblast":1,"protect":1,"stealthrock":1,"bulldoze":1},
		tier: "Limbo"
	},
	wormadamtrash: {
		viableMoves: {"stealthrock":1,"toxic":1,"ironhead":1,"protect":1,"swagger":1,"flashcannon":1},
		tier: "Limbo"
	},
	mothim: {
		viableMoves: {"quiverdance":1,"bugbuzz":1,"airslash":1,"gigadrain":1,"roost":1,"shadowball":1,"defog":1},
		tier: "Limbo"
	},
	combee: {
		viableMoves: {"bugbuzz":1,"aircutter":1,"endeavor":1,"ominouswind":1,"tailwind":1},
		tier: "LC"
	},
	vespiquen: {
		viableMoves: {"substitute":1,"roost":1,"toxic":1,"attackorder":1,"protect":1,"defendorder":1},
		tier: "Limbo"
	},
	pachirisu: {
		viableMoves: {"lightscreen":1,"thunderwave":1,"superfang":1,"toxic":1,"voltswitch":1,"u-turn":1},
		tier: "Limbo"
	},
	buizel: {
		viableMoves: {"waterfall":1,"aquajet":1,"switcheroo":1,"brickbreak":1,"bulkup":1,"batonpass":1,"icepunch":1},
		tier: "LC"
	},
	floatzel: {
		viableMoves: {"waterfall":1,"aquajet":1,"switcheroo":1,"brickbreak":1,"bulkup":1,"batonpass":1,"icepunch":1,"crunch":1},
		tier: "Limbo"
	},
	cherubi: {
		viableMoves: {"sunnyday":1,"solarbeam":1,"weatherball":1,"hiddenpowerice":1,"aromatherapy":1,"dazzlinggleam":1},
		tier: "LC"
	},
	cherrim: {
		viableMoves: {"sunnyday":1,"solarbeam":1,"weatherball":1,"hiddenpowerice":1},
		tier: "Limbo"
	},
	shellos: {
		viableMoves: {"scald":1,"clearsmog":1,"recover":1,"toxic":1,"icebeam":1,"stockpile":1},
		tier: "LC"
	},
	gastrodon: {
		viableMoves: {"earthpower":1,"icebeam":1,"scald":1,"toxic":1,"recover":1,"clearsmog":1,"stockpile":1},
		tier: "Limbo A"
	},
	drifloon: {
		viableMoves: {"shadowball":1,"substitute":1,"calmmind":1,"hypnosis":1,"hiddenpowerfighting":1,"thunderbolt":1,"destinybond":1,"willowisp":1,"stockpile":1,"batonpass":1,"disable":1},
		tier: "LC"
	},
	drifblim: {
		viableMoves: {"shadowball":1,"substitute":1,"calmmind":1,"hypnosis":1,"hiddenpowerfighting":1,"thunderbolt":1,"destinybond":1,"willowisp":1,"stockpile":1,"batonpass":1,"disable":1,"explosion":1},
		tier: "Limbo"
	},
	buneary: {
		viableMoves: {"fakeout":1,"return":1,"switcheroo":1,"thunderpunch":1,"jumpkick":1,"firepunch":1,"icepunch":1,"healingwish":1},
		tier: "LC"
	},
	lopunny: {
		viableMoves: {"fakeout":1,"return":1,"switcheroo":1,"thunderpunch":1,"jumpkick":1,"firepunch":1,"icepunch":1,"healingwish":1},
		tier: "Limbo"
	},
	glameow: {
		viableMoves: {"fakeout":1,"uturn":1,"suckerpunch":1,"hypnosis":1,"quickattack":1,"return":1,"foulplay":1},
		tier: "LC"
	},
	purugly: {
		viableMoves: {"fakeout":1,"uturn":1,"suckerpunch":1,"hypnosis":1,"quickattack":1,"return":1},
		tier: "Limbo"
	},
	stunky: {
		viableMoves: {"pursuit":1,"suckerpunch":1,"crunch":1,"fireblast":1,"explosion":1,"taunt":1,"poisonjab":1,"playrough":1,"defog":1},
		tier: "LC"
	},
	skuntank: {
		viableMoves: {"pursuit":1,"suckerpunch":1,"crunch":1,"fireblast":1,"explosion":1,"taunt":1,"poisonjab":1, "playrough":1,"defog":1},
		tier: "Limbo"
	},
	bronzor: {
		viableMoves: {"stealthrock":1,"psychic":1,"toxic":1,"hypnosis":1,"reflect":1,"lightscreen":1,"trickroom":1,"trick":1},
		tier: "LC"
	},
	bronzong: {
		viableMoves: {"stealthrock":1,"psychic":1,"earthquake":1,"toxic":1,"hypnosis":1,"reflect":1,"lightscreen":1,"trickroom":1,"explosion":1,"gyroball":1},
		tier: "Limbo"
	},
	chatot: {
		viableMoves: {"nastyplot":1,"boomburst":1,"heatwave":1,"encore":1,"substitute":1,"chatter":1,"uturn":1},
		eventPokemon: [
			{"generation":4,"level":25,"gender":"M","nature":"Jolly","abilities":["keeneye"],"moves":["mirrormove","furyattack","chatter","taunt"]}
		],
		tier: "Limbo"
	},
	spiritomb: {
		viableMoves: {"shadowsneak":1,"suckerpunch":1,"pursuit":1,"willowisp":1,"calmmind":1,"darkpulse":1,"rest":1,"sleeptalk":1},
		eventPokemon: [
			{"generation":5,"level":61,"gender":"F","nature":"Quiet","isHidden":false,"moves":["darkpulse","psychic","silverwind","embargo"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	gible: {
		viableMoves: {"outrage":1,"dragonclaw":1,"earthquake":1,"fireblast":1,"stoneedge":1,"stealthrock":1},
		tier: "LC"
	},
	gabite: {
		viableMoves: {"outrage":1,"dragonclaw":1,"earthquake":1,"fireblast":1,"stoneedge":1,"stealthrock":1},
		tier: "Limbo"
	},
	garchomp: {
		viableMoves: {"outrage":1,"dragonclaw":1,"earthquake":1,"stoneedge":1,"fireblast":1,"swordsdance":1,"stealthrock":1},
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["outrage","earthquake","swordsdance","stoneedge"],"pokeball":"cherishball"},
			{"generation":5,"level":48,"gender":"M","isHidden":true,"moves":["dragonclaw","dig","crunch","outrage"]},
			{"generation":6,"level":48,"gender":"M","isHidden":false,"moves":["dracometeor","dragonclaw","dig","crunch"],"pokeball":"cherishball"},
			{"generation":6,"level":50,"gender":"M","isHidden":false,"moves":["slash","dragonclaw","dig","crunch"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	garchompmega: {
		requiredItem: "Garchompite"
	},
	riolu: {
		viableMoves: {"crunch":1,"rockslide":1,"copycat":1,"drainpunch":1,"highjumpkick":1,"icepunch":1,"swordsdance":1},
		eventPokemon: [
			{"generation":4,"level":30,"gender":"M","nature":"Serious","abilities":["steadfast"],"moves":["aurasphere","shadowclaw","bulletpunch","drainpunch"]}
		],
		tier: "LC"
	},
	lucario: {
		viableMoves: {"swordsdance":1,"closecombat":1,"crunch":1,"extremespeed":1,"icepunch":1,"bulletpunch":1,"nastyplot":1,"aurasphere":1,"darkpulse":1,"vacuumwave":1,"flashcannon":1},
		eventPokemon: [
			{"generation":4,"level":50,"gender":"M","nature":"Modest","abilities":["steadfast"],"moves":["aurasphere","darkpulse","dragonpulse","waterpulse"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"gender":"M","nature":"Adamant","abilities":["innerfocus"],"moves":["forcepalm","bonerush","sunnyday","blazekick"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["detect","metalclaw","counter","bulletpunch"]},
			{"generation":5,"level":50,"gender":"M","nature":"Naughty","isHidden":true,"moves":["bulletpunch","closecombat","stoneedge","shadowclaw"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	lucariomega: {
		requiredItem: "Lucarionite"
	},
	hippopotas: {
		viableMoves: {"earthquake":1,"slackoff":1,"whirlwind":1,"stealthrock":1,"protect":1,"toxic":1,"stockpile":1},
		tier: "LC"
	},
	hippowdon: {
		viableMoves: {"earthquake":1,"slackoff":1,"whirlwind":1,"stealthrock":1,"protect":1,"toxic":1,"icefang":1,"stoneedge":1,"stockpile":1},
		tier: "Limbo B"
	},
	skorupi: {
		viableMoves: {"toxicspikes":1,"xscissor":1,"poisonjab":1,"knockoff":1,"pinmissile":1,"whirlwind":1},
		tier: "LC"
	},
	drapion: {
		viableMoves: {"crunch":1,"whirlwind":1,"toxicspikes":1,"pursuit":1,"earthquake":1,"aquatail":1,"swordsdance":1,"poisonjab":1,"knockoff":1},
		tier: "Limbo C"
	},
	croagunk: {
		viableMoves: {"fakeout":1,"vacuumwave":1,"suckerpunch":1,"drainpunch":1,"darkpulse":1,"knockoff":1,"gunkshot":1,"toxic":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["astonish","mudslap","poisonsting","taunt"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["mudslap","poisonsting","taunt","poisonjab"]}
		],
		tier: "LC"
	},
	toxicroak: {
		viableMoves: {"fakeout":1,"suckerpunch":1,"drainpunch":1,"bulkup":1,"substitute":1,"swordsdance":1,"knockoff":1,"icepunch":1,"gunkshot":1},
		tier: "Limbo B"
	},
	carnivine: {
		viableMoves: {"swordsdance":1,"powerwhip":1,"return":1,"sleeppowder":1,"substitute":1,"leechseed":1,"knockoff":1,"sludgebomb":1},
		tier: "Limbo"
	},
	finneon: {
		viableMoves: {"surf":1,"uturn":1,"icebeam":1,"hiddenpowerelectric":1,"hiddenpowergrass":1,"raindance":1},
		tier: "LC"
	},
	lumineon: {
		viableMoves: {"surf":1,"uturn":1,"icebeam":1,"hiddenpowerelectric":1,"hiddenpowergrass":1,"raindance":1},
		tier: "Limbo"
	},
	snover: {
		viableMoves: {"blizzard":1,"iceshard":1,"gigadrain":1,"leechseed":1,"substitute":1,"woodhammer":1},
		tier: "LC"
	},
	abomasnow: {
		viableMoves: {"blizzard":1,"iceshard":1,"gigadrain":1,"leechseed":1,"substitute":1,"focusblast":1,"woodhammer":1,"earthquake":1},
		tier: "Limbo C"
	},
	abomasnowmega: {
		requiredItem: "Abomasite"
	},
	rotom: {
		viableMoves: {"thunderbolt":1,"voltswitch":1,"shadowball":1,"substitute":1,"painsplit":1,"hiddenpowerice":1,"hiddenpowerfighting":1,"willowisp":1,"rest":1,"sleeptalk":1,"trick":1},
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	rotomheat: {
		viableMoves: {"overheat":1,"thunderbolt":1,"voltswitch":1,"substitute":1,"painsplit":1,"hiddenpowerice":1,"willowisp":1,"rest":1,"sleeptalk":1,"trick":1},
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	rotomwash: {
		viableMoves: {"hydropump":1,"thunderbolt":1,"voltswitch":1,"substitute":1,"painsplit":1,"hiddenpowerice":1,"willowisp":1,"trick":1,"signalbeam":1},
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	rotomfrost: {
		viableMoves: {"blizzard":1,"thunderbolt":1,"voltswitch":1,"substitute":1,"painsplit":1,"hiddenpowerfighting":1,"willowisp":1,"trick":1},
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	rotomfan: {
		viableMoves: {"airslash":1,"thunderbolt":1,"voltswitch":1,"discharge":1,"substitute":1,"painsplit":1,"hiddenpowerfighting":1,"willowisp":1,"rest":1,"sleeptalk":1,"trick":1,"confuseray":1},
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	rotommow: {
		viableMoves: {"leafstorm":1,"thunderbolt":1,"voltswitch":1,"substitute":1,"painsplit":1,"hiddenpowerfire":1,"willowisp":1,"rest":1,"sleeptalk":1,"trick":1},
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	uxie: {
		viableMoves: {"reflect":1,"lightscreen":1,"uturn":1,"psychic":1,"thunderwave":1,"yawn":1,"healbell":1,"stealthrock":1,"toxic":1,"foulplay":1,"thunderbolt":1},
		tier: "Limbo"
	},
	mesprit: {
		viableMoves: {"calmmind":1,"psychic":1,"thunderbolt":1,"icebeam":1,"substitute":1,"uturn":1,"trick":1,"stealthrock":1},
		tier: "Limbo"
	},
	azelf: {
		viableMoves: {"nastyplot":1,"psychic":1,"fireblast":1,"grassknot":1,"thunderbolt":1,"icepunch":1,"uturn":1,"trick":1,"taunt":1,"stealthrock":1,"explosion":1},
		tier: "Limbo C"
	},
	dialga: {
		viableMoves: {"stealthrock":1,"dracometeor":1,"dragonpulse":1,"roar":1,"dragontail":1,"thunderbolt":1,"outrage":1,"bulkup":1,"fireblast":1,"aurasphere":1,"rest":1,"sleeptalk":1,"dragonclaw":1},
		eventPokemon: [
			{"generation":5,"level":100,"shiny":true,"isHidden":false,"moves":["dragonpulse","dracometeor","aurasphere","roaroftime"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	palkia: {
		viableMoves: {"spacialrend":1,"dracometeor":1,"surf":1,"hydropump":1,"thunderbolt":1,"outrage":1,"fireblast":1},
		eventPokemon: [
			{"generation":5,"level":100,"shiny":true,"isHidden":false,"moves":["hydropump","dracometeor","spacialrend","aurasphere"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	heatran: {
		viableMoves: {"substitute":1,"fireblast":1,"lavaplume":1,"willowisp":1,"stealthrock":1,"earthpower":1,"hiddenpowergrass":1,"hiddenpowerice":1,"protect":1,"toxic":1,"roar":1},
		viableDoublesMoves: {"heatwave":1,"substitute":1,"earthpower":1,"protect":1,"eruption":1,"willowisp":1},
		eventPokemon: [
			{"generation":4,"level":50,"nature":"Quiet","moves":["eruption","magmastorm","earthpower","ancientpower"]}
		],
		unreleasedHidden: true,
		tier: "OU"
	},
	regigigas: {
		viableMoves: {"thunderwave":1,"substitute":1,"return":1,"drainpunch":1,"earthquake":1,"firepunch":1,"toxic":1,"confuseray":1},
		eventPokemon: [
			{"generation":4,"level":100,"moves":["ironhead","rockslide","icywind","crushgrip"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	giratina: {
		viableMoves: {"rest":1,"sleeptalk":1,"dragontail":1,"roar":1,"willowisp":1,"calmmind":1,"dragonpulse":1,"shadowball":1},
		eventPokemon: [
			{"generation":5,"level":100,"shiny":true,"isHidden":false,"moves":["dragonpulse","dragonclaw","aurasphere","shadowforce"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	giratinaorigin: {
		viableMoves: {"dracometeor":1,"shadowsneak":1,"dragontail":1,"hiddenpowerfire":1,"willowisp":1,"calmmind":1,"substitute":1,"dragonpulse":1,"shadowball":1,"aurasphere":1,"outrage":1},
		requiredItem: "Griseous Orb",
		tier: "Uber"
	},
	cresselia: {
		viableMoves: {"moonlight":1,"psychic":1,"icebeam":1,"thunderwave":1,"toxic":1,"lunardance":1,"rest":1,"sleeptalk":1,"calmmind":1,"reflect":1,"lightscreen":1},
		viableDoublesMoves: {"psyshock":1,"icywind":1,"thunderwave":1,"trickroom":1,"moonblast":1,"moonlight":1,"skillswap":1,"reflect":1,"lightscreen":1,"icebeam":1,"protect":1,"helpinghand":1},
		eventPokemon: [
			{"generation":5,"level":68,"gender":"F","nature":"Modest","moves":["icebeam","psyshock","energyball","hiddenpower"]}
		],
		tier: "Limbo C"
	},
	phione: {
		viableMoves: {"raindance":1,"scald":1,"uturn":1,"rest":1,"icebeam":1,"surf":1},
		eventPokemon: [
			{"generation":4,"level":50,"abilities":["hydration"],"moves":["grassknot","raindance","rest","surf"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	manaphy: {
		viableMoves: {"tailglow":1,"surf":1,"icebeam":1,"grassknot":1},
		eventPokemon: [
			{"generation":4,"level":5,"moves":["tailglow","bubble","watersport"]},
			{"generation":4,"level":1,"moves":["tailglow","bubble","watersport"]},
			{"generation":4,"level":50,"moves":["acidarmor","whirlpool","waterpulse","heartswap"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["heartswap","waterpulse","whirlpool","acidarmor"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["heartswap","whirlpool","waterpulse","acidarmor"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"nature":"Impish","moves":["aquaring","waterpulse","watersport","heartswap"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	darkrai: {
		viableMoves: {"darkvoid":1,"darkpulse":1,"focusblast":1,"nastyplot":1,"substitute":1,"trick":1},
		viableDoublesMoves: {"darkpulse":1,"focusblast":1,"nastyplot":1,"substitute":1,"snarl":1,"protect":1},
		eventPokemon: [
			{"generation":4,"level":50,"moves":["roaroftime","spacialrend","nightmare","hypnosis"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["darkvoid","darkpulse","shadowball","doubleteam"]},
			{"generation":4,"level":50,"moves":["nightmare","hypnosis","roaroftime","spacialrend"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["doubleteam","nightmare","feintattack","hypnosis"]},
			{"generation":5,"level":50,"moves":["darkvoid","ominouswind","feintattack","nightmare"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	shaymin: {
		viableMoves: {"seedflare":1,"earthpower":1,"airslash":1,"hiddenpowerfire":1,"rest":1,"substitute":1,"leechseed":1},
		eventPokemon: [
			{"generation":4,"level":50,"moves":["seedflare","aromatherapy","substitute","energyball"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"moves":["synthesis","leechseed","magicalleaf","growth"]},
			{"generation":4,"level":30,"moves":["growth","magicalleaf","leechseed","synthesis"]},
			{"generation":5,"level":50,"moves":["seedflare","leechseed","synthesis","sweetscent"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	shayminsky: {
		viableMoves: {"seedflare":1,"earthpower":1,"airslash":1,"hiddenpowerice":1,"hiddenpowerfire":1,"substitute":1,"leechseed":1},
		eventPokemon: [
			{"generation":4,"level":50,"moves":["seedflare","aromatherapy","substitute","energyball"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"moves":["synthesis","leechseed","magicalleaf","growth"]},
			{"generation":4,"level":30,"moves":["growth","magicalleaf","leechseed","synthesis"]},
			{"generation":5,"level":50,"moves":["seedflare","leechseed","synthesis","sweetscent"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	arceus: {
		viableMoves: {"swordsdance":1,"extremespeed":1,"shadowclaw":1,"earthquake":1,"recover":1},
		eventPokemon: [
			{"generation":4,"level":100,"moves":["judgment","roaroftime","spacialrend","shadowforce"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["recover","hyperbeam","perishsong","judgment"]}
		],
		tier: "Uber"
	},
	arceusbug: {
		viableMoves: {"swordsdance":1,"xscissor":1,"stoneedge":1,"recover":1,"calmmind":1,"judgment":1,"icebeam":1,"fireblast":1},
		requiredItem: "Insect Plate",
		tier: "Uber"
	},
	arceusdark: {
		viableMoves: {"calmmind":1,"judgment":1,"recover":1,"refresh":1},
		requiredItem: "Dread Plate",
		tier: "Uber"
	},
	arceusdragon: {
		viableMoves: {"swordsdance":1,"outrage":1,"extremespeed":1,"earthquake":1,"recover":1},
		requiredItem: "Draco Plate",
		tier: "Uber"
	},
	arceuselectric: {
		viableMoves: {"calmmind":1,"judgment":1,"recover":1,"icebeam":1},
		requiredItem: "Zap Plate",
		tier: "Uber"
	},
	arceusfairy: {
		requiredItem: "Pixie Plate",
		gen: 6,
		tier: "Uber"
	},
	arceusfighting: {
		viableMoves: {"calmmind":1,"judgment":1,"icebeam":1,"darkpulse":1,"recover":1,"toxic":1},
		requiredItem: "Fist Plate",
		tier: "Uber"
	},
	arceusfire: {
		viableMoves: {"calmmind":1,"flamethrower":1,"fireblast":1,"thunderbolt":1,"recover":1},
		requiredItem: "Flame Plate",
		tier: "Uber"
	},
	arceusflying: {
		viableMoves: {"calmmind":1,"judgment":1,"refresh":1,"recover":1},
		requiredItem: "Sky Plate",
		tier: "Uber"
	},
	arceusghost: {
		viableMoves: {"calmmind":1,"judgment":1,"focusblast":1,"flamethrower":1,"recover":1,"swordsdance":1,"shadowclaw":1,"brickbreak":1,"willowisp":1,"roar":1},
		requiredItem: "Spooky Plate",
		tier: "Uber"
	},
	arceusgrass: {
		viableMoves: {"calmmind":1,"icebeam":1,"judgment":1,"earthpower":1,"recover":1,"stealthrock":1,"thunderwave":1},
		requiredItem: "Meadow Plate",
		tier: "Uber"
	},
	arceusground: {
		viableMoves: {"swordsdance":1,"earthquake":1,"stoneedge":1,"recover":1,"calmmind":1,"judgment":1,"icebeam":1,"stealthrock":1},
		requiredItem: "Earth Plate",
		tier: "Uber"
	},
	arceusice: {
		viableMoves: {"calmmind":1,"judgment":1,"icebeam":1,"thunderbolt":1,"focusblast":1,"recover":1},
		requiredItem: "Icicle Plate",
		tier: "Uber"
	},
	arceuspoison: {
		viableMoves: {"calmmind":1,"judgment":1,"sludgebomb":1,"focusblast":1,"fireblast":1,"recover":1,"willowisp":1,"icebeam":1,"stealthrock":1},
		requiredItem: "Toxic Plate",
		tier: "Uber"
	},
	arceuspsychic: {
		viableMoves: {"calmmind":1,"psyshock":1,"focusblast":1,"recover":1,"willowisp":1,"judgment":1},
		requiredItem: "Mind Plate",
		tier: "Uber"
	},
	arceusrock: {
		viableMoves: {"calmmind":1,"judgment":1,"recover":1,"willowisp":1,"swordsdance":1,"stoneedge":1,"earthquake":1,"refresh":1},
		requiredItem: "Stone Plate",
		tier: "Uber"
	},
	arceussteel: {
		viableMoves: {"calmmind":1,"judgment":1,"recover":1,"roar":1,"willowisp":1,"swordsdance":1,"ironhead":1},
		requiredItem: "Iron Plate",
		tier: "Uber"
	},
	arceuswater: {
		viableMoves: {"swordsdance":1,"waterfall":1,"extremespeed":1,"dragonclaw":1,"recover":1,"calmmind":1,"judgment":1,"icebeam":1,"fireblast":1},
		requiredItem: "Splash Plate",
		tier: "Uber"
	},
	victini: {
		viableMoves: {"vcreate":1,"boltstrike":1,"uturn":1,"psychic":1,"focusblast":1,"blueflare":1},
		eventPokemon: [
			{"generation":5,"level":15,"moves":["incinerate","quickattack","endure","confusion"]},
			{"generation":5,"level":50,"moves":["vcreate","fusionflare","fusionbolt","searingshot"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["vcreate","blueflare","boltstrike","glaciate"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	snivy: {
		viableMoves: {"leafstorm":1,"hiddenpowerfire":1,"substitute":1,"leechseed":1,"hiddenpowerice":1,"gigadrain":1},
		eventPokemon: [
			{"generation":5,"level":5,"gender":"M","nature":"Hardy","isHidden":false,"moves":["growth","synthesis","energyball","aromatherapy"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "LC"
	},
	servine: {
		viableMoves: {"leafstorm":1,"hiddenpowerfire":1,"substitute":1,"leechseed":1,"hiddenpowerice":1,"gigadrain":1},
		unreleasedHidden: true,
		tier: "NFE"
	},
	serperior: {
		viableMoves: {"leafstorm":1,"hiddenpowerfire":1,"substitute":1,"leechseed":1,"dragonpulse":1,"gigadrain":1},
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["leafstorm","substitute","gigadrain","leechseed"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	tepig: {
		viableMoves: {"flamecharge":1,"flareblitz":1,"wildcharge":1,"superpower":1,"headsmash":1},
		tier: "LC"
	},
	pignite: {
		viableMoves: {"flamecharge":1,"flareblitz":1,"wildcharge":1,"superpower":1,"headsmash":1},
		tier: "NFE"
	},
	emboar: {
		viableMoves: {"flareblitz":1,"superpower":1,"flamecharge":1,"wildcharge":1,"headsmash":1,"earthquake":1,"fireblast":1},
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["flareblitz","hammerarm","wildcharge","headsmash"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	oshawott: {
		viableMoves: {"swordsdance":1,"waterfall":1,"aquajet":1,"xscissor":1},
		unreleasedHidden: true,
		tier: "LC"
	},
	dewott: {
		viableMoves: {"swordsdance":1,"waterfall":1,"aquajet":1,"xscissor":1},
		unreleasedHidden: true,
		tier: "NFE"
	},
	samurott: {
		viableMoves: {"swordsdance":1,"aquajet":1,"waterfall":1,"megahorn":1,"superpower":1},
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["hydropump","icebeam","megahorn","superpower"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "Limbo"
	},
	patrat: {
		viableMoves: {"swordsdance":1,"batonpass":1,"substitute":1,"hypnosis":1,"return":1,"superfang":1},
		tier: "LC"
	},
	watchog: {
		viableMoves: {"swordsdance":1,"batonpass":1,"substitute":1,"hypnosis":1,"return":1,"superfang":1},
		tier: "Limbo"
	},
	lillipup: {
		viableMoves: {"return":1,"wildcharge":1,"firefang":1,"crunch":1,"icefang":1},
		tier: "LC"
	},
	herdier: {
		viableMoves: {"return":1,"wildcharge":1,"firefang":1,"crunch":1,"icefang":1},
		tier: "NFE"
	},
	stoutland: {
		viableMoves: {"return":1,"wildcharge":1,"superpower":1,"crunch":1,"icefang":1},
		tier: "Limbo"
	},
	purrloin: {
		viableMoves: {"swagger":1,"thunderwave":1,"substitute":1,"foulplay":1},
		tier: "LC"
	},
	liepard: {
		viableMoves: {"swagger":1,"thunderwave":1,"substitute":1,"foulplay":1},
		eventPokemon: [
			{"generation":5,"level":20,"gender":"F","nature":"Jolly","isHidden":true,"moves":["fakeout","foulplay","encore","swagger"]}
		],
		tier: "Limbo C"
	},
	pansage: {
		viableMoves: {"leafstorm":1,"hiddenpowerfire":1,"hiddenpowerice":1,"gigadrain":1,"nastyplot":1,"substitute":1,"leechseed":1},
		eventPokemon: [
			{"generation":5,"level":1,"gender":"M","nature":"Brave","isHidden":false,"moves":["bulletseed","bite","solarbeam","dig"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","lick","vinewhip","leafstorm"]},
			{"generation":5,"level":30,"gender":"M","nature":"Serious","isHidden":false,"moves":["seedbomb","solarbeam","rocktomb","dig"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	simisage: {
		viableMoves: {"nastyplot":1,"leafstorm":1,"hiddenpowerfire":1,"hiddenpowerice":1,"gigadrain":1,"focusblast":1,"substitute":1,"leechseed":1,"synthesis":1},
		tier: "Limbo"
	},
	pansear: {
		viableMoves: {"nastyplot":1,"fireblast":1,"hiddenpowerelectric":1,"hiddenpowerground":1,"sunnyday":1,"solarbeam":1,"overheat":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","lick","incinerate","heatwave"]}
		],
		tier: "LC"
	},
	simisear: {
		viableMoves: {"nastyplot":1,"fireblast":1,"focusblast":1,"grassknot":1,"hiddenpowerground":1,"substitute":1,"flamethrower":1,"overheat":1},
		tier: "Limbo"
	},
	panpour: {
		viableMoves: {"nastyplot":1,"hydropump":1,"hiddenpowergrass":1,"substitute":1,"surf":1,"icebeam":1},
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","lick","watergun","hydropump"]}
		],
		tier: "LC"
	},
	simipour: {
		viableMoves: {"nastyplot":1,"hydropump":1,"icebeam":1,"substitute":1,"grassknot":1,"surf":1},
		tier: "Limbo"
	},
	munna: {
		viableMoves: {"psychic":1,"hiddenpowerfighting":1,"hypnosis":1,"calmmind":1,"moonlight":1,"thunderwave":1,"batonpass":1,"psyshock":1,"healbell":1,"signalbeam":1},
		tier: "LC"
	},
	musharna: {
		viableMoves: {"calmmind":1,"thunderwave":1,"moonlight":1,"psychic":1,"hiddenpowerfighting":1,"batonpass":1,"psyshock":1,"healbell":1,"signalbeam":1},
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":true,"moves":["defensecurl","luckychant","psybeam","hypnosis"]}
		],
		tier: "Limbo"
	},
	pidove: {
		viableMoves: {"pluck":1,"uturn":1,"return":1,"detect":1,"roost":1,"wish":1},
		eventPokemon: [
			{"generation":5,"level":1,"gender":"F","nature":"Hardy","isHidden":false,"abilities":["superluck"],"moves":["gust","quickattack","aircutter"]}
		],
		tier: "LC"
	},
	tranquill: {
		viableMoves: {"pluck":1,"uturn":1,"return":1,"detect":1,"roost":1,"wish":1},
		tier: "NFE"
	},
	unfezant: {
		viableMoves: {"pluck":1,"uturn":1,"return":1,"detect":1,"roost":1,"wish":1},
		tier: "Limbo"
	},
	blitzle: {
		viableMoves: {"voltswitch":1,"hiddenpowergrass":1,"wildcharge":1,"mefirst":1},
		tier: "LC"
	},
	zebstrika: {
		viableMoves: {"voltswitch":1,"hiddenpowergrass":1,"overheat":1,"wildcharge":1},
		tier: "Limbo"
	},
	roggenrola: {
		viableMoves: {"autotomize":1,"stoneedge":1,"stealthrock":1,"rockblast":1,"earthquake":1,"explosion":1},
		tier: "LC"
	},
	boldore: {
		viableMoves: {"autotomize":1,"stoneedge":1,"stealthrock":1,"rockblast":1,"earthquake":1,"explosion":1},
		tier: "NFE"
	},
	gigalith: {
		viableMoves: {"stealthrock":1,"rockblast":1,"earthquake":1,"explosion":1,"stoneedge":1,"autotomize":1,"superpower":1},
		tier: "Limbo"
	},
	woobat: {
		viableMoves: {"calmmind":1,"psychic":1,"airslash":1,"gigadrain":1,"roost":1,"heatwave":1,"storedpower":1},
		tier: "LC"
	},
	swoobat: {
		viableMoves: {"calmmind":1,"psychic":1,"airslash":1,"gigadrain":1,"roost":1,"heatwave":1,"storedpower":1},
		tier: "Limbo"
	},
	drilbur: {
		viableMoves: {"swordsdance":1,"rapidspin":1,"earthquake":1,"rockslide":1,"shadowclaw":1,"return":1,"xscissor":1},
		tier: "LC"
	},
	excadrill: {
		viableMoves: {"swordsdance":1,"rapidspin":1,"earthquake":1,"rockslide":1,"ironhead":1},
		tier: "OU"
	},
	audino: {
		viableMoves: {"wish":1,"protect":1,"healbell":1,"toxic":1,"thunderwave":1,"reflect":1,"lightscreen":1,"return":1},
		eventPokemon: [
			{"generation":5,"level":30,"gender":"F","nature":"Calm","isHidden":false,"abilities":["healer"],"moves":["healpulse","helpinghand","refresh","doubleslap"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"F","nature":"Serious","isHidden":false,"abilities":["healer"],"moves":["healpulse","helpinghand","refresh","present"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	timburr: {
		viableMoves: {"machpunch":1,"bulkup":1,"drainpunch":1,"icepunch":1,"knockoff":1},
		tier: "LC"
	},
	gurdurr: {
		viableMoves: {"bulkup":1,"machpunch":1,"drainpunch":1,"icepunch":1,"knockoff":1},
		tier: "Limbo"
	},
	conkeldurr: {
		viableMoves: {"bulkup":1,"machpunch":1,"drainpunch":1,"icepunch":1,"knockoff":1},
		tier: "OU"
	},
	tympole: {
		viableMoves: {"hydropump":1,"surf":1,"sludgewave":1,"earthpower":1,"hiddenpowerelectric":1},
		tier: "LC"
	},
	palpitoad: {
		viableMoves: {"hydropump":1,"surf":1,"sludgewave":1,"earthpower":1,"hiddenpowerelectric":1,"stealthrock":1},
		tier: "NFE"
	},
	seismitoad: {
		viableMoves: {"hydropump":1,"surf":1,"sludgewave":1,"earthpower":1,"hiddenpowerelectric":1,"stealthrock":1},
		tier: "Limbo"
	},
	throh: {
		viableMoves: {"bulkup":1,"circlethrow":1,"icepunch":1,"stormthrow":1,"rest":1,"sleeptalk":1},
		tier: "Limbo"
	},
	sawk: {
		viableMoves: {"closecombat":1,"earthquake":1,"icepunch":1,"stoneedge":1,"bulkup":1},
		tier: "Limbo"
	},
	sewaddle: {
		viableMoves: {"calmmind":1,"gigadrain":1,"bugbuzz":1,"hiddenpowerfire":1,"hiddenpowerice":1,"airslash":1},
		tier: "LC"
	},
	swadloon: {
		viableMoves: {"calmmind":1,"gigadrain":1,"bugbuzz":1,"hiddenpowerfire":1,"hiddenpowerice":1,"airslash":1,"stickyweb":1},
		tier: "NFE"
	},
	leavanny: {
		viableMoves: {"swordsdance":1,"leafblade":1,"xscissor":1,"batonpass":1,"stickyweb":1,"poisonjab":1},
		tier: "Limbo"
	},
	venipede: {
		viableMoves: {"toxicspikes":1,"steamroller":1,"spikes":1,"poisonjab":1},
		tier: "LC"
	},
	whirlipede: {
		viableMoves: {"toxicspikes":1,"steamroller":1,"spikes":1,"poisonjab":1},
		tier: "Limbo"
	},
	scolipede: {
		viableMoves: {"spikes":1,"toxicspikes":1,"megahorn":1,"rockslide":1,"earthquake":1,"swordsdance":1,"batonpass":1,"aquatail":1,"superpower":1},
		tier: "BL"
	},
	cottonee: {
		viableMoves: {"encore":1,"taunt":1,"substitute":1,"leechseed":1,"toxic":1,"stunspore":1},
		tier: "LC"
	},
	whimsicott: {
		viableMoves: {"encore":1,"taunt":1,"substitute":1,"leechseed":1,"uturn":1,"toxic":1,"stunspore":1,"memento":1,"tailwind":1},
		eventPokemon: [
			{"generation":5,"level":50,"gender":"F","nature":"Timid","isHidden":false,"abilities":["prankster"],"moves":["swagger","gigadrain","beatup","helpinghand"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	petilil: {
		viableMoves: {"sunnyday":1,"sleeppowder":1,"solarbeam":1,"hiddenpowerfire":1,"hiddenpowerice":1,"healingwish":1},
		tier: "LC"
	},
	lilligant: {
		viableMoves: {"quiverdance":1,"gigadrain":1,"sleeppowder":1,"hiddenpowerice":1,"hiddenpowerfire":1,"hiddenpowerrock":1,"petaldance":1},
		tier: "Limbo"
	},
	basculin: {
		viableMoves: {"waterfall":1,"aquajet":1,"superpower":1,"crunch":1,"doubleedge":1},
		tier: "Limbo"
	},
	basculinbluestriped: {
		viableMoves: {"waterfall":1,"aquajet":1,"superpower":1,"crunch":1,"doubleedge":1},
		tier: "Limbo"
	},
	sandile: {
		viableMoves: {"earthquake":1,"stoneedge":1,"pursuit":1,"crunch":1},
		tier: "LC"
	},
	krokorok: {
		viableMoves: {"earthquake":1,"stoneedge":1,"pursuit":1,"crunch":1},
		tier: "NFE"
	},
	krookodile: {
		viableMoves: {"earthquake":1,"stoneedge":1,"pursuit":1,"crunch":1,"bulkup":1,"superpower":1},
		tier: "Limbo C"
	},
	darumaka: {
		viableMoves: {"uturn":1,"flareblitz":1,"firepunch":1,"rockslide":1,"superpower":1},
		tier: "LC"
	},
	darmanitan: {
		viableMoves: {"uturn":1,"flareblitz":1,"firepunch":1,"rockslide":1,"earthquake":1,"superpower":1},
		eventPokemon: [
			{"generation":5,"level":35,"isHidden":true,"moves":["thrash","bellydrum","flareblitz","hammerarm"]}
		],
		tier: "Limbo B"
	},
	maractus: {
		viableMoves: {"spikes":1,"gigadrain":1,"leechseed":1,"hiddenpowerfire":1,"toxic":1,"suckerpunch":1},
		tier: "Limbo"
	},
	dwebble: {
		viableMoves: {"stealthrock":1,"spikes":1,"shellsmash":1,"earthquake":1,"rockblast":1,"xscissor":1,"stoneedge":1},
		tier: "LC"
	},
	crustle: {
		viableMoves: {"stealthrock":1,"spikes":1,"shellsmash":1,"earthquake":1,"rockblast":1,"xscissor":1,"stoneedge":1},
		tier: "Limbo"
	},
	scraggy: {
		viableMoves: {"dragondance":1,"icepunch":1,"highjumpkick":1,"drainpunch":1,"rest":1,"bulkup":1,"crunch":1,"knockoff":1},
		eventPokemon: [
			{"generation":5,"level":1,"gender":"M","nature":"Adamant","isHidden":false,"abilities":["moxie"],"moves":["headbutt","leer","highjumpkick","lowkick"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	scrafty: {
		viableMoves: {"dragondance":1,"icepunch":1,"highjumpkick":1,"drainpunch":1,"rest":1,"bulkup":1,"crunch":1,"knockoff":1},
		viableDoublesMoves: {"fakeout":1,"drainpunch":1,"knockoff":1,"icepunch":1,"stoneedge":1, "detect":1},
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Brave","isHidden":false,"abilities":["moxie"],"moves":["firepunch","payback","drainpunch","substitute"],"pokeball":"cherishball"}
		],
		tier: "Limbo C"
	},
	sigilyph: {
		viableMoves: {"cosmicpower":1,"roost":1,"storedpower":1,"psychoshift":1},
		tier: "Limbo C"
	},
	yamask: {
		viableMoves: {"nastyplot":1,"trickroom":1,"shadowball":1,"hiddenpowerfighting":1,"willowisp":1,"haze":1,"rest":1,"sleeptalk":1,"painsplit":1},
		tier: "LC"
	},
	cofagrigus: {
		viableMoves: {"nastyplot":1,"trickroom":1,"shadowball":1,"hiddenpowerfighting":1,"willowisp":1,"haze":1,"rest":1,"sleeptalk":1,"painsplit":1},
		tier: "Limbo B"
	},
	tirtouga: {
		viableMoves: {"shellsmash":1,"aquajet":1,"waterfall":1,"stoneedge":1,"earthquake":1,"stealthrock":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["sturdy"],"moves":["bite","protect","aquajet","bodyslam"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	carracosta: {
		viableMoves: {"shellsmash":1,"aquajet":1,"waterfall":1,"stoneedge":1,"earthquake":1,"stealthrock":1},
		tier: "Limbo"
	},
	archen: {
		viableMoves: {"stoneedge":1,"rockslide":1,"earthquake":1,"uturn":1,"pluck":1,"headsmash":1},
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","moves":["headsmash","wingattack","doubleteam","scaryface"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	archeops: {
		viableMoves: {"stoneedge":1,"rockslide":1,"earthquake":1,"uturn":1,"pluck":1,"headsmash":1},
		tier: "Limbo"
	},
	trubbish: {
		viableMoves: {"clearsmog":1,"toxicspikes":1,"spikes":1,"gunkshot":1,"painsplit":1,"toxic":1},
		tier: "LC"
	},
	garbodor: {
		viableMoves: {"spikes":1,"toxicspikes":1,"gunkshot":1,"haze":1,"painsplit":1,"toxic":1,"rockblast":1},
		tier: "Limbo"
	},
	zorua: {
		viableMoves: {"suckerpunch":1,"extrasensory":1,"darkpulse":1,"hiddenpowerfighting":1,"uturn":1,"knockoff":1},
		tier: "LC"
	},
	zoroark: {
		viableMoves: {"suckerpunch":1,"darkpulse":1,"focusblast":1,"flamethrower":1,"uturn":1,"nastyplot":1,"knockoff":1},
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Quirky","moves":["agility","embargo","punishment","snarl"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	minccino: {
		viableMoves: {"return":1,"tailslap":1,"wakeupslap":1,"uturn":1,"aquatail":1},
		tier: "LC"
	},
	cinccino: {
		viableMoves: {"return":1,"tailslap":1,"wakeupslap":1,"uturn":1,"aquatail":1,"bulletseed":1,"rockblast":1},
		tier: "Limbo C"
	},
	gothita: {
		viableMoves: {"psychic":1,"thunderbolt":1,"hiddenpowerfighting":1,"shadowball":1,"substitute":1,"calmmind":1,"reflect":1,"lightscreen":1,"trick":1,"grassknot":1,"signalbeam":1},
		tier: "LC"
	},
	gothorita: {
		viableMoves: {"psychic":1,"thunderbolt":1,"hiddenpowerfighting":1,"shadowball":1,"substitute":1,"calmmind":1,"reflect":1,"lightscreen":1,"trick":1,"grassknot":1,"signalbeam":1},
		eventPokemon: [
			{"generation":5,"level":32,"gender":"M","isHidden":true,"moves":["psyshock","flatter","futuresight","mirrorcoat"]},
			{"generation":5,"level":32,"gender":"M","isHidden":true,"moves":["psyshock","flatter","futuresight","imprison"]}
		],
		tier: "NFE"
	},
	gothitelle: {
		viableMoves: {"psychic":1,"thunderbolt":1,"hiddenpowerfighting":1,"shadowball":1,"substitute":1,"calmmind":1,"reflect":1,"lightscreen":1,"trick":1,"psyshock":1,"grassknot":1,"signalbeam":1},
		tier: "BL"
	},
	solosis: {
		viableMoves: {"calmmind":1,"recover":1,"psychic":1,"hiddenpowerfighting":1,"shadowball":1,"trickroom":1,"psyshock":1},
		tier: "LC"
	},
	duosion: {
		viableMoves: {"calmmind":1,"recover":1,"psychic":1,"hiddenpowerfighting":1,"shadowball":1,"trickroom":1,"psyshock":1},
		tier: "NFE"
	},
	reuniclus: {
		viableMoves: {"calmmind":1,"recover":1,"psychic":1,"focusblast":1,"shadowball":1,"trickroom":1,"psyshock":1,"hiddenpowerfire":1},
		tier: "Limbo B"
	},
	ducklett: {
		viableMoves: {"scald":1,"airslash":1,"roost":1,"hurricane":1,"icebeam":1,"hiddenpowergrass":1,"bravebird":1,"defog":1},
		tier: "LC"
	},
	swanna: {
		viableMoves: {"airslash":1,"roost":1,"hurricane":1,"surf":1,"icebeam":1,"raindance":1,"defog":1},
		tier: "Limbo"
	},
	vanillite: {
		viableMoves: {"icebeam":1,"explosion":1,"hiddenpowerelectric":1,"hiddenpowerfighting":1,"autotomize":1},
		tier: "LC"
	},
	vanillish: {
		viableMoves: {"icebeam":1,"explosion":1,"hiddenpowerelectric":1,"hiddenpowerfighting":1,"autotomize":1},
		tier: "NFE"
	},
	vanilluxe: {
		viableMoves: {"icebeam":1,"explosion":1,"hiddenpowerelectric":1,"hiddenpowerfighting":1,"autotomize":1},
		tier: "Limbo"
	},
	deerling: {
		viableMoves: {"agility":1,"batonpass":1,"seedbomb":1,"jumpkick":1,"synthesis":1,"return":1,"thunderwave":1},
		eventPokemon: [
			{"generation":5,"level":30,"gender":"F","isHidden":true,"moves":["feintattack","takedown","jumpkick","aromatherapy"]}
		],
		tier: "LC"
	},
	sawsbuck: {
		viableMoves: {"swordsdance":1,"hornleech":1,"jumpkick":1,"return":1,"substitute":1,"synthesis":1,"batonpass":1},
		tier: "Limbo"
	},
	emolga: {
		viableMoves: {"agility":1,"chargebeam":1,"batonpass":1,"substitute":1,"thunderbolt":1,"airslash":1,"roost":1},
		tier: "Limbo"
	},
	karrablast: {
		viableMoves: {"swordsdance":1,"megahorn":1,"return":1,"substitute":1},
		eventPokemon: [
			{"generation":5,"level":30,"isHidden":false,"moves":["furyattack","headbutt","falseswipe","bugbuzz"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["megahorn","takedown","xscissor","flail"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	escavalier: {
		viableMoves: {"megahorn":1,"pursuit":1,"ironhead":1,"knockoff":1,"swordsdance":1,"drillrun":1},
		tier: "Limbo"
	},
	foongus: {
		viableMoves: {"spore":1,"stunspore":1,"gigadrain":1,"clearsmog":1,"hiddenpowerfire":1,"synthesis":1,"sludgebomb":1},
		tier: "LC"
	},
	amoonguss: {
		viableMoves: {"spore":1,"stunspore":1,"gigadrain":1,"clearsmog":1,"hiddenpowerfire":1,"synthesis":1,"sludgebomb":1},
		tier: "Limbo"
	},
	frillish: {
		viableMoves: {"scald":1,"willowisp":1,"recover":1,"toxic":1,"shadowball":1,"taunt":1},
		tier: "LC"
	},
	jellicent: {
		viableMoves: {"scald":1,"willowisp":1,"recover":1,"toxic":1,"shadowball":1,"icebeam":1,"gigadrain":1,"taunt":1},
		eventPokemon: [
			{"generation":5,"level":40,"isHidden":true,"moves":["waterpulse","ominouswind","brine","raindance"]}
		],
		tier: "Limbo A"
	},
	alomomola: {
		viableMoves: {"wish":1,"protect":1,"waterfall":1,"toxic":1,"scald":1},
		tier: "Limbo"
	},
	joltik: {
		viableMoves: {"thunderbolt":1,"bugbuzz":1,"hiddenpowerice":1,"gigadrain":1,"voltswitch":1,"stickyweb":1},
		tier: "LC"
	},
	galvantula: {
		viableMoves: {"thunder":1,"hiddenpowerice":1,"gigadrain":1,"bugbuzz":1,"voltswitch":1,"stickyweb":1},
		tier: "Limbo A"
	},
	ferroseed: {
		viableMoves: {"spikes":1,"stealthrock":1,"leechseed":1,"seedbomb":1,"protect":1,"thunderwave":1,"gyroball":1},
		tier: "Limbo"
	},
	ferrothorn: {
		viableMoves: {"spikes":1,"stealthrock":1,"leechseed":1,"powerwhip":1,"thunderwave":1,"protect":1},
		tier: "OU"
	},
	klink: {
		viableMoves: {"shiftgear":1,"return":1,"geargrind":1,"wildcharge":1,"substitute":1},
		tier: "LC"
	},
	klang: {
		viableMoves: {"shiftgear":1,"return":1,"geargrind":1,"wildcharge":1,"substitute":1},
		tier: "NFE"
	},
	klinklang: {
		viableMoves: {"shiftgear":1,"return":1,"geargrind":1,"wildcharge":1},
		tier: "Limbo"
	},
	tynamo: {
		viableMoves: {"spark":1,"chargebeam":1,"thunderwave":1,"tackle":1},
		tier: "LC"
	},
	eelektrik: {
		viableMoves: {"uturn":1,"voltswitch":1,"acidspray":1,"wildcharge":1,"thunderbolt":1,"gigadrain":1,"aquatail":1,"coil":1},
		tier: "NFE"
	},
	eelektross: {
		viableMoves: {"thunderbolt":1,"flamethrower":1,"uturn":1,"voltswitch":1,"acidspray":1,"wildcharge":1,"drainpunch":1,"superpower":1,"gigadrain":1,"aquatail":1,"coil":1},
		tier: "Limbo C"
	},
	elgyem: {
		viableMoves: {"nastyplot":1,"psychic":1,"thunderbolt":1,"hiddenpowerfighting":1,"substitute":1,"calmmind":1,"recover":1,"trick":1, "trickroom":1, "signalbeam":1},
		tier: "LC"
	},
	beheeyem: {
		viableMoves: {"nastyplot":1,"psychic":1,"thunderbolt":1,"hiddenpowerfighting":1,"substitute":1,"calmmind":1,"recover":1,"trick":1,"trickroom":1, "signalbeam":1},
		tier: "Limbo"
	},
	litwick: {
		viableMoves: {"calmmind":1,"shadowball":1,"energyball":1,"fireblast":1,"overheat":1,"hiddenpowerfighting":1,"hiddenpowerground":1,"hiddenpowerrock":1,"trick":1,"substitute":1, "painsplit":1},
		tier: "LC"
	},
	lampent: {
		viableMoves: {"calmmind":1,"shadowball":1,"energyball":1,"fireblast":1,"overheat":1,"hiddenpowerfighting":1,"hiddenpowerground":1,"hiddenpowerrock":1,"trick":1,"substitute":1, "painsplit":1},
		tier: "Limbo"
	},
	chandelure: {
		viableMoves: {"shadowball":1,"energyball":1,"fireblast":1,"overheat":1,"hiddenpowerfighting":1,"hiddenpowerground":1,"trick":1,"substitute":1,"painsplit":1},
		eventPokemon: [
			{"generation":5,"level":50,"gender":"F","nature":"Modest","isHidden":false,"abilities":["flashfire"],"moves":["heatwave","shadowball","energyball","psychic"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	axew: {
		viableMoves: {"dragondance":1,"outrage":1,"dragonclaw":1,"swordsdance":1,"aquatail":1,"superpower":1,"poisonjab":1,"taunt":1, "substitute":1},
		eventPokemon: [
			{"generation":5,"level":1,"gender":"M","nature":"Naive","isHidden":false,"abilities":["moldbreaker"],"moves":["scratch","dragonrage"]},
			{"generation":5,"level":10,"gender":"F","isHidden":false,"abilities":["moldbreaker"],"moves":["dragonrage","return","endure","dragonclaw"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"M","nature":"Naive","isHidden":false,"abilities":["rivalry"],"moves":["dragonrage","scratch","outrage","gigaimpact"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	fraxure: {
		viableMoves: {"dragondance":1,"swordsdance":1,"outrage":1,"dragonclaw":1,"aquatail":1,"superpower":1,"poisonjab":1,"taunt":1, "substitute":1},
		tier: "Limbo"
	},
	haxorus: {
		viableMoves: {"dragondance":1,"swordsdance":1,"outrage":1,"dragonclaw":1,"earthquake":1,"lowkick":1,"poisonjab":1,"taunt":1, "substitute":1},
		eventPokemon: [
			{"generation":5,"level":59,"gender":"F","nature":"Naive","isHidden":false,"abilities":["moldbreaker"],"moves":["earthquake","dualchop","xscissor","dragondance"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	cubchoo: {
		viableMoves: {"icebeam":1,"surf":1,"hiddenpowergrass":1,"superpower":1},
		eventPokemon: [
			{"generation":5,"level":15,"isHidden":false,"moves":["powdersnow","growl","bide","icywind"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	beartic: {
		viableMoves: {"iciclecrash":1,"superpower":1,"nightslash":1,"stoneedge":1,"swordsdance":1,"aquajet":1},
		tier: "Limbo"
	},
	cryogonal: {
		viableMoves: {"icebeam":1,"recover":1,"toxic":1,"rapidspin":1,"reflect":1,"freezedry":1,"hiddenpowerfire":1},
		tier: "Limbo"
	},
	shelmet: {
		viableMoves: {"spikes":1,"yawn":1,"substitute":1,"acidarmor":1,"batonpass":1,"recover":1,"toxic":1,"bugbuzz":1,"infestation":1},
		eventPokemon: [
			{"generation":5,"level":30,"isHidden":false,"moves":["strugglebug","megadrain","yawn","protect"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["encore","gigadrain","bodyslam","bugbuzz"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	accelgor: {
		viableMoves: {"spikes":1,"yawn":1,"bugbuzz":1,"focusblast":1,"gigadrain":1,"hiddenpowerrock":1,"encore":1,"sludgebomb":1},
		tier: "Limbo"
	},
	stunfisk: {
		viableMoves: {"discharge":1,"thunderbolt":1,"earthpower":1,"scald":1,"toxic":1,"rest":1,"sleeptalk":1,"stealthrock":1},
		tier: "Limbo"
	},
	mienfoo: {
		viableMoves: {"uturn":1,"drainpunch":1,"stoneedge":1,"swordsdance":1,"batonpass":1,"highjumpkick":1,"fakeout":1,"knockoff":1},
		tier: "LC"
	},
	mienshao: {
		viableMoves: {"uturn":1,"fakeout":1,"highjumpkick":1,"stoneedge":1,"drainpunch":1,"swordsdance":1,"batonpass":1,"knockoff":1},
		tier: "Limbo C"
	},
	druddigon: {
		viableMoves: {"outrage":1,"superpower":1,"earthquake":1,"suckerpunch":1,"dragonclaw":1,"dragontail":1,"substitute":1,"glare":1,"stealthrock":1,"firepunch":1,"thunderpunch":1},
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["leer","scratch"]}
		],
		tier: "Limbo"
	},
	golett: {
		viableMoves: {"earthquake":1,"shadowpunch":1,"dynamicpunch":1,"icepunch":1,"stealthrock":1,"rockpolish":1},
		tier: "LC"
	},
	golurk: {
		viableMoves: {"earthquake":1,"shadowpunch":1,"dynamicpunch":1,"icepunch":1,"stoneedge":1,"stealthrock":1,"rockpolish":1},
		eventPokemon: [
			{"generation":5,"level":70,"shiny":true,"isHidden":false,"abilities":["ironfist"],"moves":["shadowpunch","hyperbeam","gyroball","hammerarm"],"pokeball":"cherishball"}
		],
		tier: "Limbo"
	},
	pawniard: {
		viableMoves: {"swordsdance":1,"substitute":1,"suckerpunch":1,"ironhead":1,"brickbreak":1,"knockoff":1},
		tier: "LC"
	},
	bisharp: {
		viableMoves: {"swordsdance":1,"substitute":1,"suckerpunch":1,"ironhead":1,"brickbreak":1,"knockoff":1},
		tier: "OU"
	},
	bouffalant: {
		viableMoves: {"headcharge":1,"earthquake":1,"stoneedge":1,"megahorn":1,"swordsdance":1,"superpower":1},
		tier: "Limbo"
	},
	rufflet: {
		viableMoves: {"bravebird":1,"rockslide":1,"return":1,"uturn":1,"substitute":1,"bulkup":1,"roost":1},
		tier: "LC"
	},
	braviary: {
		viableMoves: {"bravebird":1,"superpower":1,"return":1,"uturn":1,"substitute":1,"rockslide":1,"bulkup":1,"roost":1},
		eventPokemon: [
			{"generation":5,"level":25,"gender":"M","isHidden":true,"moves":["wingattack","honeclaws","scaryface","aerialace"]}
		],
		tier: "Limbo"
	},
	vullaby: {
		viableMoves: {"knockoff":1,"roost":1,"taunt":1,"whirlwind":1,"toxic":1,"defog":1,"uturn":1,"bravebird":1},
		tier: "LC"
	},
	mandibuzz: {
		viableMoves: {"knockoff":1,"roost":1,"taunt":1,"whirlwind":1,"toxic":1,"uturn":1,"bravebird":1,"defog":1},
		eventPokemon: [
			{"generation":5,"level":25,"gender":"F","isHidden":true,"moves":["pluck","nastyplot","flatter","feintattack"]}
		],
		tier: "OU"
	},
	heatmor: {
		viableMoves: {"fireblast":1,"suckerpunch":1,"focusblast":1,"gigadrain":1},
		tier: "Limbo"
	},
	durant: {
		viableMoves: {"honeclaws":1,"ironhead":1,"xscissor":1,"stoneedge":1,"batonpass":1,"superpower":1},
		tier: "Limbo"
	},
	deino: {
		viableMoves: {"outrage":1,"crunch":1,"firefang":1,"dragontail":1,"thunderwave":1,"superpower":1},
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"moves":["tackle","dragonrage"]}
		],
		tier: "LC"
	},
	zweilous: {
		viableMoves: {"outrage":1,"crunch":1,"firefang":1,"dragontail":1,"thunderwave":1,"superpower":1},
		tier: "Limbo"
	},
	hydreigon: {
		viableMoves: {"uturn":1,"dracometeor":1,"dragonpulse":1,"earthpower":1,"fireblast":1,"darkpulse":1,"roost":1,"flashcannon":1,"superpower":1},
		eventPokemon: [
			{"generation":5,"level":70,"shiny":true,"gender":"M","moves":["hypervoice","dragonbreath","flamethrower","focusblast"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	larvesta: {
		viableMoves: {"flareblitz":1,"uturn":1,"wildcharge":1,"zenheadbutt":1,"morningsun":1,"willowisp":1},
		tier: "LC"
	},
	volcarona: {
		viableMoves: {"quiverdance":1,"fierydance":1,"fireblast":1,"bugbuzz":1,"roost":1,"gigadrain":1,"hiddenpowerice":1},
		eventPokemon: [
			{"generation":5,"level":35,"isHidden":false,"moves":["stringshot","leechlife","gust","firespin"]},
			{"generation":5,"level":77,"gender":"M","nature":"Calm","isHidden":false,"moves":["bugbuzz","overheat","hyperbeam","quiverdance"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	cobalion: {
		viableMoves: {"closecombat":1,"ironhead":1,"swordsdance":1,"substitute":1,"stoneedge":1,"voltswitch":1,"hiddenpowerice":1,"thunderwave":1,"stealthrock":1},
		tier: "Limbo"
	},
	terrakion: {
		viableMoves: {"stoneedge":1,"closecombat":1,"swordsdance":1,"rockpolish":1,"substitute":1,"stealthrock":1,"earthquake":1},
		tier: "OU"
	},
	virizion: {
		viableMoves: {"swordsdance":1,"calmmind":1,"closecombat":1,"focusblast":1,"hiddenpowerice":1,"stoneedge":1,"leafblade":1,"gigadrain":1,"substitute":1,"synthesis":1},
		tier: "Limbo"
	},
	tornadus: {
		viableMoves: {"hurricane":1,"airslash":1,"uturn":1,"superpower":1,"focusblast":1,"taunt":1,"substitute":1,"heatwave":1,"tailwind":1},
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["hurricane","hammerarm","airslash","hiddenpower"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Limbo"
	},
	tornadustherian: {
		viableMoves: {"hurricane":1,"airslash":1,"focusblast":1,"uturn":1,"heatwave":1},
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["hurricane","hammerarm","airslash","hiddenpower"],"pokeball":"cherishball"}
		],
		tier: "Limbo B"
	},
	thundurus: {
		viableMoves: {"thunderwave":1,"nastyplot":1,"thunderbolt":1,"hiddenpowerice":1,"focusblast":1,"grassknot":1,"substitute":1},
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["thunder","hammerarm","focusblast","wildcharge"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "OU"
	},
	thundurustherian: {
		viableMoves: {"nastyplot":1,"agility":1,"thunderbolt":1,"hiddenpowerice":1,"focusblast":1,"grassknot":1,"superpower":1},
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["thunder","hammerarm","focusblast","wildcharge"],"pokeball":"cherishball"}
		],
		tier: "Limbo A"
	},
	reshiram: {
		viableMoves: {"blueflare":1,"dracometeor":1,"dragonpulse":1,"flamethrower":1,"flamecharge":1,"roost":1},
		eventPokemon: [
			{"generation":5,"level":100,"moves":["blueflare","fusionflare","mist","dracometeor"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	zekrom: {
		viableMoves: {"voltswitch":1,"outrage":1,"dragonclaw":1,"boltstrike":1,"honeclaws":1,"substitute":1,"dracometeor":1,"fusionbolt":1,"roost":1},
		eventPokemon: [
			{"generation":5,"level":100,"moves":["boltstrike","fusionbolt","haze","outrage"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	landorus: {
		viableMoves: {"earthpower":1,"focusblast":1,"rockpolish":1,"hiddenpowerice":1,"psychic":1,"sludgewave":1},
		dreamWorldPokeball: 'dreamball',
		tier: "OU"
	},
	landorustherian: {
		viableMoves: {"rockpolish":1,"earthquake":1,"stoneedge":1,"uturn":1,"superpower":1,"stealthrock":1,"swordsdance":1},
		tier: "OU"
	},
	kyurem: {
		viableMoves: {"substitute":1,"icebeam":1,"dracometeor":1,"dragonpulse":1,"focusblast":1,"outrage":1,"earthpower":1,"roost":1},
		tier: "Limbo"
	},
	kyuremblack: {
		viableMoves: {"outrage":1,"fusionbolt":1,"icebeam":1,"roost":1,"substitute":1,"honeclaws":1,"earthpower":1,"dragonclaw":1},
		tier: "OU"
	},
	kyuremwhite: {
		viableMoves: {"dracometeor":1,"dragonpulse":1,"icebeam":1,"fusionflare":1,"earthpower":1,"focusblast":1,"roost":1},
		tier: "Uber"
	},
	keldeo: {
		viableMoves: {"hydropump":1,"secretsword":1,"calmmind":1,"hiddenpowerghost":1,"hiddenpowerelectric":1,"substitute":1,"surf":1,"icywind":1},
		eventPokemon: [
			{"generation":5,"level":15,"moves":["aquajet","leer","doublekick","bubblebeam"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["sacredsword","hydropump","aquajet","swordsdance"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'cherishball',
		tier: "OU"
	},
	meloetta: {
		viableMoves: {"relicsong":1,"closecombat":1,"calmmind":1,"psychic":1,"thunderbolt":1,"hypervoice":1,"uturn":1},
		eventPokemon: [
			{"generation":5,"level":15,"moves":["quickattack","confusion","round"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["round","teeterdance","psychic","closecombat"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'cherishball',
		tier: "Limbo"
	},
	genesect: {
		viableMoves: {"uturn":1,"bugbuzz":1,"icebeam":1,"flamethrower":1,"thunderbolt":1,"ironhead":1,"shiftgear":1,"extremespeed":1,"blazekick":1},
		eventPokemon: [
			{"generation":5,"level":50,"moves":["technoblast","magnetbomb","solarbeam","signalbeam"],"pokeball":"cherishball"},
			{"generation":5,"level":15,"moves":["technoblast","magnetbomb","solarbeam","signalbeam"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"shiny":true,"nature":"Hasty","moves":["extremespeed","technoblast","blazekick","shiftgear"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'cherishball',
		tier: "Uber"
	},
	genesectburn: {
		viableMoves: {"uturn":1,"bugbuzz":1,"icebeam":1,"technoblast":1,"thunderbolt":1,"ironhead":1,"shiftgear":1,"extremespeed":1,"blazekick":1},
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Burn Drive"
	},
	genesectchill: {
		viableMoves: {"uturn":1,"bugbuzz":1,"technoblast":1,"flamethrower":1,"thunderbolt":1,"ironhead":1,"shiftgear":1,"extremespeed":1,"blazekick":1},
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Chill Drive"
	},
	genesectdouse: {
		viableMoves: {"uturn":1,"bugbuzz":1,"icebeam":1,"flamethrower":1,"thunderbolt":1,"technoblast":1,"ironhead":1,"shiftgear":1,"extremespeed":1,"blazekick":1},
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Douse Drive"
	},
	genesectshock: {
		viableMoves: {"uturn":1,"bugbuzz":1,"icebeam":1,"flamethrower":1,"technoblast":1,"ironhead":1,"shiftgear":1,"extremespeed":1,"blazekick":1},
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Shock Drive"
	},
	chespin: {
		viableMoves: {"curse":1,"gyroball":1,"seedbomb":1,"stoneedge":1,"spikes":1,"synthesis":1},
		tier: "LC"
	},
	quilladin: {
		viableMoves: {"curse":1,"gyroball":1,"seedbomb":1,"stoneedge":1,"spikes":1,"synthesis":1},
		tier: "NFE"
	},
	chesnaught: {
		viableMoves: {"leechseed":1,"synthesis":1,"roar":1,"hammerarm":1,"spikyshield":1,"stoneedge:":1,"woodhammer":1},
		tier: "Limbo B"
	},
	fennekin: {
		viableMoves: {"fireblast":1,"psychic":1,"psyshock":1,"grassknot":1,"willowisp":1,"hypnosis":1,"hiddenpowerrock":1,"flamecharge":1},
		tier: "LC"
	},
	braixen: {
		viableMoves: {"fireblast":1,"flamethrower":1,"psychic":1,"psyshock":1,"grassknot":1,"willowisp":1,"hiddenpowerrock":1},
		tier: "NFE"
	},
	delphox: {
		viableMoves: {"calmmind":1,"fireblast":1,"flamethrower":1,"psychic":1,"psyshock":1, "grassknot":1, "switcheroo":1,"shadowball":1},
		tier: "Limbo C"
	},
	froakie: {
		viableMoves: {"quickattack":1,"hydropump":1,"icebeam":1,"waterfall":1,"toxicspikes":1,"poweruppunch":1,"uturn":1},
		tier: "LC"
	},
	frogadier: {
		viablemoves: {"hydropump":1,"surf":1,"icebeam":1,"uturn":1,"taunt":1,"toxicspikes":1},
		tier: "NFE"
	},
	greninja: {
		viableMoves: {"hydropump":1,"uturn":1,"surf":1,"icebeam:":1,"spikes":1,"taunt":1,"darkpulse":1,"toxicspikes":1,"hiddenpowerfire":1},
		tier: "OU"
	},
	bunnelby: {
		viableMoves: {"agility":1,"earthquake":1,"return":1,"quickattack":1,"uturn":1,"stoneedge":1,"spikes":1,"bounce":1},
		tier: "LC"
	},
	diggersby: {
		viableMoves: {"earthquake":1,"uturn":1,"return":1,"wildcharge":1,"swordsdance":1,"quickattack":1,"agility":1},
		tier: "BL"
	},
	fletchling: {
		viableMoves: {"roost":1,"swordsdance":1,"uturn":1,"return":1,"overheat":1,"flamecharge":1,"tailwind":1},
		tier: "LC"
	},
	fletchinder: {
		viableMoves: {"roost":1,"swordsdance":1,"uturn":1,"return":1,"overheat":1,"flamecharge":1,"tailwind":1},
		tier: "NFE"
	},
	talonflame: {
		viableMoves: {"bravebird":1,"flareblitz":1,"roost":1,"swordsdance":1,"uturn":1,"willowisp":1,"tailwind":1},
		tier: "OU"
	},
	scatterbug: {
		viableMoves: {"tackle":1,"stringshot":1,"stunspore":1,"bugbite":1,"poisonpowder":1},
		tier: "LC"
	},
	spewpa: {
		viableMoves: {"tackle":1,"stringshot":1,"stunspore":1,"bugbite":1,"poisonpowder":1},
		tier: "NFE"
	},
	vivillon: {
		viableMoves: {"sleeppowder":1,"quiverdance":1,"hurricane":1,"bugbuzz":1,"roost":1},
		tier: "Limbo"
	},
	litleo: {
		viableMoves: {"hypervoice":1,"fireblast":1,"willowisp":1,"bulldoze":1,"yawn":1},
		tier: "LC"
	},
	pyroar: {
		viableMoves: {"hypervoice":1,"fireblast":1,"willowisp":1,"bulldoze":1,"sunnyday":1,"solarbeam":1},
		tier: "Limbo"
	},
	flabebe: {
		viableMoves: {"moonblast":1,"toxic":1,"wish":1,"psychic":1,"aromatherapy":1,"protect":1,"calmmind":1},
		tier: "LC"
	},
	floette: {
		viableMoves: {"moonblast":1,"toxic":1,"wish":1,"psychic":1,"aromatherapy":1,"protect":1,"calmmind":1},
		tier: "NFE"
	},
	floetteeternalflower: {
		isUnreleased: true,
		tier: "Unreleased"
	},
	florges: {
		viableMoves: {"moonblast":1,"toxic":1,"wish":1,"psychic":1,"aromatherapy":1,"protect":1,"calmmind":1},
		tier: "Limbo A"
	},
	skiddo: {
		viableMoves: {"hornleech":1,"earthquake":1,"brickbreak":1,"bulkup":1,"leechseed":1,"milkdrink":1,"rockslide":1},
		tier: "LC"
	},
	gogoat: {
		viableMoves: {"hornleech":1,"earthquake":1,"brickbreak":1,"bulkup":1,"leechseed":1,"milkdrink":1,"rockslide":1},
		tier: "Limbo"
	},
	pancham: {
		viableMoves: {"partingshot":1,"skyuppercut":1,"crunch":1,"stoneedge":1,"bulldoze":1,"shadowclaw":1,"bulkup":1},
		tier: "LC"
	},
	pangoro: {
		viableMoves: {"partingshot":1,"hammerarm":1,"crunch":1,"circlethrow":1,"stoneedge":1,"earthquake":1,"poisonjab":1},
		tier: "Limbo C"
	},
	furfrou: {
		viableMoves: {"return":1,"cottonguard":1,"uturn":1,"thunderwave":1,"suckerpunch":1,"roar":1,"wildcharge":1,"rest":1,"sleeptalk":1},
		tier: "Limbo"
	},
	espurr: {
		viableMoves: {"fakeout":1,"yawn":1,"thunderwave":1,"psyshock":1,"trick":1,"darkpulse":1},
		tier: "LC"
	},
	meowstic: {
		viableMoves: {"fakeout":1,"toxic":1,"yawn":1,"thunderwave":1,"psyshock":1,"trick":1,"psychic":1,"reflect":1,"lightscreen":1},
		viableDoublesMoves: {"fakeout":1,"thunderwave":1,"psyshock":1,"trick":1,"psychic":1,"reflect":1,"lightscreen":1,"safeguard":1,"swagger":1,"protect":1},
		tier: "Limbo"
	},
	meowsticf: {
		viableMoves: {"psyshock":1,"darkpulse":1,"calmmind":1,"energyball":1,"signalbeam":1,"thunderbolt":1},
		tier: "Limbo"
	},
	honedge: {
		viableMoves: {"swordsdance":1,"shadowclaw":1,"shadowsneak":1,"ironhead":1,"rockslide":1,"aerialace":1,"destinybond":1},
		tier: "LC"
	},
	doublade: {
		viableMoves: {"swordsdance":1,"shadowclaw":1,"shadowsneak":1,"ironhead":1,"rockslide":1,"aerialace":1,"destinybond":1},
		tier: "NFE"
	},
	aegislash: {
		viableMoves: {"kingsshield":1,"swordsdance":1,"shadowclaw":1,"sacredsword":1,"ironhead":1,"shadowsneak":1,"autotomize":1,"hiddenpowerice":1,"shadowball":1},
		tier: "OU"
	},
	spritzee: {
		viableMoves: {"calmmind":1,"drainingkiss":1,"moonblast":1,"psychic":1,"aromatherapy":1,"wish":1,"trickroom":1,"thunderbolt":1},
		tier: "LC"
	},
	aromatisse: {
		viableMoves:{"calmmind":1,"drainingkiss":1,"moonblast":1,"psychic":1,"aromatherapy":1,"wish":1,"trickroom":1,"thunderbolt":1},
		viableDoublesMoves:{"moonblast":1,"aromatherapy":1,"wish":1,"trickroom":1,"thunderbolt":1,"protect":1},
		tier: "Limbo"
	},
	swirlix: {
		viableMoves: {"calmmind":1,"drainingkiss":1,"dazzlinggleam":1,"surf":1,"psychic":1,"flamethrower":1,"bellydrum":1,"thunderbolt":1,"return":1,"thief":1,"cottonguard":1},
		tier: "LC"
	},
	slurpuff: {
		viableMoves: {"calmmind":1,"dazzlinggleam":1,"surf":1,"psychic":1,"flamethrower":1,"thunderbolt":1},
		tier: "Limbo C"
	},
	inkay: {
		viableMoves: {"topsyturvy":1,"switcheroo":1,"superpower":1,"psychocut":1,"flamethrower":1,"rockslide":1,"trickroom":1,"swagger":1,"foulplay":1},
		eventPokemon: [
			{"generation":6,"level":10,"isHidden":false,"moves":["happyhour","foulplay","hypnosis","topsyturvy"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	malamar: {
		viableMoves: {"switcheroo":1,"superpower":1,"psychocut":1,"rockslide":1,"trickroom":1,"nightslash":1},
		tier: "Limbo B"
	},
	binacle: {
		viableMoves: {"shellsmash":1,"razorshell":1,"stoneedge":1,"earthquake":1,"crosschop":1,"poisonjab":1,"xscissor":1,"rockslide":1},
		tier: "LC"
	},
	barbaracle: {
		viableMoves: {"shellsmash":1,"razorshell":1,"stoneedge":1,"earthquake":1,"crosschop":1,"poisonjab":1,"xscissor":1,"rockslide":1},
		tier: "Limbo C"
	},
	skrelp: {
		viableMoves: {"scald":1,"sludgebomb":1,"thunderbolt":1,"shadowball":1,"toxicspikes":1,"hydropump":1},
		unreleasedHidden: true,
		tier: "LC"
	},
	dragalge: {
		viableMoves: {"scald":1,"sludgebomb":1,"thunderbolt":1,"toxicspikes":1,"hydropump":1,"focusblast":1,"dracometeor":1,"dragontail":1,"substitute":1},
		unreleasedHidden: true,
		tier: "Limbo C"
	},
	clauncher: {
		viableMoves: {"waterpulse":1,"flashcannon":1,"uturn":1,"darkpulse":1,"crabhammer":1,"aquajet":1,"sludgebomb":1},
		tier: "LC"
	},
	clawitzer: {
		viableMoves: {"waterpulse":1,"icebeam":1,"uturn":1,"darkpulse":1,"dragonpulse":1,"aurasphere":1},
		tier: "Limbo C"
	},
	helioptile: {
		viableMoves: {"surf":1,"voltswitch":1,"hiddenpowerice":1,"raindance":1,"thunder":1,"darkpulse":1,"thunderbolt":1},
		tier: "LC"
	},
	heliolisk: {
		viableMoves: {"surf":1,"voltswitch":1,"hiddenpowerice":1,"raindance":1,"thunder":1,"darkpulse":1,"thunderbolt":1},
		tier: "Limbo B"
	},
	tyrunt: {
		viableMoves: {"stealthrock":1,"dragondance":1,"stoneedge":1,"dragonclaw":1,"earthquake":1,"icefang":1,"firefang":1},
		unreleasedHidden: true,
		tier: "LC"
	},
	tyrantrum: {
		viableMoves: {"stealthrock":1,"dragondance":1,"stoneedge":1,"dragonclaw":1,"earthquake":1,"icefang":1,"firefang":1},
		unreleasedHidden: true,
		tier: "Limbo C"
	},
	amaura: {
		viableMoves: {"naturepower":1,"ancientpower":1,"thunderbolt":1,"darkpulse":1,"thunderwave":1,"dragontail":1,"flashcannon":1},
		unreleasedHidden: true,
		tier: "LC"
	},
	aurorus: {
		viableMoves: {"naturepower":1,"ancientpower":1,"thunderbolt":1,"encore":1,"thunderwave":1,"flashcannon":1,"freezedry":1},
		unreleasedHidden: true,
		tier: "Limbo"
	},
	sylveon: {
		viableMoves: {"hypervoice":1,"calmmind":1,"wish":1,"protect":1,"psyshock":1,"batonpass":1,"shadowball":1,"hiddenpowerground":1},
		eventPokemon: [
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","helpinghand","sandattack","fairywind"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	hawlucha: {
		viableMoves: {"swordsdance":1,"highjumpkick":1,"uturn":1,"stoneedge":1,"roost":1,"batonpass":1},
		tier: "BL"
	},
	dedenne: {
		viableMoves: {"voltswitch":1,"thunderbolt":1,"nuzzle":1,"grassknot":1,"hiddenpowerice":1,"uturn":1,"toxic":1},
		tier: "Limbo"
	},
	carbink: {
		viableMoves: {"stealthrock":1,"lightscreen":1,"reflect":1,"explosion":1,"powergem":1,"moonblast":1},
		tier: "Limbo C"
	},
	goomy: {
		viableMoves: {"sludgebomb":1,"thunderbolt":1,"toxic":1,"protect":1,"infestation":1},
		tier: "LC"
	},
	sliggoo: {
		viableMoves: {"sludgebomb":1,"thunderbolt":1,"toxic":1,"protect":1,"infestation":1,"icebeam":1},
		tier: "NFE"
	},
	goodra: {
		viableMoves: {"thunderbolt":1,"toxic":1,"icebeam":1,"dragonpulse":1,"fireblast":1,"dragontail":1,"dracometeor":1,"focusblast":1},
		tier: "OU"
	},
	klefki: {
		viableMoves: {"reflect":1,"lightscreen":1,"spikes":1,"torment":1,"substitute":1,"thunderwave":1,"drainingkiss":1,"swagger":1,"foulplay":1,"flashcannon":1,"dazzlinggleam":1},
		tier: "BL"
	},
	phantump: {
		viableMoves: {"hornleech":1,"leechseed":1,"phantomforce":1,"substitute":1,"willowisp":1,"curse":1,"bulldoze":1,"rockslide":1,"poisonjab":1},
		tier: "LC"
	},
	trevenant: {
		viableMoves: {"hornleech":1,"woodhammer":1,"leechseed":1,"shadowclaw":1,"substitute":1,"willowisp":1,"curse":1,"earthquake":1,"rockslide":1},
		tier: "Limbo A"
	},
	pumpkaboo: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"fireblast":1,"painsplit":1,"seedbomb":1},
		tier: "LC"
	},
	pumpkaboosmall: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"fireblast":1,"painsplit":1,"seedbomb":1},
		unreleasedHidden: true,
		tier: "LC"
	},
	pumpkaboolarge: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"fireblast":1,"painsplit":1,"seedbomb":1},
		unreleasedHidden: true,
		tier: "LC"
	},
	pumpkaboosuper: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"fireblast":1,"painsplit":1,"seedbomb":1},
		unreleasedHidden: true,
		tier: "LC"
	},
	gourgeist: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"painsplit":1,"seedbomb":1,"leechseed":1,"phantomforce":1,"explosion":1},
		tier: "Limbo"
	},
	gourgeistsmall: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"painsplit":1,"seedbomb":1,"leechseed":1,"phantomforce":1,"explosion":1},
		unreleasedHidden: true,
		tier: "Limbo"
	},
	gourgeistlarge: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"painsplit":1,"seedbomb":1,"leechseed":1,"phantomforce":1,"explosion":1},
		unreleasedHidden: true,
		tier: "Limbo"
	},
	gourgeistsuper: {
		viableMoves: {"willowisp":1,"shadowsneak":1,"painsplit":1,"seedbomb":1,"leechseed":1,"phantomforce":1,"explosion":1},
		unreleasedHidden: true,
		tier: "Limbo B"
	},
	bergmite: {
		viableMoves: {"avalanche":1,"recover":1,"stoneedge":1,"curse":1,"gyroball":1,"rapidspin":1},
		tier: "LC"
	},
	avalugg: {
		viableMoves: {"avalanche":1,"recover":1,"stoneedge":1,"curse":1,"gyroball":1,"rapidspin":1,"roar":1,"earthquake":1},
		tier: "Limbo C"
	},
	noibat: {
		viableMoves: {"airslash":1,"hurricane":1,"dracometeor:":1,"uturn":1,"roost":1,"switcheroo":1},
		tier: "LC"
	},
	noivern: {
		viableMoves: {"airslash":1,"hurricane":1,"dragonpulse":1,"dracometeor:":1,"focusblast":1,"flamethrower":1,"uturn":1,"roost":1,"boomburst":1,"switcheroo":1},
		tier: "Limbo A"
	},
	xerneas: {
		viableMoves: {"geomancy":1,"moonblast":1,"thunder":1,"focusblast":1},
		tier: "Uber"
	},
	yveltal: {
		viableMoves: {"darkpulse":1,"oblivionwing":1,"taunt":1,"focusblast":1,"hurricane":1,"airslash":1,"roost":1,"suckerpunch":1},
		tier: "Uber"
	},
	zygarde: {
		viableMoves: {"dragondance":1,"earthquake":1,"extremespeed":1,"outrage":1,"coil":1,"stoneedge":1},
		tier: "Limbo C"
	},
	diancie: {
		isUnreleased: true,
		tier: "Unreleased"
	},
	hoopa: {
		isUnreleased: true,
		tier: "Unreleased"
	},
	volcanion: {
		isUnreleased: true,
		tier: "Unreleased"
	},
	missingno: {
		isNonstandard: true,
		tier: ""
	},
	tomohawk: {
		viableMoves: {"aurasphere":1,"roost":1,"stealthrock":1,"rapidspin":1,"hurricane":1,"airslash":1,"taunt":1,"substitute":1,"toxic":1,"naturepower":1,"earthpower":1},
		isNonstandard: true,
		tier: "CAP"
	},
	necturna: {
		viableMoves: {"powerwhip":1,"hornleech":1,"willowisp":1,"shadowsneak":1,"stoneedge":1,"sacredfire":1,"boltstrike":1,"vcreate":1,"extremespeed":1,"closecombat":1,"shellsmash":1,"spore":1,"milkdrink":1,"batonpass":1,"stickyweb":1},
		isNonstandard: true,
		tier: "CAP"
	},
	mollux: {
		viableMoves: {"fireblast":1,"thunderbolt":1,"sludgebomb":1,"thunderwave":1,"willowisp":1,"recover":1,"rapidspin":1,"trick":1,"stealthrock":1,"toxicspikes":1,"lavaplume":1},
		isNonstandard: true,
		tier: "CAP"
	},
	aurumoth: {
		viableMoves: {"dragondance":1,"quiverdance":1,"closecombat":1,"bugbuzz":1,"hydropump":1,"megahorn":1,"psychic":1,"blizzard":1,"thunder":1,"focusblast":1,"zenheadbutt":1},
		isNonstandard: true,
		tier: "CAP"
	},
	malaconda: {
		viableMoves: {"powerwhip":1,"glare":1,"crunch":1,"toxic":1,"suckerpunch":1,"rest":1,"substitute":1,"uturn":1,"synthesis":1,"rapidspin":1,"knockoff":1},
		isNonstandard: true,
		tier: "CAP"
	},
	cawmodore: {
		viableMoves: {"bellydrum":1,"bulletpunch":1,"drainpunch":1,"acrobatics":1,"drillpeck":1,"substitute":1,"ironhead":1,"quickattack":1},
		isNonstandard: true,
		tier: "CAP"
	},
	syclant: {
		viableMoves: {"bugbuzz":1,"icebeam":1,"blizzard":1,"earthpower":1,"spikes":1,"superpower":1,"tailglow":1,"uturn":1,"focusblast":1},
		isNonstandard: true,
		tier: "CAP"
	},
	revenankh: {
		viableMoves: {"bulkup":1,"shadowsneak":1,"drainpunch":1,"rest":1,"moonlight":1,"icepunch":1,"glare":1},
		isNonstandard: true,
		tier: "CAP"
	},
	pyroak: {
		viableMoves: {"leechseed":1,"lavaplume":1,"substitute":1,"protect":1,"gigadrain":1},
		isNonstandard: true,
		tier: "CAP"
	},
	fidgit: {
		viableMoves: {"spikes":1,"stealthrock":1,"toxicspikes":1,"wish":1,"rapidspin":1,"encore":1,"uturn":1,"sludgebomb":1,"earthpower":1},
		isNonstandard: true,
		tier: "CAP"
	},
	stratagem: {
		viableMoves: {"paleowave":1,"earthpower":1,"fireblast":1,"gigadrain":1,"calmmind":1,"substitute":1},
		isNonstandard: true,
		tier: "CAP"
	},
	arghonaut: {
		viableMoves: {"recover":1,"bulkup":1,"waterfall":1,"drainpunch":1,"crosschop":1,"stoneedge":1,"thunderpunch":1,"aquajet":1,"machpunch":1},
		isNonstandard: true,
		tier: "CAP"
	},
	kitsunoh: {
		viableMoves: {"shadowstrike":1,"earthquake":1,"superpower":1,"meteormash":1,"uturn":1,"icepunch":1,"trick":1,"willowisp":1},
		isNonstandard: true,
		tier: "CAP"
	},
	cyclohm: {
		viableMoves: {"slackoff":1,"dracometeor":1,"dragonpulse":1,"fireblast":1,"thunderbolt":1,"hydropump":1,"discharge":1,"healbell":1},
		isNonstandard: true,
		tier: "CAP"
	},
	colossoil: {
		viableMoves: {"earthquake":1,"crunch":1,"suckerpunch":1,"uturn":1,"rapidspin":1,"encore":1,"pursuit":1,"knockoff":1},
		isNonstandard: true,
		tier: "CAP"
	},
	krilowatt: {
		viableMoves: {"surf":1,"thunderbolt":1,"icebeam":1,"earthpower":1},
		isNonstandard: true,
		tier: "CAP"
	},
	voodoom: {
		viableMoves: {"aurasphere":1,"darkpulse":1,"taunt":1,"painsplit":1,"substitute":1,"hiddenpowerice":1,"vacuumwave":1},
		isNonstandard: true,
		tier: "CAP"
	}
};
