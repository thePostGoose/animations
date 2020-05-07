let field = document.querySelector('.field'),
    ball = document.querySelector('.ball');

field.addEventListener('click', (event) => {
    let x = event.clientX,
        y = event.clientY,

        x0 = ball.offsetLeft + ball.offsetWidth / 2,
        y0 = ball.offsetTop + ball.offsetHeight / 2;


    if (x < field.offsetLeft + field.clientLeft + ball.offsetWidth / 2) {
        x = field.offsetLeft + field.clientLeft + ball.offsetWidth / 2;
    }
    if (x > field.offsetLeft + field.offsetWidth - field.clientLeft - ball.offsetWidth / 2) {
        x = field.offsetLeft + field.offsetWidth - field.clientLeft - ball.offsetWidth / 2;
    }
    if (y < field.offsetTop + field.clientTop + ball.offsetWidth / 2) {
        y = field.offsetTop + field.clientTop + ball.offsetWidth / 2;
    }
    if (y > field.offsetTop + field.offsetHeight - field.clientTop - ball.offsetWidth / 2) {
        y = field.offsetTop + field.offsetHeight - field.clientTop - ball.offsetWidth / 2;
    }

    let xk = x - x0,
        yk = y - y0;
    ball.style.transform = `translate(${xk}px, ${yk}px)`;
})