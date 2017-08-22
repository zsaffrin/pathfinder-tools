import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'overeasy/dist/overeasy.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/App.scss';

import Header from './Header';
import MainContent from './MainContent';
import Character from '../models/Character';
import Game from '../models/Game';
import CharacterSheet from './characterSheet/CharacterSheet';
import Footer from './Footer';

// TODO: Store data elsewhere
const tempCharacterData = {
	abilities: {
		str: 20,
		dex: 22,
		con: 16,
		int: 13,
		wis: 15,
		cha: 12,
	},
	age: 30,
	alignment: {
		morality: 'good',
		lawfulness: 'chaotic',
	},
	characterName: 'Cale "Two-Blade" Manton',
	eyeColor: 'blue',
	favoredClass: 'barbarian',
	hairColor: 'brown',
	height: 67,
	languages: [
		'common',
		'orc',
	],
	levels: [
		{
			characterLevel: 1,
			levelClass: 'barbarian',
		},
		{
			characterLevel: 2,
			levelClass: 'rogue',
		},
		{
			characterLevel: 3,
			levelClass: 'barbarian',
		},
		{
			characterLevel: 4,
			levelClass: 'fighter',
		},
	],
	race: 'human',
	size: 'medium',
	skinColor: 'tan',
	weight: 240,
};
const tempGameData = {
	carryingCapacityByStrength: {
		1: {
			lightLoad: {
				max: 3,
			},
			mediumLoad: {
				min: 4,
				max: 6,
			},
			heavyLoad: {
				min: 7,
				max: 10,
			},
		},
		20: {
			lightLoad: {
				max: 133,
			},
			mediumLoad: {
				min: 134,
				max: 266,
			},
			heavyLoad: {
				min: 267,
				max: 400,
			},
		},
	},
	baseLandSpeedByRace: {
		human: 30,
	},
	effectsByClassByLevel: {
		barbarian: {
			1: [
				{
					affects: 'baseSpeed',
					name: 'Fast Movement',
					type: 'add',
					value: 10,
				},
			],
			2: [
				{
					affects: 'baseSpeed',
					name: 'Fast Movement',
					type: 'add',
					value: 10,
				},
			],
		},
	},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appTitle: 'Pathfinder Tools',
			character: new Character(tempCharacterData),
			gameData: new Game(tempGameData),
		};
	}

	render() {
		const { appTitle, character, gameData } = this.state;

		return (
			<Router>
				<div id="app">
					<Header appTitle={appTitle} />

					<MainContent>
						<Route
							path="/"
							render={props => (
								<CharacterSheet
									character={character}
									gameData={gameData}
									{...props}
								/>
							)}
						/>
					</MainContent>

					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
