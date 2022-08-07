const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
const newArr = [];

alphabets.filter(function (item, index) {
	if (item === 'a') {
		newArr.push(index);
	}
});

console.log(newArr);
