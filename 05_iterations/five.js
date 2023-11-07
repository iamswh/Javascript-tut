//For each loop
const coding = ["js", "ruby", "java", "python", "cpp"];

/*******Using normal function***********/
// coding.forEach(function (val) {
// 	console.log(val);
// });

/*******Using arrow function************/
coding.forEach((item) => {
	// console.log(item);
});

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

/**********For each loop inside array of objects***************/
const myCoding = [
	{
		languageName: "javascript",
		languageFileName: "js",
	},
	{
		languageName: "java",
		languageFileName: "java",
	},
	{
		languageName: "python",
		languageFileName: "py",
	},
];

myCoding.forEach((item) => {
	console.log(item.languageName);
});
