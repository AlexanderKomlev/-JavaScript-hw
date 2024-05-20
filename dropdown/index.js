const link = document.querySelectorAll("a")

for (const iterator of link) {
    iterator.onclick = () => {return false;}
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.dropdown__value')) {
        const dropdown = event.target.closest('.dropdown');
        const list = dropdown.querySelector('.dropdown__list');
        list.classList.toggle('dropdown__list_active');

        if (list.classList.contains('dropdown__list_active')) {
            document.addEventListener('click', (event) => {
                if (!event.target.closest('.dropdown')) {
                    list.classList.remove('dropdown__list_active');
                }
            });
        }
    }
})

document.addEventListener('click', (event) => {
    if (event.target.closest('.dropdown__item')) {
        const target = event.target;
        const dropdown = target.closest('.dropdown');
        const value = dropdown.querySelector('.dropdown__value');
        value.textContent = target.textContent.trim();
        const list = dropdown.querySelector('.dropdown__list');
        list.classList.toggle('dropdown__list_active');
    }
})