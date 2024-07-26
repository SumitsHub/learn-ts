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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
function getUser(id) {
    axios_1.default
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
        //   console.log(res.data);
        const { data } = res;
        console.log(data.company.catchPhrase);
        printUser(data);
    })
        .catch(err => console.log("Error", err));
}
function printUser(user, i = 0) {
    console.log(i++, user.name);
    console.log(i++, user.phone);
}
getUser(1);
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/users`);
        return res.data;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    (yield getUsers()).map(printUser);
}))();
// installed types separately to get types support
console.log(lodash_1.default.sample([1, 5, 9, 0, 34, 23]));
