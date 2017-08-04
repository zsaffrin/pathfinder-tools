import React from 'react';
import PropTypes from 'prop-types';

import { showPlus } from '../_staticFunctions';

const Abilities = ({ scores, mods }) => (
	<div id="abilities">
		<div className="h3">Abilities</div>
		<table>
			<tbody>
				{Object.keys(scores).map(key => (
					<tr key={key}>
						<th className="p-thin strong-label caps left">{key}</th>
						<td className="p-thin center">{scores[key]}</td>
						<td className="p-thin center">
							({showPlus(mods[key])})
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
Abilities.propTypes = {
	scores: PropTypes.shape({}),
	mods: PropTypes.shape({}),
};
Abilities.defaultProps = {
	scores: {},
	mods: {},
};

export default Abilities;
