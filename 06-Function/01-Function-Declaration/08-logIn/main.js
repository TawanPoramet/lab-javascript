function login(usernme, password) {
	if (usernme === 'admin' && password === 'P@ssw0rd') {
		alert('correct');
	} else {
		alert('incorrect');
	}
}

let result = login('admin', 'P@ssw0rd');
console.log(result);
