"use strict";
// array of numbers - type bound to number
// const nums: number[] = [];
//* Examples 
//* #01. Array - creating array of numbers and strings using generics
const nums = [];
const colors = [];
//* #02. querySelector - returns Element | null
const inpuEl = document.querySelector('#username');
// OR
// const inpuEl = document.querySelector('#username') as HTMLInputElement;
console.dir(inpuEl);
console.log(inpuEl.value);
const btnEl = document.querySelector('btn');
console.log(btnEl.textContent);
