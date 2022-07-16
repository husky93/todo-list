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

        body.insertBefore(header, _main)
    }

    const _renderFooter = () => {
        const footer = document.createElement('footer');  
        _main.after(footer);
    }

    return {
        renderTemplate
    }
})();

export default ui;