let leapyear = (year) => {
	if (year % 100 == 0) {
		if (year % 400 == 0) {
			return true;
		}
		return false;
	} else if (year % 4 == 0) {
		return true;
	} else {
		return false;
	}
};

console.log(leapyear(1500));
