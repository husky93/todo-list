import {projects} from './project';

const ui = (() => {
    const _main = document.querySelector('main');
    const _mainWrapper = document.querySelector('.wrapper--main');
    let currentTodoList = null;

    const _createHeader = () => {
        const body = document.querySelector('body');
        const header = document.createElement('header')
        const wrapper = _createWrapper(['wrapper'], header, 'div');
        _createHeading(['logo'], wrapper, 'h1', 'Todo List');
        body.insertBefore(header, _main)
    }

    const _createFooter = () => {
        const footer = document.createElement('footer'); 
        const wrapper = _createWrapper(['wrapper'], footer, 'div');
        _createParagraph(['text--footer'], wrapper, 'Copyright © 2022 husky93'); 
        _main.after(footer);
    }

    const _createMenu = () => {
        const menu = _createWrapper(['menu'], _mainWrapper, 'aside');
        const nav = _createWrapper(['navbar'], menu, 'nav');
        _createProjectList(nav);        
    }

    const _createHeading = ([...classList], parent, headingTag, text) => {
        const heading = document.createElement(`${headingTag}`);
        classList.forEach(item => heading.classList.add(item));
        heading.textContent = text;
        parent.appendChild(heading);
    }

    const _createParagraph = ([...classList], parent, text) => {
        const para = document.createElement('p');
        classList.forEach(item => para.classList.add(item));
        para.textContent = text;
        parent.appendChild(para);
    }

    const _createIcon = ([...classList], parent, name) => {
        const icon = document.createElement('span');
        classList.forEach(item => icon.classList.add(item));
        icon.textContent = name;
        parent.appendChild(icon);
    }

    const _createLink = ([...classList], parent, text) => {
        const link = document.createElement('a');
        classList.forEach(item => link.classList.add(item));
        link.innerHTML = text;
        parent.appendChild(link);
        return link;
    }

    const _createWrapper = ([...classList], parent, wrapperTag) => {
        const wrapper = document.createElement(`${wrapperTag}`);
        classList.forEach(item => wrapper.classList.add(item));
        if(parent) parent.appendChild(wrapper);
        return wrapper;
    }

    const _createButton = ([...classList], parent, text, type) => {
        const button = document.createElement('button');
        classList.forEach(item => button.classList.add(item));
        button.textContent = text;
        if(type) {
            button.type = type;
        }
        parent.appendChild(button);
    }

    const _createModal = () => {
        const footer = document.querySelector('footer');
        const wrapper = _createWrapper(['wrapper', 'modal'], null, 'div');
        const overlay = _createWrapper(['modal-overlay'], wrapper, 'div');
        const modal = _createWrapper(['modal-body'], overlay, 'div');
        const closeButton = _createLink(['close', 'modal-close'], modal, '')
        _createIcon(['material-symbols-outlined'], closeButton, 'close');
        wrapper.style.display = 'none';
        footer.after(wrapper);
    }

    const _createCheckmark = ([...classList], parent, text, checked, id) => {
        const formCheck = _createWrapper(['form-check'], parent, 'div');
        const input = document.createElement('input');
        const label = document.createElement('label');

        classList.forEach(item => formCheck.classList.add(item));

        input.type = 'checkbox';
        input.id = id;
        if(checked) {
            input.checked = true;
            formCheck.classList.add('completed');
        } else {
            input.checked = false
        }
        label.textContent = text;
        label.htmlFor = id;

        formCheck.append(input, label);
    }

    const _createProjectList = (nav) => {
        _createWrapper(['project-list'], nav, 'div');
    }

    const _createTodoUi = (id, wrapper) => {
        const todoUi = _createWrapper(['todo-ui'], wrapper, 'div');
        const details = _createLink(['todo-button', 'todo-details'], todoUi, '');
        const del = _createLink(['todo-button', 'todo-delete'], todoUi, '');
        const edit = _createLink(['todo-button', 'todo-edit'], todoUi, '');

        _createIcon(['material-symbols-outlined'], details, 'visibility');
        _createIcon(['material-symbols-outlined'], del, 'delete');
        _createIcon(['material-symbols-outlined'], edit, 'edit');

        details.dataset.id = id;
        del.dataset.id = id;
        edit.dataset.id = id;
    }

    const _createTodo = (Todo, parent) => {
        const todoWrapper = _createWrapper(['container', 'todo'], parent, 'div');
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

    const _createAddTodosButton = () => {
        const content = document.querySelector('.content');
        const btn = _createLink(['add', 'btn', 'btn--primary'], content, 'Add Todo');
        _createIcon(['icon--add', 'material-symbols-outlined'], btn, 'add');
    }

    const _createAddProjectButton = () => {
        const menu = document.querySelector('.menu');
        const btn = _createLink(['project-add', 'btn', 'btn--primary'], menu, '');
        _createIcon(['icon--add', 'material-symbols-outlined'], btn, 'add');
    }

    const _createInput = ([...classList], parent, type, name, labelText, required, value) => {
        const wrapper = _createWrapper(['input-group'], parent, 'div');
        const input = document.createElement(`input`);
        const label = document.createElement('label');
        classList.forEach(item => input.classList.add(item));

        if(value) 
            input.value = value;
        input.type = type;
        input.name = name;
        input.id = name;
        input.required = required ? true: false;
        label.htmlFor = name;
        label.textContent = labelText;

        wrapper.append(label, input);
        return input; 
    }


    const _createRadioInput = ([...classList], parent, name, id, labelText, required) => {
        const wrapper = _createWrapper(['input-group', 'radio-group'], parent, 'div');
        const input = document.createElement(`input`);
        const label = document.createElement('label');
        classList.forEach(item => input.classList.add(item));
        input.type = 'radio';
        input.name = name;
        input.id = id;
        input.required = required ? true: false;
        label.htmlFor = name;
        label.textContent = labelText;

        wrapper.append(input, label);
        return input; 
    }

    const _createTextarea = ([...classList], parent, name, labelText, required) => {
        const wrapper = _createWrapper(['input-group'], parent, 'div');
        const input = document.createElement(`textarea`);
        const label = document.createElement('label');
        classList.forEach(item => input.classList.add(item));
        input.name = name;
        input.id = name;
        input.required = required ? true: false;
        label.htmlFor = name;
        label.textContent = labelText;
        input.style.resize = 'none';

        wrapper.append(label, input);
        return input; 
    }


    const renderProjectList = () => {
        const container = document.querySelector('.project-list');

        while(container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }

        projects.projectList.forEach((item, index) => {
            const project = _createLink(['project-link'], container, item.title);
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
        _createAddTodosButton();
    }

    const renderDetails = (Todo) => {
        const modal = document.querySelector('.modal-body');
        const priority = `Priority: ${Todo.priority === 1 ? 'High' : Todo.priority === 2 ? 'Medium' : 'Low'}`;

        _clearModal(modal);
        _createHeading(['modal-title'], modal, 'h3', Todo.title);
        const content = _createWrapper(['modal-content', 'details'], modal, 'div');
        _createParagraph(['modal-date'], content, Todo.dueDate);
        _createParagraph(['modal-description'], content, Todo.description);
        _createParagraph(['modal-prio'], content, priority);
        if(Todo.isDone) {
            _createParagraph(['modal-isdone'], content, 'Task is completed');
        }
    }

    const renderEdit = (Todo) => {

        //Create form for editing inside initially generated modal
        const modal = document.querySelector('.modal-body');
        _clearModal(modal);
        const form = _createWrapper(['form--edit'], modal, 'form');
        form.method = 'post';
        const title = _createInput(['input', 'input--edit'], form, 'text', 'title', 'Title:', true);
        const description = _createTextarea(['textarea', 'input--edit'], form, 'description', 'Description:', false);
        const dueDate = _createInput(['input', 'input--edit'], form, 'datetime-local', 'dueDate', 'Due date:', true);
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = 'Select priority';
        fieldset.appendChild(legend);
        const radioLow =_createRadioInput(['input', 'input--edit', 'radio'], fieldset, 'priority', 'low', 'Low', true);
        const radioMedium = _createRadioInput(['input', 'input--edit', 'radio'], fieldset, 'priority', 'medium', 'Medium', true);
        const radioHigh = _createRadioInput(['input', 'input--edit', 'radio'], fieldset, 'priority', 'high', 'High', true);

        //Input current values when clicked on edit.
        Todo.priority === 1 ? radioHigh.checked = true : Todo.priority === 2 ? radioMedium.checked = true : radioLow.checked = true;
        title.value = Todo.title;
        description.value = Todo.description;
        dueDate.value = Todo.dueDate;

        form.appendChild(fieldset);
        _createButton(['btn', 'btn--primary', 'edit-submit'], form, 'Submit changes', 'submit');
    }

    const renderAddTodo = () => {
        const modal = document.querySelector('.modal-body');
        _clearModal(modal);
        const form = _createWrapper(['form--add'], modal, 'form');
        form.method = 'post';
        _createInput(['input', 'input--edit'], form, 'text', 'title', 'Title:', true);
        _createTextarea(['textarea', 'input--edit'], form, 'description', 'Description:', false);
        _createInput(['input', 'input--edit'], form, 'datetime-local', 'dueDate', 'Due date:', true);
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = 'Select priority';
        fieldset.appendChild(legend);
        _createRadioInput(['input', 'input--edit', 'radio'], fieldset, 'priority', 'low', 'Low', true);
        _createRadioInput(['input', 'input--edit', 'radio'], fieldset, 'priority', 'medium', 'Medium', true);
        _createRadioInput(['input', 'input--edit', 'radio'], fieldset, 'priority', 'high', 'High', true);
        form.appendChild(fieldset);
        _createButton(['btn', 'btn--primary', 'add-submit'], form, 'Add new Todo', 'submit');
    }

    const renderAddProject = () => {
        const modal = document.querySelector('.modal-body');
        _clearModal(modal);
        const form = _createWrapper(['form--project'], modal, 'form');
        form.method = 'post';
        _createInput(['input', 'input--edit'], form, 'text', 'title', 'Project Title:', true);
        _createButton(['btn', 'btn--primary', 'project-submit'], form, 'Add new project', 'submit');
    }

    const createTemplate = () => {
        _createHeader();
        _createFooter();
        _createMenu();
        _createWrapper(['content'], _mainWrapper, 'div');
        _renderInitial();
        _createModal();
        _createAddProjectButton();
    }

    return {
        get currentTodoList() {
            return currentTodoList;
        },
        createTemplate,
        renderProjectList,
        renderTodos,
        renderDetails,
        renderEdit,
        renderAddTodo,
        renderAddProject
    }
})();

export default ui;