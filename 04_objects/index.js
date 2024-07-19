//* defining object with type
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var coordinates = { x: 34, y: 43 };
// coordinates.z = 43; // ERROR - Property 'z' does not exist on type '{ x: number; y: number; }'
// coordinates.x = "45"; // ERROR - Type 'string' is not assignable to type 'number'.
//* Parameter annotation
function printName(name) {
    console.log("".concat(name.first, " ").concat(name.last));
}
// printName(); // ERROR - Expected 1 arguments, but got 0.
printName({ first: "Neha", last: "Monga" });
//* Return type annotation
var randCoordinate = function () {
    return { x: Math.random(), y: Math.random() };
};
function createPerson(name) {
    return { name: name, age: 0 };
}
//* Excess properties - passing additional properties as function parameter
// Passing object literal as argument
// printName({ first: "Pallavi", last: "Borate", age: 30 }); // ERROR - Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; }'.
var person = { first: "Pallavi", last: "Borate", age: 30 };
printName(person); // NO ERROR when variable passed instead of object literal
printName(__assign({}, person)); // NO ERROR
var coords = { x: 23, y: 43 };
function randomizeCoords(inp) {
    return { x: inp.x * Math.random(), y: inp.y * Math.random() };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
var mySong1 = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1234987,
    credits: {
        producer: "Sumit",
        writer: "Amit",
    },
};
var earnings1 = calculatePayout(mySong1);
console.log(earnings1);
// also accepts params without explicit type annotation as well
var mySong2 = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1234987,
    credits: {
        producer: "Sumit",
        writer: "Amit",
    },
};
var earnings2 = calculatePayout(mySong2);
console.log(earnings2);
