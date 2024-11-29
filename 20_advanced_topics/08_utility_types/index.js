//* Utility Types: Omit, Pick, and Extract
// TypeScript provides built-in utility types to manipulate and transform types. Here's how Omit, Pick, and Extract work:
// Result: { name: string; email: string }
var userName = { name: "Alice", email: "alice@example.com" };
// Result: { name: string; email: string }
var userWithoutId = { name: "Alice", email: "alice@example.com" };
// Result: string | number
var value = "hello"; // Valid
// Result: { name: string; email: string }
var userName2 = { name: "Alice", email: "alice@example.com" };
// const invalidUserName: UserName = { id: 1 }; // Error: 'id' is not in the type.
//* Explanation:
// 1. K extends keyof T: Ensures K only includes keys from T.
// 2. Mapped Type: Iterates over K (P in K) and includes only those properties in the resulting type.
// 3. Property Mapping: T[P] retrieves the type of the property P from T.
function uniqueArray(arr) {
    var _a, _b, _c, _d;
    var output = [];
    var strArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        var str = "".concat((_a = obj.a) !== null && _a !== void 0 ? _a : "", "-").concat((_b = obj.b) !== null && _b !== void 0 ? _b : "", "-").concat((_c = obj.c) !== null && _c !== void 0 ? _c : "", "-").concat((_d = obj.d) !== null && _d !== void 0 ? _d : "");
        if (!strArr.includes(str)) {
            strArr.push(str);
            output.push(obj);
        }
    }
    return output;
}
var arr1 = [
    { a: 1, b: 2, c: 3, d: 4 },
    { a: 5, b: 6, c: 7, d: 8 },
    { a: 1, b: 2, c: 3, d: 4 }, // Duplicate
];
var expectedOutput1 = [
    { a: 1, b: 2, c: 3, d: 4 },
    { a: 5, b: 6, c: 7, d: 8 },
];
var result1 = uniqueArray(arr1);
console.log(result1);
