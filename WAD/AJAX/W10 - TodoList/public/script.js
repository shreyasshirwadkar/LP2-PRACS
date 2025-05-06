let tasks = [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, i) => {
    list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <input class="form-control me-2" value="${task}" onchange="editTask(${i}, this.value)">
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button>
      </li>
    `;
  });
  saveTasks();
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index, newValue) {
  tasks[index] = newValue;
  saveTasks();
}

function saveTasks() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/tasks", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(tasks));
  // $.ajax({
  //   url: "/tasks", // Server route
  //   method: "POST", // POST method to save tasks
  //   contentType: "application/json",
  //   data: JSON.stringify(tasks),
  //   success: function (response) {
  //     console.log("Tasks saved!");
  //   },
  //   error: function (xhr, status, error) {
  //     alert("Error saving tasks: " + error);
  //   },
  // });
}

function loadTasks() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/tasks", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      tasks = JSON.parse(xhr.responseText);
      renderTasks();
    }
  };
  xhr.send();
}

loadTasks();
