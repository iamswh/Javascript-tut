/*Usage of this : Generally this is used to reffer the current cotext*/
const user = {
	username: "Wajid",
	price: 999,
	welcomeMessege: function () {
		console.log(`${this.username}, Welcome to the website.`);
		console.log(this);
	},
};

// user.welcomeMessege();
// user.username = "Hossain";
// user.welcomeMessege();

// console.log(this);

/* "This" can not be used here "this" is generally works with objects */

// function chai() {
// 	let username = "Wajid";
// 	console.log(this.username);     //o/p: undefined
// }

// chai();

//Same expression with arrow function
const chai = () => {
	let username = "Wajid";
	console.log(this.username);
};
// chai();

/* let's deep dive into arrow function */
// const addTwo = (num1, num2) => {
// 	return num1 + num2;
// };

//Implicit return of arrow functoin
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);    //This is basically used in react
// console.log(addTwo(4, 5));

//Returning objects in arrow functions
const objectReturn = () => ({ name: "Wajid Hossain" });
console.log(objectReturn());
