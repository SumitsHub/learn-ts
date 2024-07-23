const btn = document.getElementById("btn"); //* Type- HTMLElement | null
console.log(btn);

// btn.addEventListener("click", function () {
//   //* 'btn' is possibly 'null'
//   alert("Clicked");
// });

//* Non-null assertion operator (!)
const btn2 = document.getElementById("btn")!;
btn2.addEventListener("click", function () {
  // alert("You clicked me!!");
});

//* Type assertion - 'as' keyword

const mystery: unknown = "Mystery";

// mystery.length; // ERROR: 'mystery' is of type 'unknown'.

// asserting type -
(mystery as string).length;

//* Type assertion with DOM
const clickBtn = document.getElementById("btn") as HTMLButtonElement;
const inputElement = document.getElementById("todoInput") as HTMLInputElement;

// clickBtn.addEventListener('click', function(){
//   alert(inputElement.value);
//   inputElement.value = "";
// })

const todoForm = document.querySelector("form")!;
const todoList = document.getElementById("todoList")!;

//* Working with Events - submit event
function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const todoText = inputElement.value;
  const newTodoElement = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // newTodoElement.innerText = todoText;
  // OR
  newTodoElement.append(todoText);
  newTodoElement.append(checkbox);

  todoList.append(newTodoElement);
  inputElement.value = "";
}

todoForm.addEventListener('submit', handleSubmit);