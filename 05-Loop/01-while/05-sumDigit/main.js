let number = +prompt('EnterNumber');
let sum = 0;

while (number) {
	let remainder = number % 10;
	number = (number - remainder) / 10;
	sum = sum + remainder;
}
alert(sum);
