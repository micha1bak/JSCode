const add = document.getElementById('add');
const input = document.getElementById('input');
const storageKey = "to-do-app";

input.addEventListener('keydown', (key) => {
  (key.key === "Enter") ? add.click() : null;
})

let todos = JSON.parse(localStorage.getItem(storageKey))
renderTodos();

add.addEventListener('click', () => {
  if (input.value.length) {
    todos = [...todos, input.value];
    renderTodos();
    input.value = "";
  }
})

function deleteItem(index) {
  todos.splice(index, 1);
  renderTodos();  
}

function renderTodos() {
  const list = document.getElementById('todos');
    list.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
      list.innerHTML += "<li>" + todos[i] + `<button onClick=deleteItem(${i})>Delete</button>` + "</li>" 
    };
    saveTodos();
}

function saveTodos() {
  localStorage.setItem(storageKey, JSON.stringify(todos))
}