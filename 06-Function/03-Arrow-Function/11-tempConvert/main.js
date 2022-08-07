const temp = (far) => {
	let cel = (5 * (far - 32)) / 9;
	return cel;
};

console.log(temp(34));
