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
