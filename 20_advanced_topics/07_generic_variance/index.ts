//* Covariance Example
// Arrays in TypeScript are covariant when used in a read-only context.

let strings: string[] = ["a", "b"];
let unknowns: unknown[] = strings; // Valid: string[] is a subtype of unknown[] in a read-only context.

console.log(unknowns[0]); // Output: "a"

//* Contravariance Example
// Function arguments in TypeScript are contravariant. A function that accepts unknown as a parameter can handle any subtype of unknown, but the reverse is not true.

type Print = (value: string) => void;

const printUnknown: (value: unknown) => void = value => console.log(value);
const printString: Print = printUnknown; // Valid: string is a subtype of unknown.

const printSpecific: Print = (value: string) => console.log(value);
// const printGeneral: (value: unknown) => void = printSpecific; // Error: unknown is not a subtype of string.

//* Invariance Example
// In mutable contexts, arrays are invariant because mutation can lead to runtime type mismatches.

let strings2: string[] = ["a", "b"];
// let unknowns: unknown[] = strings2; // Error: unknown[] cannot safely accept string[] for mutable operations.

unknowns.push(42); // If allowed, it would break the type safety of strings.

//* Question: Why Can’t a Function Accepting string[] Always Accept unknown[]?
// Answer: This limitation arises because arrays in TypeScript are invariant in mutable contexts.

// Explanation: If you assign a string[] to an unknown[], the following issues may arise:

function acceptsStrings(strings: string[]): void {
  strings.push("valid"); // This is allowed for string[].
}

// const unknowns: unknown[] = [1, 2, 3];
// acceptsStrings(unknowns); // If allowed, `unknown[]` would now contain a string, breaking its original type safety.

// Here:
// unknown[] can contain any type of value (number, boolean, etc.).
// Allowing a string[] function to operate on unknown[] would compromise type safety since the function assumes every element is a string.
