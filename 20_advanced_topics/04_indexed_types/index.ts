//* What Are Indexed Access Types in TypeScript?
// Indexed access types in TypeScript allow you to retrieve the type of a specific property or group of properties from another type using square bracket notation (T[K]).

// Syntax:
// T[K]
// Where:
// T is the type you are indexing into.
// K is the property (or union of properties) whose type you want to access.

//* Examples of Indexed Access Types

//* Example 1: Accessing a Single Property Type

type User = {
  id: number;
  name: string;
  email: string;
};

type UserName = User["name"]; // string
type UserEmail = User["email"]; // string

// Here, User["name"] extracts the type of the name property from the User type.

//* Example 2: Accessing Multiple Properties (Union of Types)

type UserDetails = User["name" | "email"]; // string

// User["name" | "email"] creates a union of the types of name and email properties, which is string.

//* Example 3: Using 'keyof' with Indexed Access Types
// You can combine keyof with indexed access types to create dynamic references.

type UserValue = User[keyof User]; // number | string

// 'keyof User' produces the union "id" | "name" | "email".
// User[keyof User] retrieves the types of all properties, resulting in number | string

//* Example 4: Nested Indexed Access
type ApiResponse = {
  data: {
    user: {
      id: number;
      name: string;
    };
  };
};

type UserName2 = ApiResponse["data"]["user"]["name"]; // string

// NOTE: You can chain indices to extract deeply nested property types.
