import Dog from "./Dog.js";
import ShelterDog from "./ShelterDog.js";
import { add, multiply } from "./utils.js";
let dog = new Dog("Sheru", 0.5);
console.log(dog.getAge());
let shDog = new ShelterDog("Shelter Sheru", 1, "Labro");
console.log(shDog.getBreed());
console.log(add(3, 4));
console.log(multiply(3, 4));
