const menuButton = document.querySelector('.menu-button');
const xButton = document.querySelector('.x');
const menuWrapper = document.querySelector('.menu-wrapper');


const openMenu = () => {
    menuWrapper.style.translate = "-200px 0px";
}

const hideMenu = () => {
    menuWrapper.style.translate = "0px";

}




var desktopLinks = document.querySelector(".link-container").children
var mobileLinks = document.querySelector(".menu").children
const setIndicator = (index) => {
    desktopLinks[index].classList.add('underline-indicator')
    mobileLinks[index + 1].classList.add('underline-indicator')
}

var tracker = {
    loop: 0,
    color: black,
    container: document.querySelector('.menu')
}

var black = document.querySelector('.black-menu')
var blue = document.querySelector('.blue-menu')
var pink = document.querySelector('.pink-menu')
var orange = document.querySelector('.orange-menu')


var fadeToColor = () => {
    var colorRange = Math.random() * 100;
    if(0 < colorRange && colorRange < 33.33){
        blue.style.opacity = '1';
    }

    if(33.33 < colorRange && colorRange < 66.66){
        pink.style.opacity = '1';
    }

    if(66.66 < colorRange && colorRange < 100){
        orange.style.opacity = '1';
    }
    black.style.opacity = '0';
}

const fadeToBlack = () => {
    hideColors();
    black.style.opacity = '1';
}

const hideColors = () => {
    blue.style.opacity = '0';
    pink.style.opacity = '0';
    orange.style.opacity = '0';
}


const navColorChange = () => {
    console.log(tracker.loop)
    switch(tracker.loop){
        case 0: 
            fadeToColor();
            break;
        case 1: 
            break;
        case 2: 
            fadeToBlack();
            tracker.loop = -1;
            break;
    }

    tracker.loop++;
}

var colorChangeTimer;

const fireColorChange = () => {
    colorChangeTimer = setInterval(navColorChange, 1000);
}





menuButton.addEventListener('click', () => {
    openMenu();
    fireColorChange();
})
xButton.addEventListener('click', () => {
    hideMenu();
    clearInterval(colorChangeTimer);
})

hideColors();
