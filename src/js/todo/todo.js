const todo = (id, title, description, dueDate, priority) => {
  return {
    id: id,
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    done: false
  };
};

export {todo}
