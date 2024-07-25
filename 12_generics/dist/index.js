"use strict";
// array of numbers - type bound to number
// const nums: number[] = [];
//* Examples
//* #01. Array - creating array of numbers and strings using generics
const nums = [];
const colors = [];
//* #02. querySelector - returns Element | null
const inpuEl = document.querySelector("#username");
// OR
// const inpuEl = document.querySelector('#username') as HTMLInputElement;
console.dir(inpuEl);
console.log(inpuEl.value);
const btnEl = document.querySelector("btn");
console.log(btnEl.textContent);
//* creating own generic function
function createArray(length, value) {
    return new Array(length).fill(value);
}
// creating string array
const arr = createArray(5, "hello");
console.log(arr);
// creating number array
const arr2 = createArray(5, 10);
console.log(arr2); // [10, 10, 10, 10, 10]
function randomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
// using string array
const randomStr = randomElement(["hello", "world", "typescript"]);
console.log(randomStr); // hello | world | typescript
const randomNum = randomElement([10, 20, 30, 40, 50]);
console.log(randomNum); //
//* inferred generic type parameter
console.log(randomElement(["hello", "world", "typescript"])); // TypeScript will infer the type of T as string
console.log(randomElement([true, false, true])); // TypeScript will infer the type of T as boolean
//* Generics with multiple type parameters
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const mergedObj = merge({ name: "John" }, { age: 30 });
console.log(mergedObj); // {name: "John", age: 30}
