//* Type Annotations
// Syntax: let varName: type = value;
// NOTE: initialization is optional
var username;
//* Type - 'string'
// declaring variable with type
var movie = "Amadeus";
movie = "Arrival";
// Invalid operations with string variable gives error -
// movie = 9; // Type 'number' is not assignable to type 'string'.
// movie.upper(); // Property 'upper' does not exist on type 'string'
//* Type - 'number'
var num = 90;
num += 2;
console.log(num); // 92
num = 23.89;
console.log(num.toFixed(1)); // 23.9
// num(); // This expression is not callable. Type 'Number' has no call signatures.
// num = 'apple'; // Type 'string' is not assignable to type 'number'.
//* Type - 'boolean'
var isMarried = false;
isMarried = true;
// isMarried = 'true';
// isMarried = null;
// isMarried = undefined;
//* null and undefined
var nothing = null;
var foo = undefined;
//* Type inference
var num2 = null;
// num2 = 23; // number can't assign to null type
var game = "Cricket";
// game = false; // Type 'boolean' is not assignable to type 'string'.
//* Type - 'any'
var thing = "Anything";
thing = 23;
thing = false;
thing();
this.toUpperCase();
//* Implicit type of unassigned variable
var myVar; // default type is 'any'
myVar = "Awesome";
myVar = 23;
