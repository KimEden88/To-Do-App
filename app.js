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
    e.preventDefault();
    const task = addTodo();
    task.classList.add(`${todoId + 1}`);
    todoId += 1;
    todoList.appendChild(task);

    todoInput.value = "";

    //delete btn clicked event
    const deleteBtns = document.querySelectorAll(".deleteBtn");

    deleteBtns.forEach((btn) => {
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
