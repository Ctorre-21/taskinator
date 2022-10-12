var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#task-to-do");

var createTaskHandler = function () {
    event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.textContent = "This is a new task.";
  listItemEl.className = "task-item";
  taskToDoEl.appendChild(listItemEl);
};


formEl.addEventListener("submit", createTaskHandler);
