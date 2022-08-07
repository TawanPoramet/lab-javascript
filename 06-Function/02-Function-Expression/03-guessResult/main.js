function magic() {
	return function (x) {
		return x * 42;
	};
}
const answer = magic();
console.log(magic()); // * y>>>>>>>function
console.log(magic()(1337)); // **  y(1337)>>>>> 1337*42
console.log(magic(1337)(42)); // *** y(42)>>>>> 42*42
