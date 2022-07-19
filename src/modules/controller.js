import {Project, projects} from "./project";
import ui from "./ui";
import events from "./events";
import Todo from "./todo";

const controller = (() => {

    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }

    const showModal = () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
    }

    const showDetails = (e) => {
        let todo = ui.currentTodoList.filter(item => item.id === e.target.parentElement.dataset.id);
        todo = todo[0];
        ui.renderDetails(todo);
        controller.showModal();
    }

    const deleteTodo = (e) => {
        const currentProject = projects.currentProject;
        projects.projectList[currentProject].todoList.forEach((item, index) => {
            if(item.id === e.target.parentElement.dataset.id) {
                projects.projectList[currentProject].removeTodo(index);
                ui.renderTodos(projects.projectList[currentProject].todoList);
                events.addTodoUiEventListeners();
            }
        });
    }

    const editTodo = (e) => {
        let todo = ui.currentTodoList.filter(item => item.id === e.target.parentElement.dataset.id);
        todo = todo[0];
        ui.renderEdit(todo);
        events.addFormEditListener(todo);
        controller.showModal();
    }

    const addTodo = () => {
        ui.renderAddTodo();
        events.addFormAddListener();
        controller.showModal();
    }

    const addProject = () => {
        ui.renderAddProject();
        events.addFormProjectListener();
        controller.showModal();
    }


    const switchProject = (e) => {
        projects.currentProject = e.target.dataset.id;
        const currentProject = projects.currentProject;
        const todoList = projects.projectList[currentProject].todoList
        ui.renderTodos(todoList);
        events.addTodoUiEventListeners();
        events.addBtnAddEventListeners();
    }

    const submitEdit = (e, todo) => {
        e.preventDefault();
        const currentProject = projects.currentProject;
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const dueDate = e.target.elements.dueDate.value;
        const priority = document.querySelector('input[name="priority"]:checked').id === 'low' ? 3 : 
                        document.querySelector('input[name="priority"]:checked').id === 'medium' ? 2 : 1;
        projects.projectList[currentProject].todoList.forEach((item, index) => {
            if(item.id === todo.id) {
                projects.projectList[currentProject].editTodo(index, title, description, dueDate, priority);
                ui.renderTodos(projects.projectList[currentProject].todoList);
                events.addTodoUiEventListeners();
                events.addBtnAddEventListeners();
            }
        });
        controller.closeModal();
    }

    const submitAddTodo = (e) => {
        e.preventDefault();
        const currentProject = projects.currentProject;
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const dueDate = e.target.elements.dueDate.value;
        const priority = document.querySelector('input[name="priority"]:checked').id === 'low' ? 3 : 
                        document.querySelector('input[name="priority"]:checked').id === 'medium' ? 2 : 1;
        const todo = Todo(title, description, dueDate, priority);

        projects.projectList[currentProject].todoList.push(todo);
        ui.renderTodos(projects.projectList[currentProject].todoList);
        events.addTodoUiEventListeners();
        events.addBtnAddEventListeners();
        controller.closeModal();
    }

    const submitAddProject = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const project = Project(title, []);
        projects.projectList.push(project);
        const currentProject = projects.projectList.length - 1;
        projects.currentProject = currentProject;

        ui.renderProjectList();
        ui.renderTodos(projects.projectList[currentProject].todoList);
        events.addTodoUiEventListeners();
        events.addBtnAddEventListeners();
        events.addSwitchProjectListeners();
        controller.closeModal();
    }

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
        switchProject
    }
})();

export default controller;