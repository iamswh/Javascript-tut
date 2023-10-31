// function one() {
// 	const username = "hitesh";

// 	function two() {
// 		const website = "youtube";
// 		console.log(username);
// 	}
// 	// console.log(website);

// 	two();
// }
// one();

if (true) {
	const username = "hitesh";
	if (username === "hitesh") {
		const website = " youtube";
		console.log(username + website);
	}
	// console.log(website);
}

// console.log(username);

/* +++++++++++++++++ Different types of function declarationa +++++++++++++++++++ */
/**process 1: Here you can call the fucntion before accessing it as it is not stored inside any variable */
console.log(addOne(5));

function addOne(num) {
	return num + 1;
}

/**process 2: Here you can not call the fucntion before accessing it as it is stored inside any variable */

// console.log(addTwo(5));  /**You can't use this like that */

const addTwo = function (number) {
	return number + 2;
};

console.log(addTwo(5));
