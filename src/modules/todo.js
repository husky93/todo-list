const Todo = (title, description, dueDate, priority) => {
    let isDone = false;
     
    return {
        get title() {
            return title;
        },
        set title(newTitle) {
            title = newTitle;
        },
        get description() {
            return description;
        },
        set description(newDescription) {
            description = newDescription;
        },
        get dueDate() {
            return dueDate;
        },
        set dueDate(newDueDate) {
            dueDate = newDueDate;
        },
        get priority() {
            return priority;
        },
        set priority(newPriority) {
            priority = newPriority;
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