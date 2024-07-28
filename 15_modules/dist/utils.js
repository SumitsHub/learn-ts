"use strict";
function add(x, y) {
    return x + y;
}
const getRandomElement = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};
