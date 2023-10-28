const mySym = Symbol("key1");

const myObj = {
	name: "Wajid",
	[mySym]: "mykey1",
	age: 18,
	location: "Kolkata",
	email: "wajid@yahoo.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Wednesday", "Saturday"],
};

//How to access the value of objects
//method 1 is using dot operator and another is using [], 2nd one is the best way cause it works with everthing
// console.log(myObj.location);
// console.log(myObj["age"]);
// console.log(typeof myObj["age"]);
// console.log(typeof myObj[mySym]);
// console.log(myObj["lastLoginDays"]);
// console.log(myObj);

//Inserting of a function inside a object
myObj.myFunction = function () {
	console.log("Hello JS user....");
};
console.log(myObj.myFunction());

myObj.myFunction2 = function () {
	console.log(`Hello JS user ${this.name}`);
};
console.log(myObj.myFunction2());
