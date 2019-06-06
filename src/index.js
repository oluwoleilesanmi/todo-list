import { todoDisplay } from "./js/view/todoDisplay"
import { projectDisplay } from "./js/view/projectDisplay"
import { addProjectListener } from "./js/project/projectEvents"
import { addTodoListener } from "./js/todo/todoEvents"
import { projectTodos } from "./js/project/projectTodos"
import { uuid } from "./js/util/utility"
import { todo } from "./js/todo/todo"
import { todoCreation } from "./js/view/todoCreation";

let database = projectTodos()

const addTodoToDb = (id, title, description, dueDate, priority, projectName) => {
    let index = 0,
      todo = todo(id, title[index].value, description[index].value, dueDate[index].value, priority[index].value, false);
    database.storeTodo(projectName, todo)
}

let getInputData = () => {
     const id = document.getElementById("form").getAttribute('todo-id');
     const title = document.getElementById('title');
     const description = document.getElementById('description');  
     const dueDate = document.getElementById('due');  
     const priority = document.getElementById('priority');  
     return { id: id, title: title, description: description, dueDate: dueDate, priority: priority };
  }

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
    if(document.getElementsByClassName("toggle")){
      let arrToggle = document.getElementsByClassName("toggle");
      Array.from(arrToggle).forEach(toggleBtn => {
        toggleBtn.addEventListener('click', toggleTodo);
    });
  }
}

const bindEditEvent = () => {
    if(document.getElementsByClassName("edit")){
      let arrEdit = document.getElementsByClassName("edit");
      Array.from(arrEdit).forEach(edit => {
        edit.addEventListener('dblclick', e => {
          let todo = findTodo(e), update = document.querySelector(".update"), 
          add = document.querySelector(".add");
          add.innerHTML = todoCreation(todo) 
          
          update.addEventListener("click", (e) => {
              let liveData = getInputData()
              todo = todo(liveData.id, liveData.title[index].value, liveData.description[index].value, liveData.dueDate[index].value, liveData.priority[index].value, false);
              let arr = database[findTodoIndex(e)]
              arr[1] = todo
              database.splice(findTodoIndex(e), 1, arr);
          });
        });
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
