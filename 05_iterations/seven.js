//use of .map() methods

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => {
// 	return num + 10;
// });
// console.log(newNums);

//Chain-ing of different methods
const newNums = myNumbers
	.map((num) => {
		return num + 10;
	})
	.map((num) => {
		return num + 1;
	})
	.filter((num) => {
		return num > 15;
	});

console.log(newNums);
