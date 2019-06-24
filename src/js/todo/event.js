import { create } from "./create"

let listener = () => {
  let btn = document.querySelector(".todo"), 
    add = document.querySelector(".add");
  btn.addEventListener("click", (e) => {
    add.innerHTML = create({});
  });
}

export { listener }