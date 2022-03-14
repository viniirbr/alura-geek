import { toggleDisplay } from "./scripts/toggleDisplay.js";

const MOBILE_MAX_WIDTH = 600;
console.log(window.screen.availWidth);

if (window.screen.availWidth < MOBILE_MAX_WIDTH) { //functions to be executed in mobile
    const loginButton = document.querySelector('.header__button');
    const searchButton = document.querySelector('.search')

    searchButton.addEventListener('mouseover', () => {
        toggleDisplay(loginButton);
    })

    searchButton.addEventListener('mouseout', () => {
        loginButton.classList.toggle('display-none')
    })
}


