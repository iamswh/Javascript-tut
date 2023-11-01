/*Usage of this : Generally this is used to reffer the current cotext*/
const user = {
	username: "Wajid",
	price: 999,
	welcomeMessege: function () {
		console.log(`${this.username}, Welcome to the website.`);
		console.log(this);
	},
};

// user.welcomeMessege();
// user.username = "Hossain";
// user.welcomeMessege();

console.log(this);
