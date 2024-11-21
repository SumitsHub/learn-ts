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


### 07. Variance in TypeScript Generics
What Is Variance in TypeScript Generics?
Variance refers to how subtyping relationships between more complex types (e.g., generics) relate to the subtyping relationships of their components.

- Covariance: A type is covariant if it preserves the subtyping relationship.
Example: If A is a subtype of B, then Container<A> is a subtype of Container<B>.

- Contravariance: A type is contravariant if it reverses the subtyping relationship.
Example: If A is a subtype of B, then Handler<B> is a subtype of Handler<A>.

- Invariance: A type is invariant if no subtyping relationship is preserved.

#### Key Takeaways
- Covariance: Safe for reading; string[] can be treated as unknown[] when elements are only read.
- Contravariance: Safe for function parameters; a function expecting a broader type can safely accept more specific types.
- Invariance: Prevents unsafe operations; string[] cannot fully substitute unknown[] in mutable contexts to avoid breaking the type system.

By enforcing invariance for arrays in mutable contexts, TypeScript ensures type safety and prevents runtime errors caused by incorrect assumptions about array contents.