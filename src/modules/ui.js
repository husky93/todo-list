import {projectList} from './project';

const ui = (() => {
    const _main = document.querySelector('main');
    const _mainWrapper = document.querySelector('.wrapper--main');

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

    const _createCheckmark = ([...classList], parent, text, checked) => {
        const formCheck = createWrapper(['form-check'], parent, 'div');
        const input = document.createElement('input');
        const label = document.createElement('label');

        classList.forEach(item => formCheck.classList.add(item));

        input.type = 'checkbox';
        checked ? input.checked = true : input.checked = false

        label.textContent = text;

        formCheck.append(input, label);
    }

    const _createProjectList = (nav) => {
        ui.createWrapper(['project-list'], nav, 'div');
    }

    const _createTodoUi = (id, wrapper) => {
        const todoUi = ui.createWrapper(['todo-ui'], wrapper, 'div');
        const details = ui.createLink(['todo-button', 'todo-details'], todoUi, '');
        const del = ui.createLink(['todo-button', 'todo-detete'], todoUi, '');
        const priority = ui.createLink(['todo-button', 'todo-priority'], todoUi, '');
        const edit = ui.createLink(['todo-button', 'todo-edit'], todoUi, '');

        ui.createIcon(['material-symbols-outlined'], details, 'visibility');
        ui.createIcon(['material-symbols-outlined'], del, 'delete');
        ui.createIcon(['material-symbols-outlined'], priority, 'flag');
        ui.createIcon(['material-symbols-outlined'], edit, 'edit');

        details.dataset.id = id;
        del.dataset.id = id;
        priority.dataset.id = id;
        edit.dataset.id = id;
    }

    const _createTodo = (Todo, parent) => {
        const todoWrapper = ui.createWrapper(['container', 'todo'], parent, 'div');
        _createCheckmark(['form-check'], todoWrapper, Todo.title, Todo.isDone);
        _createTodoUi(Todo.id, todoWrapper);

        todoWrapper.dataset.id = Todo.id;
    }

    const _renderInitial = () => {
        ui.renderProjectList();
        ui.renderTodos(projectList[0]);
    }

    const renderProjectList = () => {
        const container = document.querySelector('.project-list');

        while(container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }

        projectList.forEach((item, index) => {
            const project = ui.createLink(['project-link'], container, item.title);
            project.dataset.id = index;
        })
    }

    const renderTodos = (project) => {
        const content = document.querySelector('.content');

        while(content.lastElementChild) {
            content.removeChild(content.lastElementChild);
        }

        project.todoList.forEach(item => {
            _createTodo(item, content);
        })
    }

    const createTemplate = () => {
        _createHeader();
        _createFooter();
        _createMenu();
        ui.createWrapper(['content'], _mainWrapper, 'div');
        _renderInitial();
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
        parent.appendChild(wrapper);
        return wrapper;
    }

    return {
        createIcon,
        createLink,
        createTemplate,
        createHeading,
        createParagraph,
        createWrapper,
        renderProjectList,
        renderTodos
    }
})();

export default ui;