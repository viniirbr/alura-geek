import { ProductsController } from './src/controllers/ProductsController.js'
import { toggleDisplay } from "./src/scripts/toggleDisplay.js"
import { inputLabelAnimation } from "./src/scripts/inputLabelAnimation.js";

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

//ProductsController.loadProductsByCategory()
fetch('/products.json').then(response => {
    return response.json()
}).then(data => {
    console.log(data)
})

const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);






