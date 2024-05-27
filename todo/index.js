const form = document.querySelector('#tasks__form');
const taskList = document.querySelector('#tasks__list');

if (localStorage.getItem('tasks')) {
    taskList.innerHTML = localStorage.getItem('tasks');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.querySelector('#task__input').value) return;

    const task = document.createElement("div");
    task.classList.add("task");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task_title");
    taskTitle.innerText = form.querySelector('#task__input').value;

    const taskRemove = document.createElement("a");
    taskRemove.classList.add("task__remove");
    taskRemove.href = "#";
    taskRemove.innerHTML = "&times;";

    task.append(taskTitle, taskRemove);
    taskList.append(task);
    form.reset()

    updateLocalStorage();
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.target.closest('.task').remove();
        updateLocalStorage();
    }
})

function updateLocalStorage() {
    if (!taskList.innerHTML) return;
    localStorage.clear();
    localStorage.setItem('tasks', taskList.innerHTML);
}
