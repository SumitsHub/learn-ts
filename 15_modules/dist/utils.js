"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomElement = void 0;
exports.add = add;
function add(x, y) {
    return x + y;
}
const getRandomElement = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};
exports.getRandomElement = getRandomElement;
