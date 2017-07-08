import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SidebarItem from './SidebarItem';
import Home from './Home';
import LootList from './LootList';

require('overeasy/dist/overeasy.min.css');
require('font-awesome/css/font-awesome.min.css');
require('../styles/App.scss');

const App = () => {
	const tools = [
		{
			id: 1,
			name: 'Loot List',
			desc: 'For managing all your new shiny',
			icon: 'list',
			url: '/lootlist',
		},
	];

	return (
		<Router>
			<div>
				<div className="p1 bg-red-darker white">
					<h1 className="m0">Pathfinder Tools</h1>
				</div>

				<div className="flex" style={{ minHeight: '95vh' }}>
					<div className="bg-gray-lighter" style={{ minWidth: '10rem' }}>
						<SidebarItem icon="home" title="Home" url="/" />
						{tools.map(({ id, icon, name, url }) => (
							<SidebarItem icon={icon} title={name} url={url} key={id} />
						))}
					</div>
					<div className="p2 flex-auto">
						<Route
							exact
							path="/"
							render={props => (
								<Home tools={tools} {...props} />
							)}
						/>

						<Route
							path="/lootlist"
							render={() => <LootList />}
						/>
					</div>
				</div>

				<footer className="bg-red-darker white p1">
					Made by Zach
				</footer>
			</div>
		</Router>
	);
};

export default App;
