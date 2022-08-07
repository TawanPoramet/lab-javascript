const array = [29, 17, 13, 47, 23, 31];
let sum = 0;

function run(item) {
	sum += item;
}

array.forEach(run);
console.log(sum);
