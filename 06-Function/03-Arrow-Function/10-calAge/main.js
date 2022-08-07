const age = (year) => {
	let day = (2020 - year) * 12 * 30;
	return day;
};

console.log(age(1996));
