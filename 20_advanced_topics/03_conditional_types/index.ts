//* How Conditional Types Work in TypeScript

// Conditional types in TypeScript allow you to express logic for type transformations. The syntax is:
//** T extends U ? X : Y  */
// Here’s how it works:
// - If T is assignable to U, the type resolves to X.
// - If T is not assignable to U, the type resolves to Y.

// Conditional types are powerful for creating type utilities by combining type inference and conditional logic.

//* Example 1: Basic Conditional Type
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"

//* Example 2: Extracting Specific Types

type ExtractStringOrNumber<T> = T extends string | number ? T : never;

type Test3 = ExtractStringOrNumber<string>; // string
type Test4 = ExtractStringOrNumber<boolean>; // never
type Test5 = ExtractStringOrNumber<string | boolean | number>; // string | number

//* Custom Conditional Type
//* Implementing MyExclude<T, U>
// The Exclude<T, U> utility type excludes types from T that are assignable to U. Here’s how to implement it using conditional types:

type MyExclude<T, U> = T extends U ? never : T;

// Example usage:
type Original = "a" | "b" | "c";
type ToExclude = "a" | "c";
type Result = MyExclude<Original, ToExclude>; // "b"

//** Explanation:
// T extends U:
// If T is assignable to U, the type resolves to never (effectively removing it).
// If T is not assignable to U, the type remains T.
// The conditional type is applied to each member of the union type T.

//** Process:
// For "a" | "b" | "c":
// "a" extends "a" | "c" → never
// "b" extends "a" | "c" → "b"
// "c" extends "a" | "c" → never
// The resulting type is "b".

//* Example: Using MyExclude
type MyUnion = "x" | "y" | "z";
type Excluded = MyExclude<MyUnion, "y">; // "x" | "z"

//* Key Takeaways
// 1. Conditional types allow fine-grained type logic.
// 2. They are particularly useful for creating utility types like Exclude, Extract, NonNullable, etc.
