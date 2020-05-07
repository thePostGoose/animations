function animate({duration, draw, timing})  {
    let start = performance.now();

    requestAnimationFrame(function animate(time){
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) requestAnimationFrame(animate);
    });
}

function jumped(timeFraction)  {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (1 - timeFraction >= (7 - 4 * a) / 11) {
          return 1 - (-Math.pow((11 - 6 * a - 11 * (1 - timeFraction)) / 4, 2) + Math.pow(b, 2));
        }
    }
}

function quad(timeFraction)  {
    return Math.pow(timeFraction, 0.7)
}

let ball = document.querySelector('.field__ball');
let field = document.querySelector('.field');

ball.addEventListener('click', () => {
    let to = field.clientHeight - ball.clientHeight;
    animate({
        duration: 2000,
        timing: jumped,
        draw(progress){
            ball.style.top = progress * to + 'px';
        } 
    });

    animate({
        duration: 2000,
        timing: quad,
        draw(progress){
            ball.style.left = progress * 1000 + 'px';
        } 
    })
})