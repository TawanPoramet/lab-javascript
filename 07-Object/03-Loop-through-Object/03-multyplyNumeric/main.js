let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

let multiplyNumber = function (obj, num) {
	let multiply = {};

	for (let key in obj) {
		let result = obj[key];
		if (typeof result == 'number') {
			multiply[key] = result * num;
		} else {
			multiply[key] = result;
		}
	}
	return multiply;
};

console.log(multiplyNumber(menu, 3));
