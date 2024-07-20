//* Tuples - Tuples are arrays with fixed length and ordered with specific types - like super rigid arrays.

const color: [number, number, number] = [123, 234, 213];

// creating type alias for tuple
type Color = [number, number, number];

// let red: Color = []; // ERROR - Type '[]' is not assignable to type 'Color'.
let green: Color = [0, 155, 0];
// let blue: Color = [0, 0, "155"]; // ERROR: ype '[]' is not assignable to type 'Color'.

type HTTPResponse = [number, string];

const resOK: HTTPResponse = [200, "OK"];
// const res404: HTTPResponse = ['Not found', 404]; // Error - order need to match

// pushing extra don't give error
resOK.push("Something");
console.log(resOK);

//* array of tuples
const responses: HTTPResponse[] = [
  [200, "OK"],
  [404, "Not found"],
  [401, "Unauthorized"],
];

//* Enums - Enums allows us to define a set of named constants. We can give these constants numeric or string values.

enum Responses {
  yes, // 0 - Default count starts from 0
  no, // 1
}

enum Direction {
  UP = 1, // assigning value explicitly
  RIGHT, // 2
  DOWN, // 3
  LEFT, // 4
}

enum OrderStatus {
  PENDING = 200,
  SHIPPED, // 201
  DELIVERED = 400,
  RETURNED, // 401
}

const oStatus = OrderStatus.RETURNED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

//* Enum - 'string' values

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  RIGHT = "right",
  LEFT = "left",
}

let move = ArrowKeys.LEFT;

//* TS compiler behind the scene - generates extra code for 'enum' in JS, to avoid that use const keyword before enum declaration
const enum Day {
  SUNDAY,
  MONDAY,
}

let d = Day.SUNDAY; // var d = 0 /* Day.SUNDAY */; - no extra code for enum Day
