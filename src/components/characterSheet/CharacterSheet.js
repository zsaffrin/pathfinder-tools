import React from 'react';
import PropTypes from 'prop-types';

import Profile from './Profile';
import Abilities from './Abilities';
import Strength from './Strength';
import Movement from './Movement';

import { flattenAndCleanArray, applyEffects } from '../_staticFunctions';

const CharacterSheet = ({ character, gameData }) => {
	// Collect active effects
	const classLevelSummary = character.classLevelSummary();
	let effects = Object.keys(classLevelSummary).map(key => (
		gameData.classEffectsByLevel(key, classLevelSummary[key])
	));
	effects = flattenAndCleanArray(effects, null);

	// Abilities
	const abilityScores = character.abilityScores();
	const abilityScoresEffects = [];
	Object.keys(abilityScores).map(key => (
		abilityScoresEffects.push({
			ability: key,
			score: applyEffects(abilityScores[key], key, effects),
			mod: character.calcAbilityMod(abilityScores[key]),
		})
	));

	// Strength
	const carry = gameData.carryingCapacity(character.strength());
	const lift = {
		overhead: gameData.liftOverhead(character.strength()),
		offGround: gameData.liftOffGround(character.strength()),
		pushOrDrag: gameData.pushOrDrag(character.strength()),
	};

	// Movement
	const baseSpeed = gameData.baseLandSpeedByRace(character.race());
	const baseSpeedEffects = applyEffects(baseSpeed, 'baseSpeed', effects);

	return (
		<div id="character-sheet">

			<Profile
				name={character.characterName()}
				hd={character.hd()}
				classLevelSummary={character.classLevelSummary()}
				alignment={character.alignment()}
				race={character.race()}
				age={character.age()}
				size={character.size()}
				sizeMod={gameData.sizeMod(character.size())}
				height={character.height()}
				weight={character.weight()}
				eyes={character.eyeColor()}
				hair={character.hairColor()}
				skin={character.skinColor()}
				languages={character.languages()}
			/>

			<div className="flex flex-wrap flex-justify-between">
				<Abilities abilityScores={abilityScoresEffects} />

				<Strength carry={carry} lift={lift} />

				<Movement
					baseSpeed={baseSpeedEffects}
					swimSpeed={gameData.swimSpeed(baseSpeedEffects.total)}
					climbSpeed={gameData.climbSpeed(baseSpeedEffects.total)}
				/>
			</div>

		</div>
	);
};
CharacterSheet.propTypes = {
	character: PropTypes.shape({}),
	gameData: PropTypes.shape({}),
};
CharacterSheet.defaultProps = {
	character: {},
	gameData: {},
};

export default CharacterSheet;
