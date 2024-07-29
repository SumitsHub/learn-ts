class Dog {
  constructor(public name: string, public age: number) {}

  getAge(): number {
    return this.age;
  }
}

export default Dog;
