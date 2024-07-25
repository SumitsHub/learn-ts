class Person {
  // class variables - it's same as instance variable, it's not a static variable
  noOfWins = 0;

  // static variable - class level variable cannot be accessed using instance variable
  static species = "HUMAN";

  // private variable - this is accessible inside class only
  #secret = "Secret message";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // defining getter
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }

  set birthYear(year) {
    if (year < 0) {
      throw new Error("Year cant be negative!");
    }
    this.yearOfBirth = year;
  }

  // static variable
  static createNewPerson() {
    return new Person("Andy", "Marten");
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  tellSecret() {
    // private variable is accessible from inside class
    console.log(`My secret is ${this.#secret}.`);
  }

  incWin() {
    this.noOfWins++;
  }

  // private method - this is accessible from inside class only
  #privateMethod() {
    console.log("This is a private method.");
  }
}

// Inheritance - extending class to reuse enhance functionality of class
class SuperPerson extends Person {
  constructor() {
    // super keyword - to invoke constructor of parent class
    super("Batman", 100);
    this.power = "SuperPower";
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person1.incWin();
console.log(person1.noOfWins); // 1

// person1.#secret; // SyntaxError: Private field '#secret' must be declared in an enclosing class
// person1.#privateMethod(); // SyntaxError: Private field '#privateMethod' must be declared in an enclosing class

// Trying to access non existing random variable - it gives same error as if this private variable exists
// person1.#randomVar; // SyntaxError: Private field '#randomVar' must be declared in an enclosing class

const person2 = new Person("Bob", 25);
console.log(person2.age); // Output: 25
console.log(person2.noOfWins); // 0

// using getter - as property
console.log(person1.birthYear); // 1994

// setting year using setter
person1.birthYear = 1993;
console.log(person1.birthYear);

// static fields -
console.log(Person.species); // HUMAN
console.log(person1.species); // undefined

console.log(Person.createNewPerson());
// console.log(person1.createNewPerson()); // ERROR: it's not a function

// creating instance of SuperPerson class
// const sp = SuperPerson(); // ERROR - if invoked without new keyword
const sp = new SuperPerson();
console.log(sp); // it has all properties from Person including private properties
