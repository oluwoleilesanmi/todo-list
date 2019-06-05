import {todoCreation} from "../view/todoCreation"

let addTodoListener = () => {
  let todoBtn = document.querySelector(".todo"), 
    add = document.querySelector(".add");
  todoBtn.addEventListener("click", (e) => {
    add.innerHTML = todoCreation();
  });
}

export {addTodoListener}