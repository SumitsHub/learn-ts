// Math.round("Hello"); // Error- Argument of type 'string' is not assignable to parameter of type 'number'.
// NOTE: Comments get translated as it is.

const PI: number = 3.14159;
// After compiling 'ts' to 'js' once, it's showing an error- Cannot redeclare block-scoped variable 'PI'.
// Reason - by default every js file has module scope

console.log("Hello");

console.log(Math.round(4.568987365));

console.log("Goodbye");
