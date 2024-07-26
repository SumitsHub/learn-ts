"use strict";
//* typeof guards
function triple(inp) {
    // using typeof operator as guard
    if (typeof inp === "string")
        return inp.repeat(3);
    return inp * 3;
}
//* truthiness guard - use truth check as guard
const el = document.querySelector("idk"); // Return type of querySelector - Element | null
if (el) {
    console.log(typeof el); // Element
}
else {
    console.log(typeof el); // null
}
//* Equality narrowing
function func(x, y) {
    if (x === y) {
        // x // string
        // y // string
        console.log("x and y are string");
    }
    else {
        // x // string | number
        // y // string | boolean
        console.log("x or y is not string");
    }
}
function getRuntime(media) {
    // console.log(typeof media); // object - cannot use typeof for type narrowing for object parameter
    if ("noOfEpisodes" in media)
        return media.noOfEpisodes * media.episodeDuration;
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 145 })); // 145
console.log(getRuntime({ title: "Spongebob", noOfEpisodes: 13, episodeDuration: 30 }) // 390
);
//* 'instanceOf' narrowing
function printFullDate(date) {
    if (date instanceof Date)
        console.log(date.getUTCDate()); // date: Date
    else
        console.log(new Date(date).getUTCDate()); // date: string
}
// defining function to return type predicate for narrowing type
function isCat(animal) {
    return animal.noOfLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        console.log("Meow"); // animal: Cat
    }
    else {
        console.log("Bark"); // animal: Dog
    }
}
makeNoise({ name: "Sundari", noOfLives: 5 }); // Meow
function area(shape) {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
        case "circle":
            return Math.PI * shape.radius ** 2;
        // comment below case to see exhaustiveness check error
        case "triangle":
            return (shape.base * shape.height) / 2;
        // exhaustiveness check - if we add a new shape type, it will throw an error
        // this helps to handle all possible cases - default block should not get executed
        default:
            // we should never make it here
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(area({ kind: "square", size: 5 })); // 25
console.log(area({ kind: "rectangle", width: 5, height: 10 })); // 50
console.log(area({ kind: "circle", radius: 5 })); // 78.54
