let countdown = document.getElementById('countdown');

let timer = parseInt(countdown.textContent);

let interval = setInterval(() => {
    countdown.textContent = toHHMMSS(timer);
    if (timer == 0) {
        alert("Вы победили в конкурсе!")
        clearInterval(interval);
    }
    timer--;
}, 1000)

function toHHMMSS(secs) {
    let hours   = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - (hours * 3600)) / 60);
    let seconds = secs - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours + ':' + minutes + ':' + seconds;
}