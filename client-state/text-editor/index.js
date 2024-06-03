const textarea = document.querySelector('#editor');
const clearButton = document.querySelector('#clear');

if (getStorage('text')) {
    textarea.value = getStorage('text');
}

textarea.addEventListener('input', (event) => {
    const text = event.target.value;
    setStorage(text);
})

clearButton.addEventListener('click', () => {
    textarea.value = '';
    localStorage.clear();
})

function setStorage(text) {
    localStorage.setItem('text', text);
    if (!text) {
        localStorage.removeItem('text');
    }
}

function getStorage(key) {
    return localStorage.getItem(key);
}
