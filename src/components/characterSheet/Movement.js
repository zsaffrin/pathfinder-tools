import React from 'react';
import PropTypes from 'prop-types';

const Movement = ({ character, gameData }) => (
	<div id="movement">
		<h3 className="mb1">Movement</h3>
		<table>
			<tr>
				<td className="border border-gray-lighter">
					<div className="flex flex-baseline">
						<div className="flex-auto px1 center">
							{gameData.baseLandSpeed(character.race())}
						</div>
						<div className="pr1 size-sm gray-dark">FT</div>
					</div>
				</td>
				<td className="pl1">Base Speed</td>
			</tr>
		</table>
	</div>
);
Movement.propTypes = {
	character: PropTypes.shape({}),
	gameData: PropTypes.shape({}),
};
Movement.defaultProps = {
	character: {},
	gameData: {},
};

export default Movement;
