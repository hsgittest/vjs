const todo = document.querySelector("#todo");

const todoList = document.querySelector("#todo-list");

function handleTodo(e) {
  e.preventDefault();
  const todoInput = todo.querySelector("input");

  let todoArray = [];
  if (localStorage.getItem("todo") !== null) {
    todoArray = JSON.parse(localStorage.getItem("todo"));
  }
  todoArray.push(todoInput.value);
  //let input = `{"todo":["${todoArray}"]}`;
  //console.log(input, todoArray);
  let json = JSON.stringify(todoArray);
  //   console.log(json);
  localStorage.setItem("todo", json);
  //   todoList.removeChild("li");
todoList='';
  for (i = 0; i < todoArray.length; i++) {
    const li = document.createElement("li");
    li.innerText = todoArray[i];
    todoList.appendChild(li);
  }
}
todo.addEventListener("submit", handleTodo);
