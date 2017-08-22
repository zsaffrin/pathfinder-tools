import React from 'react';
import PropTypes from 'prop-types';

const Movement = ({ baseSpeed, climbSpeed, swimSpeed }) => (
	<div id="movement">
		<h3 className="mb1">Movement</h3>
		<table>
			<tr>
				<td className="border border-gray-lighter">
					<div className="flex flex-baseline">
						<div className="flex-auto px1 center">
							{baseSpeed.total}
						</div>
						<div className="pr1 size-sm gray-dark">FT</div>
					</div>
				</td>
				<td className="pl1">Base Speed</td>
			</tr>
			<tr>
				<td className="border border-gray-lighter">
					<div className="flex flex-baseline">
						<div className="flex-auto px1 center">
							{climbSpeed}
						</div>
						<div className="pr1 size-sm gray-dark">FT</div>
					</div>
				</td>
				<td className="pl1">Climb</td>
			</tr>
			<tr>
				<td className="border border-gray-lighter">
					<div className="flex flex-baseline">
						<div className="flex-auto px1 center">
							{swimSpeed}
						</div>
						<div className="pr1 size-sm gray-dark">FT</div>
					</div>
				</td>
				<td className="pl1">Swim</td>
			</tr>
		</table>
	</div>
);
Movement.propTypes = {
	baseSpeed: PropTypes.shape({}),
	climbSpeed: PropTypes.number,
	swimSpeed: PropTypes.number,
};
Movement.defaultProps = {
	baseSpeed: {},
	climbSpeed: 0,
	swimSpeed: 0,
};

export default Movement;
