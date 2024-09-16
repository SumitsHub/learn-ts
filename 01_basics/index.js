// Math.round("Hello"); // Error- Argument of type 'string' is not assignable to parameter of type 'number'.
var PI = 3.14159;
// After compiling 'ts' to 'js' once it's showing an error- Cannot redeclare block-scoped variable 'PI'.
console.log("Hello");
console.log(Math.round(4.568987365)); // 5
console.log("Goodbye");
