let baloon = document.querySelector('.baloon');
let startSize = parseInt(getComputedStyle(baloon).fontSize);
console.log(startSize);
let currentSize = startSize;

window.addEventListener('keydown', (event) => {
    if (event.key != 'ArrowUp') return;
    event.preventDefault();
    if (currentSize > 3 * startSize) {
        baloon.innerHTML = '&#128165';
        baloon.style.fontSize = 3 * startSize + 'px';
        return
    }
    currentSize += currentSize / 50;
    baloon.style.fontSize = currentSize + 'px';
})
window.addEventListener('keydown', (event) => {
    if (event.key != 'ArrowDown') return;
    event.preventDefault();
    if (currentSize > startSize * 3) {
        return
    }
    if (currentSize < startSize) {
        baloon.style.fontSize = startSize + 'px';
        return
    }
    currentSize -= currentSize / 50;
    baloon.style.fontSize = currentSize + 'px';
})