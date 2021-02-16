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

    addTaskToLocalStorage(li.textContent);

    taskInput.value = '';
}

function deleteTask(e) {
    if (confirm('Are you sure you wish to delete this item ?')) {
        e.target.remove()
        deleteTaskfromLocalStorage(e.target);
    }
}

function addTaskToLocalStorage(task) {

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage(){

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 
    
    tasks.forEach(task => {

        const li = document.createElement('li');

        li.className = 'task-item';

        li.textContent = task;

        list.appendChild(li);
    })
}

function deleteTaskfromLocalStorage(taskItem){

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}







getTasksFromLocalStorage();