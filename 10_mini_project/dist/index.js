"use strict";
const btn = document.getElementById("btn"); //* Type- HTMLElement | null
console.log(btn);
// btn.addEventListener("click", function () {
//   //* 'btn' is possibly 'null'
//   alert("Clicked");
// });
//* Non-null assertion operator (!)
const btn2 = document.getElementById("btn");
btn2.addEventListener("click", function () {
    alert("You clicked me!!");
});
//* Type assertion - 'as' keyword
const mystery = 'Mystery';
// mystery.length; // ERROR: 'mystery' is of type 'unknown'.
// asserting type - 
mystery.length;
//* Type assertion with DOM
const clickBtn = document.getElementById('btn');
const inputElement = document.getElementById('todoInput');
clickBtn.addEventListener('click', function () {
    alert(inputElement.value);
    inputElement.value = "";
});
