// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "feb";

switch (month) {
	case "jan":
		console.log("January");
		break;
	case "feb":
		console.log("feb");
		break; //Here if we forget to break the statement it will execute all the code till break is not used
	case "march":
		console.log("march");
		break;
	case "april":
		console.log("april");
		break;

	default:
		console.log("default case match");
		break;
}
