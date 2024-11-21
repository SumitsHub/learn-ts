// Examples of Template Literal Types

//* 1. Basic Usage
type Greeting = `Hello, ${string}`;
type SpecificGreeting = `Hello, Alice` | `Hello, Bob`;

const greet: Greeting = "Hello, World"; // Valid
const specificGreet: SpecificGreeting = "Hello, Alice"; // Valid
// const invalidGreet: SpecificGreeting = "Hi, Alice"; // Error: Type '"Hi, Alice"' is not assignable

//* 2. Combining Unions
// You can combine unions within template literals to create complex dynamic string types.

type Animal = "dog" | "cat";
type Action = "runs" | "jumps";

type AnimalAction = `${Animal} ${Action}`;

const action: AnimalAction = "dog jumps"; // Valid
// const invalidAction: AnimalAction = "bird flies"; // Error: Type '"bird flies"' is not assignable

//* 3. Extracting Patterns
// Template literal types work well with conditional types for extracting patterns.

type Email = `user-${string}@example.com`;

type IsEmail<T> = T extends Email ? true : false;

type Test1 = IsEmail<"user-alice@example.com">; // true
type Test2 = IsEmail<"hello@example.com">; // false

//** Question: Write a type that converts an object’s keys into a union of prefixed strings.
// You can use template literal types with keyof and mapped types to achieve this.

type PrefixedKeys<T, Prefix extends string> = {
  [K in keyof T]: `${Prefix}${string & K}`;
}[keyof T];

// Example usage:
type MyObject = {
  id: number;
  name: string;
  email: string;
};

type Prefixed = PrefixedKeys<MyObject, "user_">;
// Result: "user_id" | "user_name" | "user_email"

// Explanation:
// keyof T: Retrieves the keys of the object type T.
// Mapped Type: Iterates over each key K in T.
// Template Literal: Constructs a new string type by concatenating Prefix with the key K.
// Index Access [keyof T]: Collapses the mapped type into a union of all resulting string types.
