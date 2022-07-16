const controller = (() => {

    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }

    const showModal = (modal) => {

    }

    return {
        closeModal
    }
})();

export default controller;