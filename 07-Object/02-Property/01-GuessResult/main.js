const user = {
	email: 'cc@gmail.com',
	isActive: true,
};

user.isActive = false;
console.log(user); // *
user = {};
console.log(user); // **

//   email: 'cc@gmail.com',
//   isActive: false

// แตก
