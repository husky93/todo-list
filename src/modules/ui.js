import {projectList} from './project';

const ui = (() => {
    const _main = document.querySelector('main');

    const renderTemplate = () => {
        _renderHeader();
        _renderFooter();
    };

    const _renderHeader = () => {
        const body = document.querySelector('body');
        const header = document.createElement('header')
        _createHeading('h1', 'Todo List', ['logo'], header);
        
        body.insertBefore(header, _main)
    }

    const _renderFooter = () => {
        const footer = document.createElement('footer');  
        _main.after(footer);
    }

    const _createHeading = (headingName, text, [...classList], parent) => {
        const heading = document.createElement(`${headingName}`);
        classList.forEach(item => heading.classList.add(item));
        heading.textContent = text;
        parent.appendChild(heading);
    }

    return {
        renderTemplate
    }
})();

export default ui;