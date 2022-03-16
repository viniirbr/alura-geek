import { toggleDisplay } from "./scripts/toggleDisplay.js";
import { inputLabelAnimation } from "./scripts/inputLabelAnimation.js";

const MOBILE_MAX_WIDTH = 600;

if (window.screen.availWidth < MOBILE_MAX_WIDTH) { //functions to be executed in mobile
    const loginButton = document.querySelector('.header__button');
    const searchButton = document.querySelector('.search')

    searchButton.addEventListener('mouseover', () => {
        toggleDisplay(loginButton);
    })

    searchButton.addEventListener('mouseout', () => {
        toggleDisplay(loginButton);
    })
}

const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);






