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
