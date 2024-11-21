## Advanced Topics - TypeScript

### 05. What Are Template Literal Types?

Template literal types in TypeScript allow you to create dynamic string types using the syntax of template literals (like those in JavaScript). They are formed by combining literal types, unions, and interpolations to produce new string types.

#### Key Takeaways:

- Template literal types dynamically create string types by combining literal types and interpolations.
- They work seamlessly with keyof, mapped types, and unions for powerful type manipulations.
- Use cases include creating prefixed keys, string pattern constraints, and more.

### 06. Generic Constraints

What Are Constraints in Generics?
Constraints in generics allow you to restrict the types that a generic type parameter (T) can accept. By using the extends keyword, you can specify that a type parameter must extend (or conform to) a particular type.

#### Key Takeaways:

Generic Constraints:

- Add flexibility while maintaining type safety.
- Prevent misuse by restricting to specific types or shapes.

Real-world Use Cases:

- Enforcing constraints on data passed to utility functions.
- Creating reusable and type-safe components or logic for specific domains.
