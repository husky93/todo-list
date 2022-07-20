import './assets/style.css';
import ui from './modules/ui';
import controller from './modules/controller';
import Todo from './modules/todo';
import {Project, projects} from './modules/project';
import events from './modules/events';

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}


if(localStorage.getObject('projects')) {
    //Imports data from local storage JSON format which doesnt store methods
    const localStorageObject = localStorage.getObject('projects')
    let newObject = {
        currentProject: localStorageObject.currentProject,
        projectList: []
    };
    //Add the methods back to all the objects
    localStorageObject.projectList.forEach(item => {
        const title = item.title;
        let newTodoList = item.todoList.map(todo => {
            let newTodo = Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.id)
            newTodo.isDone = todo.isDone;
            return newTodo;
        })
        newObject.projectList.push(Project(title, newTodoList));
    });
    projects.currentProject = newObject.currentProject;
    projects.projectList = newObject.projectList;
    projects.projectList.forEach(project => controller.sortByDate(project.todoList))
}

else {
    const defaultProject = Project('Default', [Todo('Default', 'Default description', new Date('2022', 7, 15), 1)]);
    const defaultProjectTwo = Project('Default2', [Todo('Default2', 'Default description', new Date('2022', 7, 11), 1)]);
    const newTodo = Todo('ASD', 'Default description', new Date('2022', 7, 22), 2);
    const newTodoTwo = Todo('ASDasdasda', 'Default description', new Date('2022', 11, 22), 2);
    newTodo.isDone = true;
    defaultProject.addTodo(newTodo);
    defaultProjectTwo.addTodo(newTodoTwo);
    projects.projectList.push(defaultProject);
    projects.projectList.push(defaultProjectTwo);
    projects.projectList.forEach(project => controller.sortByDate(project.todoList))
    if(storageAvailable('localStorage')) {
        localStorage.setObject('projects', projects);
    }
}


ui.createTemplate();
events.addInitialEventListeners();



function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}