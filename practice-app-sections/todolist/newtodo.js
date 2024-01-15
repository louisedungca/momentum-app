const addBtn = document.querySelector(".add-btn");
const newTaskInput = document.querySelector(".wrapper input");
const tasksContainer = document.querySelector(".tasks");
const error = document.querySelector(".error-msg");
const countValue = document.querySelector(".count-value");

let taskCount = 0;
const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

function addTask() {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 100);

    return;
  }

  const task = `<div class = "task">
  <input class="task-check" type="checkbox">
  <span class = "taskname">${taskName}</span>
  <button class = "edit-btn">
  <i class="fas fa-edit"></i>
  </button>
  <button class = "delete-btn">
  <i class="fas fa-trash-alt"></i>
  </button>
</div>`;

  tasksContainer.insertAdjacentHTML("beforeend", task); 
  // "beforeend" = just inside the element, after its last child

  // for each delete/edit button

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount--;
      displayCount(taskCount);
    };
  });

  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((editButton) => {
    editButton.onclick = (e) => {
      let targetElement = e.target;
      if (!(e.target.className == "edit")) {
        targetElement = e.target.parentElement;
      }
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount--;
      displayCount(taskCount);
    }
  });

  const tasksCheck = document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkbox) => {
    checkbox.onchange = () => {
      checkbox.nextElementSibling.classList.toggle("completed");
      if (checkbox.checked) {
        taskCount--;
      }
      else {
        taskCount++;
      }
      displayCount(taskCount);
    };
  });

  taskCount ++;
  displayCount(taskCount);

  // to reset to do input box
  newTaskInput.value = "";

};

addBtn.addEventListener("click", addTask);

window.onload = () => {
  taskCount = 0;
  displayCount(taskCount);
  newTaskInput.value = "";
};


// toggle button

const toDoIcon = document.querySelector(".to-do-icon");
const toDoContainer = document.querySelector(".app .container");

toDoIcon.addEventListener("click", () => {
  toDoContainer.classList.toggle("active");
});
