function calcAge(yearOfBirth: number): number {
  return new Date().getFullYear() - yearOfBirth;
}

console.log(calcAge(1998)); // 26 -> 2024 - 1998


// Implicit any type checking 
// const getSum(num1, num2) {
//     return num1 + num2;
// }