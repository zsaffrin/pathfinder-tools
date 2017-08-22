
export const showPlus = num => (
	(num >= 0) ? `+${num}` : num
);

export const formatLength = inches => (
	`${inches}"`
);

export const flattenArray = array => array.reduce(
	(acc, val) => acc.concat(
		Array.isArray(val) ? flattenArray(val) : val,
	),
);

export const cleanArray = (array, value) => {
	for (let i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			array.splice(i, 1);
			i -= 1;
		}
	}

	return array;
};

export const flattenAndCleanArray = (array, value) => {
	let newArray = flattenArray(array);
	newArray = cleanArray(newArray, value);
	return newArray;
};

export const applyEffects = (baseValue, affectKey, effects) => {
	let total = baseValue;
	const appliedEffects = [
		{
			value: baseValue,
			label: 'Base land speed',
		},
	];

	effects.forEach(({ affects, type, value }) => {
		if (affects === affectKey) {
			if (type === 'add') {
				total += value;
			}
		}
	});

	return { total, appliedEffects };
};
