//Arrays
const numbers = [1, 5, 9, 7, 8];
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// console.log(numbers.indexOf(7));
// console.log(numbers.includes(9));

const newNumbers = [1020, 50, 40, 60, 70];
let newArr = newNumbers.join("-");
// console.log(newArr);

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("A ", myArray);

const newArr1 = myArray.slice(3, 6);
// console.log("Sliced array", newArr1);

// console.log("B ", myArray);

const newArr2 = myArray.splice(3);

/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2,...)
 */

console.log("Spliced array", newArr2);

console.log("C ", myArray);

/**********************Deep Discussion of spliced array*****************************/

const months = ["Jan", "Feb", "March", "April", "May", "June"];
//Operation 1 : giving the "starting" index and it will automatically delete all the arrays after the starting index
// const removed = months.splice(2);
// console.log(months); //[ 'Jan', 'Feb' ]
// console.log(removed); //[ 'March', 'April', 'May', 'June' ]

//Operation 2 : giving the "Starting" and "DeleteCount number"
// const removed = months.splice(2, 2); //from teh startig indecx it will delete 2 items
// console.log(months);
// console.log(removed);

//Operation 3:
const removedAndAdded = months.splice(2, 2, "october");
console.log(months);
console.log(removedAndAdded);
