let carousel = document.querySelector('.carousel'),
    list = carousel.querySelector('ul'),
    listElems = carousel.querySelectorAll('li');

let width = 130,
    count = 3,
    position = 0;

carousel.querySelector('.prev').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};