const Project = (name, [...todos]) => {
  const todoList = todos;
  let title = name;
  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  const editTodo = (index, todoTitle, description, dueDate, priority) => {
    todoList[index].title = todoTitle;
    todoList[index].description = description;
    todoList[index].dueDate = dueDate;
    todoList[index].priority = priority;
  };

  return {
    addTodo,
    removeTodo,
    editTodo,
    get title() {
      return title;
    },
    set title(newTitle) {
      title = newTitle;
    },
    get todoList() {
      return todoList;
    },
  };
};

const projects = {
  currentProject: 0,
  projectList: [],
};

export { Project, projects };
