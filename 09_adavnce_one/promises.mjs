import fetch from "node-fetch";

const promiseOne = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Async task completed");
		resolve();
	}, 1000);
});

promiseOne.then(() => {
	console.log("Promise one consumed");
});

new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Async task 2 completed");
		resolve();
	}, 1000);
}).then(() => {
	console.log("promise 2 consumed");
});

// Passing parameter inside promise through resolve
const promiseThree = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ userName: "Wajid", email: "wajid@mail.com" }); //Pasing parameter through object
	}, 1000);
});

promiseThree.then((user) => {
	console.log(user);
});

// Hnadling resolve and reject using then and catch
const promiseFour = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;
		if (!error) {
			resolve({ userName: "Doraemon", password: 123 });
		} else {
			reject("Error: Something went wrong");
		}
	}, 1000);
});

promiseFour
	.then((user) => {
		console.log(user);
		return user.userName;
	})
	.then((username) => {
		console.log(username);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("The promise is either resolved or rejected");
	});

// Async Await
const promiseFive = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true;
		if (!error) {
			resolve({ userName: "Javascript", password: 123 });
		} else {
			reject("Error: Javascript went wrong");
		}
	}, 1000);
});

async function consumePromiseFive() {
	try {
		const response = await promiseFive;
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

consumePromiseFive();

/*----------- API handling using async-await -----------*/

// async function getAllUsers() {
// 	try {
// 		const response = await fetch("https://jsonplaceholder.typicode.com/users");

// 		const data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log("E: ", error);
// 	}
// }

// getAllUsers();

// async function getUserDetails() {
// 	try {
// 		const response = await fetch("https://api.github.com/users/iamswh");
// 		const data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log("E: ", error);
// 	}
// }

// getUserDetails();

/*---------API handling using then method ------------*/

fetch("https://api.github.com/users/iamswh")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
