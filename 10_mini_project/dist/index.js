"use strict";
const btn = document.getElementById("btn"); //* Type- HTMLElement | null
console.log(btn);
// btn.addEventListener("click", function () {
//   //* 'btn' is possibly 'null'
//   alert("Clicked");
// });
//* Non-null assertion operator
const btn2 = document.getElementById("btn");
btn2.addEventListener("click", function () {
    alert("You clicked me!!");
});
