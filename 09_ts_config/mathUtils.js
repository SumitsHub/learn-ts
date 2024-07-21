"use strict";
function calcAge(yearOfBirth) {
    return new Date().getFullYear() - yearOfBirth;
}
console.log(calcAge(1998));
