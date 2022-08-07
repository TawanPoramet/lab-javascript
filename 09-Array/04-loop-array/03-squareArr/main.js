const arr = [2, 3, 5, 7, 11];
let squareArr;
const resultarr = [];

function run(item, index) {
	squareArr = item ** 2;
	resultarr.push(squareArr);
	
}

arr.forEach(run);
console.log(resultarr);