// array of numbers - type bound to number
// const nums: number[] = [];

//* Generics - allows us to create reusable components that can work with a variety of types rather than a single one.

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

const btnEl = document.querySelector<HTMLButtonElement>(".btn")!;
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


//* Generics with constraints - T extends 'some type'
interface Lengthwise {
  length: number;
}
// function to get length of an object that has 'length' property
function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}
console.log(getLength("hello")); // 5
console.log(getLength([1, 2, 3])); // 3
console.log(getLength({ length: 10 })); // 10
console.log(getLength({ random: 'random', length: 10 })); // 10

// console.log(getLength(4)); // Error: Argument of type '4' is not assignable to parameter of type 'Lengthwise'

// NOTE: we can't extend 'interface' while defining class
// class Some extends Lengthwise { } 

//* Generics with "keyof" constraint - K extends 'keyof T'
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const person = { name: "John", age: 30 };
console.log(getProperty(person, "name")); // John

// console.log(keyof person); // ERROR: 'keyof' type operator cannot be applied to an expression whose type lacks a call or index signature

console.log(getProperty("Something", "length"));


//* default type parameter
function createArray2<T = string>(length: number, value: T): Array<T> {
  return new Array(length).fill(value);
}
const arr3 = createArray2(5, "hello");
console.log(arr3); // ["hello", "hello", "hello", "hello", "hello"]
const arr4 = createArray2<number>(5, 10);
console.log(arr4); // [10, 10, 10, 10, 10]


//* Generics with classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data = this.data.filter((el) => el !== item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("hello");
textStorage.addItem("world");
textStorage.addItem("typescript");
console.log(textStorage.getItems()); // ["hello", "world", "typescript"]