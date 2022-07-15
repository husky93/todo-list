const Todo = (title, description, dueDate, priority) => {
    let todoTitle = title;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;
    let isDone = false;

    return {
        get title() {
            return todoTitle;
        },
        set title(newTitle) {
            todoTitle = newTitle;
        },
        get description() {
            return todoDescription;
        },
        set description(newDescription) {
            todoDescription = newDescription;
        },
        get dueDate() {
            return todoDueDate;
        },
        set dueDate(newDueDate) {
            todoDueDate = newDueDate;
        },
        get priority() {
            return todoPriority;
        },
        set priority(newPriority) {
            todoPriority = newPriority;
        },
        get isDone() {
            return isDone;
        },
        set isDone(value) {
            if (typeof(value) === 'boolean') 
                isDone = value;
            else
                throw 'Todo.isDone / Wrong value type provided, must be boolean';
        }
    };
}

export default Todo;