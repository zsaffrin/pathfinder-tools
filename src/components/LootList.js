import React, { Component } from 'react';
import 'whatwg-fetch';

import LootItemEntry from './LootItemEntry';

class LootList extends Component {
	static fetchLootItemsFromServer() {
		return new Promise((resolve, reject) => {
			window.fetch('/api/loot', { method: 'GET' })
				.then(response => response.json())
				.then(json => resolve(json))
				.catch(err => reject(console.error(err)));
		});
	}

	static filterItemsByCategory(items, category) {
		const contents = [];
		items.map((item) => {
			if (item.category === category) {
				return contents.push(item);
			}
			return false;
		});
		return contents;
	}

	static totalBookValue(items) {
		let total = 0;
		items.map(({ claimed, bookValue }) => {
			if (!claimed) {
				total += bookValue;
			}
			return true;
		});
		return total;
	}

	constructor() {
		super();
		this.state = {
			loot: {
				items: [],
				categories: [],
			},
			playerShares: 8,
		};
	}

	componentDidMount() {
		this.populateLootItems();
	}

	populateLootItems() {
		LootList.fetchLootItemsFromServer()
			.then(loot => this.setState({ loot }));
	}

	render() {
		const { items, categories } = this.state.loot;
		const totalSalePrice = Math.floor(LootList.totalBookValue(items) / 2);
		const playerShare = Math.floor(totalSalePrice / this.state.playerShares);

		const formatPrice = num => num.toLocaleString('en-US');

		return (
			<div>
				<h2>Loot List</h2>

				<div className="my2 p1">
					<div className="h3">Total Sale Price: {formatPrice(totalSalePrice)}</div>
					<div className="h4 ml1">/ 8 portions = {formatPrice(playerShare)} cut</div>
				</div>

				<div className="flex flex-wrap">
					{categories.map(({ id, name }) => {
						const categoryItems = LootList.filterItemsByCategory(items, id);

						if (categoryItems.length > 0) {
							return (
								<div className="p1" key={id}>
									<h3>{name}</h3>
									<div className="my2 p1">
										<div className="flex heading border-bottom border-gray-dark">
											<div style={{ width: '20rem' }}>
												Item
											</div>
											<div style={{ width: '7rem' }}>
												Book Price
											</div>
											<div style={{ width: '7rem' }}>
												Sale Price
											</div>
											<div style={{ width: '4rem' }}>
												Claim
											</div>
										</div>

										{categoryItems.map(item => (
											<LootItemEntry {...item} key={item.id} />
										))}
									</div>
								</div>
							);
						}

						return false;
					})}
				</div>

			</div>
		);
	}
}

export default LootList;
