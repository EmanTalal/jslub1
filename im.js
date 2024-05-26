const boxes = document.getElementsByClassName("Box");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function moveAndChangeColor(box) {
    const newTop = getRandomInt(0, window.innerHeight - box.clientHeight);
    const newLeft = getRandomInt(0, window.innerWidth - box.clientWidth);
    box.style.top = `${newTop}px`;
    box.style.left = `${newLeft}px`;
}

for (const box of boxes) {
    setInterval(() => moveAndChangeColor(box), 1000);
}