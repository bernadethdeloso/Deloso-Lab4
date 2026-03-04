let tasks = [];
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
addTaskBtn.addEventListener('click', addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = '';
    }
}
function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        taskList.innerHTML = '<li>No tasks available</li>';
    } else {
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('li');
            taskElement.classList.add('task');
            if (task.completed) {
                taskElement.classList.add('completed');
            }
            taskElement.innerHTML = `
                <span>${task.text}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(taskElement);
        });
    }
}

function handleTaskListClick(event){
    if (event.target.classList.contains('delete-btn')){
        const taskIndex = Array.prototype.indexOf.call(taskList.children, event.target.parentNode);
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}

function showNotification (message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.postion = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.backgroun = 'green';
    notification.style.color = 'white';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    document.body.appendChild(notification);
    setTimeout (()=> {
        notification.remove();
    }, 2000);
}