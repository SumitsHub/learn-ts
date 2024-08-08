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
// Create a function that returns a Promise of the defined type.
function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: userId,
                name: "John Doe",
                email: "john.doe@example.com",
            });
        }, 1000);
    });
}
// Use the function and ensure type safety.
function getUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield fetchUserData(1);
            console.log(user.name); // Output: John Doe
        }
        catch (error) {
            console.error(error);
        }
    });
}
getUserData();
