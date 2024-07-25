"use strict";
class Player {
    constructor(first, last) {
        // class variable - useful if we need to initialize value for all instance variables
        // score: number = 0;
        this.score = 0; // type inferred to number
        this.first = first;
        this.last = last;
    }
}
const elton = new Player("Elton", "Steele");
