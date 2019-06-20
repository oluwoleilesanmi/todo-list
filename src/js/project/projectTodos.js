let projectTodos = () => {
  
 function store(namespace, data) {
    if (arguments.length > 1) {
      console.log(arguments.length);
      localStorage.setItem(namespace, JSON.stringify(data));
    } else {
      console.log("yelp")
      let datastrut = localStorage.getItem(namespace);
      return (datastrut && JSON.parse(datastrut)) || [];
    }
  }
  
  return {store}
};

export {projectTodos}
