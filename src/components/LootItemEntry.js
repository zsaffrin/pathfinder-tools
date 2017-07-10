import React from 'react';
import PropTypes from 'prop-types';

const LootItemEntry = ({ name, category, bookValue, claimed, claimedBy }) => {
	const formatPrice = num => num.toLocaleString('en-US');

	let salePrice;
	if (!claimed) {
		if (category === 9) {
			salePrice = bookValue;
		} else {
			salePrice = Math.floor(bookValue / 2);
		}
	}

	return (
		<div className="flex">
			<div
				className={`${claimed ? 'gray-light italic' : ''}`}
				style={{ width: '20rem' }}
			>
				{name}
			</div>

			<div
				className={`${claimed ? 'gray-light italic' : ''}`}
				style={{ width: '7rem' }}
			>
				{formatPrice(bookValue)}
			</div>

			<div
				className={`${claimed ? 'gray-light italic' : ''}`}
				style={{ width: '7rem' }}
			>
				{!claimed ? formatPrice(salePrice) : ''}
			</div>

			<div
				className={`${claimed ? 'gray-light italic' : ''}`}
				style={{ width: '4rem' }}
			>
				{claimed ? claimedBy : ''}
			</div>
		</div>
	);
};
LootItemEntry.propTypes = {
	name: PropTypes.string,
	category: PropTypes.number,
	bookValue: PropTypes.number,
	claimed: PropTypes.bool,
	claimedBy: PropTypes.string,
};
LootItemEntry.defaultProps = {
	name: '',
	category: 0,
	bookValue: 0,
	claimed: false,
	claimedBy: '',
};

export default LootItemEntry;
