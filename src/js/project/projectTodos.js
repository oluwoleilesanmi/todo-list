let projectTodos = () => {
  let allTodos = [];

  let storeTodo = (key, todo) => {
    let temp = [key, todo];
    allTodos.push(temp);
  };

  let getAllTodos = () => {
    return allTodos;
  };
  return {storeTodo, getAllTodos}
};

export {projectTodos}
