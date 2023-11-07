// for in loop

const myObject = {
	js: "JavaScript",
	py: "Python",
	cpp: "C plus plus",
};

for (const key in myObject) {
	// console.log(key);                //Thus the key will be printed
	// console.log(myObject[key]);      //Thus the value will be printed
	// console.log(`${key} is the shortcut for ${myObject[key]}`);
}

/* Usage of for in loop in array*/
const programmig = ["js", "java", "cpp", "ruby", "python"];
for (const key in programmig) {
	// console.log(programmig[key]);
}

/* *******************MAP*********************** */
const maps = new Map();
maps.set("IN", "India");
maps.set("GR", "Germany");
maps.set("USA", "United States of America");
maps.set("FR", "France");
maps.set("SZE", "Switzerland");

for (const key in maps) {
	// console.log(key);        //It will not give any output cz maps are not iteratable in this way
}
