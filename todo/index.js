const form = document.querySelector('#tasks__form');
const taskList = document.querySelector('#tasks__list');


if (localStorage.getItem('tasks')) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    for (const task of tasks) {
        taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${task}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = form.querySelector('#task__input').value;
    if (!title.trim()) return;

    taskList.insertAdjacentHTML('afterbegin', `
    <div class="task">
        <div class="task__title">
            ${title}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `);

    form.reset();

    addToLocalStorage(title);
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        const task = event.target.closest('.task');
        task.remove();
        updateLocalStorage(task.querySelector('.task__title').textContent.trim());
    }
})

function addToLocalStorage(task) {
    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([task]));
    } else {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function updateLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
