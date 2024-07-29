import Dog from "./Dog.js";
class ShelterDog extends Dog {
    constructor(name, age, breed) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    getBreed() {
        return this.breed;
    }
}
export default ShelterDog;
