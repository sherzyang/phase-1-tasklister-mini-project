document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  
  form.

  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let getForm = document.getElementById("new-task-description")
    handleTasks(getForm.value)
    form.reset()
  })

  function handleTasks(toDo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    p.textContent = `${toDo}  `;
    btn.textContent = "x"
    p.appendChild(btn)
    document.querySelector("#tasks").appendChild(p)
  }
  
  function handleDelete(e){
    e.target.parentNode.remove()
  }

  let select = document.createElement('select')
  form.appendChild(select)
  let optionOne = document.createElement('option')
  optionOne.innerText = "Easy"
  select.appendChild(optionOne)
  let optionTwo = document.createElement('option')
  optionTwo.innerText = "Medium"
  select.appendChild(optionTwo)
  let optionThree = document.createElement('option')
  optionThree.innerText = "Challenging"
  select.appendChild(optionThree)
  
});



