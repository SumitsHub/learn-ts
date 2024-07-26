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