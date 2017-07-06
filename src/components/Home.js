import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ tools }) => {
	const toolNodes = tools.map(({ id, name, desc, url }) => (
		<a
			href={url}
			className="p2 block border border-gray-lighter hover-border-gray-dark"
			key={id}
		>
			<h3 className="mt0">{name}</h3>
			<p>{desc}</p>
		</a>
	));

	return (
		<div className="p1">
			<p>Welcome to Pathfinder tools!</p>
			<div className="my3">
				{toolNodes}
			</div>
		</div>
	);
};
Home.propTypes = {
	tools: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			desc: PropTypes.string,
			url: PropTypes.string,
		}),
	),
};
Home.defaultProps = {
	tools: [],
};

export default Home;
