//* Function parameter annotation

//* without type annotation - parameter type will be 'any' by default
function square(num) {
  return num * num;
}

square(23);
square("abc"); // No error - accepting  any value as an parameter

//* Parameter type annotation

function multiply(num1: number, num2: number) {
  return num1 * num2;
}

multiply(23, 5.6);

// multiply(2, 'Something'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// NOTE: from error message we can understand difference between 'argument' and 'parameter'

// multiply(true, 4);

const greet = (name: string, age: number) => {
  console.log(
    `Hello there, ${name}. You were born in year ${
      new Date().getFullYear() - age
    }.`
  );
};

greet("Raj", 26);

// greet("John"); // Expected 2 arguments, but got 1.
// greet(23, "John"); // Argument of type 'number' is not assignable to parameter of type 'string'.
// NOTE: above got error for 'name' argument -> it works from LEFT to RIGHT

//* Default Parameters

function greet2(name: string = "Unknown") {
  return `Hello ${name}`;
}

greet2(); // NO ERROR
greet2("Devil");

// greet2(23);

//* Return type annotation
// Implicit return type - 'number'
function sum(num: number) {
  return num + 5;
}

// Return type - 'string | number'
function rando(num: number) {
  let rNum = Math.random();
  if (rNum < 0.5) return rNum.toString();
  return Math.random();
}

// Annotating return type
function add2(num: number): number {
  return num + 2;
}

const add3 = (num: number): number => {
  return num + 3;
};

//* Contextual type inference
const colors = ["Red", "Green", "Yellow", "Blue"];

colors.map(col => {
  // type of col - 'string' taken from the context - array colors
  // col.toFixed(); // ERROR toFixed does not exist on string type
  return col.toLowerCase();
});

//* void return type

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);

  // return ""; // ERROR - Type 'string' is not assignable to type 'void'.
  // return void; // ERROR - Expression expected.
  // return null; // Error - Type 'null' is not assignable to type 'void'.
  // return undefined; // No error - it works
  return; // No error
}

//* Type - 'never': The never type represents that NEVER occur. This return type will not inferred by TS, instead 'void' will be used.
// Example could be-
// 1. Function that always throw exception
// 2. Function that never return anything

function throwError(msg: string): never {
  throw new Error(`An error occurred! + ${msg}`);

  // return // ERROR -Type 'undefined' is not assignable to type 'never'.
}

// default return type is 'void'
function notStop1() {
  while (true) {
    console.log("I will never stop");
  }
}

function notStop2(): never {
  while (true) {
    console.log("I will never stop");
  }
}
