"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function that returns a Promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://jsonplaceholder.typicode.com/todos/1") {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Invalid URL");
            }
        }, 1000);
    });
}
// Using .then and .catch
fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => {
    console.log(data); // Output: Data fetched successfully!
})
    .catch((error) => {
    console.error(error); // Output: Invalid URL (if URL is incorrect)
});
// Using async/await
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchData("https://jsonplaceholder.typicode.com/todos/1");
            console.log(data); // Output: Data fetched successfully!
        }
        catch (error) {
            console.error(error); // Output: Invalid URL (if URL is incorrect)
        }
    });
}
getData();
