import controller from "./controller";

const events = (() => {
    const addInitialEventListeners = () => {
        const closeModal = document.querySelector('.modal-close');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modal = document.querySelector('.modal-body');

        closeModal.addEventListener('click', controller.closeModal());
        modalOverlay.addEventListener('click', controller.closeModal());
        modal.onclick = e => e.stopPropagation();
    }

    const addTodoUiEventListeners = () => {
        const details = document.querySelectorAll('.todo-details');
        const del = document.querySelectorAll('.todo-delete');
        const edit = document.querySelectorAll('.todo-edit');

        details.forEach(elem => elem.addEventListener('click', e => controller.showDetails(e)));
        del.forEach(elem => elem.addEventListener('click', e => controller.deleteTodo(e)));
        edit.forEach(elem => elem.addEventListener('click', e => controller.editTodo(e)));
    }


    return {
        addInitialEventListeners,
        addTodoUiEventListeners
    }
})();

export default events;
