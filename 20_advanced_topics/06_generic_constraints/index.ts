//* 1. Constrain to a Specific Type

function identity<T extends string | number>(value: T): T {
  // Here, T is constrained to string | number, so only those types are allowed.
  return value;
}

const result1 = identity("hello"); // "hello"
const result2 = identity(42); // 42
// const result3 = identity(true); // Error: Type 'true' does not satisfy the constraint 'string | number'.

//* 2. Constrain to an Interface
// You can ensure that T conforms to a particular shape (interface or object type).

interface HasId {
  id: number;
}

function getId<T extends HasId>(obj: T): number {
  return obj.id;
}

const obj = { id: 1, name: "Alice" };
console.log(getId(obj)); // 1
// console.log(getId({ name: "Bob" })); // Error: Property 'id' is missing in type.

///* Question: Create a generic function that accepts an array and returns its first element, but only if the array contains objects with a specific shape.

/* Problem:
Create a generic function that:

- Accepts an array.
- Ensures the array contains objects with a specific shape.
- Returns the first element of the array.

*/

type SpecificShape = {
  id: number;
  name: string;
};

function getFirstElement<T extends SpecificShape>(array: T[]): T | undefined {
  return array[0];
}

// Example usage:
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const firstElement = getFirstElement(data);
console.log(firstElement); // { id: 1, name: "Alice" }

const invalidData = [
  { id: 1 }, // Missing 'name'
];
// getFirstElement(invalidData); // Error: Type '{ id: number; }' is not assignable to type 'SpecificShape'.
