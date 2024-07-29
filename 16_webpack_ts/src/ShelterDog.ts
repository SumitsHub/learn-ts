import Dog from "./Dog.js";

class ShelterDog extends Dog {
  constructor(public name: string, public age: number, public breed: string) {
    super(name, age);
  }

  getBreed(): string {
    return this.breed;
  }
}

export default ShelterDog;
