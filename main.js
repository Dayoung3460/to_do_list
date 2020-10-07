const inputTodo = document.querySelector(".input");
const form = document.querySelector("form");
const addBtn = document.querySelector(".addBtn");
const lists = document.querySelector(".lists");
const filterOption = document.querySelector("select");

document.addEventListener("DOMContentLoaded", getTodos);
addBtn.addEventListener("click", addTodo);
form.addEventListener("submit", addTodo);
lists.addEventListener("click", deleteOrCompleted);
filterOption.addEventListener("click", filterTodo);

function addTodo(event) {
  event.preventDefault();

  const todoList = document.createElement("li");
  todoList.classList.add("list");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("chkbox");
  todoList.appendChild(input);

  const label = document.createElement("label");
  label.innerText = inputTodo.value;
  label.classList.add("todo-item");
  todoList.appendChild(label);

  saveLocalTodos(inputTodo.value);

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  completedBtn.classList.add("completed");
  todoList.appendChild(completedBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashBtn.classList.add("trash");
  todoList.appendChild(trashBtn);

  lists.appendChild(todoList);
  inputTodo.value = "";
}

function deleteOrCompleted(e) {
  const item = e.target;

  if (item.classList[0] === "trash") {
    const todo = item.parentElement;

    todo.classList.add("slideRemove");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
    const trashTodo = todo.childNodes[1];
    saveTrash(trashTodo.innerText);
  }

  if (item.classList[0] === "completed") {
    const todo = item.parentElement;
    todo.classList.add("slideCompleted");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
    const completeTodo = todo.childNodes[1];
    saveComplete(completeTodo.innerText);
  }
}

function filterTodo(e) {
  const todos = lists.childNodes;
  todos.forEach((todo) => {
    if (todo.classList !== undefined) {
      switch (e.target.value) {
        case "all":
          getTodos();
          break;
        case "completed":
          getComplete();
          break;
        case "deleted":
          getTrash();
          break;
      }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function saveTrash(trash) {
  let trashes;
  if (localStorage.getItem("trashes") === null) {
    trashes = [];
  } else {
    trashes = JSON.parse(localStorage.getItem("trashes"));
  }
  trashes.push(trash);
  localStorage.setItem("trashes", JSON.stringify(trashes));
}

function saveComplete(complete) {
  let completes;
  if (localStorage.getItem("completes") === null) {
    completes = [];
  } else {
    completes = JSON.parse(localStorage.getItem("completes"));
  }
  completes.push(complete);
  localStorage.setItem("completes", JSON.stringify(completes));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const todoList = document.createElement("li");
    todoList.classList.add("list");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("chkbox");
    todoList.appendChild(input);

    const label = document.createElement("label");
    label.innerText = todo;
    label.classList.add("todo-item");
    todoList.appendChild(label);

    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedBtn.classList.add("completed");
    todoList.appendChild(completedBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashBtn.classList.add("trash");
    todoList.appendChild(trashBtn);

    lists.appendChild(todoList);
  });
}

function getTrash() {
  let trashes;
  if (localStorage.getItem("trashes") === null) {
    trashes = [];
  } else {
    trashes = JSON.parse(localStorage.getItem("trashes"));
  }
  trashes.forEach((trash) => {
    const todoList = document.createElement("li");
    todoList.classList.add("list");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("chkbox");
    todoList.appendChild(input);

    const label = document.createElement("label");
    label.innerText = trash;
    label.classList.add("todo-item");
    todoList.appendChild(label);

    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedBtn.classList.add("completed");
    todoList.appendChild(completedBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashBtn.classList.add("trash");
    todoList.appendChild(trashBtn);

    lists.appendChild(todoList);
  });
}

function getComplete() {
  let completes;
  if (localStorage.getItem("completes") === null) {
    completes = [];
  } else {
    completes = JSON.parse(localStorage.getItem("completes"));
  }
  completes.forEach((complete) => {
    const todoList = document.createElement("li");
    todoList.classList.add("list");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("chkbox");
    todoList.appendChild(input);

    const label = document.createElement("label");
    label.innerText = complete;
    label.classList.add("todo-item");
    todoList.appendChild(label);

    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedBtn.classList.add("completed");
    todoList.appendChild(completedBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashBtn.classList.add("trash");
    todoList.appendChild(trashBtn);

    lists.appendChild(todoList);
  });
}

// function removeLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
// }

// localStorage.clear();
