// Immediately invoked function expression (IIFE)

(function chai() {
	//This is called named IIFE
	console.log(`DB CONNECTED`);
})();

((name) => {
	console.log(`DB 2 CONNECTED by ${name}`);
})("Wajid");
