
class Game {
	constructor(gameData) {
		this.data = gameData;
	}

	// CARRYING CAPACITY ---------------------------------------------------------
	carryingCapacity = strengthScore => (
		this.data && this.data.carryingCapacityByStrength ?
			this.data.carryingCapacityByStrength[strengthScore] : null
	)

	liftOverhead = strengthScore => (
		this.data && this.data.carryingCapacityByStrength ?
			this.data.carryingCapacityByStrength[strengthScore].heavyLoad.max : null
	)

	liftOffGround = strengthScore => (
		this.data && this.data.carryingCapacityByStrength ?
			(this.data.carryingCapacityByStrength[strengthScore].heavyLoad.max * 2) : null
	)

	pushOrDrag = strengthScore => (
		this.data && this.data.carryingCapacityByStrength ?
			(this.data.carryingCapacityByStrength[strengthScore].heavyLoad.max * 5) : null
	)


	// MOVEMENT SPEED ------------------------------------------------------------
	baseLandSpeedByRace = (race) => {
		if (!this.data || !this.data.baseLandSpeedByRace) { return null; }
		return this.data.baseLandSpeedByRace[race];
	}

	swimSpeed = movementSpeed => (
		Math.floor(movementSpeed / 4)
	)

	climbSpeed = movementSpeed => (
		Math.floor(movementSpeed / 4)
	)


	// CLASS LEVELS --------------------------------------------------------------
	classEffectsByLevel = (charClass, level, filter = null) => {
		if (
			!this.data ||
			!this.data.effectsByClassByLevel ||
			!this.data.effectsByClassByLevel[charClass] ||
			!this.data.effectsByClassByLevel[charClass][level]
		) { return null; }

		const levelEffects = this.data.effectsByClassByLevel[charClass][level];

		if (!filter) { return levelEffects; }
		const filteredEffects = [];
		levelEffects.forEach((effect) => {
			if (effect.affects === filter) {
				filteredEffects.push(effect);
			}
		});
		return filteredEffects;
	}
}

export default Game;
