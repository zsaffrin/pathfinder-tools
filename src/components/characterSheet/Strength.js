import React from 'react';
import PropTypes from 'prop-types';

const Strength = ({ character, gameData }) => {
	const {
		lightLoad,
		mediumLoad,
		heavyLoad,
	} = gameData.carryingCapacity(character.strength()) || {};

	return (
		<div id="strength">
			<h3 className="mb1">Strength</h3>
			<div className="flex">
				<div className="p1">
					<div className="caps px2">Carry</div>
					<table>
						<tr>
							<td className="border border-gray-lighter">
								<div className="flex flex-baseline">
									<div className="flex-auto px1 center">
										&gt;= {lightLoad.max}
									</div>
									<div className="pr1 size-sm gray-dark">LB</div>
								</div>
							</td>
							<td className="pl1">Light</td>
						</tr>
						<tr>
							<td className="border border-gray-lighter">
								<div className="flex flex-baseline">
									<div className="flex-auto px1 center">
										{mediumLoad.min}-{mediumLoad.max}
									</div>
									<div className="pr1 size-sm gray-dark">LB</div>
								</div>
							</td>
							<td className="pl1">Medium</td>
						</tr>
						<tr>
							<td className="border border-gray-lighter">
								<div className="flex flex-baseline">
									<div className="flex-auto px1 center">
										{heavyLoad.min}-{heavyLoad.max}
									</div>
									<div className="pr1 size-sm gray-dark">LB</div>
								</div>
							</td>
							<td className="pl1">Heavy</td>
						</tr>
					</table>
				</div>

				<div className="p1">
					<div className="caps px2">Lift</div>
					<table>
						<tr>
							<td className="border border-gray-lighter">
								<div className="flex flex-baseline">
									<div className="flex-auto px1 center">
										{gameData.liftOverhead(character.strength())}
									</div>
									<div className="pr1 size-sm gray-dark">LB</div>
								</div>
							</td>
							<td className="pl1">Overhead</td>
						</tr>
						<tr>
							<td className="border border-gray-lighter">
								<div className="flex flex-baseline">
									<div className="flex-auto px1 center">
										{gameData.liftOffGround(character.strength())}
									</div>
									<div className="pr1 size-sm gray-dark">LB</div>
								</div>
							</td>
							<td className="pl1">Off Ground</td>
						</tr>
						<tr>
							<td className="border border-gray-lighter">
								<div className="flex flex-baseline">
									<div className="flex-auto px1 center">
										{gameData.pushOrDrag(character.strength())}
									</div>
									<div className="pr1 size-sm gray-dark">LB</div>
								</div>
							</td>
							<td className="pl1">Push/Drag</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};
Strength.propTypes = {
	character: PropTypes.shape({}),
	gameData: PropTypes.shape({}),
};
Strength.defaultProps = {
	character: {},
	gameData: {},
};

export default Strength;
