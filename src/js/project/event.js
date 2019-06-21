import {create} from "./create"

let listener = () => {
  let btn = document.querySelector(".project"),
    add = document.querySelector(".add");
  
  btn.addEventListener("click", (e) => {
    add.innerHTML = create();
  });
}

export { listener }