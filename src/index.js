import "jquery";
import { uuid } from "./js/util/uuid";

let allTasks = [];

let insert = (id, name, date) => {
  allTasks.push({ id: id, name: name, date: date, done: false });
};

let li = task => {
  return (
    "" +
    '<li todo-id = "' +
    task.id +
    '">' +
    '<input type="checkbox" />' +
    task.name +
    task.date +
    '<button class="task-del">-</button>' +
    "</li>"
  );
};

let render = () => {
  let str = "";
  allTasks.forEach(e => {
    str += li(e);
  });
  $(".task-list").html(str);
};

let getTask = form => {
  let t = form.elements[0].value;
  let d = form.elements[1].value;
  insert(uuid(), t, d);
  render();
};

$(document).ready(function() {
  $("form.task-entry").submit(function(e) {
    e.preventDefault();
    getTask(this);
  });
});
