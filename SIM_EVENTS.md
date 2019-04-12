# Sim events

## Table of contents
1. [Introduction](#introduction)
	- [Effects](#effects)
	- [Events](#events)
2. [Single events](#single-events)
	- [Abilities and Items](#abilities-and-items)
	- [Statuses](#statuses-pureeffect)
	- [Moves](#moves)
3. [Global events](#global-events)
	- [Main loop](#main-loop-events)
	- [Helper events](#helper-events)
	- [Hit steps](#hit-steps)

## Introduction

### Effects

In Pokémon Showdown, as well as in [Pokémon Lab](https://pokemonlab.com/),
everything in Pokémon is an effect.

There are 10 types of effects:

Effect type | Target | Examples
------------|--------|---------
Move | Pokémon | Grass Knot, Magnitude
Status | Pokémon | Sleep, Poison
Volatile | Pokémon | Protect, Substitute
Ability | Pokémon | Intimidate, Technician
Item | Pokémon | Leftovers, Choice Scarf
Slot condition | Slot | Wish, Healing Wish
Side condition | Side | Reflect, Tailwind
Terrain | Field | Grassy Terrain, Misty Terrain
Weather | Field | Rain Dance, Sunny Day
Pseudoweather | Field | Trick Room

Effects which target a side also target every Pokémon on a side,
and effects targetting the field also target every Pokémon in it.

For convenience, most effects have the same ID as the move, ability, or item that
induces it. The only exceptions are effects with many moves associated with them,
such as statuses, and certain volatile statuses (flinch, confusion, locked moves,
and trapping).

### Events

Nearly every effect has some sort of event listener, and each action in the battle
fires an event.

Since events that target a side also target every Pokémon on it, any event that
fires on a Pokémon will also fire on that Pokémon's side. So, for instance, the
global event `TryHit`, which is run on the target of a move, is also intercepted
by the `onTryHit` handler of **Mat Block**, a side condition on the target's side.

Similarly, any event that fires on a side will also fire on the field. So, for instance,
the global `Effectiveness` event can be captured by **Delta Stream**, a weather condition.

For instance, here is the **Technician** ability:

```js
"technician": {
	desc: "This Pokemon's moves of 60 power or less have their power multiplied\
		by 1.5. Does affect Struggle.",
	shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes\
		Struggle.",
	onBasePowerPriority: 8,
	onBasePowerPriority(basePower, attacker, defender, move) {
		if (basePower <= 60) {
			return this.chainModify(1.5);
		}
	},
	id: 'technician',
	name: "Technician",
 	rating: 4,
	num: 101,
}
```

Now, let's work through an example of how this ability acts:

> In a Doubles Battle with **Grassy Terrain** active, and with an allied **Battery** Charjabug
on the field, a **Technician** Roserade uses **Grass Knot** against a **Dry Skin** Helioptile.

To calculate the damage inflicted, the method `Battle#getDamage()` is invoked:

```js
// Excerpt
let basePower = move.basePower;
if (move.basePowerCallback) {
	basePower = move.basePowerCallback.call(this, pokemon, target, move);
}
basePower = this.runEvent('BasePower', pokemon, target, move, basePower, true);
```

First, the `basePowerCallback` handler on the move is fired:

```js
"grassknot": {
	basePowerCallback(pokemon, target) {
		let targetWeight = target.getWeight();
		if (targetWeight >= 200) return 120;
		if (targetWeight >= 100) return 100;
		if (targetWeight >= 50) return 80;
		if (targetWeight >= 25) return 60;
		if (targetWeight >= 10) return 40;
		return 20;
	},
}
```

**Grass Knot**'s `basePowerCallback` function returns `20` as its base power against
Helioptile, which weighs 6 kg.

Next, the battle fires the BasePower event, which is intercepted by the following handlers:
- `onBasePower(user, target) [on move]
- `onBasePower(user, target, basePower, move)` [on user]
- `onAllyBasePower(user, target, basePower, move)` [on allies]
- `onFoeBasePower(user, target, basePower, move)` [on foe Pokémon]
- `onSourceBasePower(user, target, basePower, move)` [on target]
- `onAnyBasePower(user, target, basePower, move)` [on every Pokémon]

As mentioned above, events fired on a Pokémon also fire on the side and the field.
Therefore, the events found are the following:
- Roserade's **Technician** (`onBasePower` handler of the user, priority 8)
- Field's **Grassy Terrain** (`onBasePower` handler of the field, priority 0)
- Charjabug's **Battery** (`onAllyBasePower` handler of an allied, priority 8)
- Helioptile's **Dry Skin** (`onFoeBasePower` handler of a foe, priority 7)

These handlers are sorted by their listed priority.

1. **Technician**'s callback goes first, so it updates the base power modifier
from its initial value of 1 to 1.5.
2. **Battery**'s handler is called so the base power modifier is updated to ~1.95.
3. **Dry Skin**'s handler is called. Since **Grass Knot** is *not* a Fire-type move,
this step doesn't affect its base power.
4. **Grassy Terrain**'s handler is called. Since **Grass Knot** *is* a Grass-type move,
and **Roserade** is grounded, the base power modifier is updated to ~3.80.
5. After the `BasePower` event is run, we get a rounded final base power of `76`.

## Single events

**NOTE**: This list is incomplete.
Refer to [dev-tools/globals.ts](https://github.com/Zarel/Pokemon-Showdown/blob/master/dev-tools/globals.ts) for a full list, including function signatures, of the
single events available on abilities, moves, items or statuses, corresponding to the
`AbilityEventMethods`, `MoveEventMethods`, `ItemEventMethods` and `PureEffectEventMethods`
interfaces.

Single events run on moves are passed copies of the move objects. These are called
"Active Moves", and can be safely modified.

### Abilities and items

onStart(pokemon) [on ability]
onStart(pokemon) [on item]
	Fired after a pokemon switches in, following the onSwitchIn event.

	If two pokemon switch in at once (first turn, or after two pokemon
	faint simultaneously), both onStart events will fire after both pokemon
	have switched in, and the faster pokemon's onStart event will fire
	first.

	examples: [ability] Drizzle, [ability] Intimidate, [item] Air Balloon

### Statuses (PureEffect)

```js
durationCallback(pokemon, source, sourceEffect) [on status, on volatile]
durationCallback(pokemon, source, sourceEffect) [on slot condition]
durationCallback(side, source, sourceEffect) [on side condition]
durationCallback(field, source, sourceEffect) [on weather, on terrain, on pseudoweather]
```

	Fired while calculating an effect's duration. Returns the duration in
	turns, including the current one.

	source is the pokemon that inflicted the new effect, or null if no such
	pokemon did.

	sourceEffect is the move or effect that started the new effect.

	For instance, if Pikachu uses Toxic, source is Pikachu,
	and sourceEffect is Toxic as a move, but if you are poisoned by Toxic Spikes,
	source is null, and sourceEffect is Toxic Spikes as a side condition.

	For instance, Rain Dance has a duration of 5 turns, but it increases to 8 turns
	if the user has Damp Rock as its item. Return 0 to have it never expire in BW.
	
	NOTE: If the duration is constant, prefer using the `duration` property.

	The effect's residual event is not fired when it expires - instead, its
	end event is fired when its residual event would otherwise have fired.

	Do not use this for effects that don't expire during a residual. For
	instance, sleep expires through a sleep counter that decrements every
	beforeMove event, not every residual event.

	examples: [weather] Rain Dance, [side condition] Reflect

```js
onStart(pokemon, source, sourceEffect) [on status, on volatile]
onStart(pokemon, source, sourceEffect) [on slot condition]
onStart(side, source, sourceEffect) [on side condition]
onStart(field, source, sourceEffect) [on weather, on terrain, on pseudoweather]
```

	Fired when an effect starts, with the same function signature as durationCallback.

	Useful for cancelling an effect that fails (e.g. Encore against a newly
	switched-in foe), for giving messages that an effect has started, and
	for initializing effect data (e.g. Substitute, Wish).

	examples: [volatile] Encore, [side condition] Reflect,
	          [volatile] Substitute

```js
onRestart(pokemon, source, sourceEffect) [on status, on volatile]
onRestart(pokemon, source, sourceEffect) [on slot condition]
onRestart(side, source, sourceEffect) [on side condition]
onRestart(field, source, sourceEffect) [on weather, on terrain, on pseudoweather]
```

	Fired when trying to induce an effect that's already active,
	with the same function signature as durationCallback.

	Useful for effects that can have multiple "layers".

	examples: [side condition] Toxic Spikes, [side condition] Pursuit,
	          [volatile] Stockpile

```js
onEnd(pokemon, source, sourceEffect) [on status, on volatile]
onEnd(pokemon, source, sourceEffect) [on slot condition]
onEnd(side, source, sourceEffect) [on side condition]
onEnd(field, source, sourceEffect) [on weather, on terrain, on pseudoweather]
```

	Fired when an effect ends naturally, usually because its duration ends.

	Most ways an effect can end are "natural". The biggest exception is
	when a pokemon swiches out. In general, if you would receive a message
	when the effect ends, the end event would be fired.

	NOTE: NOT fired when a pokemon switches out (see the global event onSwitchOut).

	NOTE: Setting the duration counter of the effect won't prevent the effect
	      from ending.

	Useful for giving messages that an effect has ended.

	examples: [volatile] Encore, [side condition] Reflect,
	          [volatile] Substitute

### Moves

**NOTE**: For an schematic breakdown of the hit steps, refer to [simulator-doc.txt](https://github.com/Zarel/Pokemon-Showdown/blob/master/simulator-doc.txt)

```js
beforeMoveCallback(user, target, move) [on move]
```

	Fired before a pokemon uses a move it chose, but after the global
	BeforeMove event. Return true to prevent the move.

	Moves not called directly (e.g. moves called by Assist, Metronome, or Sleep Talk)
	do not fire this event.

	examples: [move] Focus Punch

```js
beforeTurnCallback(user) [on move]
```

	Fired before a turn starts on every pokemon which will move.

	Used for Focus Punch (for the "focusing" message) and Pursuit
	(to activate the side condition that listens for the foeSwitchOut
	event).

	examples: [move] Focus Punch, [move] Pursuit

```js
onModifyMove(move, user, target) [on move]
```

	Fired before a pokemon uses a move.

	It is also fired for moves that bypass beforeMoveCallback
	(moves called by Assist, Metronome, or Sleep Talk).

	NOTE: Base Power modifications should be handled in onBasePower, not in
	onModifyMove. This is because many moves have variable base power.

	NOTE: Priority modifications should be handled in the global event onModifyPriority.
	By the time the move can be modified through onModifyMove, its position in the
	decision queue is already fixed.

	examples: [move] Secret Power, [move] Technoblast, [move] Weather Ball

```js
onBasePower(basePower, attacker, defender, move) [on move]
```

	Fired while calculating a move's base power. Return the modified
	base power.

	examples: [move] Facade, [move] Knock Off

```js
onHit(target, user, move) [on move]
```

	Fired when a move hits (doesn't miss). Return false to prevent the move's
	effects.

	Also used for moves whose effects are too complicated to be represented
	in any other way.

	examples: [foe volatile] Protect, [move] Belly Drum, etc

## Global events

**NOTE**: This list is incomplete.
Refer to [dev-tools/globals.ts](https://github.com/Zarel/Pokemon-Showdown/blob/master/dev-tools/globals.ts) for a full list, including function signatures, of the
global events available, corresponding to the `EventMethods` interface.

### Main loop events

```js
onBeforeTurn(pokemon) [on pokemon]
```

	Fired before a turn starts on every active pokemon.

	Used for Gen 4 Custap Berry and the Gen 2 Locked Move volatile,
	to dynamically update the decision queue.

	examples: [item] Custap Berry (Gen 4), [volatile] Locked Move (Gen 2)

```js
onSwitchIn(pokemon) [on pokemon]
```

	Fired after a pokemon switches in.

	If two pokemon switch in at once (first turn, or after two pokemon
	faint simultaneously), both onSwitchIn events will fire after both pokemon
	have switched in, and the faster pokemon's onSwitchIn event will fire
	first.

	examples: [side condition] Stealth Rock, [slot condition] Healing Wish

```js
onBeforeSwitchOut(pokemon) [on pokemon]
```

	Fired before a pokemon switches out.

	examples: [side condition] Pursuit

```js
onSwitchOut(pokemon) [on pokemon]
```

	Fired before a pokemon switches out, after the onBeforeSwitchOut event.
	Return true to interrupt and prevent the pokemon from switching out.

	NOTE: DO NOT use it to implement trapping: set the trapping flag in
	the onFoeTrapPokemon event instead.

	NOTE: NOTHING in USUM or earlier prevents a pokemon from switching out
	at this stage, so you most likely DO NOT want to ever return true.

	examples: [ability] Natural Cure, [ability] Regenerator

```js
onModifyPriority(priority, user, target, move) [on user]
```

	Fired when determining a move's priority. Return the move's priority.

	examples: [ability] Prankster

```js
onResidual(pokemon) [on status, on volatile, on ability, on item]
onResidual(side) [on side condition]
onResidual(field) [on weather, on pseudoweather]
```

	Fired at the end of each turn, but before fainted pokemon are switched in.

	Useful for whatever end-of-turn effects this may have.

	The duration counter of each effect is decremented automatically before
	this event is fired (see duration for details).

	examples: [volatile] Ghost-type Curse, [weather] Sandstorm

### Helper events

```js
onType(pokemon) [on pokemon]
```

	Fired when calculating the type of a Pokémon to override the default typing mechanics.
	Only used for Roost, Arceus, and Silvally.

	examples: [volatile] Roost, [pokemon] Arceus, [pokemon] Silvally

```js
onImmunity(type, target) [on target]
```

	Fired when determining whether or not a pokemon is immune to a move.
	Return false if it is immune.

	examples: [volatile] Magnet Rise

```js
onImmunity(effectid, target) [on target]
```

	Fired when determining whether or not a pokemon is immune to a non-move effect.
	Return false if it is immune.

	examples: [ability] Magma Armor, [ability] Overcoat, [item] Safety Goggles

### Hit steps

**NOTE**: For an schematic breakdown, refer to [simulator-doc.txt](https://github.com/Zarel/Pokemon-Showdown/blob/master/simulator-doc.txt)

```js
onBeforeMove(user, target, move) [on user]
```

	Fired before a pokemon uses a move it chose. Return false to prevent
	the move.

	Mostly effects that prevent a user from moving, such as paralysis.

	Moves not called directly (e.g. moves called by Metronome, Sleep Talk,
	or Pursuit) do not fire this event.

	examples: [volatile] Flinching, [status] fully paralyzed,
	          [move] Focus Punch

```js
onBasePower(basePower, attacker, defender, move) [on user]
onFoeBasePower(basePower, attacker, defender, move) [on foe Pokémon]
onAnyBasePower(basePower, attacker, defender, move) [on any Pokémon]
```

	Fired while calculating a move's base power. Return the modified
	base power.

	examples: [ability] Dark Aura, [ability] Dry Skin, [ability] Technician

```js
onModifyMove(user, target, move) [on user]
onFoeModifyMove(user, target, move) [on foe Pokémon]
```

	Fired before a pokemon uses a move.

	examples: [ability] Adaptability, [ability] Infiltrator, [ability] Pixilate

```js
onHit(target, source, move) [on target]
onSourceHit(target, source, move) [on source]
```

	Fired when a move hits (doesn't miss).

	examples: [ability] Anger Point, [ability] Magician, [item] Enigma Berry

```js
onDamage(damage, target, source, effect) [on target]
```

	Fired while calculating damage, either from a move or from a condition.
	Return a damage value directly in HP. Bypasses weaknesses and resistances,
	but not immunities.

	examples: [ability] Magic Guard, [volatile] Endure