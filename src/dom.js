import todo from "../assets/checklist.png";
import "./dom.css";

export default function createPage() {
  /* Create Header */
  const header = document.createElement("div");
  header.id = "header";
  document.body.appendChild(header);

  // create image
  const img = document.createElement("img");
  img.id = "img";
  img.src = todo;
  header.appendChild(img);

  // create text
  const text = document.createElement("h2");
  text.id = "text";
  text.textContent = "To-Do List";
  header.appendChild(text);
  /* ----------------------------------------------- */

  /* Create Center Content, which will include Sidebar */
  const center = document.createElement("div");
  center.id = "center";
  document.body.appendChild(center);

  /* ----------------------------------------------- */

  /* Create Sidebar */

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  center.appendChild(sidebar);

  const projects = document.createElement("div");
  projects.id = "projects";
  sidebar.appendChild(projects);

  const projectText = document.createElement("h2");
  projectText.id = "projectText";
  projectText.textContent = "Projects";
  projects.appendChild(projectText);

  const projectList = document.createElement("div");
  projectList.id = "projectList";
  projects.appendChild(projectList);

  const addProject = document.createElement("button");
  addProject.textContent = "+ Add Project";
  addProject.id = "addProject";
  projects.appendChild(addProject);

  /* ----------------------------------------------- */

  /* Create Inbox */

  const tasks = document.createElement("div");
  tasks.id = "tasks";
  center.append(tasks);

  const tasksText = document.createElement("h2");
  tasksText.id = "tasksText";
  tasksText.textContent = "Inbox";
  tasks.appendChild(tasksText);

  const task = document.createElement("div");
  task.id = "task";
  tasks.appendChild(task);

  const addTask = document.createElement("button");
  addTask.id = "addTask";
  addTask.textContent = "+ Add Task";
  tasks.appendChild(addTask);

  /* ---------------------------------------------- */
}
