// const THE_SENTINEL = 'stop'
// function createObjectFromUserInput () {

//     const result = {}

//     //  modified Object
//     let key;
//     let value;
//     do {

//     key = prompt("Enter key")
//     value = prompt("Enter value")
//     if(key !== null && key.trim !== '' && key !== THE_SENTINEL && value !== THE_SENTINEL){
//         // Update ได้
//         result[key] = value
//     }

//     } while (key !== THE_SENTINEL && value !== THE_SENTINEL)

//     return result
// }

// let userCreateObject = createObjectFromUserInput()

// console.log(userCreateObject)

const sentinel = 'stop';
function COFU() {
	const result = {};
	let key;
	let value;
	do {
		key = prompt('Enter key');
		value = prompt('Enter value');
		if (
			key !== null &&
			key.trim !== '' &&
			key !== sentinel &&
			value !== sentinel
		) {
			result[key] = value;
		}
	} while (key !== sentinel && value !== sentinel);
	return result;
}

let userc = COFU();
console.log(userc);
