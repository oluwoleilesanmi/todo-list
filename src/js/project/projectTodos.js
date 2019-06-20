let projectTodos = () => {
  
  let store = (namespace, data) => {
    if (arguments.length > 1) {
      localStorage.setItem(namespace, JSON.stringify(data));
    } else {
      let datastrut = localStorage.getItem(namespace);
      todoStore = (datastrut && JSON.parse(datastrut)) || [];
    }
  }
  
  return {store}
};

export {projectTodos}
