let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let speed = document.getElementById('speed');
let start = new Date();

cookie.onclick = () => {
    let now = new Date()
    counter.textContent = parseInt(counter.textContent) + 1;
    speed.textContent = (1 / (now - start) * 1000).toFixed(2);
    if (counter.textContent % 2 == 0) {
        cookie.width -= 50;
    } else {
        cookie.width += 50;
    }
    start = new Date();
}