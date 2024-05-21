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
        if (event.target === button) {
            button.classList.add('font-size_active');
        } else {
            button.classList.remove('font-size_active');
        }
    }

    book.classList.remove('font-size_small', 'font-size_big');
    const size = event.target.dataset.size;

    if (size) {
        book.classList.add(`font-size_${size}`);
    }
}

function changeColor(event, bookControl) {
    const buttons = Array.from(bookControl.querySelectorAll('.color'));
    if (buttons.includes(event.target)) {
        for (let button of buttons) {
            if (event.target === button) {
                button.classList.add('color_active');
            } else {
                button.classList.remove('color_active');
            }
        }

        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        const color = event.target.dataset.textColor;
        console.log(color);

        if (color) {
            book.classList.add(`book_color-${color}`);
        } else {
            book.classList.add('book_color-black');
        }
    }
}

function changeBgColor(event, bookControl) {
    const buttons = Array.from(bookControl.querySelectorAll('.color'));
    if (buttons.includes(event.target)) {
        for (let button of buttons) {
            if (event.target === button) {
                button.classList.add('color_active');
            } else {
                button.classList.remove('color_active');
            }
        }

        book.classList.remove('book_bg-black', 'book_bg-white', 'book_bg-gray');
        const color = event.target.dataset.bgColor;

        if (color) {
            book.classList.add(`book_bg-${color}`);
        } else {
            book.classList.add('book_bg-white');
        }
    }
}
