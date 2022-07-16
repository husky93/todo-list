const controller = (() => {

    const closeModal = (modal) => {
        modal.style.display = 'none';
    }

    return {
        closeModal
    }
})();

export default controller;