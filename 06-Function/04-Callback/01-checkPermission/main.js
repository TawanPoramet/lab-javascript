const checkPermission = (role, a, b) => {
	if (role === 'ADMIN') {
		a();
	} else {
		b();
	}
};

function yesAdmin() {
	alert('ACCESS GRANTED');
}

function noAdmin() {
	alert('ACCESS DENIED');
}

checkPermission('ADMINf', yesAdmin, noAdmin);
