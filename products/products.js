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