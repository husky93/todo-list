const Project = (title, [...todoList]) => {

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodo = (index) => {
        todoList.splice(index, 1);
    }

    const editTodo = (index, title, description, dueDate, priority) => {
        todoList[index].title = title;
        todoList[index].description = description;
        todoList[index].dueDate = dueDate;
        todoList[index].priority = priority;
    }

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
        }
    };
}

let projects = {
        currentProject: 0,
        projectList: []
};

export {Project, projects};