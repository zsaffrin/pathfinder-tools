import React from 'react';
import PropTypes from 'prop-types';

const SidebarItem = ({ icon, title, url }) => (
	<a href={url} className="p1 flex flex-center hover-bg-blue-dark hover-white">
		<div className={`fa fa-fw fa-${icon} m1`} />
		<div className="mx1">{title}</div>
	</a>
);
SidebarItem.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
};
SidebarItem.defaultProps = {
	icon: '',
	title: '',
	url: '',
};

export default SidebarItem;
