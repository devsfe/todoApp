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
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const trashIcon = document.createElement('i');
    const editIcon = document.createElement('i');

    todoItem.className = 'todo-item';
    checkbox.className = 'todo-checkbox';
    delBtn.className = 'todo-button';
    editBtn.className = 'edit-button'
    trashIcon.className = 'fas fa-trash';
    editIcon.className = 'fas fa-pencil-alt';
    checkbox.type = 'checkbox';
    todoParagraph.innerText = inputValue;
    todoParagraph.contentEditable = 'false'
    
    delBtn.appendChild(trashIcon);
    editBtn.appendChild(editIcon);
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoParagraph);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(delBtn);

    const todoFilter = document.getElementById('todoFilter');

    //Filtrar task
    todoFilter.addEventListener('keyup', function() {
        var filter = todoFilter.value.toUpperCase();
        var txtValue = todoParagraph.textContent || todoParagraph.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            todoItem.style.display = '';
        } else {
            todoItem.style.display = 'none';
        }
    });

    //Editar task
    editBtn.addEventListener('focus', function(e) {
        todoParagraph.contentEditable = 'true';
        todoParagraph.focus();
    });

    editBtn.addEventListener('blur', function(e) {
        
        todoParagraph.focus();
    })

    //Remover task
    delBtn.addEventListener('click', function(e) {
        delBtn.parentElement.remove();
    })
    
    //Adicionar elemento ao DOM
    if(inputValue == '') {
        alert('Digite uma tarefa válida')
    } else {
        todoBody.insertBefore(todoItem, todoFilter.nextSibling);
    }

    // Local storage
    var divArray = Array.prototype.slice.call(document.querySelectorAll(".todo-item"));
    divArray = divArray.map(e => e.outerHTML);

    localStorage.setItem('TodoItems', divArray);

    

}

//get local storage
function showLocal() {
    var savedTodo = localStorage.getItem('TodoItems');

    
    
    console.log(savedTodo);

    
}

showLocal();


addBtn.addEventListener('click', createTask);







