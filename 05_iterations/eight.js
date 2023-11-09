// Array.reduce() methods

const myArr = [1, 2, 3, 4, 5, 6];

// const total = myArr.reduce(function (acc, currval) {
// 	console.log(`Accumulator: ${acc} and current value: ${currval}`);
// 	return acc + currval;
// }, 3);

// same using arrow function
const total = myArr.reduce((acc, currval) => {
	// console.log(`Accumulator: ${acc} and current value: ${currval}`);
	return acc + currval;
}, 3);

// console.log(total);

const shoppingCart = [
	{
		itemName: "js course",
		price: 2999,
	},
	{
		itemName: "py course",
		price: 999,
	},
	{
		itemName: "mobile dev course",
		price: 5999,
	},
	{
		itemName: "data science course",
		price: 12999,
	},
];

//now show how much price to pay

const priceToPay = shoppingCart.reduce((Accumulator, item) => {
	return Accumulator + item.price;
}, 0);

console.log(`Your total payable price is ${priceToPay}`);
