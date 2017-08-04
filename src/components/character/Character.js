import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import Attributes from './Attributes';
import Abilities from './Abilities';

const Character = ({ character }) => {
	const { attributes, abilities, abilityMods, levels, alignment, size, languages } = character;

	return (
		<div id="character">
			<h2 className="mx1">Character Sheet</h2>

			<div className="flex">
				<Card>
					<Attributes
						attributes={attributes}
						levels={levels}
						alignment={alignment}
						size={size}
						languages={languages}
					/>
				</Card>
			</div>

			<div className="flex">
				<Card>
					<Abilities
						scores={abilities}
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
