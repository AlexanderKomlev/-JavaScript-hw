document.addEventListener('click', (event) => {
    if (!event.target.closest('.tab')) return;
    const nav = event.target.closest('.tabs')
    if (!nav) return;

    const tabs = Array.from(nav.querySelectorAll('.tab'));
    let index;
    for (let tab of tabs) {
        tab.classList.remove('tab_active');
        if (tab === event.target) {
            index = tabs.indexOf(tab);
        }
    }
    event.target.classList.add('tab_active');
    openTab(nav, index);

});

function openTab(nav, index) {
    const content = nav.querySelectorAll('.tab__content');
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('tab__content_active');
    }
    content[index].classList.add('tab__content_active');
}
