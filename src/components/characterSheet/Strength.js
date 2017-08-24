import React from 'react';
import PropTypes from 'prop-types';

const Strength = ({ carry, lift }) => {
	const { lightLoad, mediumLoad, heavyLoad } = carry;
	const { overhead, offGround, pushOrDrag } = lift;

	return (
		<div id="strength">
			<h3 className="mb1">Strength</h3>
			<div className="flex flex-wrap">
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
										{overhead}
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
										{offGround}
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
										{pushOrDrag}
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
	carry: PropTypes.shape({}),
	lift: PropTypes.shape({}),
};
Strength.defaultProps = {
	carry: {},
	lift: {},
};

export default Strength;
