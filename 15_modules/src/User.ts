import { type User as UserType } from "./types";

class User implements UserType {
  constructor(public name: string, public age: number) {}

  logout() {
    console.log(`User ${this.name} aged ${this.age} logs out!`);
  }
}

// named export example
export const userHelper = () => {
  console.log("This is user helper");
};

// default export
export default User;
