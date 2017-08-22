import React from 'react';
import PropTypes from 'prop-types';

const Abilities = ({ abilityTableRows }) => (
	<div id="attributes">
		<h3 className="mb1">Abilities</h3>
		{abilityTableRows}
	</div>
);
Abilities.propTypes = {
	abilityTableRows: PropTypes.arrayOf(
		PropTypes.node,
	),
};
Abilities.defaultProps = {
	abilityTableRows: [],
};

export default Abilities;
