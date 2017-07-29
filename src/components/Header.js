import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ appTitle }) => (
	<div id="header" className="flex bg-red-darker white">
		<Link to="/" className="p1 hover-yellow-lighter">
			<h1 className="m0">{appTitle}</h1>
		</Link>
	</div>
);
Header.propTypes = {
	appTitle: PropTypes.string,
};
Header.defaultProps = {
	appTitle: '[app title]',
};

export default Header;
