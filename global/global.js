const menuButton = document.querySelector('.menu-button');
const xButton = document.querySelector('.x');
const menuWrapper = document.querySelector('.menu-wrapper');


const openMenu = () => {
    menuWrapper.style.translate = "-200px 0px";
}

const hideMenu = () => {
    menuWrapper.style.translate = "0px";

}


menuButton.addEventListener('click', () => {
    openMenu();
})
xButton.addEventListener('click', () => {
    hideMenu();
})