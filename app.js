//selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector("form");

let todos = [];
// id, title of task,
//Event Listeners
// Converting our Todos objects into strings (so local storage can handle it)
const saveToLocalStorage = () => {
    const stringifiedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", stringifiedTodos);
};
// Converting our Todos strings back into objects
const loadFromlocalStorage = () => {
    const parsedTodos = JSON.parse(localStorage.getItem("todos"));
    parsedTodos ? (todos = parsedTodos) : (todos = []);
    addTodo();
};

function addTodo(event) {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        // event.preventDefault();
        // event.preventDefault();

        // DIV - Todo
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create LI
        const newTodo = document.createElement("li");
        console.log(todoInput.value);
        newTodo.classList.add("todo-item");

        const updateValue = document.createElement("input");
        todoDiv.appendChild(newTodo);
        todoDiv.appendChild(updateValue);
        updateValue.classList.add("hidden");
        newTodo.innerText = todoInput.value;

        function updateTodo() {
            // save the content of li in a variable.

            const todoItem = this.parentElement.parentElement;
            console.log(todoItem);
            console.log(todoItem.querySelector("li"));
            const todoLi = todoItem.querySelector(".todo-item");
            const liValue = todoLi.innerText;

            // creating an input element

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
        updateBtn.addEventListener("click", () => {
            updateValue.classList.remove("hidden");
            newTodo.classList.add("hidden");
        });

        updateBtn.innerHTML =
            '<i class="fa-solid fa-pen-to-square" style="color: #465362;"></i>';
        updateBtn.classList.add("action-btn");
        updateBtn.classList.add("updateBtn");
        buttonsContainer.appendChild(updateBtn);

        //Delete btn
        const deleteBtn = document.createElement("button");
        deleteBtn.addEventListener("click", deleteTodo);

        deleteBtn.innerHTML =
            '<i class="fa-solid fa-trash" style="color: #465362;"></i>';
        deleteBtn.classList.add("action-btn");
        deleteBtn.classList.add("deleteBtn");
        buttonsContainer.appendChild(deleteBtn);

        todoList.appendChild(todoDiv);
        saveToLocalStorage();
    });

    // return todoDiv;

    //Get the Task
}

function deleteTodo() {
    const todoItem = this.parentElement.parentElement;
    todoItem.remove();
}

// todoBtn.addEventListener("click", addTodo);

const render = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    let taskTitle = e.target.title.value;

    console.log(e);
    const newTodoforArray = { title: taskTitle, isDone: false }; // can change the radio button access here
    todos.push(newTodoforArray);

    saveToLocalStorage();

    // console.log(task);
    e.target.reset();
    addTodo();

    // taskTitle = "";
    // Resetting our Input

    // todoBtn.addEventListener("click", render);
    // deleteBtn.addEventListener("click", removeTask);
};
// };
// const addTask = (event) => {
//     event.preventDefault();
//
//     render();
// };

form.addEventListener("submit", render);
loadFromlocalStorage();

// event.target.reset();
// console.log();

//     // event.target == HTML Form
//     const bookTitle = event.target.title.value;
//     const newBook = { title: bookTitle, isRead: false };
//     books.push(newBook);
//     saveToLocalStorage();
//     // reset the form inputs
//     event.target.reset();
//     // render the book on the DOM
//     render();
//   };

//delete btn clicked event
// deleteBtn.addEventListener("click",() => {
//     // todos = todos.filter() =>
// });

// deleteBtn.forEach((btn) => {
//     btn.addEventListener("click", deleteTodo);
// });

//update btn clicked event
//replace li with input field
//get the value of input value
//change the li value with input value when clicked the Updatebtn again
// const updateBtns = document.querySelectorAll(".updateBtn");

// updateBtns.forEach((btn) => {
//     btn.addEventListener("click", updateTodo);
// });
// })

// const deleteBtn = document.querySelector(".deleteBtn");
// const removeTask = (e) => {
//     return console.log(deleteBtn.parentElement.parentElement);
//     // return deleteBtn.parentElement.parentElement.remove();
// });
/* 
selecting the DOM element to create the function on it.
listen to click event for the specific button.
remove the child element.

*/
//remove task -delete btn
