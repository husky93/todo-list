import {projects} from "./project";
import ui from "./ui";
import events from "./events";

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
        // let todo = ui.currentTodoList.filter(item => item.id === e.target.parentElement.dataset.id);
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
        console.log(e.target.parentElement.dataset.id);
    }

    return {
        showModal,
        closeModal,
        showDetails,
        deleteTodo,
        editTodo
    }
})();

export default controller;