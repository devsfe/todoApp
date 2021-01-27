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

    
    // Adicionando classe aos elementos
    paragraph.classname = ('todo-paragraph');
    checkbox.classname = ('todo-checkbox');
    delBtn.classname = ('del-btn fas fa-trash');
    
    
    // Criando Div para Task
    task = document.createElement('div');
    task.classname = ('todo-item');

    task.appendChild(checkbox);
    task.appendChild(paragraph);
    task.appendChild(delBtn)
    
    //Adicionar elementos ao DOM
    const inputValue = inputAdd.value;

    if(inputValue == '') {
        alert('Digite uma tarefa válida')
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
function editTask() {
    todoParagraph.contentEditable = 'true';
    todoParagraph.focus();    
}

// Filter task
function filterTask() {
    var filter = todoFilter.value.toUpperCase();
    var txtValue = todoParagraph.textContent || todoParagraph.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            todoItem.style.display = '';
        } else {
            todoItem.style.display = 'none';
        } 
}



// Eventos
todoFilter.addEventListener('keyup', filterTask);
addBtn.addEventListener('click', createTask);
todo.addEventListener('click', removeTask);







