const arrow = document.querySelector('.arrow')
var goBack = false;
var gradientBackground = 'linear-gradient(90deg, rgba(79,120,255,0.3) 0%, rgba(255,77,197,0.3) 50%, rgba(255,138,69,0.3) 100%)';

var isMobile = window.innerWidth > 960 ? false : true;

var data = [
    {
        nombre: "Essenza",
        logoSrc: "/assets/essenza-logo.png",
        webPhotoSrc: "/assets/website0.png",
        webMobilePhotoSrc: "/assets/website0-mobile.png",
        webLink: "https://essenza.jlaprade.com",
        id: 0
    },
    {
        nombre: "Vive",
        logoSrc: "/assets/vive-logo.png",
        webPhotoSrc: "/assets/website1.png",
        webMobilePhotoSrc: "/assets/website1-mobile.png",
        webLink: "https://vive.cr",
        id: 1
    }
]

const buttonSelector = (buttonElement) => {
    var scrollable = [].slice.call((isMobile ? document.querySelector('.scrollable-mobile') : document.querySelector('.scrollable-desktop')).children)
    
    scrollable.forEach(button => button.style.background = 'white')
    buttonElement.style.background = gradientBackground;
}

const writeData = (id, buttonElement) => {
    var pc = document.querySelector('.website');
    var phone = document.querySelector('.website-mobile');
    var name = isMobile ? document.querySelector('h1.mobile') : document.querySelector('h1.desktop')
    var link = isMobile ? document.querySelector('a.mobile') : document.querySelector('a.desktop')

    if(id == data.length){
        window.open('https://wa.me/50687083439', "_blank")
        return;
    }

    data.forEach(business => {
        if(business.id == id){
            pc.src = business.webPhotoSrc;
            phone.src = business.webMobilePhotoSrc;
            name.innerText = business.nombre;
            link.href = business.webLink;
        }
    })
    buttonSelector(buttonElement)
}

const setButtonListeners = () => {
    var scrollable = [].slice.call((isMobile ? document.querySelector('.scrollable-mobile') : document.querySelector('.scrollable-desktop')).children)

    scrollable.forEach(buttonElement => {
        buttonElement.addEventListener('click', () => {
            writeData(Number(buttonElement.id), buttonElement)
        })
    })
}

const injectButtons = () => {
    var container = isMobile ? document.querySelector('.scrollable-mobile') : document.querySelector('.scrollable-desktop')
    data.forEach(business => {
        container.innerHTML += `
        <div id="${business.id}">
            <img src="${business.logoSrc}" alt="">
        </div>
        `
    })
    container.innerHTML += `
        <div id="${isMobile ? container.childElementCount - 1 : container.childElementCount}">
            <img src="/assets/proximo.png" alt="">
        </div>  
    `;

    setButtonListeners();

}

const detectEnd = () => {
    var slider = document.querySelector('.slider')
    var scrollable = isMobile ? document.querySelector('.scrollable-mobile') : document.querySelector('.scrollable-desktop')
    var endMargin = slider.scrollLeft + slider.getBoundingClientRect().width - scrollable.getBoundingClientRect().width;
    if(-1 < endMargin && endMargin < 1){
        goBack = true
        arrow.children[0].classList.add('rotate')
    }
}

const moveElements = () => {
    var element = document.querySelector('.slider')
    var elementRect = element.getBoundingClientRect();
    var holdScroll;

    if(!goBack) {
        holdScroll = element.scrollLeft;
        element.scrollLeft += (300 + window.innerWidth * 0.08);
        setTimeout(() => detectEnd(), 400)
    }else {
        element.scrollLeft = 0
        goBack = false
        arrow.classList.remove('rotate')
    }
}

arrow.addEventListener('click', () => {
    moveElements();
})

injectButtons();
writeData(0, document.getElementById('0'));
setIndicator(2);