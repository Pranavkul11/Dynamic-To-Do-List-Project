
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


document.addEventListener("DOMContentLoaded", loadTasks);


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Task cannot be empty!");

  
  const task = { text: taskText, completed: false };
  addTaskToDOM(task);

  saveTaskToLocalStorage(task);

 
  taskInput.value = "";
}


function addTaskToDOM(task) {

  const li = document.createElement("li");
  if (task.completed) li.classList.add("completed");


  const span = document.createElement("span");
  span.textContent = task.text;


  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("task-btns");


  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete");
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTaskStatusInLocalStorage(task.text);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    deleteTaskFromLocalStorage(task.text);
  });

  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonContainer);

  taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => addTaskToDOM(task));
}


function updateTaskStatusInLocalStorage(taskText) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.map((task) => {
    if (task.text === taskText) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}


function deleteTaskFromLocalStorage(taskText) {
  const tasks = getTasksFromLocalStorage();
  const filteredTasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
}


addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});


 



