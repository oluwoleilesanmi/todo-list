
let todoCreation = () => {
  return `<form>
              <div>
                <label>Title:</label>
                <input type="text">
              </div>
              <div>
                <label>Description:</label>
                <textarea></textarea>
              </div>
              <div>
                <label for="date">Due:</label>
                <input type="datetime-local">
              </div>
              <div>
                <label>Priority:</label>
                <select id="todo-priority">
                  <option value="1">Important</option>
                  <option value="2">Sliglity Important</option>
                  <option value="3">Not Important</option>
                </select>
              </div>
              <button>Update todo</button>
          </form>`
}
export {todoCreation}