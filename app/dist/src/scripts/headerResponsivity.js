import { toggleDisplay } from "./toggleDisplay.js";
export function headerResponsivity() {
    const MOBILE_MAX_WIDTH = 600;
    if (window.screen.availWidth < MOBILE_MAX_WIDTH) {
        const loginButton = document.querySelector('.header__button');
        const searchButton = document.querySelector('.search');
        searchButton.addEventListener('mouseover', () => {
            toggleDisplay(loginButton);
        });
        searchButton.addEventListener('mouseout', () => {
            toggleDisplay(loginButton);
        });
    }
}
