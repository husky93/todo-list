const Project = (title, [...todoList]) => {

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodo = (index) => {
        todoList.splice(index, 1);
    }

    return {
        addTodo,
        removeTodo,
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