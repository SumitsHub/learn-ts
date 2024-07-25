"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Player_netWorth;
class Player {
    //   constructor(first: string, last: string) {
    //     this.first = first;
    //     this.last = last;
    //   this.nickName = last;
    //   this.sport = "Football";
    //   }
    //* parameters properties shorthand
    constructor(first, last) {
        this.first = first;
        this.last = last;
        //   first: String;
        //   last: string;
        // class variable - useful if we need to initialize value for all instance variables
        // score: number = 0;
        this.score = 0; // type inferred to number
        //* public property - can be accessed from anywhere - it's just convention for developers don't add anything extra
        this.someVar = "Something";
        //* Declaring private variable
        this.netWorth = 120000;
        // OR - use JS syntax
        _Player_netWorth.set(this, 120000);
        //* protected modifier - only accessible within class 'Player' and its subclasses
        this.sharedVar = "Something shared to inherited class only";
        this.nickName = last;
        this.sport = "Football";
    }
    //* getter and setter
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get worth() {
        return __classPrivateFieldGet(this, _Player_netWorth, "f") - 10000;
    }
    // NOTE: setter cannot return anything - so will not have any return type
    set worth(newWorth) {
        if (newWorth < 0)
            throw new Error("net worth cannot be negative");
        __classPrivateFieldSet(this, _Player_netWorth, newWorth, "f");
    }
}
_Player_netWorth = new WeakMap();
class SuperPlayer extends Player {
    readWorth() {
        // return this.netWorth; // ERROR - Property 'netWorth' is private and only accessible within class 'Player'.
    }
    getProtectedVar() {
        return this.sharedVar;
    }
}
const elton = new Player("Elton", "Steele");
// elton.nickName = 'Something'; // ERROR- Cannot assign to 'nickName' because it is a read-only property.
console.log(elton);
// elton.netWorth; // ERROR - Property 'netWorth' is private and only accessible within class 'Player'.
// elton.#netWorth; // ERROR- not accessible outside of the class
elton.worth = 123000;
console.log(elton.worth);
const sp = new SuperPlayer("Christiano", "Ronaldo");
console.log(sp.getProtectedVar());
// console.log(sp.sharedVar); // ERROR - Property 'sharedVar' is protected and only accessible within class 'Player' and its subclasses.
