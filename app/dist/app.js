import { ProductsController } from "./src/controllers/ProductsController.js";
import { toggleDisplay } from "./src/scripts/toggleDisplay.js";
import { inputLabelAnimation } from "./src/scripts/inputLabelAnimation.js";
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
fetch('https://alura-geek.herokuapp.com/products')
    .then((res) => {
    const spinner = document.querySelector('.spinner-border');
    spinner.classList.toggle('spinner-border');
    if (res.ok) {
        return res.json();
    }
    else {
        const error = new Error('Erro na requisição');
        throw error;
    }
})
    .then((data) => {
    console.log(data);
    data.map(item => {
        item.price = parseFloat(item.price);
        return item.price;
    });
    let products = data;
    let controller = new ProductsController(products);
    controller.showProductsByCategory();
});
const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);
