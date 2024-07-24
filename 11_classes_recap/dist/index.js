class Person {
  // class variables - it's same as instance variable, it's not a static variable
  noOfWins = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  incWin() {
    this.noOfWins++;
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person1.incWin();
console.log(person1.noOfWins); // 1

const person2 = new Person("Bob", 25);
console.log(person2.age); // Output: 25
console.log(person2.noOfWins); // 0