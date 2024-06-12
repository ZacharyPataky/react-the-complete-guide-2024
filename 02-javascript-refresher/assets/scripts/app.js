// import { apiKey } from "./util.js";

// Multiple named exports
// import { apiKey, abc } from "./util.js";
// import * as util from "./util.js";
// console.log(util.apiKey);
// console.log(util.abc);

// Unnamed default export from util.js
// import apiKey from "./util.js";
// console.log(apiKey);

// const userMessage = 'Hello World!';

// Read-only error
// userMessage = 'This yields an error!';

// console.log(userMessage);
// console.log(userMessage);

// console.log(10 + 5);
// console.log('Hello' + ' ' + 'World' + '!');

// if (10 === 10) {
//     console.log('This works!');
// }

// function greetUser(username, message = 'Hello!') {
//     // console.log(username, message);
//     return `Hi, I\'m ${username}. ${message}`;
// }

// const greeting1 = greetUser('Automata-Man');
// const greeting2 = greetUser('Max', 'What\'s up?!');

// console.log(greeting1);
// console.log(greeting2);

// export default (username, message) => {
//     console.log('Hello!');
//     return username + message;
// }

// const username = 'Zak';
// const age = 24;

// const user = {
//     name: 'Zak',
//     age: 24,
//     greet() {
//         console.log('Hello!');
//         console.log(this.age);
//     }
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user.greet()

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log('Hello!');
//     }
// }

// const user1 = new User('Max', 35);
// console.log(user1);

// const hobbies = ['Sports', 'Cooking', 'Reading'];
// console.log(hobbies[0]);

// hobbies.push('Working :(');
// console.log(hobbies);

// const index = hobbies.findIndex(item => {
//     return item === 'Sports';
// });
// console.log(index);

// const editedHobbies = hobbies.map(item => item = ({ text: item }));
// console.log(editedHobbies);

// const usernameData = ['Zachary', 'Pataky'];
// // const firstName = usernameData[0];
// // const lastName = usernameData[1];
// const [firstName, lastName] = ['Zachary', 'Pataky'];

// console.log(firstName);
// console.log(lastName);

// const { name: username, age } = {
//     name: 'Zak',
//     age: 24
// };

// console.log(username);
// console.log(age);

// const hobbies = ['Sports', 'Cooking'];
// const newHobbies = ['Reading'];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//     name: 'Zak',
//     age: 24
// };

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }
// console.log(extendedUser);

// const password = prompt('Your password:');

// if (password === 'Hello') {
//     console.log('\'Hello\' works!')
// } else if (password === 'hello') {
//     console.log('\'hello\' works!')
// } else {
//     console.log('Access denied!');
// }

// const hobbies = ['Sports', 'Cooking'];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector('ul');
// list.remove();

// function handleTimeout() {
//     console.log('Timed out!');
// }

// const handleTimeout2 = () => {
//     console.log('Timed out... again!');
// };

// // If we add parentheses, then we process the function immediately!  Must omit parentheses!
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log('More timing out...');
// }, 4000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log('Hi!'));

// function init() {
//     function greet() {
//         console.log('Hi!');
//     }

//     greet();
// }

// init();

let userMessage = 'Hello!';
userMessage = userMessage.concat('!');

const message = 'Hello';

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Working :(');
console.log(hobbies);