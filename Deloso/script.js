let tasks = [];
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskListClick); // Corrected function name

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = '';
        showNotification('Task added successfully');
    } else {
        showNotification('No task added. Please enter a task.');
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

function handleTaskListClick(event) {
    if (event.target.classList.contains('delete-btn')) {
        const taskIndex = Array.prototype.indexOf.call(taskList.children, event.target.parentNode);
        tasks.splice(taskIndex, 1);
        renderTasks();
    } else if (event.target.tagName === 'SPAN') {
        const taskIndex = [...taskList.children].indexOf(event.target.parentNode);
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        renderTasks(); // Added parentheses to actually call the function
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed'; // Fixed typo 'postion'
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.backgroundColor = 'green'; // Fixed typo 'backgroun'
    notification.style.color = 'white';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 2000);
}