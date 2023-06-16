//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

let todos = [];
// id, title of task,
//Event Listeners
// Converting our Todos objects into strings (so local storage can handle it)
const saveToLocalStorage = () => {
    const stringifiedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", stringifiedTodos);
}
// Converting our Todos strings back into objects
const loadFromlocalStorage = () => {
    const parsedTodos = JSON.parse(localStorage.getItem("todos"));
    parsedTodos? todos = parsedTodos: todos = [];
}

render();

function addTodo(event) {
    // event.preventDefault();

    // DIV - Todo
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li");
    console.log(todoInput.value);
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    newTodo.innerText = todoInput.value;

    //Buttons Container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttonsContainer");
    todoDiv.appendChild(buttonsContainer);

    //Check btn
    const completedBtn = document.createElement("input");
    // completedBtn.innerHTML =
    //     '<i class="fa-regular fa-square-check" style="color: #465362;"></i>';
    completedBtn.type = "checkbox";
    completedBtn.classList.add("action-btn");
    completedBtn.classList.add("checkBtn");
    buttonsContainer.appendChild(completedBtn);

    //Update btn
    const updateBtn = document.createElement("button");
    updateBtn.innerHTML =
        '<i class="fa-solid fa-pen-to-square" style="color: #465362;"></i>';
    updateBtn.classList.add("action-btn");
    updateBtn.classList.add("updateBtn");
    buttonsContainer.appendChild(updateBtn);

    //Delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML =
        '<i class="fa-solid fa-trash" style="color: #465362;"></i>';
    deleteBtn.classList.add("action-btn");
    deleteBtn.classList.add("deleteBtn");
    buttonsContainer.appendChild(deleteBtn);

    return todoDiv;

    //Get the Task
}

function deleteTodo() {
    const todoItem = this.parentElement.parentElement;
    todoItem.remove();
}
function updateTodo() {
    // save the content of li in a variable.

    const todoItem = this.parentElement.parentElement;
    console.log(todoItem);
    console.log(todoItem.querySelector("li"));
    const todoLi = todoItem.querySelector(".todo-item");
    const liValue = todoLi.innerText;

    // creating an input element
    const updateValue = document.createElement("input");
    updateValue.classList.add("update-value");
    updateValue.classList.add("todo-input");
    updateValue.type = "text";
    console.log(typeof liValue);
    updateValue.value = liValue;

    todoItem.replaceChild(updateValue, todoLi);

    updateValue.focus();
    updateValue.addEventListener("blur", () => {
        const newValue = updateValue.value; // the updatedValue was called twice,instead stored it in a new variable
        const newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerText = newValue;
        todoItem.replaceChild(newLi, updateValue);
    });
}

// todoBtn.addEventListener("click", addTodo);

let todoId = 0;



const render = (e) => {
    // todos.forEach((todo) => {
    e.preventDefault();
    const task = addTodo();
    todoList.appendChild(task);
    // Resetting our Input
    todoInput.value = "";

    //delete btn clicked event
    deleteBtn.addEventListener("click",() => {
        // todos = todos.filter() => 
    });

    deleteBtn.forEach((btn) => {
        btn.addEventListener("click", deleteTodo);
    });

    //update btn clicked event
    //replace li with input field
    //get the value of input value
    //change the li value with input value when clicked the Updatebtn again
    const updateBtns = document.querySelectorAll(".updateBtn");

    updateBtns.forEach((btn) => {
        btn.addEventListener("click", updateTodo);
    });   
// })

    // const deleteBtn = document.querySelector(".deleteBtn");
    // const removeTask = (e) => {
    //     return console.log(deleteBtn.parentElement.parentElement);
    //     // return deleteBtn.parentElement.parentElement.remove();
    // };
    // deleteBtn.addEventListener("click", removeTask);
};

todoBtn.addEventListener("click", render);

/* 
selecting the DOM element to create the function on it.
listen to click event for the specific button.
remove the child element.

*/
//remove task -delete btn
