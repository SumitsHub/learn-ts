/** Omit in TypeScript */

// In TypeScript, Omit is a utility type that constructs a new type by picking all properties from an existing type except for the specified keys.
// This is useful when you want to create a type that is similar to another type but without certain properties.

// Syntax:
// Omit<Type, Keys>
// Type: The original type you want to derive from.
// Keys: The keys you want to exclude from the original type.

interface Person {
  name: string;
  age: number;
  address: string;
  email: string;
}

type PersonWithoutEmail = Omit<Person, "email">;

const person: PersonWithoutEmail = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
  // email is omitted
};

interface User {
  id: number;
  username: string;
  password: string;
  email: string;
}

function updateUserInfo(user: Omit<User, "id">) {
  // Function implementation
}

updateUserInfo({
  username: "newUsername",
  password: "newPassword",
  email: "newEmail@example.com",
  // id is omitted
});

export { User }; // to make it module