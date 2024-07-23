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
    // alert("You clicked me!!");
});
//* Type assertion - 'as' keyword
const mystery = "Mystery";
// mystery.length; // ERROR: 'mystery' is of type 'unknown'.
// asserting type -
mystery.length;
const todoList = getTodosFromStorage();
//* Type assertion with DOM
const clickBtn = document.getElementById("btn");
const inputElement = document.getElementById("todoInput");
// clickBtn.addEventListener('click', function(){
//   alert(inputElement.value);
//   inputElement.value = "";
// })
const todoForm = document.querySelector("form");
const todoListElement = document.getElementById("todoList");
if (todoList.length) {
    todoList.forEach(createTodo);
}
//* Working with Events - submit event
function handleSubmit(e) {
    e.preventDefault();
    const todo = {
        text: inputElement.value,
        completed: false,
    };
    createTodo(todo);
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
    inputElement.value = "";
}
function getTodosFromStorage() {
    const todos = localStorage.getItem('todos');
    if (!todos)
        return [];
    return JSON.parse(todos);
}
function createTodo(todo) {
    const newTodoElement = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    // newTodoElement.innerText = todoText;
    // OR
    newTodoElement.append(todo.text);
    newTodoElement.append(checkbox);
    todoListElement.append(newTodoElement);
}
todoForm.addEventListener('submit', handleSubmit);
