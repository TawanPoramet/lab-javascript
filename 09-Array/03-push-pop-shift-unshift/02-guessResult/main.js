let arr = ['a', 'b'];

arr.push(function () {
	alert(this);
});

arr[2](); // *alert arrทั้งก้อน
