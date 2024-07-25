"use strict";
//* Generics with arrow function in .tsx(React) file
const getLastElement = (arr) => {
    return arr[0];
};
// NOTE: we need to add a comma after T in <T,> to avoid syntax error
// No issue with normal function
function getFirstElement(arr) {
    return arr[0];
}
