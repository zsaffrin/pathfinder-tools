import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ appTitle }) => (
	<div id="header" className="bg-red-darker white p1">
		<h1 className="m0">{appTitle}</h1>
	</div>
);
Header.propTypes = {
	appTitle: PropTypes.string,
};
Header.defaultProps = {
	appTitle: '[app title]',
};

export default Header;
