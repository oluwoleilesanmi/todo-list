
let todoDisplay = (todo) => {
  return `<li todo-id=${todo.id}>
            <h3><input type="checkbox">${todo.title}</h3>
            <p>${todo.description}</p>
            <time>Date-due: ${todo.dueDate}</time>
            <span>Priority: ${todo.priority}</span>
            <button class="delete-todo">Delete</button>
          </li>`
}
 
export {todoDisplay}

  