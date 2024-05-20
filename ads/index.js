const rotatorList = document.querySelectorAll('.rotator');

for (let rotator of rotatorList) {
    const rotatorCase = rotator.querySelectorAll('.rotator__case');
    rotatorAds(rotatorCase);
}

async function rotatorAds(rotatorCase) {
    let index = 0;
    while (true) {
        rotatorCase[index].classList.remove('rotator__case_active');
        index = (index + 1) % rotatorCase.length;
        rotatorCase[index].classList.add('rotator__case_active');
        rotatorCase[index].style.color = rotatorCase[index].getAttribute('data-color');
        await new Promise((resolve) => setTimeout(resolve, rotatorCase[index].getAttribute('data-speed')));
    }
}


// for (let rotator of rotatorList) {
//     const rotatorCase = rotator.querySelectorAll('.rotator__case');
//     let index = 0;
//     setInterval(() => {
//         rotatorCase[index].classList.remove('rotator__case_active');
//         index = (index + 1) % rotatorCase.length;
//         rotatorCase[index].classList.add('rotator__case_active');
//         rotatorCase[index].style.color = rotatorCase[index].getAttribute('data-color');
//     }, 1000);
// }