import './assets/style.css';
import ui from './modules/ui';
import Todo from './modules/todo';
import {Project, projectList} from './modules/project';

const defaultProject = Project('Default', [Todo('Default', 'Default description', '11-11-2022', 1)]);
const newTodo = Todo('ASD', 'Default description', '11-11-2022', 2);
newTodo.isDone = true;
defaultProject.addTodo(newTodo);
projectList.push(defaultProject);

console.log(defaultProject.todoList[0].id);

ui.createTemplate();

