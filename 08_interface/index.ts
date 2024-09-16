//* defining interface - similar to type alias, used to define shape of object(only)

interface Point {
  x: number;
  y: number;
}

const p: Point = { x: 123, y: 456 };

//* readonly & optional properties

interface Person {
  readonly id: number; // readonly property
  fname: string;
  lname: string;
  nickname?: string; // optional property
}

let person1: Person = { id: 1, fname: "Gal", lname: "Gadot" }; // person without optional nickname
let person2: Person = { id: 1, fname: "Gal", lname: "Gadot", nickname: "Gady" }; // with nickname

// person1.id = 23; // ERROR: can't change readonly property

//* Interface methods

interface Animal {
  name: string;
  getName: () => string; // using arrow function syntax for method
  setName(name: string): void; // using brackets
}

let lion: Animal = {
  name: "Lammy",
  getName: function () {
    return this.name;
  },
  setName: function (name: string) {
    this.name = name;
  },
};

console.log(lion.getName()); // Lammy
lion.setName("King");
console.log(lion.getName()); // King

//* method parameters with interface
interface Product {
  name: string;
  price: number;
  applyDiscount(percentage: number): number;
}

let shoes: Product = {
  name: "Blue moon shoes",
  price: 100,
  applyDiscount(per: number) {
    // NOTE: we can't use 'this' keyword in arrow function
    this.price = (this.price * (100 - per)) / 100;
    return this.price;
  },
};

shoes.applyDiscount(40);
console.log(shoes.price); // 6-

//* Reopening Interfaces - interfaces don't get override if re-declared in the same scope instead get's merged

interface Item {
  name: string;
  price: number;
}

// let item: Item = { // ERROR: Property 'color' is missing - because of reopening the interface below
//     name: 'Laptop',
//     price: 120000
// }

// reopening the interface Item
interface Item {
  color: string;
// name: number; // ERROR: Subsequent property declarations must have the same type.
}

let item: Item = {
  name: "Bike",
  price: 2000000,
  color: "black", // added property by reopening
};


//* Extending interfaces
interface Person2 {
    fname: string,
    lname: string
}

interface Employee {
    readonly id: number | string;
    email: string
}

interface Engineer extends Person2, Employee {
    level: string,
    languages: string[]
}

let engineer: Engineer = {
    id: '192458',
    fname: 'Ajit',
    lname: 'Doval',
    email: 'ajit@gmail.com',
    level: 'Senior Developer',
    languages: ['JavaScript', 'Python']
}