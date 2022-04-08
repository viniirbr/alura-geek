import { ProductsController } from "../controllers/ProductsController.js";
import { generateHeaderButton } from "./generateHeaderButton.js";
import { headerResponsivity } from "./headerResponsivity.js";
generateHeaderButton(Boolean(localStorage.getItem('isLogged')));
headerResponsivity();
const main = document.querySelector('[main]');
fetch('https://alura-geek.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
    const controller = new ProductsController(data);
    controller.listAllProducts();
});
