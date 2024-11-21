// What are Type Guards, and How Do They Work in TypeScript?
// Type guards in TypeScript are mechanisms that help you narrow down the type of a variable within a conditional block. They refine the type information, enabling better type checking and autocompletion in the code. Type guards allow TypeScript to infer a more specific type than what is declared, based on the runtime behavior.

// Type Guards Using typeof, instanceof, and Custom Guards
// 1. Using typeof
// The typeof operator is used to check primitive types like string, number, boolean, etc.

function processInput(input: string | number) {
  if (typeof input === "string") {
    console.log(`String value: ${input.toUpperCase()}`);
  } else {
    console.log(`Number value: ${input * 2}`);
  }
}

processInput("hello"); // Output: String value: HELLO
processInput(10); // Output: Number value: 20

// 2. Using instanceof
// The instanceof operator checks whether an object is an instance of a specific class or constructor.

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

function handleAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark(); // Narrowed to Dog
  } else {
    animal.speak(); // Narrowed to Animal
  }
}

const dog = new Dog();
const genericAnimal = new Animal();

handleAnimal(dog); // Output: Woof!
handleAnimal(genericAnimal); // Output: Animal sound

// 3. Custom Type Guards
// You can create custom type guards using value is Type syntax to define specific checks.

type Car = { make: string; model: string; year: number };
type Bike = { brand: string; cc: number };

function isCar(vehicle: Car | Bike): vehicle is Car {
  return (vehicle as Car).make !== undefined;
}

function handleVehicle(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    console.log(`Car Make: ${vehicle.make}, Model: ${vehicle.model}`);
  } else {
    console.log(`Bike Brand: ${vehicle.brand}, CC: ${vehicle.cc}`);
  }
}

const car: Car = { make: "Toyota", model: "Corolla", year: 2020 };
const bike: Bike = { brand: "Yamaha", cc: 150 };

handleVehicle(car); // Output: Car Make: Toyota, Model: Corolla
handleVehicle(bike); // Output: Bike Brand: Yamaha, CC: 150

//* Custom Type Guard: Check if a Value Is an Object with a Specific Shape

type User = {
  id: number;
  name: string;
  email: string;
};

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof (value as User).id === "number" &&
    "name" in value &&
    typeof (value as User).name === "string" &&
    "email" in value &&
    typeof (value as User).email === "string"
  );
}

// Usage
const data: unknown = { id: 1, name: "Alice", email: "alice@example.com" };

if (isUser(data)) {
  console.log(`User ID: ${data.id}, Name: ${data.name}`); // Type narrowed to User
} else {
  console.log("Not a valid User object.");
}
