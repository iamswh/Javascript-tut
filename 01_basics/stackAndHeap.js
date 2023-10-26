// Primitives are stored in Stack memory
// Non-primitives are store in heap memory

/* Primitive datatypes example */
let myName = "Wajid";
let anotherName = myName;
anotherName = "Syed Wajid Hossain";

console.log(myName);
console.log(anotherName);

/* Non-primitive datatypes example */
let userOne = {
	name: "Wajid",
	email: "spiderman@yahoo.com",
};

let userTwo = userOne;
userTwo.email = "waterman@google.com";

console.log(userOne.email);
