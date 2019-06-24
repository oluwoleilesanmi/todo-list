
let display = (todo) => {
  let ticked = '', dim = '';
  if (todo.done === true){
    ticked = "checked";
    dim = "dim";
  }
  return `<li todo-id=${todo.id} class=${dim, "edit"} >
            <h3><input type="checkbox" ${ticked} class="toggle">${todo.title}</h3>
            <p>${todo.description}</p>
            <time>Date-due: ${todo.dueDate}</time>
            <span>Priority: ${todo.priority}</span>
            <button class="delete-todo">Delete</button>
          </li>`
};
export { display }

  