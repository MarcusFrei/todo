function addTodo() {
  const todoList = document.getElementById('todo-list');
  const newTodo = document.getElementById('new-todo').value;

  if (newTodo === '') return;

  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = () => {
    todoItem.style.borderColor = checkbox.checked ? 'green' : 'red';
  };

  const todoText = document.createElement('span');
  todoText.className = 'todo-text';
  todoText.innerText = newTodo;

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoList.appendChild(todoItem);

  document.getElementById('new-todo').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-button').addEventListener('click', addTodo);
});
