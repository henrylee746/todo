/*eslint-disable*/
import { format } from "date-fns";
import createPage from "./dom";
import "./new.css";

let projects = [];

let completeButtons;
let priorityButtons;
let deleteButtons;
let selected = 0;
const json = localStorage.getItem("newProject");

class project {
  items = [];

  constructor(name) {
    this.name = name;
  }
}

class item {
  constructor(title, date, priority, complete) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.complete = complete;
  }
}

function chooseProject(key) {
  selected = key;
  console.log(selected);
  displayTasks(key);
}

function addInitialProject() {
  const initialProject = new project("Henry's Project");
  projects.push(initialProject);
  const initialTask = new item("Visit Korea", [2023, 1, 11], "High", false);
  initialProject.items.push(initialTask);
  saveProject();
}

function openNewProject() {
  const dialog = document.querySelector("#addP");
  dialog.showModal();
}

function addNewProject() {
  const title = document.querySelector("#project").value;
  const newProject = new project(title);
  projects.push(newProject);
  saveProject();
  displayProjects();
}

function addNewTask() {
  const title = document.querySelector("#title").value;
  const date = [
    document.getElementById("year").value,
    document.getElementById("day").value,
    document.getElementById("month").value,
  ];
  const priority = document.querySelector("#priority").value;
  const newItem = new item(title, date, priority, false);
  projects[selected].items.push(newItem);
  saveProject();
  displayTasks(selected);
}

function openNewTask() {
  const dialog = document.querySelector("#addT");
  dialog.showModal();
}

function changeComplete(key) {
  if (projects[selected].items[key].complete == true) {
    projects[selected].items[key].complete = false;
  } else {
    projects[selected].items[key].complete = true;
  }
  displayTasks(selected);
}

function deleteItem(key) {
  projects[selected].items.splice(key, 1);
  displayTasks(selected);
}

function adjustPriority(key) {
  if (projects[selected].items[key].priority == "Low") {
    projects[selected].items[key].priority = "Medium";
  } else if (projects[selected].items[key].priority == "Medium") {
    projects[selected].items[key].priority = "High";
  } else {
    projects[selected].items[key].priority = "Low";
  }
  displayTasks(selected);
}

function displayProjects() {
  document.querySelector("#projectList").innerHTML = "";
  const projectList = document.querySelector("#projectList");
  for (let i = 0; i < projects.length; i++) {
    const button = document.createElement("button");
    button.className = "projectButton";
    button.dataset.key = i;
    button.textContent = projects[i].name;
    projectList.appendChild(button);
  }
  const selectProject = document.querySelectorAll(".projectButton");
  selectProject.forEach((button) => {
    button.addEventListener("click", () => {
      chooseProject(button.dataset.key);
    });
  });
}

function saveProject() {
  localStorage.setItem("newProject", JSON.stringify(projects));
}

function getProject() {
  const obj = JSON.parse(json);
  projects = obj;
  createPage();
  displayProjects();
  chooseProject(0);
}

function displayTasks(key) {
  document.querySelector("#task").innerHTML = "";
  for (let i = 0; i < projects[key].items.length; ++i) {
    /* Create Project Div */
    const task = document.createElement("div");
    task.id = `task${i}`;
    const button = document.createElement("button");
    button.className = "delete";
    button.dataset.key = i;
    button.textContent = "Delete";
    const title = document.createElement("h2");
    title.id = `title${i}`;
    title.textContent = projects[key].items[i].title;
    const date = document.createElement("p");
    date.id = `date${i}`;
    date.textContent = format(
      new Date(
        projects[key].items[i].date[0],
        projects[key].items[i].date[1],

        projects[key].items[i].date[2],
      ),
      "MM/dd/yyyy",
    );
    const priority = document.createElement("button");
    priority.dataset.key = i;
    priority.className = "priority";
    priority.textContent = projects[key].items[i].priority;
    if (priority.textContent == "Low") {
      priority.style.backgroundColor = "lightgreen";
    } else if (priority.textContent == "Medium") {
      priority.style.backgroundColor = "gold";
    } else if (priority.textContent == "High") {
      priority.style.backgroundColor = "red";
    }
    const complete = document.createElement("button");
    complete.className = "complete";
    complete.dataset.key = i;
    projects[key].items[i].complete == true
      ? (complete.textContent = "Done")
      : (complete.textContent = "Not Done");

    const left = document.createElement("div");
    left.id = `left${i}`;

    const right = document.createElement("div");
    right.id = `right${i}`;

    left.appendChild(title);

    right.appendChild(date);
    right.appendChild(priority);
    right.appendChild(complete);
    right.appendChild(button);

    task.appendChild(left);
    task.appendChild(right);

    /* Append Div to ProjectList Div */
    const tasks = document.querySelector("#task");
    tasks.appendChild(task);

    completeButtons = document.querySelectorAll(".complete");
    deleteButtons = document.querySelectorAll(".delete");
    priorityButtons = document.querySelectorAll(".priority");
  }

  completeButtons.forEach((button) => {
    if (button.textContent === "Done") {
      button.style.backgroundColor = "lightgreen";
    } else {
      button.style.backgroundColor = "salmon";
    }
    button.addEventListener("click", () => {
      changeComplete(button.dataset.key);
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteItem(button.dataset.key);
    });
  });

  priorityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      adjustPriority(button.dataset.key);
    });
  });
}

function main() {
  if (json !== null) {
    getProject();
  } else {
    addInitialProject();
    createPage();
    displayProjects();
    chooseProject(0);
  }
}

main();

const addTask = document.querySelector("#addTask");
addTask.addEventListener("click", () => {
  openNewTask();
});

const addTaskbutton = document.querySelector("#addTaskButton");
addTaskbutton.addEventListener("click", () => {
  const title = document.getElementById("title");
  const year = document.getElementById("year");
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  if (
    title.value != "" &&
    year.value != "" &&
    day.value != "" &&
    month.value != "" &&
    year.value.toString().length === 4 &&
    day.value.toString().length === 2 &&
    month.value.toString().length === 2
  ) {
    addNewTask();
  }
});

const addProject = document.querySelector("#addProject");
addProject.addEventListener("click", () => {
  openNewProject();
});

const insertProject = document.querySelector("#addNewProjectButton");
insertProject.addEventListener("click", () => {
  const title = document.getElementById("project");
  if (title.value != "") addNewProject();
});

const cancelTaskButton = document.getElementById("cancelTaskButton");
cancelTaskButton.addEventListener("click", () => {
  const dialog = document.querySelector("#addT");
  dialog.close();
});

const cancelProjectButton = document.getElementById("cancelProjectButton");
cancelProjectButton.addEventListener("click", () => {
  const dialog = document.querySelector("#addP");
  dialog.close();
});
