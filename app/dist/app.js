import { ProductsController } from "./src/controllers/ProductsController.js";
import { inputLabelAnimation } from "./src/scripts/inputLabelAnimation.js";
import { generateHeaderButton } from "./src/scripts/generateHeaderButton.js";
import { headerResponsivity } from "./src/scripts/headerResponsivity.js";
generateHeaderButton(Boolean(localStorage.getItem('isLogged')));
headerResponsivity();
localStorage.setItem('isLogged', 'false');
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
