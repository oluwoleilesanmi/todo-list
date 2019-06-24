const object = (id, title, description, dueDate, priority, bol) => {
  return {
    id: id,
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    done: bol
  };
};

export { object };
