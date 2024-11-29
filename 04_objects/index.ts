//* defining object type with object literal

let coordinates: { x: number; y: number } = { x: 34, y: 43 };
// coordinates.z = 43; // ERROR - Property 'z' does not exist on type '{ x: number; y: number; }'
// coordinates.x = "45"; // ERROR - Type 'string' is not assignable to type 'number'.

//* Parameter Annotation - Object literal

function printName(name: { first: string; last: string }) {
  console.log(`${name.first} ${name.last}`);
}

// printName(); // ERROR - Expected 1 arguments, but got 0.
printName({ first: "Smriti", last: "Mandana" });

//* Return type annotation

const randCoordinate = (): { x: number; y: number } => {
  return { x: Math.random(), y: Math.random() };
};

function createPerson(name: string): { name: string; age: number } {
  return { name, age: 0 };
}

//* Excess properties - passing additional properties as function parameter

// Passing object literal as argument
// printName({ first: "Pallavi", last: "Borate", age: 30 }); // ERROR - Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; }'.
let person = { first: "Pallavi", last: "Borate", age: 30 };
printName(person); // NO ERROR when 'variable' passed instead of object literal
printName({ ...person }); // NO ERROR - spread operator
// printName({ ...person, age: 90 }); // ERROR - trying to pass age


//* 'type' alias - instead of using object literals for type annotation we can create type alias

type Coord = {
  x: number;
  y: number;
};

let coords: Coord = { x: 23, y: 43 };

function randomizeCoords(inp: Coord): Coord {
  return { x: inp.x * Math.random(), y: inp.y * Math.random() };
}

//* nested object

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: Credits;
};

type Credits = {
  producer: string;
  writer: string;
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

let mySong1: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1234987,
  credits: {
    producer: "Sumit",
    writer: "Amit",
  },
};

let earnings1 = calculatePayout(mySong1);
console.log(earnings1);

// also accepts params without explicit type annotation as well
let mySong2 = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1234987,
  credits: {
    producer: "Sumit",
    writer: "Amit",
  },
};

let earnings2 = calculatePayout(mySong2);
console.log(earnings2);

//* Optional properties
type Point = {
  x: number | string;
  y: number | string;
  z?: number | string;
};

// valid point object without optional property 'z'
let p1 = { x: 12, y: 32 };
// with optional property as well
let p2 = { x: 54, y: "78", z: 98 };

//* 'readonly' modifier - you can only read the property of object - this is TS specific

type Person = {
  readonly id: number; // property with readonly modifier
  username: string;
};

let p: Person = {
  id: 123,
  username: "theguru",
};

// p.id = 34; // ERROR - Cannot assign to 'id' because it is a read-only property.

//* Intersection types
// OR Union Types?

type A = {
  a: string;
};

type B = {
  b: string;
};

type AB = A & B;

let ab: AB = {
  a: "A",
  b: "B",
};

type ABC = A & B & { c: string };

let abc: ABC = {
  a: "A",
  b: "B",
  c: "C",
};
