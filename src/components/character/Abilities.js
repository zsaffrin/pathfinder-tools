import React from 'react';
import PropTypes from 'prop-types';

import { showPlus, calcAbilityMod } from '../_staticFunctions';

const Abilities = ({ scores }) => (
	<div id="abilities">
		<div className="h3">Abilities</div>
		<table>
			<tbody>
				{Object.keys(scores).map(key => (
					<tr key={key}>
						<th className="p-thin strong-label caps left">{key}</th>
						<td className="p-thin center">{scores[key]}</td>
						<td className="p-thin center">
							({showPlus(calcAbilityMod(scores[key]))})
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
Abilities.propTypes = {
	scores: PropTypes.shape({}),
};
Abilities.defaultProps = {
	scores: {},
};

export default Abilities;
