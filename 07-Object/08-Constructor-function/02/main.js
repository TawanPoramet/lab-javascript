function Acumulator(startingValue) {
	startingValue = 5;
	this.currentValue += startingValue;

	this.read = function () {
		this.number1 = +prompt('Enter number 1');
		this.number1 + startingValue;
	};
	this.show = function () {
		return this.number1 + startingValue;
	};
}

const obj1 = new Acumulator();

console.log(obj1.read());
console.log(obj1.show());
