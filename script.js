var todo = document.getElementById('todo');
const addBtn = document.getElementById('add-btn');
var btnDel = document.getElementsByClassName('todo-button');
const itemTodo = document.getElementById('itemTodo');
const todoBody = document.getElementById('todoBody');
const inputAdd = document.getElementById('add-input');
const todoFilter = document.getElementById('todoFilter');

// Criar Task
function createTask(evt) {
    evt.preventDefault();

    // Criando elementos
    paragraph = document.createElement('p');
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    delBtn = document.createElement('button');
    editBtn = document.createElement('button');

    // Adicionando classe aos elementos
    paragraph.className = 'todo-paragraph';
    checkbox.className = 'todo-checkbox';
    delBtn.className = 'del-btn fas fa-trash';
    editBtn.className = 'edit-button fas fa-pencil-alt';
    
    // Criando Div para Task
    task = document.createElement('div');
    task.className = 'todo-item';

    task.appendChild(checkbox);
    task.appendChild(paragraph);
    task.appendChild(editBtn);
    task.appendChild(delBtn)
    
    //Adicionar elementos ao DOM
    const inputValue = inputAdd.value;

    if(inputValue == '') {
        alert('Digite uma tarefa válida');
    } else {
        todoBody.insertBefore(task, todoFilter.nextSibling);
        paragraph.innerText = inputValue;
    }  
}

// Remove task
function removeTask(e) {
    if (e.target.classList.contains('del-btn')) {
        e.target.parentElement.remove();  
    }   
}

// Edit task
function editTask(e) {
    var todoParagraph = document.querySelectorAll('.todo-paragraph');
    if(e.target.classList.contains('edit-button')) {
        for(let i = 0; i < todoParagraph.length; i++) {
            todoParagraph[i].contentEditable = 'true';
            todoParagraph[i].focus();  
        }  
    }
}

// Filter task
function filterTask() {
    var filter = todoFilter.value.toUpperCase();
    var todoParagraph = document.querySelectorAll('.todo-paragraph');
    for(let i = 0; i < todoParagraph.length; i++) {
        var txtValue = todoParagraph[i].textContent || todoParagraph[i].innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            todoParagraph[i].parentElement.style.display = '';
        } else {
            todoParagraph[i].parentElement.style.display = 'none';
        } 
    }     
}

// Eventos
todoFilter.addEventListener('keyup', filterTask);
addBtn.addEventListener('click', createTask);
todo.addEventListener('click', removeTask);
todo.addEventListener('click', editTask);






