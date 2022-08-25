import intlFormat from 'date-fns/intlFormat';
import parseISO from 'date-fns/parseISO';
import { projects } from './project';

const ui = (() => {
  const main = document.querySelector('main');
  const mainWrapper = document.querySelector('.wrapper--main');
  let currentTodoList = null;

  const createWrapper = ([...classList], parent, wrapperTag) => {
    const wrapper = document.createElement(`${wrapperTag}`);
    classList.forEach((item) => wrapper.classList.add(item));
    if (parent) parent.appendChild(wrapper);
    return wrapper;
  };

  const createParagraph = ([...classList], parent, text) => {
    const para = document.createElement('p');
    classList.forEach((item) => para.classList.add(item));
    para.textContent = text;
    parent.appendChild(para);
  };

  const createLink = ([...classList], parent, text) => {
    const link = document.createElement('a');
    classList.forEach((item) => link.classList.add(item));
    link.innerHTML = text;
    parent.appendChild(link);
    return link;
  };

  const createHeading = ([...classList], parent, headingTag, text) => {
    const heading = document.createElement(`${headingTag}`);
    classList.forEach((item) => heading.classList.add(item));
    heading.textContent = text;
    parent.appendChild(heading);
  };

  const createIcon = ([...classList], parent, name) => {
    const icon = document.createElement('span');
    classList.forEach((item) => icon.classList.add(item));
    icon.textContent = name;
    parent.appendChild(icon);
  };

  const createButton = ([...classList], parent, text, type) => {
    const button = document.createElement('button');
    classList.forEach((item) => button.classList.add(item));
    button.textContent = text;
    if (type) {
      button.type = type;
    }
    parent.appendChild(button);
  };

  const createFooter = () => {
    const footer = document.createElement('footer');
    const wrapper = createWrapper(['wrapper'], footer, 'div');
    createParagraph(['text--footer'], wrapper, 'Created by');
    const link = createLink(['gh-link'], wrapper, 'husky93');
    link.href = 'https://github.com/husky93';
    main.after(footer);
  };

  const createProjectList = (nav) => {
    createWrapper(['project-list'], nav, 'div');
  };

  const createMenu = () => {
    const menu = createWrapper(['menu'], mainWrapper, 'aside');
    const nav = createWrapper(['navbar'], menu, 'nav');
    const projectsTab = createWrapper(['projects-tab'], nav, 'div');
    createProjectList(projectsTab);
  };

  const createModal = () => {
    const footer = document.querySelector('footer');
    const wrapper = createWrapper(['wrapper', 'modal'], null, 'div');
    const overlay = createWrapper(['modal-overlay'], wrapper, 'div');
    const modal = createWrapper(['modal-body'], overlay, 'div');
    const closeButton = createLink(['close', 'modal-close'], modal, '');
    createIcon(['material-symbols-outlined'], closeButton, 'close');
    wrapper.style.display = 'none';
    footer.after(wrapper);
  };

  const createCheckmark = ([...classList], parent, text, checked, id) => {
    const formCheck = createWrapper(['form-check'], parent, 'div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    classList.forEach((item) => formCheck.classList.add(item));

    input.type = 'checkbox';
    input.id = id;
    if (checked) {
      input.checked = true;
      formCheck.classList.add('completed');
    } else {
      input.checked = false;
    }
    label.textContent = text;
    label.htmlFor = id;

    formCheck.append(input, label);
  };

  const createTodoUi = (id, wrapper) => {
    const todoUi = createWrapper(['todo-ui'], wrapper, 'div');
    const details = createLink(['todo-button', 'btn-details'], todoUi, '');
    const del = createLink(['todo-button', 'todo-delete'], todoUi, '');
    const edit = createLink(['todo-button', 'todo-edit'], todoUi, '');

    createIcon(['material-symbols-outlined'], details, 'visibility');
    createIcon(['material-symbols-outlined'], del, 'delete');
    createIcon(['material-symbols-outlined'], edit, 'edit');

    const tooltipDetails = createWrapper(['tooltip'], details, 'span');
    const tooltipDelete = createWrapper(['tooltip'], del, 'span');
    const tooltipEdit = createWrapper(['tooltip'], edit, 'span');

    tooltipDetails.textContent = 'Show Details';
    tooltipDelete.textContent = 'Delete Todo';
    tooltipEdit.textContent = 'Edit Todo';

    details.dataset.id = id;
    del.dataset.id = id;
    edit.dataset.id = id;
  };

  const createTodo = (Todo, parent) => {
    const date = intlFormat(parseISO(Todo.dueDate), {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    let priority;
    if (Todo.priority === 1) {
      priority = 'high';
    } else if (Todo.priority === 2) {
      priority = 'medium';
    } else {
      priority = 'low';
    }
    const todoWrapper = createWrapper(
      ['container', 'todo', `priority-${priority}`],
      parent,
      'div'
    );
    createCheckmark(
      ['form-check'],
      todoWrapper,
      Todo.title,
      Todo.isDone,
      Todo.id
    );
    const container = createWrapper(['todo-details'], todoWrapper, 'div');
    createParagraph(['todo-date'], container, date);
    createTodoUi(Todo.id, container);
  };

  const renderInitial = () => {
    ui.renderProjectList();
    ui.renderTodos(projects.projectList[0].todoList);
  };

  const clearModal = (modal) => {
    const modalClose = document.querySelector('.modal-close');

    while (modal.childElementCount > 1) {
      if (modal.lastElementChild !== modalClose) {
        modal.removeChild(modal.lastElementChild);
      }
    }
  };

  const createAddTodosButton = () => {
    const content = document.querySelector('.content');
    const btn = createLink(['add', 'btn', 'btn--primary'], content, 'Add Todo');
    createIcon(['icon--add', 'material-symbols-outlined'], btn, 'add');
  };

  const createAddProjectButton = () => {
    const menu = document.querySelector('.menu');
    const btn = createLink(
      ['project-add', 'btn', 'btn--primary'],
      menu,
      'Add project'
    );
    createIcon(['icon--add', 'material-symbols-outlined'], btn, 'add');
  };

  const createInput = (
    [...classList],
    parent,
    type,
    name,
    labelText,
    required,
    value
  ) => {
    const wrapper = createWrapper(['input-group'], parent, 'div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    classList.forEach((item) => input.classList.add(item));

    if (value) {
      input.value = value;
    }
    input.type = type;
    input.name = name;
    input.id = name;
    input.required = !!required;
    label.htmlFor = name;
    label.textContent = labelText;

    wrapper.append(label, input);
    return input;
  };

  const createRadioInput = (
    [...classList],
    parent,
    name,
    id,
    labelText,
    required
  ) => {
    const wrapper = createWrapper(
      ['input-group', 'radio-group'],
      parent,
      'div'
    );
    const input = document.createElement('input');
    const label = document.createElement('label');
    classList.forEach((item) => input.classList.add(item));
    input.type = 'radio';
    input.name = name;
    input.id = id;
    input.required = !!required;
    label.htmlFor = name;
    label.textContent = labelText;

    wrapper.append(input, label);
    return input;
  };

  const createTextarea = (
    [...classList],
    parent,
    name,
    labelText,
    required
  ) => {
    const wrapper = createWrapper(
      ['input-group', 'textarea-group'],
      parent,
      'div'
    );
    const input = document.createElement('textarea');
    const label = document.createElement('label');
    classList.forEach((item) => input.classList.add(item));
    input.name = name;
    input.id = name;
    input.required = !!required;
    label.htmlFor = name;
    label.textContent = labelText;
    input.style.resize = 'none';

    wrapper.append(label, input);
    return input;
  };

  const renderProjectList = () => {
    const container = document.querySelector('.project-list');

    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }

    projects.projectList.forEach((item, index) => {
      const wrapper = createWrapper(['link'], container, 'div');
      const project = createLink(['project-link'], wrapper, item.title);
      project.dataset.id = index;
      createParagraph(['link-number'], wrapper, item.todoList.length);
    });
  };

  const renderTodos = (todoList) => {
    const content = document.querySelector('.content');
    currentTodoList = todoList;

    while (content.lastElementChild) {
      content.removeChild(content.lastElementChild);
    }

    todoList.forEach((item) => {
      createTodo(item, content);
    });
    createAddTodosButton();
  };

  const renderDetails = (Todo) => {
    const modal = document.querySelector('.modal-body');
    const date = intlFormat(parseISO(Todo.dueDate), {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    let priority;
    if (Todo.priority === 1) {
      priority = 'High';
    } else if (Todo.priority === 2) {
      priority = 'Medium';
    } else {
      priority = 'Low';
    }
    const priorityText = `Priority: ${priority}`;

    clearModal(modal);
    createHeading(['modal-title'], modal, 'h3', Todo.title);
    const content = createWrapper(['modal-content', 'details'], modal, 'div');
    createParagraph(['modal-date'], content, `Due date: ${date}`);
    createParagraph(['modal-label'], content, 'Description:');
    createParagraph(['modal-description'], content, Todo.description);
    createParagraph(['modal-prio'], content, priorityText);
    if (Todo.isDone) {
      createParagraph(['modal-isdone'], content, 'Task is completed');
    }
  };

  const renderEdit = (Todo) => {
    // Create form for editing inside initially generated modal
    const modal = document.querySelector('.modal-body');
    clearModal(modal);
    const form = createWrapper(['form--edit'], modal, 'form');
    form.method = 'post';
    const title = createInput(
      ['input', 'input--edit'],
      form,
      'text',
      'title',
      'Title:',
      true
    );
    const description = createTextarea(
      ['textarea', 'input--edit'],
      form,
      'description',
      'Description:',
      false
    );
    const dueDate = createInput(
      ['input', 'input--edit'],
      form,
      'datetime-local',
      'dueDate',
      'Due date:',
      true
    );
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Select priority';
    fieldset.appendChild(legend);
    const radioLow = createRadioInput(
      ['input', 'input--edit', 'radio'],
      fieldset,
      'priority',
      'low',
      'Low',
      true
    );
    const radioMedium = createRadioInput(
      ['input', 'input--edit', 'radio'],
      fieldset,
      'priority',
      'medium',
      'Medium',
      true
    );
    const radioHigh = createRadioInput(
      ['input', 'input--edit', 'radio'],
      fieldset,
      'priority',
      'high',
      'High',
      true
    );

    // Input current values when clicked on edit.
    // eslint-disable-next-line max-len
    if (Todo.priority === 1) {
      radioHigh.checked = true;
    } else if (Todo.priority === 2) {
      radioMedium.checked = true;
    } else {
      radioLow.checked = true;
    }
    title.value = Todo.title;
    description.value = Todo.description;
    dueDate.value = Todo.dueDate;

    form.appendChild(fieldset);
    createButton(
      ['btn', 'btn--primary', 'edit-submit'],
      form,
      'Submit changes',
      'submit'
    );
  };

  const renderAddTodo = () => {
    const modal = document.querySelector('.modal-body');
    clearModal(modal);
    const form = createWrapper(['form--add'], modal, 'form');
    form.method = 'post';
    createInput(
      ['input', 'input--edit'],
      form,
      'text',
      'title',
      'Title:',
      true
    );
    createTextarea(
      ['textarea', 'input--edit'],
      form,
      'description',
      'Description:',
      false
    );
    createInput(
      ['input', 'input--edit'],
      form,
      'datetime-local',
      'dueDate',
      'Due date:',
      true
    );
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Select priority';
    fieldset.appendChild(legend);
    createRadioInput(
      ['input', 'input--edit', 'radio'],
      fieldset,
      'priority',
      'low',
      'Low',
      true
    );
    createRadioInput(
      ['input', 'input--edit', 'radio'],
      fieldset,
      'priority',
      'medium',
      'Medium',
      true
    );
    createRadioInput(
      ['input', 'input--edit', 'radio'],
      fieldset,
      'priority',
      'high',
      'High',
      true
    );
    form.appendChild(fieldset);
    createButton(
      ['btn', 'btn--primary', 'add-submit'],
      form,
      'Add new Todo',
      'submit'
    );
  };

  const renderAddProject = () => {
    const modal = document.querySelector('.modal-body');
    clearModal(modal);
    const form = createWrapper(['form--project'], modal, 'form');
    form.method = 'post';
    createInput(
      ['input', 'input--edit'],
      form,
      'text',
      'title',
      'Project Title:',
      true
    );
    createButton(
      ['btn', 'btn--primary', 'project-submit'],
      form,
      'Add new project',
      'submit'
    );
  };

  const createTemplate = () => {
    createFooter();
    createMenu();
    createWrapper(['content'], mainWrapper, 'div');
    renderInitial();
    createModal();
    createAddProjectButton();
  };

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
    renderAddProject,
  };
})();

export default ui;
