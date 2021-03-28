const todoinp = document.getElementById("todoinp")
const formSubmit = document.querySelector(".form")
const todoList = document.querySelector(".todoList")
todoinp.focus()
events()

// events
function events() {
  formSubmit.addEventListener("submit", addTask)
  todoList.addEventListener("click", manageTodoList)
}

// methods
function addTask(e) {
  e.preventDefault()
  todoList.insertAdjacentHTML(
    "beforeend",
    `<article>
  <p>${todoinp.value}</p>
  <span>
    <span id="edit"><i class="bi bi-pencil-square"></i></span>
    <span id="delete"><i class="bi bi-archive-fill"></i></span>
  </span>
</article>`
  )
  todoinp.value = ""
  todoinp.focus()
}

function manageTodoList(e) {
  let targetElement = e.target.parentElement.getAttribute("id")
  if (targetElement == "edit") {
    let para = e.target.parentElement.parentElement.parentElement.querySelector("p")
    para.textContent = prompt("message", `${para.textContent}`)
    console.log(para.textContent)
  }
  if (targetElement == "delete") {
    e.target.parentElement.parentElement.parentElement.remove()
  }
}
