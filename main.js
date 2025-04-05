const A = document.getElementById('task-area');
const B = document.getElementById('single-task');
const C = document.getElementById('tasks');

//Add a new task to the list

function addTask(event) {
    event.preventDefault();
    if (B.value === '') return;
    const task = createTask(B.value);
    c.appendChild(task);
    B.value = '';
}

 //create a new tsak element
 
 function createTask(taskName) {
    const task = document.createElement('li');
    task.classList.add('task')
    task.innerHTML =
    <input type="checkbox">
    <label>${taskName}</label>
    <span class="delete">$times;</span>;
    </input>
    
 }

 //Add a delete button 

  const deleteButto= task.querySelector('.delete');
  deleteButton.addEventListener('clicl',deleteTask);

  return task;

//Delete task from the list

function deleteTask(event) {
    event.target.parentElement.remove();
}
