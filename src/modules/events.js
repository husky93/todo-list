import controller from './controller';
import { projects } from './project';

const events = (() => {
  const addModalEventListeners = () => {
    const closeModal = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal-body');

    closeModal.addEventListener('click', controller.closeModal);
    modalOverlay.addEventListener('click', controller.closeModal);
    modal.onclick = (e) => e.stopPropagation();
  };

  const addInitialEventListeners = () => {
    addModalEventListeners();
    events.addBtnAddEventListeners();
    events.addTodoUiEventListeners();
    events.addSwitchProjectListeners();
    events.addBtnProjectEventListeners();
  };

  const addTodoUiEventListeners = () => {
    const details = document.querySelectorAll('.btn-details');
    const del = document.querySelectorAll('.todo-delete');
    const edit = document.querySelectorAll('.todo-edit');
    const checkmark = document.querySelectorAll('input[type="checkbox"]');

    details.forEach((elem) => elem.addEventListener('click', controller.showDetails));
    del.forEach((elem) => elem.addEventListener('click', (e) => {
      controller.deleteTodo(e);
      events.addTodoUiEventListeners();
      events.addBtnAddEventListeners();
      events.addSwitchProjectListeners();
    }));
    edit.forEach((elem) => elem.addEventListener('click', (e) => {
      const { currentProject } = projects;
      const { todoList } = projects.projectList[currentProject];
      let todo = todoList.filter((item) => item.id === e.target.parentElement.dataset.id);
      [todo] = todo;
      controller.editTodo(e);
      events.addFormEditListener(todo);
    }));
    checkmark.forEach((elem) => elem.addEventListener('change', controller.toggleCheckmark));
  };

  const addSwitchProjectListeners = () => {
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach((project) => project.addEventListener('click', (e) => {
      controller.switchProject(e);
      events.addTodoUiEventListeners();
      events.addBtnAddEventListeners();
    }));
  };

  const addFormEditListener = (todo) => {
    const form = document.querySelector('.form--edit');
    form.addEventListener('submit', (e) => {
      controller.submitEdit(e, todo);
      events.addTodoUiEventListeners();
      events.addBtnAddEventListeners();
    });
  };

  const addFormAddListener = () => {
    const form = document.querySelector('.form--add');
    form.addEventListener('submit', (e) => {
      controller.submitAddTodo(e);
      events.addTodoUiEventListeners();
      events.addBtnAddEventListeners();
      events.addSwitchProjectListeners();
    });
  };

  const addFormProjectListener = () => {
    const form = document.querySelector('.form--project');
    form.addEventListener('submit', (e) => {
      controller.submitAddProject(e);
      events.addTodoUiEventListeners();
      events.addBtnAddEventListeners();
      events.addSwitchProjectListeners();
    });
  };

  const addBtnAddEventListeners = () => {
    const btn = document.querySelector('.add');
    btn.addEventListener('click', (e) => {
      controller.addTodo(e);
      events.addFormAddListener();
    });
  };

  const addBtnProjectEventListeners = () => {
    const btn = document.querySelector('.project-add');
    btn.addEventListener('click', (e) => {
      controller.addProject(e);
      events.addFormProjectListener();
    });
  };

  return {
    addInitialEventListeners,
    addTodoUiEventListeners,
    addSwitchProjectListeners,
    addFormEditListener,
    addFormAddListener,
    addFormProjectListener,
    addBtnAddEventListeners,
    addBtnProjectEventListeners,
  };
})();

export default events;
