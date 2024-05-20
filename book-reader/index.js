const links = document.querySelectorAll("a");

for (const link of links) {
    link.onclick = () => { return false; }
}

const bookControls = document.querySelector('.book__controls');
const book = document.getElementById('book');

bookControls.addEventListener('click', (event) => {
    if (event.target.closest('.book__control_font-size')) {
        const bookControl = bookControls.querySelector('.book__control_font-size');
        changeFontSize(event, bookControl);
    } else if (event.target.closest('.book__control_color')) {
        const bookControl = bookControls.querySelector('.book__control_color');
        changeColor(event, bookControl);
    } else if (event.target.closest('.book__control_background')) {
        const bookControl = bookControls.querySelector('.book__control_background');
        changeBgColor(event, bookControl);
    }
});

function changeFontSize(event, bookControl) {
    const buttons = bookControl.querySelectorAll('.font-size');
    for (let button of buttons) {
        button.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');

    if (event.target.getAttribute('data-size') === 'small') {
        book.classList.remove('font-size_big');
        book.classList.add('font-size_small');
    } else if (event.target.getAttribute('data-size') === 'big') {
        book.classList.remove('font-size_small');
        book.classList.add('font-size_big');
    } else {
        book.classList.remove('font-size_small');
        book.classList.remove('font-size_big');
    }
}

function changeColor(event, bookControl) {
    const buttons = bookControl.querySelectorAll('.color');
    for (let button of buttons) {
        if (event.target === button) {
            button.classList.add('color_active');
        } else {
            button.classList.remove('color_active');
        }
    }

    if (event.target.getAttribute('data-text-color') === 'black') {
        book.classList.remove('book_color-gray');
        book.classList.remove('book_color-whitesmoke');
        book.classList.add('book_color-black');
    } else if (event.target.getAttribute('data-text-color') === 'whitesmoke') {
        book.classList.remove('book_color-black');
        book.classList.remove('book_color-gray');
        book.classList.add('book_color-whitesmoke');
    } else if (event.target.getAttribute('data-text-color') === 'gray') {
        book.classList.remove('book_color-black');
        book.classList.remove('book_color-whitesmoke');
        book.classList.add('book_color-gray');
    }
}

function changeBgColor(event, bookControl) {
    const buttons = bookControl.querySelectorAll('.color');
    for (let button of buttons) {
        if (event.target === button) {
            button.classList.add('color_active');
        } else {
            button.classList.remove('color_active');
        }
    }

    if (event.target.getAttribute('data-bg-color') === 'black') {
        book.classList.remove('book_bg-gray');
        book.classList.remove('book_bg-white');
        book.classList.add('book_bg-black');
    } else if (event.target.getAttribute('data-bg-color') === 'white') {
        book.classList.remove('book_bg-black');
        book.classList.remove('book_bg-gray');
        book.classList.add('book_bg-white');
    } else if (event.target.getAttribute('data-bg-color') === 'gray') {
        book.classList.remove('book_bg-black');
        book.classList.remove('book_bg-white');
        book.classList.add('book_bg-gray');
    }
}
