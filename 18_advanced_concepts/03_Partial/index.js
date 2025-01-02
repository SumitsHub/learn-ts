//* Partial in TypeScript */
// In TypeScript, Partial is a utility type that constructs a type with all properties of another type set to optional.
// This is useful when you want to create a new type that includes all properties of an existing type but makes them optional.
var partialUser = {
    id: 1,
    name: "John Doe",
    // email and phone are optional
};
console.log(partialUser);
