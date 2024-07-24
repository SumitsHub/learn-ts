class Person {
    // class variables
  constructor(name, age) {
	this.name = name;
	this.age = age;
  }

  greet() {
	console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


const person2 = new Person('Bob', 25);
console.log(person2.age); // Output: 25