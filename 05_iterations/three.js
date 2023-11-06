// for of loop

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];
for (const nums of arr) {
	// console.log(nums);
}

const greetings = "Hello World!";
for (const greet of greetings) {
	// if (greet == " ") {
	// 	continue;
	// }
	// console.log(`Each character is: ${greet}`);
}

/* *******************MAP*********************** */
const maps = new Map();
maps.set("IN", "India");
maps.set("GR", "Germany");
maps.set("USA", "United States of America");
maps.set("FR", "France");
maps.set("SZE", "Switzerland");

console.log(maps);

for (const [key, value] of maps) {
	// console.log(key + ":- " + value);
}

const myObject = {
	game1: "NFS",
	game2: "Spiderman",
};

// for (const [key, value] of myObject) {
// 	console.log(key, ":-", value);              /*This syntax does not works with objects */
// }
