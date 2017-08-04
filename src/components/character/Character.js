import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import Attributes from './Attributes';
import Abilities from './Abilities';

const Character = ({ character }) => {
	const { name, baseAbilityScores, abilityMods, levels, hd,
		alignment, race, height, hair, eyes, weight, size } = character;

	return (
		<div id="character">
			<h2 className="mx1">Character Sheet</h2>

			<div className="flex">
				<Card>
					<Attributes
						name={name}
						levels={levels}
						hd={hd}
						alignment={alignment}
						race={race}
						height={height}
						hair={hair}
						eyes={eyes}
						weight={weight}
						size={size}
					/>
				</Card>
			</div>

			<div className="flex">
				<Card>
					<Abilities
						scores={baseAbilityScores}
						mods={abilityMods}
					/>
				</Card>
			</div>

		</div>
	);
};
Character.propTypes = {
	character: PropTypes.shape({
		name: PropTypes.string,
	}),
};
Character.defaultProps = {
	character: {},
};

export default Character;
