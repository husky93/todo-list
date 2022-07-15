import {projectList} from './project';

const ui = (() => {
    const _main = document.querySelector('main');

    const _renderHeader = () => {
        const body = document.querySelector('body');
        const header = document.createElement('header')

        body.insertBefore(header, _main)
    }

    const _renderFooter = () => {
        const footer = document.createElement('footer');  
        _main.after(footer);
    }

    const renderTemplate = () => {
        _renderHeader();
        _renderFooter();
    };

    return {
        renderTemplate
    }
})();

export default ui;