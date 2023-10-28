//Different array operation

const marvelHeros = ["Thor", "Hulk", "Ironman"];

const DcHeros = ["Batman", " Flash", "Superman"];

// marvelHeros.push(DcHeros);
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(DcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...DcHeros];
// console.log(allNewHeros);

//Array.flat() property
const complexArray = [2, 6, [4, 9, 9, [4, 5]]];
const flatArray = complexArray.flat(Infinity);
// console.log(flatArray);

// console.log(Array.isArray("Wajid"));
// console.log(Array.from("Wajid"));
// console.log(Array.from({ name: "Wajid" })); //interesting

//Array.of() method
let score1 = 10;
let score2 = 40;
let score3 = 50;
console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.
