import controller from "./controller";

const events = (() => {
    const _addModalEventListeners = () => {
        const closeModal = document.querySelector('.modal-close');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modal = document.querySelector('.modal-body');

        closeModal.addEventListener('click', controller.closeModal);
        modalOverlay.addEventListener('click', controller.closeModal);
        modal.onclick = e => e.stopPropagation();
    }

    const _addBtnAddEventListeners = () => {
        const btn = document.querySelector('.add');
        btn.addEventListener('click', controller.addTodo)
    }

    const addInitialEventListeners = () => {
        _addModalEventListeners();
        _addBtnAddEventListeners();
        events.addTodoUiEventListeners();
        events.addSwitchProjectListeners();
    }

    const addTodoUiEventListeners = () => {
        const details = document.querySelectorAll('.todo-details');
        const del = document.querySelectorAll('.todo-delete');
        const edit = document.querySelectorAll('.todo-edit');

        details.forEach(elem => elem.addEventListener('click', e => controller.showDetails(e)));
        del.forEach(elem => elem.addEventListener('click', e => controller.deleteTodo(e)));
        edit.forEach(elem => elem.addEventListener('click', e => controller.editTodo(e)));
    }

    const addSwitchProjectListeners = () => {
        const projects = document.querySelectorAll('.project-link');
        projects.forEach(project => project.addEventListener('click', controller.switchProject));
    }

    const addFormEditListener = (todo) => {
        const form = document.querySelector('.form--edit');
        form.addEventListener('submit', e => controller.submitEdit(e, todo));
    }

    const addFormAddListener = (todo) => {
        const form = document.querySelector('.form--add');
        form.addEventListener('submit', controller.submitAddTodo);
    }


    return {
        addInitialEventListeners,
        addTodoUiEventListeners,
        addSwitchProjectListeners,
        addFormEditListener,
        addFormAddListener
    }
})();

export default events;
