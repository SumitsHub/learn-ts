// array of numbers - type bound to number
// const nums: number[] = [];

//* Examples 

//* #01. Array - creating array of numbers and strings using generics
const nums: Array<number> = [];
const colors: Array<string> = [];

//* #02. querySelector - returns Element | null
const inpuEl = document.querySelector<HTMLInputElement>('#username')!;
// OR
// const inpuEl = document.querySelector('#username') as HTMLInputElement;
console.dir(inpuEl);
console.log(inpuEl.value);

const btnEl = document.querySelector<HTMLButtonElement>('btn')!;
console.log(btnEl.textContent);
