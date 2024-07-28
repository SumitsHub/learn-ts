class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
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
