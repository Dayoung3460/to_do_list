const inputTodo = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const lists = document.querySelector('.lists');
const filterOption = document.querySelector('select');

addBtn.addEventListener("click", addTodo);
lists.addEventListener("click", deleteOrCompleted);
filterOption.addEventListener("click", filterTodo);


function addTodo(event){
  event.preventDefault();

  const todoList = document.createElement("li");
  todoList.classList.add("list");

  const input = document.createElement("input");
  input.type = 'checkbox';
  input.classList.add('chkbox');
  todoList.appendChild(input);

  const label = document.createElement("label");
  label.innerText = inputTodo.value;
  label.classList.add('todo-item');
  todoList.appendChild(label);

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
  completedBtn.classList.add('completed');
  todoList.appendChild(completedBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashBtn.classList.add('trash');
  todoList.appendChild(trashBtn);

  lists.appendChild(todoList);
  inputTodo.value = "";
}

  function deleteOrCompleted(e){
    const item = e.target;
    
    if(item.classList[0] === 'trash'){
      const todo = item.parentElement;
      todo.classList.add('slideRemove');
      todo.addEventListener('transitionend', ()=>{
        todo.remove();
      });
    }

    if(item.classList[0] === 'completed'){
      const todo = item.parentElement;
      todo.classList.add('slideCompleted');
      todo.addEventListener('transitionend', () => {
        todo.remove();
      });
    }
 }

function filterTodo(e){
  const todos = lists.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("slideCompleted")){
          todo.style.display = "flex";
        } else{
          todo.style.display = "none";
        }
    }
  });
}





