let todos = [];

function onAddClick() {
  let newTodo = document.getElementById('newTodo').value;
  todos.push(newTodo);

  updateTodoList();
  document.getElementById('newTodo').value = '';
}

function updateTodoList() {
  let eleTodoList = document.getElementById('todo-list');
  eleTodoList.innerHTML = '';
  for(let i = 0; i < todos.length; i++) {
    eleTodoList.innerHTML += '<li onclick="onTodoClick('+ i +')">' + todos[i] + '</li>';
  }
}

function onTodoClick(index) {
  todos.splice(index, 1);
  updateTodoList();
}