document.addEventListener('DOMContentLoaded', function () {
    fetchTasks();
    
    document.getElementById('task-form').addEventListener('submit', function (e) {
        e.preventDefault();
        addTask();
    });
});

function fetchTasks() {
    fetch('/tasks')
        .then(response => response.json())
        .then(tasks => {
            let tasksList = document.getElementById('tasks-list');
            tasksList.innerHTML = '';
            tasks.forEach(task => {
                let taskItem = document.createElement('div');
                taskItem.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <button onclick="deleteTask(${task.id})">Usuń</button>
                    <button onclick="editTask(${task.id})">Edytuj</button>
                `;
                tasksList.appendChild(taskItem);
            });
        });
}

function addTask() {
    let title = document.getElementById('task-title').value;
    let description = document.getElementById('task-description').value;

    fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            description: description
        }),
    }).then(() => {
        fetchTasks();
        document.getElementById('task-form').reset();
    });
}

function deleteTask(id) {
    fetch(`/tasks/${id}`, {
        method: 'DELETE',
    }).then(() => {
        fetchTasks();
    });
}

function editTask(id) {
    // Funkcja edycji zadania (trzeba dopisać obsługę formularza do edytowania)
}

function showAddTaskForm() {
    document.getElementById('add-task-form').style.display = 'block';
}
