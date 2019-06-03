
let todoCreation = (todo) => {
  return `<form>
              <div>
                <label>Title:</label>
                <input type="text">
              </div>
              <div>
                <label>Description:</label>
                <textarea>${todo.description}</textarea>
              </div>
              <div>
                <label for="date">Due:</label>
                <input type="datetime-local">
              </div>
              <div>
                <label>Priority:</label>
                <select id="todo-priority">
                  <option value="1" ${todo.priority === '1' ? 'selected' : ''}>Important</option>
                  <option value="2" ${todo.priority === '2' ? 'selected' : ''}>Sliglity Important</option>
                  <option value="3" ${todo.priority === '3' ? 'selected' : ''}>Not Important</option>
                </select>
              </div>
              <button>Update todo</button>
          </form>`
}
export {todoCreation}