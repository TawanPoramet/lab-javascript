const employees = {
	john: {
		salary: 1000,
		address: { district: 'Ratchathewi', province: 'Bangkok' },
	},
	peter: {
		salary: 1500,
		address: { district: 'Pathumwan', province: 'Bangkok' },
	},
	mike: {
		salary: 800,
		address: { district: 'Pakkret', province: 'Nonthaburi' },
	},
	sarah: {
		salary: 2200,
		address: { district: 'Sriraja', province: 'Chonburi' },
	},
};

function checkName() {
	let name = prompt('Enter your name');

	if (name in employees) {
		return `Name: ${name}, salry: ${employees[name].salary}, adress: ${employees[name].address.district},${employees[name].address.province}`;
	} else {
		return 'not found';
	}
}

console.log(checkName());
