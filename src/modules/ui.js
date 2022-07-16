import {projectList} from './project';

const ui = (() => {
    const _main = document.querySelector('main');

    const createTemplate = () => {
        _createHeader();
        _createFooter();
        _createMenu();
    };

    const _createHeader = () => {
        const body = document.querySelector('body');
        const header = document.createElement('header')
        ui.createHeading(['logo'], header, 'h1', 'Todo List');
        body.insertBefore(header, _main)
    }

    const _createFooter = () => {
        const footer = document.createElement('footer'); 
        ui.createParagraph(['text--footer'], footer, 'Copyright © 2022 husky93'); 
        _main.after(footer);
    }

    const _createMenu = () => {
        const menu = createWrapper(['menu'], _main, 'aside');
        const nav = createWrapper(['navbar'], _main, 'nav');
        _createProjectList(nav);
        menu.appendChild(nav);
        _main.appendChild(menu);
        ui.renderProjectList();
    }

    const _createProjectList = (nav) => {
        ui.createWrapper(['project-list'], nav, 'div');
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

    const createLink = ([...classList], parent, text) => {
        const link = document.createElement('a');
        classList.forEach(item => link.classList.add(item));
        link.textContent = text;
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
        createLink,
        createTemplate,
        createHeading,
        createParagraph,
        createWrapper,
        renderProjectList
    }
})();

export default ui;