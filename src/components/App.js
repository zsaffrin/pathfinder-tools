import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

require('overeasy/dist/overeasy.min.css');
require('font-awesome/css/font-awesome.min.css');
require('../styles/App.scss');

const App = () => (
	<Router>
		<div id="app">
			Pathfinder Tools
		</div>
	</Router>
);

export default App;
