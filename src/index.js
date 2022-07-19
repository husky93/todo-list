import './assets/style.css';
import ui from './modules/ui';
import Todo from './modules/todo';
import {Project, projects} from './modules/project';
import events from './modules/events';

const defaultProject = Project('Default', [Todo('Default', 'Default description', '11-11-2022', 1)]);
const defaultProjectTwo = Project('Default2', [Todo('Default2', 'Default description', '11-11-2022', 1)]);
const newTodo = Todo('ASD', 'Default description', '11-11-2022', 2);
const newTodoTwo = Todo('ASDasdasda', 'Default description', '11-11-2022', 2);
newTodo.isDone = true;
defaultProject.addTodo(newTodo);
defaultProjectTwo.addTodo(newTodoTwo);
projects.projectList.push(defaultProject);
projects.projectList.push(defaultProjectTwo);

ui.createTemplate();
events.addInitialEventListeners();

