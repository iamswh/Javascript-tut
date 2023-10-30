// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "abc123";
tinderUser.name = "Wajid";
tinderUser.isLoggedin = true;

// console.log(tinderUser);

const regularUser = {
	email: "someone@xmail.com",
	fullname: {
		userFullName: {
			firstName: "Syed Wajid",
			lastName: "Hossain",
		},
	},
};

// console.log(regularUser.fullname.userFullName.firstName);

//Combining two or more objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// console.log(obj1);

//Using assign method
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

//Using spread operator
const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty("name"));

const course = {
	courseName: "JS in Hindi",
	coursePrice: "999",
	courseInstructor: "Hitesh",
};

console.log(course.coursePrice); //this is the normal way to call an element from an object

// Object destructuring
const { courseInstructor } = course;
const { courseInstructor: instructor } = course; //using alias as instructor
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name":"Hitesh",
//     "courseName"="JS in Hindi",
//     "fees":"free"
// }

[{}, {}, {}];
