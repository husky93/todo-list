import compareAsc from 'date-fns/compareAsc';
import parseISO from 'date-fns/parseISO';
import { Project, projects } from './project';
import ui from './ui';
import Todo from './todo';

const controller = (() => {
  const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  };

  const showModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
  };

  const showDetails = (e) => {
    let todo = ui.currentTodoList.filter((item) => item.id === e.target.parentElement.dataset.id);
    [todo] = todo;
    ui.renderDetails(todo);
    controller.showModal();
  };

  const deleteTodo = (e) => {
    const { currentProject } = projects;
    projects.projectList[currentProject].todoList.forEach((item, index) => {
      if (item.id === e.target.parentElement.dataset.id) {
        projects.projectList[currentProject].removeTodo(index);
        ui.renderTodos(projects.projectList[currentProject].todoList);
        ui.renderProjectList();
      }
    });
    localStorage.setObject('projects', projects);
  };

  const editTodo = (e) => {
    let todo = ui.currentTodoList.filter((item) => item.id === e.target.parentElement.dataset.id);
    [todo] = todo;
    ui.renderEdit(todo);
    controller.showModal();
  };

  const addTodo = () => {
    ui.renderAddTodo();
    controller.showModal();
  };

  const addProject = () => {
    ui.renderAddProject();
    controller.showModal();
  };

  const sortByDate = (array) => {
    const sortedArray = array.sort((a, b) => compareAsc(parseISO(a.dueDate), parseISO(b.dueDate)));
    return sortedArray;
  };

  const switchProject = (e) => {
    projects.currentProject = e.target.dataset.id;
    const { currentProject } = projects;
    const { todoList } = projects.projectList[currentProject];
    ui.renderTodos(todoList);
  };

  const toggleCheckmark = (e) => {
    const { currentProject } = projects;
    projects.projectList[currentProject].todoList.forEach((item, index) => {
      if (item.id === e.target.id) {
        projects.projectList[currentProject].todoList[index].isDone = !item.isDone;
        e.target.parentElement.classList.toggle('completed');
      }
    });
    localStorage.setObject('projects', projects);
  };

  const submitEdit = (e, todo) => {
    e.preventDefault();
    const { currentProject } = projects;
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const dueDate = e.target.elements.dueDate.value;
    const priorityInput = document.querySelector('input[name="priority"]:checked');
    let priority;
    if (priorityInput.id === 'low') { priority = 3; } else if (priorityInput === 'medium') { priority = 2; } else { priority = 1; }

    projects.projectList[currentProject].todoList.forEach((item, index) => {
      if (item.id === todo.id) {
        projects.projectList[currentProject].editTodo(index, title, description, dueDate, priority);
        sortByDate(projects.projectList[currentProject].todoList);
        ui.renderTodos(projects.projectList[currentProject].todoList);
      }
    });
    controller.closeModal();
    localStorage.setObject('projects', projects);
  };

  const submitAddTodo = (e) => {
    e.preventDefault();
    const { currentProject } = projects;
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const dueDate = e.target.elements.dueDate.value;
    const priorityInput = document.querySelector('input[name="priority"]:checked');
    let priority;
    if (priorityInput.id === 'low') { priority = 3; } else if (priorityInput === 'medium') { priority = 2; } else { priority = 1; }
    const todo = Todo(title, description, dueDate, priority);

    projects.projectList[currentProject].todoList.push(todo);
    sortByDate(projects.projectList[currentProject].todoList);
    ui.renderTodos(projects.projectList[currentProject].todoList);
    ui.renderProjectList();
    controller.closeModal();
    localStorage.setObject('projects', projects);
  };

  const submitAddProject = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const project = Project(title, []);
    projects.projectList.push(project);
    const currentProject = projects.projectList.length - 1;
    projects.currentProject = currentProject;

    ui.renderProjectList();
    ui.renderTodos(projects.projectList[currentProject].todoList);
    controller.closeModal();
    localStorage.setObject('projects', projects);
  };

  return {
    showModal,
    closeModal,
    showDetails,
    deleteTodo,
    editTodo,
    addTodo,
    addProject,
    submitEdit,
    submitAddTodo,
    submitAddProject,
    switchProject,
    toggleCheckmark,
    sortByDate,
  };
})();

export default controller;
