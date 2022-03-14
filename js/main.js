import { toggleDisplay } from "./scripts/toggleDisplay.js";

const loginButton = document.querySelector('.header__button');
const searchButton = document.querySelector('.search')

searchButton.addEventListener('mouseover', () => {
    loginButton.classList.toggle('display-none')
})

searchButton.addEventListener('mouseout', () => {
    loginButton.classList.toggle('display-none')
})

