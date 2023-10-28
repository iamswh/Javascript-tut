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
