function checkNotNumber(num) {
	return num === null || num === '' || num.trim() === '' || isNaN(num);
}

let num1 = prompt('Enter Number1');
let num2 = prompt('Enter Number2');

if (checkNotNumber(num1)) {
	alert('Invalid number');
} else if (checkNotNumber(num2)) {
	alert('Invalid number');
} else {
	alert(+num1 + +num2);
}
