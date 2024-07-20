//* Annotating union types

let age: number | string = 21;

age = "24";
age = 25;

let weird: number | string | boolean = true;

weird = "Awesome";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };

coordinates = { lat: 321.123, long: 23.334 };

//* Union types with function

function printAge(age: number | string): void {
  console.log(`You are ${age} years old.`);
}

printAge(23);
printAge("32");

//* Type narrowing
function calculateTax(price: number | string, tax: number) {
  // price.replace("S", ""); // ERROR: Property 'replace' does not exist on type 'string | number'.
  // return price * tax; // ERROR: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

  if (typeof price === "string") price = parseFloat(price.replace("$", ""));
  return price * tax;
}

console.log(calculateTax(45, 0.07)); // 3.1500000000000004
console.log(calculateTax("$45", 0.07)); // 3.1500000000000004

//* Array of Union types

const mixed: (number | string)[] = [23, "Something", 45];

const coords: (Point | Loc)[] = [];
coords.push({ x: 12, y: 43 });
coords.push({ lat: 24, long: 98 });

//* Literal types - literal types are not just types but the values themselves too

// Not so useful examples -
// type '0'
let x: 0 = 0;
// x = 1; // ERROR: Can't assign '1' to type '0'

// type 'hi'
let y: "hi" = "hi";
// y = 'HI'; // ERROR: can't assign HI to type 'hi'

// Useful example

let mood: "Happy" | "Sad" | "Bore";
mood = "Happy";

type WeekendDay = "Saturday" | "Sunday";

let day: WeekendDay = "Sunday";

function checkAnswer(answer: "yes" | "no" | "maybe") {
  console.log(`Your answer is: ${answer}`);
}
