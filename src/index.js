import './assets/reset.css';
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
    projects.projectList = newObject.projectList;
    projects.projectList.forEach(project => controller.sortByDate(project.todoList))
}

else {
    const defaultProject = Project('Example Project One', [Todo('Add footer', 'Lorem ipsum dolor sit amet...', new Date('2022', 7, 15), 1), 
                            Todo('Create UI module', 'Lorem ipsum dolor sit amet...', new Date('2022', 7, 16), 2),
                            Todo('Team meeting', 'Lorem ipsum dolor sit amet...', new Date('2022', 7, 17), 3),
                            Todo('Drink some coffee', 'Lorem ipsum dolor sit amet...', new Date('2022', 7, 18), 1)]);
    const defaultProjectTwo = Project('Learn JavaScript', [Todo('Learn React', 'Default description', new Date('2022', 7, 11), 1),
                            Todo('Learn about factory functions', 'Default description', new Date('2022', 7, 11), 3)]);
    const newTodo = Todo('Browse social media', 'Lorem ipsum dolor sit amet...', new Date('2022', 7, 22), 3);
    const todoTwo =Todo('Make Todo List Project', 'Default description', new Date('2022', 7, 11), 2);

    newTodo.isDone = true;
    todoTwo.isDone = true;
    defaultProject.addTodo(newTodo);
    defaultProjectTwo.addTodo(todoTwo);
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