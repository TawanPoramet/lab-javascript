let calculator = {
	number1: 0,
	number2: 0,
	read: function () {
		this.number1 = +prompt('Enter number 1');
		this.number2 = +prompt('Enter number 2');
	},
	sum: function () {
		return this.number1 + this.number2;
	},
	mul: function () {
		return this.number1 * this.number2;
	},
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
