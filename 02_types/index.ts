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

let thing: any = "Anything";
thing = 23;

thing = false;

thing();

this.toUpperCase();

//* Implicit type of unassigned variable
let myVar; // default type is 'any'
myVar = "Awesome";
myVar = 23;
