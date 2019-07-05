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

let findTask = e => {
  var task,
    id = $(e)
      .parent()
      .attr("todo-id");
  allTasks.forEach(function(thisTask) {
    if (thisTask.id == id) {
      task = thisTask;
    }
  });
  return task;
};

let deleteTask = function(el) {
  var task = findTask(el),
    taskIndex = allTasks.indexOf(task);
  allTasks.splice(taskIndex, 1);
  render();
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

  $(document).on("click", ".task-del", function(e) {
    deleteTask(this);
  });
});
