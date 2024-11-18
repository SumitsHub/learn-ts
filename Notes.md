# Learning TypeScript - July 16,2024

## Install TypeScript globally 

```bash
npm install -g typescript
```
- Now you have 'tsc' command available globally
- Check TS version installed using - 'tsc -v'

## TS Playground
Link to play with TS code online - [link](https://www.typescriptlang.org/play/)

## Compile TS file
```bash
tsc filename.ts
```
OR (without file extension)
```bash
tsc filename
```
- After compiling it will generate .js file with the same filename (output directory/filename can be configured)


## General points
- TS error messages are useful while writing the code only, it don't block - TS compiler compiles the code even with error messages

## Type in TS
- number, string, null, undefined, boolean, void
- TS specific: any, never, unknown

## Difference between 'any' and 'unknown'
- any
  - Flexible but Unsafe: Allows any type of value, and you can perform any operation without TypeScript checks.
  - No Type Safety: Bypasses type checking, which can lead to runtime errors.
  - Use Case: Best for rapid prototyping or gradual typing when type is unknown or not yet defined.
- unknown
  - Type-Safe: Allows any type of value, but requires type checking before performing operations.
  - Safer than any: Forces you to narrow down the type (e.g., with typeof or type guards) before using it.
  - Use Case: Preferred over any when dealing with uncertain types in safer, more type-strict applications.

## Difference between 'types' and 'interface'
- interface can't have multiple aliases and can be use to define object type only
- type can define union and intersection types, offering more flexibility
- type alias can be anything literally -> type Answer = 'YES' | 'NO'; type tuple = [string, number]
- interface can be reopened type alias can't
- interface can 'extend' whereas type alias can intersect using '&'
- interface Can be implemented by classes, making it useful for defining contracts in object-oriented programming

## Type Declaration Files
- `.d.ts` files used for type declarations purpose
- Every package that supports typescript will have this file

## Installing types separately
- Some dependencies don't come with type declarations
- We can get types from '@types' package - 
  - [npmjs](https://www.npmjs.com/package/@types/node)
  - [github](https://github.com/DefinitelyTyped/DefinitelyTyped)
  - Example: `npm install --save-dev @types/lodash`

## Modules and Namespaces
In typescript modules and namespaces are used to organize and encapsulate code.

### Modules
- Definition: Modules are files that contain code. They can export import other modules.
- Usage: Modules are used to split code into smaller, reusable pieces.
- Syntax: Uses 'import' and 'export' keywords
- Scope: Modules have their scope, and the variables, functions, classes, etc. defined in a module are not accessible outside unless explicitly exported
- Example:
```ts
// math.js
export function add(a: number, b: number) {
  return a + b;
}

// main.js
import {add} from './math.js'
console.log(add(2,3));

```

### Namespaces
- Definition: Namespaces are a way to group related code together under a single name
- Usage: Namespaces are used to organize code withing single file or across multiple files
- Syntax: Uses the 'namespace' keyword
- Scope: Namespaces fo not have their own scope, they are part of global scope unless nested within another namespace
- Example:
```ts
namespace MathUtils {
  export function add(a: number, b: number) {
    return a + b;
  }
}

console.log(add(2,3));

```

Modules are preferred way to organize code in modern TypeScript, while namespaces are an older feature that is less commonly used today