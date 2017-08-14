import React from 'react';
import PropTypes from 'prop-types';

import Profile from './Profile';
import Abilities from './Abilities';
import Strength from './Strength';
import Movement from './Movement';

const CharacterSheet = ({ character, gameData }) => (
	<div id="character-sheet">
		<Profile character={character} />
		<Abilities character={character} />
		<Strength character={character} gameData={gameData} />
		<Movement character={character} gameData={gameData} />
	</div>
);
CharacterSheet.propTypes = {
	character: PropTypes.shape({}),
	gameData: PropTypes.shape({}),
};
CharacterSheet.defaultProps = {
	character: {},
	gameData: {},
};

export default CharacterSheet;
