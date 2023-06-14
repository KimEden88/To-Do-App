//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

const tasks = [];
// id, title of task,
//Event Listeners

//Functions
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
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML =
        '<i class="fa-regular fa-square-check" style="color: #465362;"></i>';
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
// todoBtn.addEventListener("click", addTodo);
let todoId = 0;

const render = (e) => {
    e.preventDefault();
    const task = addTodo();
    task.classList.add(`${todoId + 1}`);
    todoId += 1;
    todoList.appendChild(task);
    // tasks.forEach((task) => {
    //     const item = {itemNumber : }

    // })
    todoInput.value = "";

    const deleteBtn = document.querySelector(".deleteBtn");
    const removeTask = (e) => {
        return console.log(deleteBtn.parentElement.parentElement);
        // return deleteBtn.parentElement.parentElement.remove();
    };
    deleteBtn.addEventListener("click", removeTask);
};
todoBtn.addEventListener("click", render);

// console.log(todoId);
// for (let i=0; i < )

/* 
selecting the DOM element to create the function on it.
listen to click event for the specific button.
remove the child element.

*/
//remove task -delete btn
