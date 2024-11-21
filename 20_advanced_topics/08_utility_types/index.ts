//* Utility Types: Omit, Pick, and Extract
// TypeScript provides built-in utility types to manipulate and transform types. Here's how Omit, Pick, and Extract work:

//* 1. Pick<T, K>
// Purpose: Constructs a new type by picking a subset of properties K from type T.
// Syntax: Pick<T, K>
// T is the source type, and K is a union of keys in T.

type User = {
  id: number;
  name: string;
  email: string;
};

type UserName = Pick<User, "name" | "email">;
// Result: { name: string; email: string }

const userName: UserName = { name: "Alice", email: "alice@example.com" };
// const invalidUserName: UserName = { id: 1 }; // Error: 'id' is not in the type.

//* 2. Omit<T, K>
// Purpose: Constructs a new type by excluding a subset of properties K from type T.
// Syntax: Omit<T, K>
// T is the source type, and K is a union of keys in T to exclude.

type UserWithoutId = Omit<User, "id">;
// Result: { name: string; email: string }

const userWithoutId: UserWithoutId = { name: "Alice", email: "alice@example.com" };
// const invalidUserWithoutId: UserWithoutId = { id: 1 }; // Error: 'id' is not in the type.

//* 3. Extract<T, U>
// Purpose: Constructs a new type by extracting types from T that are assignable to U.
// Syntax: Extract<T, U>
// T is the source type, and U is the type to match.

type Mixed = string | number | boolean;
type OnlyStringAndNumber = Extract<Mixed, string | number>;
// Result: string | number

const value: OnlyStringAndNumber = "hello"; // Valid
// const invalidValue: OnlyStringAndNumber = true; // Error: boolean is not assignable

//* Question: Implement a utility type MyPick<T, K> that behaves like the built-in Pick.
// Pick<T, K> constructs a type by selecting properties K from T.
// Here's how to implement it:

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Example usage:
type User2 = {
  id: number;
  name: string;
  email: string;
};

type UserName2 = MyPick<User2, "name" | "email">;
// Result: { name: string; email: string }

const userName2: UserName = { name: "Alice", email: "alice@example.com" };
// const invalidUserName: UserName = { id: 1 }; // Error: 'id' is not in the type.

//* Explanation:
// 1. K extends keyof T: Ensures K only includes keys from T.
// 2. Mapped Type: Iterates over K (P in K) and includes only those properties in the resulting type.
// 3. Property Mapping: T[P] retrieves the type of the property P from T.
