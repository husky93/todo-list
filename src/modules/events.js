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


    return {
        addInitialEventListeners
    }
})();

export default events;
