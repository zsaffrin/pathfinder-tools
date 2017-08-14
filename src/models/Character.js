
class Character {
	constructor(characterData) {
		this.data = characterData;
	}

	// CHARACTER DATA OPERATIONS -------------------------------------------------
	static newCharacter = () => null

	static deleteCharacter = () => null

	updateCharacter = () => null


	// ATTRIBUTES ----------------------------------------------------------------
	characterName = () => (
		this.data && this.data.characterName ?
			this.data.characterName : null
	)

	playerName = () => (
		this.data && this.data.playerName ?
			this.data.playerName : null
	)

	race = () => (
		this.data && this.data.race ?
			this.data.race : null
	)

	eyeColor = () => (
		this.data && this.data.eyeColor ?
			this.data.eyeColor : null
	)

	hairColor = () => (
		this.data && this.data.hairColor ?
			this.data.hairColor : null
	)

	skinColor = () => (
		this.data && this.data.skinColor ?
			this.data.skinColor : null
	)

	height = () => (
		this.data && this.data.height ?
			this.data.height : null
	)

	age = () => (
		this.data && this.data.age ?
			this.data.age : null
	)

	weight = () => (
		this.data && this.data.weight ?
			this.data.weight : null
	)

	size = () => (
		this.data && this.data.size ?
			this.data.size : null
	)

	calcSizeMod = (size) => {
		switch (size) {
		case 'colossal':
			return -8;
		case 'gargantuan':
			return -4;
		case 'huge':
			return -2;
		case 'large':
			return -1;
		case 'medium':
			return 0;
		case 'small':
			return 1;
		case 'tiny':
			return 2;
		case 'diminutive':
			return 4;
		case 'fine':
			return 8;
		default:
			return null;
		}
	}

	sizeMod = () => (
		this.data && this.data.size ?
			this.calcSizeMod(this.data.size) : null
	)

	languages = () => (
		this.data && this.data.languages ?
			this.data.languages : null
	)


	// ALIGNMENT -----------------------------------------------------------------
	alignment = () => (
		this.data && this.data.alignment ?
			`${this.data.alignment.lawfulness} ${this.data.alignment.morality}` :
			null
	)

	lawfulness = () => (
		this.data && this.data.alignment ?
			this.data.alignment.lawfulness : null
	)

	morality = () => (
		this.data && this.data.alignment ?
			this.data.alignment.morality : null
	)


	// LEVELS --------------------------------------------------------------------
	levels = () => (
		this.data && this.data.levels ?
			this.data.levels : null
	)

	hd = () => (
		this.data && this.data.levels ?
			this.data.levels.length : null
	)

	classLevels = () => {
		if (!this.data || !this.data.levels) { return null; }

		const levelCounts = {};
		this.data.levels.forEach((level) => {
			levelCounts[level.class] += 1;
		});

		return levelCounts;
	}


	// ABILITIES -----------------------------------------------------------------
	abilityScores = () => (
		this.data && this.data.abilities ?
			this.data.abilities : null
	)

	strength = () => (
		this.data && this.data.abilities ?
			this.data.abilities.str : null
	)

	dexterity = () => (
		this.data && this.data.abilities ?
			this.data.abilities.dex : null
	)

	constitution = () => (
		this.data && this.data.abilities ?
			this.data.abilities.con : null
	)

	intelligence = () => (
		this.data && this.data.abilities ?
			this.data.abilities.int : null
	)

	wisdom = () => (
		this.data && this.data.abilities ?
			this.data.abilities.wis : null
	)

	charisma = () => (
		this.data && this.data.abilities ?
			this.data.abilities.cha : null
	)

	calcAbilityMod = score => (
		Math.floor((score - 10) / 2)
	)

	strengthMod = () => (
		this.data && this.data.abilities ?
			this.calcAbilityMod(this.data.abilities.str) : null
	)

	dexterityMod = () => (
		this.data && this.data.abilities ?
			this.calcAbilityMod(this.data.abilities.dex) : null
	)

	constitutionMod = () => (
		this.data && this.data.abilities ?
			this.calcAbilityMod(this.data.abilities.con) : null
	)

	intelligenceMod = () => (
		this.data && this.data.abilities ?
			this.calcAbilityMod(this.data.abilities.int) : null
	)

	wisdomMod = () => (
		this.data && this.data.abilities ?
			this.calcAbilityMod(this.data.abilities.wis) : null
	)

	charismaMod = () => (
		this.data && this.data.abilities ?
			this.calcAbilityMod(this.data.abilities.cha) : null
	)
}

export default Character;
