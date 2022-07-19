import ui from "./ui";

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
        ui.renderDetails();
        controller.showModal();
    }

    const deleteTodo = (e) => {
        console.log(e.target.parentElement.dataset.id);
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