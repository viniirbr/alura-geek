var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProductsController } from "../controllers/ProductsController.js";
import { Product } from "../models/Product.js";
import { generateHeaderButton } from "./generateHeaderButton.js";
import { headerResponsivity } from "./headerResponsivity.js";
import { inputLabelAnimation } from "./inputLabelAnimation.js";
const productImg = document.querySelector('[product-info__img]');
const productName = document.querySelector('[product-details__name]');
const productPrice = document.querySelector('[product-details__price]');
const productDescription = document.querySelector('[product-details__description]');
generateHeaderButton(localStorage.getItem('isLogged') == 'true' ? true : false);
headerResponsivity();
const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);
function getProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const regex = /^(.*?)\id=/;
        const id = window.location.href.replace(regex, '');
        const data = yield fetch(`https://alura-geek.herokuapp.com/products/${id}`);
        const product = yield data.json();
        const productObject = new Product(product.id, product.name, product.imgBase64, product.price, product.category, product.description);
        productImg.src = productObject.imgBase64;
        productName.innerText = productObject.name;
        productPrice.innerText = productObject.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        productDescription.innerText = productObject.description;
        const allProductsRaw = yield fetch(`https://alura-geek.herokuapp.com/products`);
        const allProducts = yield allProductsRaw.json();
        const controller = new ProductsController(allProducts);
        controller.listSimilarProducts(productObject.category, productObject.id);
    });
}
getProduct();
