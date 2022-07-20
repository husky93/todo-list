const Todo = (title, description, dueDate, priority, oldId) => {
    let isDone = false;
    const id = oldId ? oldId : getNewId();

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
            if (newPriority === 1 || newPriority === 2 || newPriority === 3) 
                priority = newPriority;
            else
                throw 'Todo.priority setting new value failed / Must be integer 1, 2 or 3';
        },
        get isDone() {
            return isDone;
        },
        set isDone(value) {
            if (typeof(value) === 'boolean') 
                isDone = value;
            else
                throw 'Todo.isDone setting new value failed / Wrong value type provided, must be boolean';
        },
        get id() {
            return id;
        }
    };
}

const getNewId = () => {
    const uid = String(Date.now().toString(32) + Math.random().toString(16))
        .replace(/\./g, '');
    return uid;
}

export default Todo;