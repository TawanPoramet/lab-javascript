let score = (win, draw, lose) => {
	let a = win * 3;
	let b = draw;
	return a + b;
};

console.log(score(3, 5, 0));
