const taskInput = document.querySelector('.task-input');
const submitBtn = document.querySelector('.submit');
const list = document.querySelector('.list');

submitBtn.addEventListener('click', addTask);
list.addEventListener('click', deleteTask);

function addTask(e){

    const li = document.createElement('li');

    li.className = 'task-item';

    li.textContent = taskInput.value;
    
    list.appendChild(li);

    taskInput.value = '';
}

function deleteTask(e) {
    if (confirm('Are you sure you wish to delete this item')) {
        e.target.remove()
    }
}

