const menuButton = document.querySelector('.menu-button');
const xButton = document.querySelector('.x');
const menuWrapper = document.querySelector('.menu-wrapper');
const contactDiv = document.querySelector('.contact');

var isMobile = window.innerWidth < 960 ? true : false;

const consoleLogMobile = (message) => {
    var consoleMobile = document.querySelector('.console')
    consoleMobile.innerHTML = message;
}  

const openMenu = () => {
    menuWrapper.style.translate = "-200px 0px";
}

const hideMenu =  () => {
    menuWrapper.style.translate = "0px";
}

const colorContact = () => {
    var isIndex = window.location.pathname == '/index.html' ? true : false;
    var phone = contactDiv.querySelector('.phone');
    var mail = contactDiv.querySelector('.mail');
    var delay1, delay2;

    if(isIndex){
        delay1 = 2000;
        delay2 = 3000;
    }else {
        delay1 = 1000;
        delay2 = 2000;
        hideMenu();
    }

    setTimeout(() => {
        phone.style.stroke = "#FFFFFF";
        mail.style.fill = '#FFFFFF';
    }, delay1)

    setTimeout(() => {
        phone.style.stroke = '#A4A4A4';
        mail.style.fill = '#A4A4A4';
    }, delay2)
}




var desktopLinks = document.querySelector(".link-container").children
var mobileLinks = document.querySelector(".menu").children
const setIndicator = (index) => {
    desktopLinks[index].classList.add('underline-indicator')
    mobileLinks[index + 1].classList.add('underline-indicator')
}

var menuTracker = {
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
    black.style.opacity = '0.5';
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
    switch(menuTracker.loop){
        case 0: 
            fadeToColor();
            break;
        case 1: 
            break;
        case 2: 
            fadeToBlack();
            menuTracker.loop = -1;
            break;
    }
    menuTracker.loop++;
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
    menuTracker.loop = 0
})








var faders = document.querySelectorAll('.fader')
var faderOptions = {
    threshold: 0.75
}
const faderObserver = new IntersectionObserver((entries, faderObserver) => {
    for(var entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('appear')
        }
    }
}, faderOptions)
for(var fader of faders){
    faderObserver.observe(fader);
}


var floaters = document.querySelectorAll('.floater')
var floaterOptions = {
    threshold: 0.75
}
const floaterObserver = new IntersectionObserver((entries, floaterObserver) => {
    for(var entry of entries){
        if(entry.isIntersecting){
            entry.target.classList.add('appear')
        }
    }
}, floaterOptions)
for(var floater of floaters){
    floaterObserver.observe(floater);
}


for(let link of document.querySelectorAll('.contacto-link')){
    link.addEventListener('click', () => {
        colorContact()
    })
}



const mobileTopColor = (page) => {
    if(page == '/index.html' || page == '/'){
        const hero = document.querySelector('.hero');
        setIntersectionObserver(hero, 0.4);
    }else {
        const navBg = document.querySelector('svg.background')
        setIntersectionObserver(navBg, 0);
    }
    

}

const setIntersectionObserver = (element, threshold) => {

    const options = {
        threshold: threshold
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting){
            document.body.style.backgroundColor = "#181818";
        }else {
            document.body.style.backgroundColor = "#ffffff"
        }
    }, options)
    
    intersectionObserver.observe(element)
}


hideColors();

if (isMobile) mobileTopColor(window.location.pathname);

 

