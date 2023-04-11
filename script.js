const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  // Create a new li element
  const li = document.createElement("li");
  li.innerHTML = `
		<span>${todoInput.value}</span>
		<button>Delete</button>
	`;
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = "";

  // Add a click event listener to the delete button
  const deleteBtn = li.querySelector("button");
  deleteBtn.addEventListener("click", deleteTodo);
}

function deleteTodo() {
  const li = this.parentNode;
  todoList.removeChild(li);
}
