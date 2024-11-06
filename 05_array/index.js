//* defining empty array as type
var arr1 = []; // we can define '[]' as a type
// arr1.push(1); // ERROR: Argument of type 'number' is not assignable to parameter of type 'never'.
// let arr2: [] = [2]; // ERROR: Type '[number]' is not assignable to type '[]'.
var activeUsers = []; // const activeUsers: never[]
// activeUsers.push(123); // ERROR: Argument of type 'number' is not assignable to parameter of type 'never'.
//* annotating array
var activeUsers2 = [];
activeUsers2.push(123);
var ages = [43, 36];
ages.push(98);
ages[0] = 45;
// ages[1] = '34'; // Type 'string' is not assignable to type 'number'.
//* Alternate way
var bools = []; // Similar to => const bools: boolean[] = [];
// const numbers: Array<number>; // ERROR: 'const' declarations must be initialized.
var strings = new Array();
var coords = [{ x: 1, y: 1 }];
coords.push({ x: 2, y: 2 });
// coords.push({ x: 3, y: "3" }); // ERROR: Type 'string' is not assignable to type 'number'
//* Nested arrays - Multidimensional array
var board = [
    ["X", "O", "X"],
    ["O", "O", "X"],
    ["X", "X", "X"],
];
// TODO: how can be define type with different types for multidimensional array for ex. [string][number]
var mixed = [[1, "dd", 3], [23]];
