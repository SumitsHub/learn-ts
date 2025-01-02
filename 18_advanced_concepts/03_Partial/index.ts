//* Partial in TypeScript */
// In TypeScript, Partial is a utility type that constructs a type with all properties of another type set to optional.
// This is useful when you want to create a new type that includes all properties of an existing type but makes them optional.

// Syntax:
// Partial<Type>
// Type: The original type you want to derive from.

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

type PartialUser = Partial<User>;

const partialUser: PartialUser = {
  id: 1,
  name: "John Doe",
  // email and phone are optional
};

console.log(partialUser);
