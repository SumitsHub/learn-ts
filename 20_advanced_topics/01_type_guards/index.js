// What are Type Guards, and How Do They Work in TypeScript?
// Type guards in TypeScript are mechanisms that help you narrow down the type of a variable within a conditional block. They refine the type information, enabling better type checking and autocompletion in the code. Type guards allow TypeScript to infer a more specific type than what is declared, based on the runtime behavior.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Type Guards Using typeof, instanceof, and Custom Guards
// 1. Using typeof
// The typeof operator is used to check primitive types like string, number, boolean, etc.
function processInput(input) {
    if (typeof input === "string") {
        console.log("String value: ".concat(input.toUpperCase()));
    }
    else {
        console.log("Number value: ".concat(input * 2));
    }
}
processInput("hello"); // Output: String value: HELLO
processInput(10); // Output: Number value: 20
// 2. Using instanceof
// The instanceof operator checks whether an object is an instance of a specific class or constructor.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        console.log("Animal sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
function handleAnimal(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // Narrowed to Dog
    }
    else {
        animal.speak(); // Narrowed to Animal
    }
}
var dog = new Dog();
var genericAnimal = new Animal();
handleAnimal(dog); // Output: Woof!
handleAnimal(genericAnimal); // Output: Animal sound
function isCar(vehicle) {
    return vehicle.make !== undefined;
}
function handleVehicle(vehicle) {
    if (isCar(vehicle)) {
        console.log("Car Make: ".concat(vehicle.make, ", Model: ").concat(vehicle.model));
    }
    else {
        console.log("Bike Brand: ".concat(vehicle.brand, ", CC: ").concat(vehicle.cc));
    }
}
var car = { make: "Toyota", model: "Corolla", year: 2020 };
var bike = { brand: "Yamaha", cc: 150 };
handleVehicle(car); // Output: Car Make: Toyota, Model: Corolla
handleVehicle(bike); // Output: Bike Brand: Yamaha, CC: 150
function isUser(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof value.id === "number" &&
        "name" in value &&
        typeof value.name === "string" &&
        "email" in value &&
        typeof value.email === "string");
}
// Usage
var data = { id: 1, name: "Alice", email: "alice@example.com" };
if (isUser(data)) {
    console.log("User ID: ".concat(data.id, ", Name: ").concat(data.name)); // Type narrowed to User
}
else {
    console.log("Not a valid User object.");
}
