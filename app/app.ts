import { ProductsController } from "./src/controllers/ProductsController.js";
import { toggleDisplay } from "./src/scripts/toggleDisplay.js";
import { inputLabelAnimation } from "./src/scripts/inputLabelAnimation.js";
import { Product } from "./src/models/Product.js";


const MOBILE_MAX_WIDTH: number = 600;
//add resize event

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

fetch('https://alura-geek.herokuapp.com/products')
    .then((res) => {
        const spinner = document.querySelector('.spinner-border') as HTMLElement;
        spinner.classList.toggle('spinner-border')
        if (res.ok) {
            return res.json()
        } else {
            const error = new Error('Erro na requisição');
            throw error;
        }
        
    })
    .then((data) => {
        let products: Array<Product> = data;
        let controller = new ProductsController(products)
        controller.showProductsByCategory()
        
    })


const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);







