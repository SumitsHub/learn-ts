"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { add, getRandomElement } from "./utils.ts"; // ERROR: An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
const utils_js_1 = require("./utils.js");
// using import statement will make TS to consider ts files as module
console.log((0, utils_js_1.add)(3, 4));
console.log((0, utils_js_1.getRandomElement)(["Ram", "Sam", "John", "Steve"]));
