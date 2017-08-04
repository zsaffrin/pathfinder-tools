import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => (
	<div className="m1 border border-gray-lighter rounded p2">
		{children}
	</div>
);
Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};
Card.defaultProps = {
	children: null,
};

export default Card;
