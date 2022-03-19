const todo = document.querySelector("#todo");

const todoList = document.querySelector("#todo-list");
function showList(){
let todoArray = JSON.parse(localStorage.getItem("todo"));

for (i = 0; i < todoArray.length; i++) {
     const li = document.createElement("li");
     li.id = todoArray[i].id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
      span.innerText = todoArray[i].text;
   btn.innerText = "X";
   btn.addEventListener("click",delOne);
    li.appendChild(span);
    li.appendChild(btn);

    todoList.appendChild(li);
  }
}

function delOne(e){
e.preventDefault();
const li = e.target.parentElement;
let todoArray = JSON.parse(localStorage.getItem("todo"));
const newArray = todoArray.filter((item)=>{
console.log(String(item.id), (li.id));
  return String(item.id) !== String(li.id);
});

localStorage.setItem("todo", JSON.stringify(newArray));
// li.id
li.remove();
}

function handleTodo(e) {
  e.preventDefault();
  const todoInput = todo.querySelector("input");

  let todoArray = [];
  if (localStorage.getItem("todo") !== null) {
    todoArray = JSON.parse(localStorage.getItem("todo"));
  }

  const newTodoObj = {
    text: todoInput.value,
    id: Date.now(),

  };
  todoArray.push(newTodoObj);
  //let input = `{"todo":["${todoArray}"]}`;
  //console.log(input, todoArray);
  let json = JSON.stringify(todoArray);
  //   console.log(json);
  localStorage.setItem("todo", json);
  //   todoList.removeChild("li");

  const li = document.createElement("li");
  li.id = newTodoObj.id;
const span = document.createElement("span");
const btn = document.createElement("button");
    span.innerText = todoInput.value;
btn.innerText = "X";
btn.addEventListener("click",delOne);
li.appendChild(span);
li.appendChild(btn);
    todoList.appendChild(li);
    todoInput.value = "";
}
todo.addEventListener("submit", handleTodo);
showList();
