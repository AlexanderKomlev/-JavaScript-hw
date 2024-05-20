(() => {
    let playing = true,
        activeHole = 1;


    let hit = false
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`hole${i}`).onclick = () => {
            if (getHole(i).classList.contains('hole_has-mole')) {
                document.getElementById('dead').textContent++;
                hit = true;
            } else {
                document.getElementById('lost').textContent++;
                hit = true;
            }
        }
    }

    const stop = () => playing = true,
        getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index =>
            getHole(index).className = 'hole',
        activateHole = index =>
            getHole(index).className = 'hole hole_has-mole',
        next = () => setTimeout(() => {
            if (document.getElementById('dead').textContent >= 10) {
                playing = false;
                alert('Вы победили!');
            } else if (document.getElementById('lost').textContent >= 5) {
                playing = false;
                alert('Вы проиграли!');
            }

            if (!playing) {
                if (confirm('Хотите сыграть еще раз?')) {
                    location.reload();
                }
                document.getElementById('dead').textContent = 0;
                document.getElementById('lost').textContent = 0;
                return;
            }

            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
            if (!hit) {
                document.getElementById('lost').textContent++;
            } else {
                hit = false;
            }
            next();
        }, 800);
    next();
})();

function getHole(index) {
    return document.getElementById(`hole${index}`);
}