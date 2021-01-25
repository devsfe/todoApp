const addBtn = document.getElementById('add-btn');
var btnDel = document.getElementsByClassName('todo-button');
const itemTodo = document.getElementById('itemTodo');
const todoBody = document.getElementById('todoBody');
const inputAdd = document.getElementById('add-input');

//Criar Task
function createTask(evt) {
    evt.preventDefault();

    var inputValue = inputAdd.value;

    const todoItem = document.createElement('div');
    const todoParagraph = document.createElement('p');
    const checkbox = document.createElement('input');
    const delBtn = document.createElement('button');
    const trashIcon = document.createElement('i');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    todoParagraph.innerText = inputValue;
    todoItem.className = 'todo-item';
    delBtn.className = 'todo-button';
    trashIcon.className = 'fas fa-trash';
    delBtn.appendChild(trashIcon);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoParagraph);
    todoItem.appendChild(delBtn);

    const div1 = document.getElementById('div1');

    //Remove task
    delBtn.addEventListener('click', function(e) {
        delBtn.parentElement.remove();
    })
    
    //Adicionar elemento ao DOM
    if(inputValue == '') {
        alert('Digite uma tarefa válida')
    } else {
        todoBody.insertBefore(todoItem, div1);
    }
    
}





addBtn.addEventListener('click', createTask);







