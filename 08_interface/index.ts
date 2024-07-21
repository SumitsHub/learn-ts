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
  getName(): () => string; // using arrow function syntax for method
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
