const btn = document.getElementById("btn"); //* Type- HTMLElement | null
// console.log(btn);

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

//* TODO APP from onwards*/
interface Todo {
  text: string;
  completed: boolean;
}

const todoList: Todo[] = getTodosFromStorage();

//* Type assertion with DOM
const clickBtn = document.getElementById("btn") as HTMLButtonElement;
const inputElement = document.getElementById("todoInput") as HTMLInputElement;

// clickBtn.addEventListener('click', function(){
//   alert(inputElement.value);
//   inputElement.value = "";
// })

const todoForm = document.querySelector("form")!;
const todoListElement = document.getElementById("todoList")!;

if (todoList.length) {
  todoList.forEach(createTodo);
}

//* Working with Events - submit event
function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const todo: Todo = {
    text: inputElement.value,
    completed: false,
  };

  createTodo(todo);
  todoList.push(todo);
  saveTodos();
  inputElement.value = "";
}

function getTodosFromStorage(): Todo[] {
  const todos = localStorage.getItem('todos');
  if (!todos) return [];
  return JSON.parse(todos);
}

function createTodo(todo: Todo) {
  const newTodoElement = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  // newTodoElement.innerText = todoText;
  // OR
  newTodoElement.append(todo.text);
  newTodoElement.append(checkbox);

  todoListElement.append(newTodoElement);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

todoForm.addEventListener('submit', handleSubmit);