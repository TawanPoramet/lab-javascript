// function checkNotNumber (num){
//     return num === null || num ===  '' || num.trim() === '' || isNaN(num);
// }

// checkNotNumber(null)
// checkNotNumber('')
// checkNotNumber('                ')
// checkNotNumber("CodeCamp")
// checkNotNumber("52")

// function checkNumber (num){
//     return !(num === null || num ===  '' || num.trim() === '' || isNaN(num));
// }

// checkNumber(null)
// checkNumber('')
// checkNumber('                ')
// checkNumber("CodeCamp")
// checkNumber("52")

// let result = prompt("Enter Number")

// if(checkNumber(result)){

//     if(+result % 2 === 0) {
//         alert("Even Number")
//     } else {
//         alert("Odd Number")
//     }

// } else {
//     alert("Invalid")
// }

let input = prompt('Enter Number');
if (input === null || input === '' || input.trim() === '' || isNaN(input))
	alert('invalid number');
else if (input % 2 == 0) {
	alert('even number');
} else {
	alert('odd number');
}
