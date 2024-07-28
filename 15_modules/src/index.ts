// import { add, getRandomElement } from "./utils.ts"; // ERROR: An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
import { add, getRandomElement } from "./utils.js";
import User, { userHelper as helper } from "./User.js";

// using import statement will make TS to consider ts files as module

console.log(add(3, 4)); // 7
console.log(getRandomElement(["Ram", "Sam", "John", "Steve"]));


let user = new User("Anubhav", 34);
user.logout(); // User Anubhav aged 34 logs out!

helper(); // This is user helper