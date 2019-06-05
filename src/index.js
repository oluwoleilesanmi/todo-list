import {todoDisplay} from "./js/view/todoDisplay"
import {projectDisplay} from "./js/view/projectDisplay"
import {addProjectListener} from "./js/project/projectEvents"
import {addTodoListener} from "./js/todo/todoEvents"
import {projectTodos} from "./js/project/projectTodos"
import {uuid} from "./js/util/utility"
import {todo} from "./js/todo/todo"

let database = projectTodos()

const defaultView = () => {
  let projects = document.querySelector(".projects")
  let todos = document.querySelector(".todos")
  projects.innerHTML=  projectDisplay("test")
  todos.innerHTML = todoDisplay("test")
}

const findTodoIndex = (e) => {
    let id = e.target.parentNode.getAttribute('todo-id');
    for(let i=0, map; i<database.length; i++){
        map = database[i][1]
        if (map.id === id) { return i;}
    }
}

const deleteTodo = (e) => {
    let todo = findTodoIndex(e),
        todoIndex = database.indexOf(todo);
    database.splice(todoIndex, 1);
}

const bindDelEvent = () => {
    if(document.getElementsByClassName("delete-todo")){
      let arrButtons = document.getElementsByClassName("delete-todo");
      Array.from(arrButtons).forEach(delButton => {
        delButton.addEventListener('click', deleteTodo);
    });
  }
}

const bindToggleEvent = () => {
  console.log("io")
    if(document.getElementsByClassName("toggle")){
      let arrToggle = document.getElementsByClassName("toggle");
      Array.from(arrToggle).forEach(toggleBtn => {
        toggleBtn.addEventListener('click', toggleTodo);
    });
  }
}

const toggleTodo = (e) => {
    let todo = findTodo(e);
    todo.done = !todo.done;
}

const findTodo = (e) => {
    let todo, 
      id = e.target.parentNode.getAttribute('todo-id');
    for(let i=0, map; i<database.length; i++){
      map = database[i][1]
      if (map.id === id) { todo = map;}
    }
    return todo;
}



defaultView()
addProjectListener()
addTodoListener()
bindDelEvent()
bindToggleEvent()