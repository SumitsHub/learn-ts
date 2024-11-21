//* Custom Mapped Type: All Properties Optional Except One

// We can create a custom mapped type that makes all properties optional except a specified one.

type OptionalExceptOne<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]-?: T[P]; // Required for key K
} & {
  [P in keyof T as P extends K ? never : P]?: T[P]; // Optional for other keys
};

// Example usage:
type User = {
  id: number;
  name: string;
  email: string;
};

type UserWithMandatoryID = OptionalExceptOne<User, "id">;

// Example usage:
const user1: UserWithMandatoryID = { id: 1 }; // Valid
const user2: UserWithMandatoryID = { id: 2, name: "Alice" }; // Valid
// const user3: UserWithMandatoryID = { name: "Alice" }; // Error: Property 'id' is missing

// * Explanation
// The OptionalExceptOne type:
// 1. Makes the specified key (K) required using -?.
// 2. Makes all other keys optional using ?.
// 3. Combines these two mapped types with & (intersection type).
