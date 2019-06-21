let storage = () => {
 function store(namespace, data) {
    if (arguments.length > 1) {
      localStorage.setItem(namespace, JSON.stringify(data));
    } else {
      let datastrt = localStorage.getItem(namespace);
      return (datastrt && JSON.parse(datastrt)) || [];
    }
  }
  return {store}
};

export {storage}
