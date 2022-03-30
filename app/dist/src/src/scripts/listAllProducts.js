import { ProductsController } from "../controllers/ProductsController.js";
const main = document.querySelector('[main]');
fetch('https://alura-geek.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
    const controller = new ProductsController(data);
    controller.listAllProducts();
});
