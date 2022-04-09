import { ProductsController } from "./src/controllers/ProductsController.js";
import { inputLabelAnimation } from "./src/scripts/inputLabelAnimation.js";
import { Product } from "./src/models/Product.js";
import { generateHeaderButton } from "./src/scripts/generateHeaderButton.js";
import { headerResponsivity } from "./src/scripts/headerResponsivity.js"


//add resize event
generateHeaderButton(localStorage.getItem('isLogged')=='true'?true:false)
headerResponsivity()

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
        data.map(item => {
            item.price = parseFloat(item.price)
            return item.price;
        })
        let products: Array<Product> = data;
        let controller = new ProductsController(products)
        controller.showProductsByCategory()
        
    })


const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);







