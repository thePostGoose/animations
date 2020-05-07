let startBtn = document.querySelector('.controls__startBtn'),
    stopBtn = document.querySelector('.controls__stopBtn'),
    resetBtn = document.querySelector('.controls__resetBtn'),

    canvas = document.querySelector('.page-wrapper__stage'),

    ctx = canvas.getContext('2d');

ctx.fillStyle = '#212121';

let requestID;

let posX = 0,
    boxWidth = 50,
    pixelsPerFrame = 5;

ctx.fillRect(posX, 0, boxWidth, canvas.height);

function animate() {
    requestID = requestAnimationFrame(animate);
    if (posX <= (canvas.width - boxWidth)) {
        ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
        ctx.fillRect(posX, 0, boxWidth, canvas.height);
        posX += pixelsPerFrame;
    } else {
        cancelAnimationFrame(requestID);
    }
}
startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    requestID = requestAnimationFrame(animate);
});

stopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cancelAnimationFrame(requestID);
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cancelAnimationFrame(requestID);
    posX = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(posX, 0, boxWidth, canvas.height);
});