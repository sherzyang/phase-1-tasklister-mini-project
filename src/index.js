document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let getForm = document.getElementById("new-task-description")
    handleTasks(getForm.value)
    form.reset()
  })
});

function handleTasks(toDo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = `${toDo}  `;
  btn.textContent = "💕"
  p.appendChild(btn)
  document.querySelector("#tasks").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}