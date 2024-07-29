import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply } from "./utils";

let dog = new Dog("Sheru", 0.5);
console.log(dog.getAge());

let shDog = new ShelterDog("Shelter Sheru", 1, "Labro");
console.log(shDog.getBreed());

console.log(add(3, 4));
console.log(multiply(3, 4));
