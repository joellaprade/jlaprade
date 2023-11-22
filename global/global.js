const menuButton = document.querySelector('.menu-button');
const xButton = document.querySelector('.x');
const menu = document.querySelector('.menu');


const openMenu = () => {
    menu.style.translate = "0px";
}

const hideMenu = () => {
    menu.style.translate = "200px 0px";

}


menuButton.addEventListener('click', () => {
    openMenu();
})
xButton.addEventListener('click', () => {
    hideMenu();
})