"use strict";
var _Player_netWorth;
class Player {
    constructor(first, last) {
        // class variable - useful if we need to initialize value for all instance variables
        // score: number = 0;
        this.score = 0; // type inferred to number
        //* public property - can be accessed from anywhere - it's just convention for developers don't add anything extra
        this.someVar = "Something";
        //* Declaring private variable
        this.netWorth = 120000;
        // OR - use JS syntax
        _Player_netWorth.set(this, 120000);
        this.first = first;
        this.last = last;
        this.nickName = last;
        this.sport = "Football";
    }
}
_Player_netWorth = new WeakMap();
const elton = new Player("Elton", "Steele");
// elton.nickName = 'Something'; // ERROR- Cannot assign to 'nickName' because it is a read-only property.
// elton.netWorth; // ERROR - Property 'netWorth' is private and only accessible within class 'Player'.
// elton.#netWorth; // ERROR- not accessible outside of the class
