import { ProductsController } from "../controllers/ProductsController.js";
import { Product } from "../models/Product.js";
import { generateHeaderButton } from "./generateHeaderButton.js";
import { headerResponsivity } from "./headerResponsivity.js";
import { inputLabelAnimation } from "./inputLabelAnimation.js";

const productImg = document.querySelector('[product-info__img]') as HTMLImageElement;
const productName = document.querySelector('[product-details__name]') as HTMLElement;
const productPrice = document.querySelector('[product-details__price]') as HTMLElement;
const productDescription = document.querySelector('[product-details__description]') as HTMLElement;

generateHeaderButton(localStorage.getItem('isLogged')=='true'?true:false);
headerResponsivity();
const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);

async function getProduct() {
    const regex = /^(.*?)\id=/;
    const id = window.location.href.replace(regex, '');
    const data = await fetch(`https://alura-geek.herokuapp.com/products/${id}`);
    const product = await data.json();
    const productObject = new Product(product.id, product.name, product.imgBase64, product.price,
        product.category, product.description);
    productImg.src = productObject.imgBase64;
    productName.innerText = productObject.name;
    productPrice.innerText = productObject.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    productDescription.innerText = productObject.description;
    const allProductsRaw = await fetch(`https://alura-geek.herokuapp.com/products`);
    const allProducts = await allProductsRaw.json() as Product[];
    const controller = new ProductsController(allProducts);
    controller.listSimilarProducts(productObject.category, productObject.id);
}

getProduct();

