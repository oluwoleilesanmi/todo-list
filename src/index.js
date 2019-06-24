import { create } from "./js/project/create";
import { uuid } from "./js/util/uuid";
import { object } from "./js/todo/object";
import * as td from "./js/todo/display";
import * as pd from "./js/project/display";
import * as te from "./js/todo/event";
import * as ps from "./js/project/store";
import * as tc from "./js/todo/create";
import { format } from "date-fns";

let database = ps.storage().store("project-todo");
let pdatabase = ps.storage().store("project");
let reset = "";

let getInputData = () => {
  const id = document.getElementById("form").getAttribute("todo-id");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const dueDate = document.getElementById("due");
  const priority = document.getElementById("priority");
  return {
    id: id,
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority
  };
};

const defaultView = () => {
  let projects = document.querySelector(".projects");
  let todos = document.querySelector(".todos");
  let arr = [
    "default",
    object(
      null,
      "starter",
      "Hi enjoy the todo",
      format(new Date(), "YYYY-MM-DD"),
      "very high",
      false
    )
  ];
  pdatabase.push("default");
  projects.innerHTML = pd.display(pdatabase[0]);
  database.push(arr);
  todos.innerHTML = td.display(arr[1]);
};

const findTodoIndex = e => {
  let id = e.target.parentNode.getAttribute("todo-id");
  for (let i = 0, map; i < database.length; i++) {
    map = database[i][1];
    if (map.id === id) {
      return i;
    }
  }
};

const deleteTodo = e => {
  let todo = findTodoIndex(e),
    todoIndex = database.indexOf(todo);
  database.splice(todoIndex, 1);
};

const bindDelEvent = () => {
  if (document.getElementsByClassName("delete-todo")) {
    let arrButtons = document.getElementsByClassName("delete-todo");
    Array.from(arrButtons).forEach(delButton => {
      delButton.addEventListener("click", deleteTodo);
    });
  }
};

const bindToggleEvent = () => {
  if (document.getElementsByClassName("toggle")) {
    let arrToggle = document.getElementsByClassName("toggle");
    Array.from(arrToggle).forEach(toggleBtn => {
      toggleBtn.addEventListener("click", toggleTodo);
    });
  }
};

const bindEditEvent = () => {
  if (document.getElementsByClassName("edit")) {
    let arrEdit = document.getElementsByClassName("edit");
    Array.from(arrEdit).forEach(edit => {
      edit.addEventListener("dblclick", e => {
        let todo = findTodo(e),
          update = document.querySelector(".update"),
          add = document.querySelector(".add");
        add.innerHTML = tc.create(todo);

        update.addEventListener("click", e => {
          let liveData = getInputData();
          todo = todo(
            liveData.id,
            liveData.title[index].value,
            liveData.description[index].value,
            liveData.dueDate[index].value,
            liveData.priority[index].value,
            false
          );
          let arr = database[findTodoIndex(e)];
          arr[1] = todo;
          database.splice(findTodoIndex(e), 1, arr);
        });
      });
    });
  }
};

const toggleTodo = e => {
  let todo = findTodo(e);
  todo.done = !todo.done;
};

const findTodo = e => {
  let todo,
    id = e.target.parentNode.getAttribute("todo-id");
  for (let i = 0, map; i < database.length; i++) {
    map = database[i][1];
    if (map.id === id) {
      todo = map;
    }
  }
  return todo;
};

const listener = () => {
  let btn = document.querySelector(".project"),
    add = document.querySelector(".add");
  btn.addEventListener("click", e => {
    add.innerHTML = create();
    let cbtn = document.querySelector(".create");
    cbtn.addEventListener("click", e => {
      let text = document.querySelector(".input").value;
      pdatabase.push(text);
      render(pdatabase, document.querySelector(".projects"), add);
    });
  });
};

const render = (arr, ul, div) => {
  let li = reset;
  arr.forEach(e => {
    li += pd.display(e);
  });
  ul.innerHTML = li;
  div.innerHTML = reset;
};

defaultView();
listener();
te.listener();
bindDelEvent();
bindToggleEvent();
