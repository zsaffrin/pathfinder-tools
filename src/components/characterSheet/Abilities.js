import React from 'react';
import PropTypes from 'prop-types';

import { showPlus } from '../_staticFunctions';

const Abilities = ({ abilityScores }) => (
	<div id="attributes" className="section">
		<h3>Abilities</h3>
		<table>
			<tr>
				<td />
				<td className="center size-xs caps">Score</td>
				<td className="center size-xs caps">Mod</td>
			</tr>
			{abilityScores.map(({ ability, score, mod }) => (
				<tr>
					<td className="caps bold center">{ability}</td>
					<td className="border border-gray-lighter px1 center">{score.total}</td>
					<td className="px1 center">{showPlus(mod)}</td>
				</tr>
			))}
		</table>
	</div>
);
Abilities.propTypes = {
	abilityScores: PropTypes.arrayOf(
		PropTypes.shape({}),
	),
};
Abilities.defaultProps = {
	abilityScores: [],
};

export default Abilities;
