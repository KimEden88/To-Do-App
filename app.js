//selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const form = document.querySelector('form');

//Todo array of objects
let todos = [];

//!Local storage:
// Converting our Todos objects into strings (so local storage can handle it)
const saveToLocalStorage = () => {
  const stringifiedTodos = JSON.stringify(todos);
  localStorage.setItem('todos', stringifiedTodos);
};
// Converting our Todos strings back into objects
const loadFromLocalStorage = () => {
  const parsedTodos = JSON.parse(localStorage.getItem('todos'));
  parsedTodos ? (todos = parsedTodos) : (todos = []);
  addTodo();
};

function addTodo() {
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    //!Creating the HTml structure:

    // DIV - Todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Creating Span
    const updateValue = document.createElement('span');
    updateValue.classList.add('update-value');
    updateValue.classList.add('todo-input');
    updateValue.type = 'text';
    updateValue.textContent = todo.title;
    newTodo.appendChild(updateValue);

    //Buttons Container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsContainer');
    todoDiv.appendChild(buttonsContainer);

    //Check btn
    const completedBtn = document.createElement('input');
    completedBtn.type = 'checkbox';
    completedBtn.classList.add('action-btn');
    completedBtn.classList.add('checkBtn');
    buttonsContainer.appendChild(completedBtn);

    //Update btn
    //Create btn
    const updateBtn = document.createElement('button');
    updateBtn.innerHTML =
      '<i class="fa-solid fa-pen-to-square" style="color: #465362;"></i>';
    updateBtn.classList.add('action-btn');
    updateBtn.classList.add('updateBtn');
    buttonsContainer.appendChild(updateBtn);
    //functionality:
    updateBtn.addEventListener('click', () => {
      //creating an input
      const updateTodoInput = document.createElement('input');
      updateTodoInput.type = 'text';
      updateTodoInput.value = todo.title;
      newTodo.replaceChild(updateTodoInput, updateValue);
      updateTodoInput.addEventListener('blur', () => {
        const newTitle = updateTodoInput.value;
        const oldTitle = updateValue.textContent;
        updateValue.textContent = newTitle;

        todos = todos.map((b) => {
          if (b.title === oldTitle) {
            return { title: newTitle, isDone: b.isDone };
          }
          return b;
        });
        saveToLocalStorage();
        newTodo.replaceChild(updateValue, updateTodoInput);
      });
    });

    //Delete btn
    //Create btn
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML =
      '<i class="fa-solid fa-trash" style="color: #465362;"></i>';
    deleteBtn.classList.add('action-btn');
    deleteBtn.classList.add('deleteBtn');
    buttonsContainer.appendChild(deleteBtn);
    //Functionality
    deleteBtn.addEventListener('click', () => {
      todos = todos.filter((b) => b.title !== todo.title);
      saveToLocalStorage();
      todoList.removeChild(todoDiv);
    });

    todoList.appendChild(todoDiv);
    saveToLocalStorage();
  });
}

//!Functions:

//Updating the Todo
// function updateTodo() {
//   // save the content of li in a variable.
//   //updateValue.classList.remove('hidden');
//   //newTodo.classList.add('hidden');

//   const todoItem = this.parentElement.parentElement;
//   console.log(todoItem);
//   console.log(todoItem.querySelector('li'));
//   const todoLi = todoItem.querySelector('.todo-item');
//   const liValue = todoLi.innerText;

//   updateValue.focus();
//   updateValue.addEventListener('blur', () => {
//     const newValue = updateValue.value; // the updatedValue was called twice,instead stored it in a new variable
//     const newLi = document.createElement('li');
//     newLi.classList.add('todo-item');
//     newLi.innerText = newValue;
//   });

//   function deleteTodo() {

//     //const todoItem = this.parentElement.parentElement;
//     //todoItem.remove();
// }
//}

//});

const render = (e) => {
  e.preventDefault();
  console.log(e.target.title.value);
  let taskTitle = e.target.title.value;

  const newTodoForArray = { title: taskTitle, isDone: false }; // can change the radio button access here
  todos.push(newTodoForArray);

  saveToLocalStorage();

  addTodo();
  e.target.reset();
};

form.addEventListener('submit', render);
loadFromLocalStorage();
console.log(todos);
