import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'overeasy/dist/overeasy.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/App.scss';

import Header from './Header';
import MainContent from './MainContent';
import Home from './Home';
import Character from './Character';
import Footer from './Footer';

const defaultState = require('../config/defaultState.json');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = defaultState || {
			appTitle: '',
		};
	}

	render() {
		const { appTitle } = this.state;

		return (
			<Router>
				<div id="app">
					<Header appTitle={appTitle} />

					<MainContent>
						<Route exact path="/" component={Home} />
						<Route path="/character" component={Character} />
					</MainContent>

					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
