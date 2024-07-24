class Person {
  // class variables - it's same as instance variable, it's not a static variable
  noOfWins = 0;

  // private variable - this is accessible inside class only
  #secret = "Secret message";

  constructor(name, age) {
    this.name = name;
    this.age = age;
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

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person1.incWin();
console.log(person1.noOfWins); // 1

// person1.#secret; // SyntaxError: Private field '#secret' must be declared in an enclosing class
// person1.#privateMethod(); // SyntaxError: Private field '#privateMethod' must be declared in an enclosing class

// Trying to access non existing random variable - it gives same error as if this private variable exists
person1.#randomVar; // SyntaxError: Private field '#randomVar' must be declared in an enclosing class

const person2 = new Person("Bob", 25);
console.log(person2.age); // Output: 25
console.log(person2.noOfWins); // 0