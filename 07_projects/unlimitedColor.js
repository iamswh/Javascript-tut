//JS file for unlimited color generator project

//   generate a random color
const randomColor = function () {
	const hex = "0123456789ABCDEF";
	let color = "#";
	for (i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
	}
	return color;
};

let intervalID;
const startChangingColor = function () {
	if (!intervalID) {
		intervalID = setInterval(() => {
			document.body.style.backgroundColor = randomColor();
		}, 1000);
	}
};
const stopChangingColor = function () {
	clearInterval(intervalID);
	intervalID = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

// console.log(randomColor());
