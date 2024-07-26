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
  // console.log(typeof media); // object - cannot use typeof for type narrowing for object parameter

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