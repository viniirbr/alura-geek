import { ProductsController } from "./src/controllers/ProductsController.js";
import { toggleDisplay } from "./src/scripts/toggleDisplay.js";
import { inputLabelAnimation } from "./src/scripts/inputLabelAnimation.js";
import products from "./src/models/Product.js";
import db from './src/config/dbConnect.js';
import express from 'express';
import routes from './src/routes/indexRoutes.js'


db.on("error", () => console.log.bind(console, "Erro de conexão"));
db.once("open", () => console.log("Conexão feita com sucesso"))
const app = express();
app.use(express.json())
routes(app);
export default app;

//import { createProduct } from "./dist/src/scripts/createProduct.js"




// const MOBILE_MAX_WIDTH: number = 600;
// //add resize event

// if (window.screen.availWidth < MOBILE_MAX_WIDTH) { //functions to be executed in mobile
//     const loginButton = document.querySelector('.header__button') as HTMLElement;
//     const searchButton = document.querySelector('.search') as HTMLInputElement;

//     searchButton.addEventListener('mouseover', () => {
//         toggleDisplay(loginButton);
//     })

//     searchButton.addEventListener('mouseout', () => {
//         toggleDisplay(loginButton);
//     })
// }

// fetch('https://alura-geek.herokuapp.com/products')
//     .then((res) => {
//         const spinner = document.querySelector('.spinner-border') as HTMLElement;
//         spinner.classList.toggle('spinner-border')
//         if (res.ok) {
//             return res.json()
//         } else {
//             const error = new Error('Erro na requisição');
//             throw error;
//         }
        
//     })
//     .then((data) => {
//         data.map(item => {
//             item.price = parseFloat(item.price)
//             return item.price;
//         })
//         let products: Array<Product> = data;
//         let controller = new ProductsController(products)
//         controller.showProductsByCategory()
        
//     })


// const input = document.querySelector('.footer__input-text');
// const label = document.querySelector('.footer__form-name');
// inputLabelAnimation(label, input);







