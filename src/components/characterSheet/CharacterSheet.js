import React from 'react';
import PropTypes from 'prop-types';

import Profile from './Profile';
import Abilities from './Abilities';
import Strength from './Strength';
import Movement from './Movement';

import { flattenAndCleanArray, applyEffects, showPlus } from '../_staticFunctions';

const CharacterSheet = ({ character, gameData }) => {
	// Collect active effects
	const classLevelSummary = character.classLevelSummary();
	let effects = Object.keys(classLevelSummary).map(key => (
		gameData.classEffectsByLevel(key, classLevelSummary[key])
	));
	effects = flattenAndCleanArray(effects, null);

	// Abilities
	const abilityScores = character.abilityScores();
	const abilityTableRows = Object.keys(abilityScores).map((key) => {
		const abilityMod = character.calcAbilityMod(abilityScores[key]);

		return (
			<tr>
				<td className="caps">{key}</td>
				<td>{abilityScores[key]}</td>
				<td>{showPlus(abilityMod)}</td>
			</tr>
		);
	});

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
	const swimSpeed = gameData.swimSpeed(baseSpeedEffects.total);
	const climbSpeed = gameData.climbSpeed(baseSpeedEffects.total);

	return (
		<div id="character-sheet">
			<Profile character={character} />

			<Abilities abilityTableRows={abilityTableRows} />

			<Strength carry={carry} lift={lift} />

			<Movement
				baseSpeed={baseSpeedEffects}
				swimSpeed={swimSpeed}
				climbSpeed={climbSpeed}
			/>
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
