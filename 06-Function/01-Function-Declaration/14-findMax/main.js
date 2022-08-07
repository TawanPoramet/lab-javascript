function max(a, b, c, d) {
	if (a === undefined) {
		return undefined;
	} else if (b === undefined) {
		return a;
	} else if (c === undefined) {
		return Math.max(a, b);
	} else if (d === undefined) {
		return Math.max(a, b, c);
	}

	if (isNaN(a) | isNaN(b) || isNaN(c) || isNaN(d)) {
		return 'NaN na';
	}

	return Math.max(a, b, c, d);
}

console.log(max(7, 3, 'g', 2));
