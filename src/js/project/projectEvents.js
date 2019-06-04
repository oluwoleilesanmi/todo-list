import {projectCreation} from "../view/projectCreation"

let addProjectListener = () => {
  let projectBtn = document.querySelector(".project");
  let add = document.querySelector(".add");
  
  projectBtn.addEventListener("click", (e) => {
    add.innerHTML = projectCreation();
  });
}

export {addProjectListener}