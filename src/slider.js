let list = document.querySelector('.slider__list');
let widthContainer = document.querySelector('.slider').clientWidth;
let controls = document.querySelector('.slider__pages');
var pos = 0;

function calcWidthList() {
    const itemsCount = list.children.length;
    const widthList = itemsCount * widthContainer; 

    list.style.width = `${widthList}px`;
}

function handlerClick(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        slide(event.target);
    }
}

function slide(target) {
    const vector = target.dataset.vector;// prev or next
    slideTo(vector);
}

function slideTo(vector) {
    const active = document.querySelector('.vision');

    if (vector === 'next') {
        var nextElement = active.nextElementSibling;
    } else {
        var nextElement = active.previousElementSibling;
    }

    if (nextElement) {
        if (vector === 'next') {
            pos -= widthContainer;
        } else {
            pos += widthContainer;
        }
        
        active.classList.remove('vision');
        nextElement.classList.add('vision');
        translate(pos);
    } 
}

function translate(pos) {
    list.style.transform = `translateX(${pos}px)`;
}

controls.addEventListener('click', handlerClick);

window.addEventListener('load', calcWidthList);