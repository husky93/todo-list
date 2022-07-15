const Project = (title, [...todoList]) => {

    const addTodo = (todo) => {
        todoList.push(todo);
    }

    const removeTodo = (todo) => {
        todoList = todoList.filter(!todo);
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

export default Project;