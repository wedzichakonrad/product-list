import { currency } from "../utils/utils";

export const cutProductTitle = (title) => {
	const maxCharactersCount = 30;

	if (title.length > maxCharactersCount) {
		return title.slice(0, maxCharactersCount) + "...";
	}

	return title;
};

export const extractIdFromPath = (pathName) => {
	const regex = /\/products\/(\d+)\/details/;
	const match = pathName.match(regex);

	return match ? match[1] : null;
};

export const formatPrice = (price) => {
	const numberOfDigits = 2;
	const formattedNumber = price.toFixed(numberOfDigits);
	return `${formattedNumber.replace(".", ",")} ${currency}`;
};
