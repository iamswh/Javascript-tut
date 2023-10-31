function sayMyName() {
	console.log("W");
	console.log("a");
	console.log("j");
	console.log("i");
	console.log("d");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
// 	console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
	// let result = number1 + number2;
	// return result;
	return number1 + number2; //This has been used for better memory management
}

// const results = addTwoNumbers(5, 3);
// console.log(addTwoNumbers(3, 5));

// function messege(username) {
// 	return `${username} just logged in`;
// }
function messege(username) {
	if (!username) {
		console.log("Please enter a username");
		return;
	}
	return `${username} just logged in`;
}

// console.log(messege());

//Rest operator in function parameter to take multiple arguments as input
function calculateCartPrice(...value) {
	return value;
}

// console.log(calculateCartPrice(20, 30, 40, 50, 412)); //Output [ 20, 30, 40, 50, 412 ]

//How to pass object in function and use it
const user = {
	name: "Wajid",
	price: 199,
};

function handleObject(anyObject) {
	console.log(
		`The name of the user is ${anyObject.name} and the pricce is ${anyObject.price}`
	);
}

// handleObject(user); //Here we have used an object which is previously made
//We also can pass an object directly inside a function

handleObject({
	name: "Syed Wajid",
	price: 1999,
});

//How to pass an array in function and use it
const myArray = [200, 100, 10, 488, 86];

function handleArray(anyArray) {
	return anyArray[2];
}

// console.log(handleArray(myArray));  //Here we have used an array which is previously made
//We also can pass an array directly inside a function

console.log(handleArray([200, 100, 10, 488, 86]));
