const name = "Wajid";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repocout is ${repoCount}`);

const gameName = new String("Farcry3");
const anotherGame = "ViceCity";

console.log(gameName[1]);
console.log(anotherGame);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-9, 5);
console.log(anotherString);

const email = "    wajidHossain@hmail.com    ";
console.log(email.trim());

const url = "https://www.wajid.com/wajid%20hossain";
console.log(url.replace("%20", "-"));

console.log(url.includes("wajid"));
