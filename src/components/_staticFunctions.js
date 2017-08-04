
export const showPlus = num => (
	(num >= 0) ? `+${num}` : num
);

export const formatLength = inches => (
	`${inches}"`
);

export const calcAbilityMod = score => (
	Math.floor((score - 10) / 2)
);

export default showPlus;
