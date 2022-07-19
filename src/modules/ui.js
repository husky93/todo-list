import {projects} from './project';

const ui = (() => {
    const _main = document.querySelector('main');
    const _mainWrapper = document.querySelector('.wrapper--main');
    let currentTodoList = null;

    const _createHeader = () => {
        const body = document.querySelector('body');
        const header = document.createElement('header')
        const wrapper = createWrapper(['wrapper'], header, 'div');
        ui.createHeading(['logo'], wrapper, 'h1', 'Todo List');
        body.insertBefore(header, _main)
    }

    const _createFooter = () => {
        const footer = document.createElement('footer'); 
        const wrapper = createWrapper(['wrapper'], footer, 'div');
        ui.createParagraph(['text--footer'], wrapper, 'Copyright © 2022 husky93'); 
        _main.after(footer);
    }

    const _createMenu = () => {
        const menu = createWrapper(['menu'], _mainWrapper, 'aside');
        const nav = createWrapper(['navbar'], menu, 'nav');
        _createProjectList(nav);        
    }

    const _createModal = () => {
        const footer = document.querySelector('footer');
        const wrapper = createWrapper(['wrapper', 'modal'], null, 'div');
        const overlay = createWrapper(['modal-overlay'], wrapper, 'div');
        const modal = createWrapper(['modal-body'], overlay, 'div');
        const closeButton = createLink(['close', 'modal-close'], modal, '')
        createIcon(['material-symbols-outlined'], closeButton, 'close');
        wrapper.style.display = 'none';
        footer.after(wrapper);
    }

    const _createCheckmark = ([...classList], parent, text, checked, id) => {
        const formCheck = createWrapper(['form-check'], parent, 'div');
        const input = document.createElement('input');
        const label = document.createElement('label');

        classList.forEach(item => formCheck.classList.add(item));

        input.type = 'checkbox';
        input.id = id;

        checked ? input.checked = true : input.checked = false
        label.textContent = text;
        label.htmlFor = id;

        formCheck.append(input, label);
    }

    const _createProjectList = (nav) => {
        ui.createWrapper(['project-list'], nav, 'div');
    }

    const _createTodoUi = (id, wrapper) => {
        const todoUi = ui.createWrapper(['todo-ui'], wrapper, 'div');
        const details = ui.createLink(['todo-button', 'todo-details'], todoUi, '');
        const del = ui.createLink(['todo-button', 'todo-delete'], todoUi, '');
        const edit = ui.createLink(['todo-button', 'todo-edit'], todoUi, '');

        ui.createIcon(['material-symbols-outlined'], details, 'visibility');
        ui.createIcon(['material-symbols-outlined'], del, 'delete');
        ui.createIcon(['material-symbols-outlined'], edit, 'edit');

        details.dataset.id = id;
        del.dataset.id = id;
        edit.dataset.id = id;
    }

    const _createTodo = (Todo, parent) => {
        const todoWrapper = ui.createWrapper(['container', 'todo'], parent, 'div');
        _createCheckmark(['form-check'], todoWrapper, Todo.title, Todo.isDone, Todo.id);
        _createTodoUi(Todo.id, todoWrapper);
    }

    const _renderInitial = () => {
        ui.renderProjectList();
        ui.renderTodos(projects.projectList[0].todoList);
    }

    const _clearModal = (modal) => {
        const modalClose = document.querySelector('.modal-close');

        while(modal.childElementCount > 1) {
            if(modal.lastElementChild !== modalClose)
                modal.removeChild(modal.lastElementChild);
        }
    }

    const renderProjectList = () => {
        const container = document.querySelector('.project-list');

        while(container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }

        projects.projectList.forEach((item, index) => {
            const project = ui.createLink(['project-link'], container, item.title);
            project.dataset.id = index;
        })
    }

    const renderTodos = (todoList) => {
        const content = document.querySelector('.content');
        currentTodoList = todoList;

        while(content.lastElementChild) {
            content.removeChild(content.lastElementChild);
        }

        todoList.forEach(item => {
            _createTodo(item, content);
        })
    }

    const renderDetails = (Todo) => {
        const modal = document.querySelector('.modal-body');
        _clearModal(modal);
        ui.createHeading(['modal-title'], modal, 'h3', Todo.title);
        const content = ui.createWrapper(['modal-content', 'details'], modal, 'div');
        ui.createParagraph(['modal-date'], content, Todo.dueDate);
        ui.createParagraph(['modal-description'], content, Todo.description);
        ui.createParagraph(['modal-prio'], content, Todo.priority);
        if(Todo.isDone) {
            ui.createParagraph(['modal-isdone'], content, 'Task is completed');
        }
    }

    const createTemplate = () => {
        _createHeader();
        _createFooter();
        _createMenu();
        ui.createWrapper(['content'], _mainWrapper, 'div');
        _renderInitial();
        _createModal();
    }

    const createHeading = ([...classList], parent, headingTag, text) => {
        const heading = document.createElement(`${headingTag}`);
        classList.forEach(item => heading.classList.add(item));
        heading.textContent = text;
        parent.appendChild(heading);
    }

    const createParagraph = ([...classList], parent, text) => {
        const para = document.createElement('p');
        classList.forEach(item => para.classList.add(item));
        para.textContent = text;
        parent.appendChild(para);
    }

    const createIcon = ([...classList], parent, name) => {
        const icon = document.createElement('span');
        classList.forEach(item => icon.classList.add(item));
        icon.textContent = name;
        parent.appendChild(icon);
    }

    const createLink = ([...classList], parent, text) => {
        const link = document.createElement('a');
        classList.forEach(item => link.classList.add(item));
        link.innerHTML = text;
        parent.appendChild(link);
        return link;
    }

    const createWrapper = ([...classList], parent, wrapperTag) => {
        const wrapper = document.createElement(`${wrapperTag}`);
        classList.forEach(item => wrapper.classList.add(item));
        if(parent) parent.appendChild(wrapper);
        return wrapper;
    }

    return {
        get currentTodoList() {
            return currentTodoList;
        },
        createIcon,
        createLink,
        createTemplate,
        createHeading,
        createParagraph,
        createWrapper,
        renderProjectList,
        renderTodos,
        renderDetails
    }
})();

export default ui;