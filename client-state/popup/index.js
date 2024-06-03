const popup = document.getElementById('subscribe-modal');

// document.cookie = 'closed=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

if (getCookie('closed') === 'true') {
    popup.classList.remove('modal_active');
} else {
    setTimeout(() => {
        popup.classList.add('modal_active');
    }, 1000)
}

popup.addEventListener('click', (event) => {
    if (event.target.closest('.modal__close_times')) {
        popup.classList.remove('modal_active');
        setCookie('closed', 'true');
    }
});

function setCookie(name, value) {
    document.cookie = `${name}=${decodeURIComponent(value)}`;
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
