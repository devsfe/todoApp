const addBtn = document.getElementById('add-btn');
const itemTodo = document.getElementById('itemTodo');
const todoBody = document.getElementById('todoBody');

//Criar Task
function createTask(evt) {
    evt.preventDefault();

    const todoItem = document.createElement('div');
    const todoParagraph = document.createElement('p');
    todoItem.className = 'todo-item';
    todoItem.appendChild(todoParagraph);

    //Adicionar elemento ao DOM
    todoBody.insertBefore(todoItem, itemTodo);
}




addBtn.addEventListener('click', createTask);