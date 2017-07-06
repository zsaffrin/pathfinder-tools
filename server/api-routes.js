const fs = require('fs');

module.exports = (app) => {
	app.route('/api/loot')
		.get((req, res) => {
			fs.readFile('./server/data/loot-list.json', (err, data) => {
				if (err) {
					res.send(err);
				}

				const loot = JSON.parse(data);
				res.json(loot);
			});
		});
};
