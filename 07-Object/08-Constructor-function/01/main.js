// let calculator = {
// 	number1: 0,
// 	number2: 0,
// 	read: function () {
// 		this.number1 = +prompt('Enter number 1');
// 		this.number2 = +prompt('Enter number 2');
// 	},
// 	sum: function () {
// 		return this.number1 + this.number2;
// 	},
// 	mul: function () {
// 		return this.number1 * this.number2;
// 	},
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

function Calculator(number1, number2) {
	this.number1 = 0;
	this.number2 = 0;
	this.read = function () {
		this.number1 = +prompt('Enter number 1');
		this.number2 = +prompt('Enter number 2');
	};
	this.sum = function () {
		return this.number1 + this.number2;
	};
	this.mul = function () {
		return this.number1 * this.number2;
	};
}

const obj1 = new Calculator();

// console.log(obj1.read());
console.log(obj1.sum());
console.log(obj1.mul());
