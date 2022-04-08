import { toggleDisplay } from "./toggleDisplay.js";

export function headerResponsivity() {
    const MOBILE_MAX_WIDTH: number = 600;

    if (window.screen.availWidth < MOBILE_MAX_WIDTH) { //functions to be executed in mobile
        const loginButton = document.querySelector('.header__button') as HTMLElement;
        const searchButton = document.querySelector('.search') as HTMLInputElement;

        searchButton.addEventListener('mouseover', () => {
            toggleDisplay(loginButton);
        })

        searchButton.addEventListener('mouseout', () => {
            toggleDisplay(loginButton);
        })
    }
}
