//* Type Annotations
// Syntax: let varName: type = value;
// NOTE: initialization is optional
let username: string;

//* Type - 'string'

// declaring variable with type
let movie: string = "Amadeus";
movie = "Arrival";

// Invalid operations with string variable gives error -

// movie = 9; // Type 'number' is not assignable to type 'string'.
// movie.upper(); // Property 'upper' does not exist on type 'string'

//* Type - 'number'

let num = 90;
num += 2;
console.log(num); // 92
num = 23.89;
console.log(num.toFixed(1)); // 23.9

// num(); // This expression is not callable. Type 'Number' has no call signatures.

// num = 'apple'; // Type 'string' is not assignable to type 'number'.

//* Type - 'boolean'

let isMarried: boolean = false;
isMarried = true;

// Invalid operations
// isMarried = 'true';
// isMarried = null;
// isMarried = undefined;

//* null and undefined
let nothing: null = null;
let foo: undefined = undefined;

//* Type inference
let num2 = null;
// num2 = 23; // number can't assign to null type

let game = "Cricket";
// game = false; // Type 'boolean' is not assignable to type 'string'.

//* Type - 'any'
// Usage: The any type is the most permissive type in TypeScript. It allows you to assign any value to a variable without any type checking.
// Implications: When you use any, TypeScript effectively turns off type checking for that variable. This means you can perform any operation on an any type without TypeScript throwing errors, but this can lead to runtime errors if the value isn't what you expect.

let thing: any = "Anything";
thing = 23;

thing = false;

thing();

thing.toUpperCase();

//* Implicit type of unassigned variable
let myVar; // default type is 'any'
myVar = "Awesome";
myVar = 23;


//* Type - 'unknown'
// Usage: The unknown type is a safer alternative to 'any'. It also allows you to assign any value to a variable, but with unknown, you must perform type checks or type assertions before performing operations on that variable.
// Implications: This forces you to handle the variable more cautiously, ensuring that you don't accidentally perform invalid operations, which helps prevent runtime errors.

let value: unknown;
value = 42; // number
value = "Hello"; // string
value = { x: 10 }; // object

// TypeScript enforces type checking
if (typeof value === "number") {
    console.log(value.toFixed(2)); // This is safe because TypeScript knows `value` is a number
}

if (typeof value === "string") {
    console.log(value.toUpperCase()); // This is safe because TypeScript knows `value` is a string
}

// Without type checking, this will cause a compilation error
// console.log(value.toFixed(2)); // Error: Object is of type 'unknown'.


//* declaring type using 'typeof' operator
let stringValue = "Something";

let zx: typeof stringValue = ""; // typeof zx = string