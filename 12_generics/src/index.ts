// array of numbers - type bound to number
// const nums: number[] = [];

//* Examples

//* #01. Array - creating array of numbers and strings using generics
const nums: Array<number> = [];
const colors: Array<string> = [];

//* #02. querySelector - returns Element | null
const inpuEl = document.querySelector<HTMLInputElement>("#username")!;
// OR
// const inpuEl = document.querySelector('#username') as HTMLInputElement;
console.dir(inpuEl);
console.log(inpuEl.value);

const btnEl = document.querySelector<HTMLButtonElement>("btn")!;
console.log(btnEl.textContent);

//* creating own generic function
function createArray<T>(length: number, value: T): Array<T> {
  return new Array(length).fill(value);
}
// creating string array
const arr = createArray<string>(5, "hello");
console.log(arr);
// creating number array
const arr2 = createArray<number>(5, 10);
console.log(arr2); // [10, 10, 10, 10, 10]

function randomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// using string array
const randomStr = randomElement<string>(["hello", "world", "typescript"]);
console.log(randomStr); // hello | world | typescript
const randomNum = randomElement<number>([10, 20, 30, 40, 50]);
console.log(randomNum); //

//* inferred generic type parameter
console.log(randomElement(["hello", "world", "typescript"])); // TypeScript will infer the type of T as string
console.log(randomElement([true, false, true])); // TypeScript will infer the type of T as boolean

//* Generics with multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const mergedObj = merge({ name: "John" }, { age: 30 });
console.log(mergedObj); // {name: "John", age: 30}
