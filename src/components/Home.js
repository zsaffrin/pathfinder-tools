import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<div id="character">
		<h2>Home</h2>
		<Link to="/character" className="hover-yellow-lighter">Character Sheet</Link>
	</div>
);

export default Home;
