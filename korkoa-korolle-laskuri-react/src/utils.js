const numberToCorrectFormatString = (number, decimals = 0) => {
	return number
		.toFixed(decimals)
		.toString()
		.replace(".", ",")
		.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const changeValueToBeInRange = (value, min, max) => {
	if (value > max) {
		value = max;
	} else if (value < min) {
		value = min;
	}
	return isNaN(value) ? 0 : value;
};

export {numberToCorrectFormatString, changeValueToBeInRange}