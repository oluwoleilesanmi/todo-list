
let todoCreation = (todo) => {
  return `<form todo-id=${todo.id} id="form">
              <div>
                <label>Title:</label>
                <input type="text" id="title">
              </div>
              <div>
                <label>Description:</label>
                <textarea id="description"></textarea>
              </div>
              <div>
                <label for="date">Due:</label>
                <input type="datetime-local" id="due">
              </div>
              <div>
                <label>Priority:</label>
                <select id="priority">
                  <option value="1">Important</option>
                  <option value="2">Sliglity Important</option>
                  <option value="3">Not Important</option>
                </select>
              </div>
              <button class="update">Update todo</button>
          </form>`
}
export {todoCreation}