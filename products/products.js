const arrow = document.querySelector('.arrow')
var slider = document.querySelector('.slider').querySelector('.wrapper')
var scrollable = document.querySelector('.frame')
var goBack = false;
var isMobile = window.innerWidth > 960 ? false : true;


const detectEnd = () => {
    var endMargin = slider.scrollLeft + slider.getBoundingClientRect().width - scrollable.getBoundingClientRect().width;
    if(-1 < endMargin && endMargin < 1){
        goBack = true
        arrow.classList.add('rotate')
    }
}


const moveElements = () => {
    var holdScroll;

    if(!goBack) {
        holdScroll = slider.scrollLeft;
        slider.scrollLeft += (300 + window.innerWidth * 0.08);
        setTimeout(() => detectEnd(), 400)
    }else {
        slider.scrollLeft = 0
        goBack = false
        arrow.classList.remove('rotate')
    }
}

arrow.addEventListener('click', () => {
    moveElements();
})



setIndicator(1);

/**
 * Descripcion de animaciones
 * 1.
 * tenemos el "template" de la pagina web (rectangulo gris con navbar)
 * hay 3 elementos animados (h1, copy, pic)
 * van a subir y bajar de brilo en intervalos iguales pero desfazados
 */

/*

hacer un wrapper con las medidas viejas
posicionar elementos de animacion como absolute
posicionar 
en figma crear un frame de referencia (con las dimenciones del wrapper actual)
poner todas las piezas en frame y exportar con frame
    de forma que pueda estackear todas las piezas y fitteen como una imagen (y que sean responsive) 
*/