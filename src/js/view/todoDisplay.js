
let todoDisplay = (todo) => {
  return `<li>
            <h3><input type="checkbox">${todo.title}</h3>
            <p>${todo.description}</p>
            <time>Date-due: ${todo.dueDate}</time>
            <span>Priority: ${todo.priority}</span>
          </li>`
}
 
export {todoDisplay}

  