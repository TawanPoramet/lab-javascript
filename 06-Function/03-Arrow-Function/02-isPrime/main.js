// let isprime = (num) => {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// console.log(isprime(23));

let isprime = (num) => {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
};
console.log(isprime(34));
