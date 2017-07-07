import React, { Component } from 'react';
import 'whatwg-fetch';

class LootList extends Component {
	static fetchLootItemsFromServer() {
		return new Promise((resolve, reject) => {
			window.fetch('/api/loot', { method: 'GET' })
				.then(response => response.json())
				.then(json => resolve(json))
				.catch(err => reject(console.error(err)));
		});
	}

	constructor() {
		super();
		this.state = {
			loot: {
				items: [],
			},
		};
	}

	componentDidMount() {
		this.loadLootItems();
	}

	loadLootItems() {
		LootList.fetchLootItemsFromServer()
			.then(loot => this.setState({ loot }));
	}

	render() {
		const { loot } = this.state;

		const lootItemNodes = loot.items.map(({
			claimed, claimedBy, id, name, bookValue,
		}) => {
			let claimCell;
			if (claimed) {
				claimCell = (
					<div
						className="gray-light italic"
						style={{ width: '10rem' }}
					>
						{claimedBy}
					</div>
				);
			}

			return (
				<div className="flex" key={id}>
					<div
						className={`${claimed ? 'gray-light italic' : ''}`}
						style={{ width: '13rem' }}
					>
						{name}
					</div>

					<div
						className={`${claimed ? 'gray-light italic' : ''}`}
						style={{ width: '4rem' }}
					>
						{bookValue}
					</div>

					{claimCell}
				</div>
			);
		});

		return (
			<div>
				<h2>Loot List</h2>
				{loot.items.length} items loaded
				<div className="my2 p1">
					{lootItemNodes}
				</div>
			</div>
		);
	}
}

export default LootList;
