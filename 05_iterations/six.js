// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((nums) => nums > 4);       //it will directly return the numbers
// console.log(newNums);

const newNums = myNums.filter((nums) => {
	return nums > 4; //Now as i started a scope so i have to us the "return" keyword otws it will print a empty array
});
console.log(newNums);

/* We can do the same using for each loop but using if-else */

// let newArray = [];
// myNums.forEach((nums) => {
// 	if (nums > 4) {
// 		newArray.push(nums);
// 	}
// });

// console.log(newArray);

const books = [
	{ title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
	{ title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
	{ title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
	{ title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
	{ title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
	{ title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
	{ title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
	{ title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
	{ title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//lets find the books which are non-fiction category
const nonFicBooks = books.filter((book) => {
	return book.genre === "Non-Fiction";
});

// console.log(nonFicBooks);

//lets find the books which are published between 1980 to 1999
const bookPublish = books.filter((book) => {
	return book.publish >= 1980 && book.publish <= 1999;
});

console.log(bookPublish);
