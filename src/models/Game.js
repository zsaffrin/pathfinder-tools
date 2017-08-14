
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
	baseLandSpeed = race => (
		this.data && this.data.baseLandSpeedByRace ?
			this.data.baseLandSpeedByRace[race] : null
	)
}

export default Game;
