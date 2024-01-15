// for toggling to do icon
const todoIcon = document.querySelector(".to-do-icon");
const todoContainer = document.querySelector(".app .container");

todoIcon.addEventListener("click", () => {
  todoContainer.classList.toggle("active");
});

// get todo and add todo list array on local storage
window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const newTodoForm = document.querySelector(".new-todo-form");

  newTodoForm.addEventListener("submit", e => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.value,
      done: false,
      createdAt: new Date().getTime()
    }

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    // to reset the form
    e.target.reset();
    // to display todo
    displayTodos();
  });

    displayTodos();
});

function displayTodos() {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = ""; // to clear the element every time the function runs

  todos.forEach(todo => {
    // create the commented out html elements
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    
    // parts of the todo-item div
    const label = document.createElement("label");
    const input = document.createElement("input");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("delete");

    input.type = "checkbox";
    input.checked = todo.done;
    
    content.classList.add("todo-content");
    content 
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;    
    edit.innerHTML = '<i class="fas fa-edit edit-icon"></i>';
    deleteButton.innerHTML = '<i class="far fa-trash-alt delete-icon"></i>';

    // to display the created elements
    label.appendChild(input);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    
    if (todo.done) {
      todoItem.classList.add("done");
    };

    input.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done")
      }
      else {
        todoItem.classList.remove("done");
      }

      displayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly");
        todo.content = e.target.value;

        // update local storage
        localStorage.setItem("todos", JSON.stringify(todos));

        displayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter(t => t !== todo);

      // update local storage
      localStorage.setItem("todos", JSON.stringify(todos));
      displayTodos()
    });
  });
};