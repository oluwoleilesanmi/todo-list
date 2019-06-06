
let todoCreation = () => {
  return `<form>
              <div>
                <label>Title:</label>
                <input type="text" class="title">
              </div>
              <div>
                <label>Description:</label>
                <textarea class="description"></textarea>
              </div>
              <div>
                <label for="date">Due:</label>
                <input type="datetime-local" class="due">
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