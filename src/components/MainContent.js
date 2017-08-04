import React from 'react';
import PropTypes from 'prop-types';

const style = {
	height: '95vh',
};

const MainContent = ({ children }) => (
	<div id="main-content" style={style}>
		<div className="container p1">
			{children}
		</div>
	</div>
);
MainContent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};
MainContent.defaultProps = {
	children: null,
};

export default MainContent;
