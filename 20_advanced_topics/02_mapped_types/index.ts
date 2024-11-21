//* What Are Mapped Types in TypeScript?

// Mapped types in TypeScript allow you to transform the properties of a type systematically.
// They work by iterating over each property of a given type and applying a transformation.
// This is particularly useful for modifying existing types without having to create entirely new ones.

// Built-In Mapped Types: Partial, Required, Readonly, and Record

//* 1. Partial
// The Partial type makes all properties of a type optional.

type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;

// Example usage:
const partialUser: PartialUser = { name: "Alice" }; // Valid, since properties are optional.

//* 2. Required
// The Required type makes all properties of a type mandatory.

type OptionalUser = {
  id?: number;
  name?: string;
  email?: string;
};

type FullUser = Required<OptionalUser>;

// Example usage:
const fullUser: FullUser = { id: 1, name: "Alice", email: "alice@example.com" }; // All properties are required.

//* 3. Readonly
// The Readonly type makes all properties of a type immutable.

type EditableUser = {
  id: number;
  name: string;
};

type ReadonlyUser = Readonly<EditableUser>;

// Example usage:
const readonlyUser: ReadonlyUser = { id: 1, name: "Alice" };
// readonlyUser.id = 2; //* Error: Cannot assign to 'id' because it is a read-only property.

//* 4. Record
// The Record type creates an object type with keys of a specified type and values of another specified type.

type RecordExample = Record<string, number>;

// Example usage:
const scores: RecordExample = { Alice: 95, Bob: 87 };
