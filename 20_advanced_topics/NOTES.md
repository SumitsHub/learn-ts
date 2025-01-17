## Advanced Topics - TypeScript

### Custom Utility Types:
You can implement most utility types using mapped types, indexed access types, and conditional types.

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


### 09. Decorators
What Are Decorators in TypeScript?
- Decorators are special functions in TypeScript (and JavaScript) that allow you to modify or annotate classes, methods, properties, or parameters at design time. They are part of the experimental ES proposal and are enabled in TypeScript via the "experimentalDecorators" compiler option.

- Decorators are used for metaprogramming purposes and are commonly seen in frameworks like Nest & Angular.

#### Types of Decorators in TypeScript
There are several types of decorators, and they can be applied to different parts of a class:
1. Class Decorators: Applied to the class itself.
2. Method Decorators: Applied to the methods of a class.
3. Property Decorators: Applied to properties of a class.
4. Parameter Decorators: Applied to the parameters of methods (not discussed here but similarly implemented).


#### Enabling Decorators in TypeScript
To use decorators in TypeScript, you need to enable the experimentalDecorators flag in your tsconfig.json:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```