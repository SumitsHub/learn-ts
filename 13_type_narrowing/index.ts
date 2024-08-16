//* typeof guards

function triple(inp: number | string) {
  // using typeof operator as guard
  if (typeof inp === "string") return inp.repeat(3);
  return inp * 3;
}

//* truthiness guard - use truth check as guard
const el = document.querySelector("idk"); // Return type of querySelector - Element | null
if (el) {
  console.log(typeof el); // Element
} else {
  console.log(typeof el); // null
}

//* Equality narrowing
function func(x: string | number, y: string | boolean) {
  if (x === y) {
    // x // string
    // y // string
    console.log("x and y are string");
  } else {
    // x // string | number
    // y // string | boolean
    console.log("x or y is not string");
  }
}

//* Narrowing using 'in' operator - helpful to narrow down while working with objects
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  noOfEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow): number {
  // console.log(typeof media);
  // object - cannot use typeof for type narrowing for object parameter

  if ("noOfEpisodes" in media)
    return media.noOfEpisodes * media.episodeDuration;
  return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 145 })); // 145
console.log(
  getRuntime({ title: "Spongebob", noOfEpisodes: 13, episodeDuration: 30 }) // 390
);

//* 'instanceOf' narrowing

function printFullDate(date: string | Date) {
  if (date instanceof Date) console.log(date.getUTCDate()); // date: Date
  else console.log(new Date(date).getUTCDate()); // date: string
}

//* Type Predicates - Syntax: `parameterType is Type` - used as return type of function

interface Cat {
  name: string;
  noOfLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// defining function to return type predicate for narrowing type
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).noOfLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    console.log("Meow"); // animal: Cat
  } else {
    console.log("Bark"); // animal: Dog
  }
}


makeNoise({ name: "Sundari", noOfLives: 5 }); // Meow


//* Discriminated unions - a common pattern in Typescript involves creating a 'literal property' that is common across multiple types.

interface Square {
  kind: "square"; // literal property - this property is called a discriminant or tag property.
  size: number;
}

interface Rectangle {
  kind: "rectangle"; // literal property
  width: number;
  height: number;
}

interface Circle {
  kind: "circle"; // literal property
  radius: number;
}

// defined Triangle interface to show exhaustiveness check
interface Triangle {
  kind: "triangle"; // literal property
  base: number;
  height: number;
}

// added Triangle type to show exhaustiveness check
type Shape = Square | Rectangle | Circle | Triangle;

function area(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius ** 2;
    // comment below case to see exhaustiveness check error
    case "triangle":
      return (shape.base * shape.height) / 2;
    // exhaustiveness check - if we add a new shape type, it will throw an error
    // this helps to handle all possible cases - default block should not get executed
    default:
      // we should never make it here
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log(area({ kind: "square", size: 5 })); // 25
console.log(area({ kind: "rectangle", width: 5, height: 10 })); // 50
console.log(area({ kind: "circle", radius: 5 })); // 78.54


//* Other possible ways -
// 1. Array.isArray()
// 2. Number.isNaN()
