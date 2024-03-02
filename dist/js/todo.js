const todoTitle = document.querySelector('#todo-title');
const userTodo = document.querySelector('#user-input');
const addTodoBtn = document.querySelector('#add-todo');
const todoListContainer = document.querySelector('.todo-list');
let todos = [];

addTodoBtn.addEventListener('click', addNewTodo)

function addNewTodo() {
    let userInputValue = userTodo.value;
    if (userInputValue === '')
        alert('Please Enter a Todo!');
    else {
        todos.push(userInputValue);
        userTodo.value = '';
        console.log(todos);
        setLocal(todos)
        displayTodos(todos);
        const removeBtn = document.querySelectorAll('.remove-todo');
        removeBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                removeEl(event, index)
            })
        })
        const checkBtn = document.querySelectorAll('.ri-checkbox-blank-circle-line')
        checkBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.classList.toggle('ri-checkbox-circle-line');
            })
        })
    }
}


function displayTodos(arr) {
    // Clear existing todos
    todoListContainer.innerHTML = '';

    arr.forEach((item) => {
        todoListContainer.insertAdjacentHTML('beforeend',
            `
            <div class="todo h-12 w-full px-5 py-2 rounded-2xl bg-dark-color flex gap-x-5 items-center justify-between">
                <i class="ri-checkbox-blank-circle-line text-lg text-white cursor-pointer"></i>

                <h3 class="flex-1 text-lg text-center font-bold text-white">${item}</h3>
                <button class="remove-todo">
                    <i class="ri-delete-bin-6-line text-lg text-primary-color cursor-pointer "></i>
                </button>
            </div>
            `
        );
    });
}


// remove elements from array and dom when delete btn clicked 
function removeEl(e, i) {
    todos.splice(i, 1)
    setLocal(todos)
    e.target.parentElement.parentElement.remove();
}

function setLocal(arr) {
    localStorage.setItem('todo', JSON.stringify(arr));
}

function getLocal(arr) {
    const newTodoArr = JSON.parse(localStorage.getItem('todo'));
    if (newTodoArr) {
        todos = newTodoArr; // Assign retrieved data to todos array
        displayTodos(todos); // Display todos from local storage
    }
}