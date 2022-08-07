function shoppingCart() {
	let name;
	let num;
	let price;
	let discount;
	let netPrice;

	do {
		name = prompt('Enter type fruit');
		num = +prompt('Enter number');
		price = +prompt('Enter price');
		discount = +prompt('Enter discount');
		if (name !== null && num !== null && price !== null && discount !== null) {
			if (discount !== 0) {
				netPrice = num * price * (discount / 100);
				let obj = {
					name: name,
					num: num,
					price: price,
					discount: discount,
					netPrice: netPrice,
				};
				return obj;
			} else {
				netPrice = num * price;
				let obj = {
					name: name,
					num: num,
					price: price,
					netPrice: netPrice,
				};
				return obj;
			}
		}
	} while (
		name !== null &&
		num !== null &&
		price !== null &&
		discount !== null
	);
}

console.log(shoppingCart());
