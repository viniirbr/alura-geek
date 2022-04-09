import { ProductsController } from "../controllers/ProductsController.js";
import { generateHeaderButton } from "./generateHeaderButton.js";
import { headerResponsivity } from "./headerResponsivity.js";
import { inputLabelAnimation } from "./inputLabelAnimation.js";
generateHeaderButton(localStorage.getItem('isLogged') == 'true' ? true : false);
headerResponsivity();
const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);
fetch('https://alura-geek.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
    const controller = new ProductsController(data);
    controller.listAllProducts();
});
