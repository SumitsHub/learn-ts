//* defining interface - similar to type alias, used to define shape of object(only)
var p = { x: 123, y: 456 };
var person1 = { id: 1, fname: "Gal", lname: "Gadot" }; // person without optional nickname
var person2 = { id: 1, fname: "Gal", lname: "Gadot", nickname: "Gady" }; // with nickname
var lion = {
    name: "Lammy",
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    },
};
console.log(lion.getName()); // Lammy
lion.setName("King");
console.log(lion.getName()); // King
var shoes = {
    name: "Blue moon shoes",
    price: 100,
    applyDiscount: function (per) {
        // NOTE: we can't use 'this' keyword in arrow function
        this.price = (this.price * (100 - per)) / 100;
        return this.price;
    },
};
shoes.applyDiscount(40);
console.log(shoes.price); // 6-
var item = {
    name: "Bike",
    price: 2000000,
    color: "black", // added property by reopening
};
var engineer = {
    id: '192458',
    fname: 'Ajit',
    lname: 'Doval',
    email: 'ajit@gmail.com',
    level: 'Senior Developer',
    languages: ['JavaScript', 'Python']
};
