//* Tuples - Tuples are arrays with fixed length and ordered with specific types - like super rigid arrays.
var color = [123, 234, 213];
// let red: Color = []; // ERROR - Type '[]' is not assignable to type 'Color'.
var green = [0, 155, 0];
var resOK = [200, "OK"];
// const res404: HTTPResponse = ['Not found', 404]; // Error - order need to match
// pushing extra don't give error
resOK.push("Something");
console.log(resOK);
//* array of tuples
var responses = [
    [200, "OK"],
    [404, "Not found"],
    [401, "Unauthorized"],
];
//* Enums - Enums allows us to define a set of named constants. We can give these constants numeric or string values.
var Responses;
(function (Responses) {
    Responses[Responses["yes"] = 0] = "yes";
    Responses[Responses["no"] = 1] = "no";
})(Responses || (Responses = {}));
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
    Direction[Direction["DOWN"] = 3] = "DOWN";
    Direction[Direction["LEFT"] = 4] = "LEFT";
})(Direction || (Direction = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 200] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 201] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 400] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 401] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var oStatus = OrderStatus.RETURNED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
//* Enum - 'string' values
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys["LEFT"] = "left";
})(ArrowKeys || (ArrowKeys = {}));
var move = ArrowKeys.LEFT;
var d = 0 /* Day.SUNDAY */;
