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
	return number1 + number2;
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

console.log(messege());
