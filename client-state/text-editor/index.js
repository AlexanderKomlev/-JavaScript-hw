const textarea = document.querySelector('#editor');
const clearButton = document.querySelector('#clear');

textarea.value = localStorage.getItem('text');

textarea.addEventListener('input', (event) => {
    const text = event.target.value;
    localStorage.setItem('text', text);
})

clearButton.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem('text');
})
