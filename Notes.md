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
- After compiling it will generate .js file with the same filename


## General points
- TS error messages are useful while writing the code only, it don't block - TS compiler compiles the code even with error messages

## Type in TS
- number, string, null, undefined, boolean, void
- TS specific: any, never, unknown


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