// import { add, getRandomElement } from "./utils.ts"; // ERROR: An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
import { add, getRandomElement } from "./utils.js";
// using import statement will make TS to consider ts files as module
console.log(add(3, 4));
console.log(getRandomElement(["Ram", "Sam", "John", "Steve"]));
