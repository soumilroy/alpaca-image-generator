import { alpacaConfig } from "../alpacaConfig";

const getRandomItemFromArray = (arr) => {
	// const randNum = Math.floor(Math.random() * arr.length);
	// continued
};

export const randomize = () => {
	return [...alpacaConfig].map((feature) => {
		return {
			...feature,
			items: getRandomItemFromArray(feature.items),
		};
	});
};
