import React from 'react';
import PropTypes from 'prop-types';

import { showPlus } from '../_staticFunctions';

const Abilities = ({ character }) => {
	const abilityScores = character.abilityScores();

	let scoreTable;
	if (abilityScores) {
		scoreTable = (
			<table>
				{Object.keys(abilityScores).map((key) => {
					const abilityMod = character.calcAbilityMod(abilityScores[key]);

					return (
						<tr>
							<td className="caps">{key}</td>
							<td>{abilityScores[key]}</td>
							<td>{showPlus(abilityMod)}</td>
						</tr>
					);
				})}
			</table>
		);
	}

	return (
		<div id="attributes">
			<h3 className="mb1">Abilities</h3>
			{scoreTable}
		</div>
	);
};
Abilities.propTypes = {
	character: PropTypes.shape({}),
};
Abilities.defaultProps = {
	character: {},
};

export default Abilities;
