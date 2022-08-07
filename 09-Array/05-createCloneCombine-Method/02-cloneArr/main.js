const arr = [1, 2, 3, 4];
let newArr;

function clone(arr) {
	newArr = arr.slice();
}

clone(arr);
console.log(arr);
console.log(newArr);
