import './assets/style.css';
import Todo from './modules/todo';
import Project from './modules/project';

const defaultProject = Project('Default', [Todo('Default', 'Default description', '11-11-2022', 1)]);
const newTodo = Todo('ASD', 'Default description', '11-11-2022', 2);

defaultProject.addTodo(newTodo);

