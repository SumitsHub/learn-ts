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
const btnEl = document.querySelector(".btn");
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
// function to get length of an object that has length property
function getLength(arg) {
    return arg.length;
}
console.log(getLength("hello")); // 5
console.log(getLength([1, 2, 3])); // 3
console.log(getLength({ length: 10 })); // 10
// console.log(getLength(4)); // Error: Argument of type '4' is not assignable to parameter of type 'Lengthwise'
// NOTE: we can't extend interface while defining class
// class Some extends Lengthwise { } 
//* Generics with keyof constraint
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "John", age: 30 };
console.log(getProperty(person, "name")); // John
// console.log(keyof person); // ERROR: 'keyof' type operator cannot be applied to an expression whose type lacks a call or index signature
//* default type parameter
function createArray2(length, value) {
    return new Array(length).fill(value);
}
const arr3 = createArray2(5, "hello");
console.log(arr3); // ["hello", "hello", "hello", "hello", "hello"]
const arr4 = createArray2(5, 10);
console.log(arr4); // [10, 10, 10, 10, 10]
//* Generics with classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((el) => el !== item);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("hello");
textStorage.addItem("world");
textStorage.addItem("typescript");
console.log(textStorage.getItems()); // ["hello", "world", "typescript"]
