//* Annotating union types
var age = 21;
age = "24";
age = 25;
var weird = true;
weird = "Awesome";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.123, long: 23.334 };
//* Union types with function
function printAge(age) {
    console.log("You are ".concat(age, " years old."));
}
printAge(23);
printAge("32");
//* Type narrowing
function calculateTax(price, tax) {
    // price.replace("S", ""); // ERROR: Property 'replace' does not exist on type 'string | number'.
    // return price * tax; // ERROR: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    if (typeof price === "string")
        price = parseFloat(price.replace("$", ""));
    return price * tax;
}
console.log(calculateTax(45, 0.07));
console.log(calculateTax("$45", 0.07));
