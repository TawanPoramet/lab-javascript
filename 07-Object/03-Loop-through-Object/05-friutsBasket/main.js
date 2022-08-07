function fruitBasket() {
	const result = {};
	let key;
	let value;
	do {
		key = prompt('Enter type fruit');
		value = +prompt('Enter number');
		if (key !== null && value !== null) {
			if (value > 1) {
				result[key + 's'] = value;
			} else {
				result[key] = value;
			}
		}
	} while (key !== null && value !== null);
	return result;
}

let user = fruitBasket();
console.log(user);
