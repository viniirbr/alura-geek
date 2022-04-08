import { Product } from "../models/Product.js";
import { generateHeaderButton } from "./generateHeaderButton.js";
import { headerResponsivity } from "./headerResponsivity.js";
import { inputLabelAnimation } from "./inputLabelAnimation.js";
generateHeaderButton(Boolean(localStorage.getItem('isLogged')));
headerResponsivity();
const input = document.querySelector('.footer__input-text');
const label = document.querySelector('.footer__form-name');
inputLabelAnimation(label, input);
function createProduct(product) {
    const object = {
        "id": product.id,
        "name": product.name,
        "imgBase64": product.imgBase64,
        "price": product.price,
        "category": product.category,
        "description": product.description
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch('https://alura-geek.herokuapp.com/products', options)
        .then(() => {
        imageInput.style.display = 'block';
        imageInputLabel.style.display = 'block';
        displayImage.style.display = 'none';
        uploadedImage = '';
        nameInput.value = '';
        categoryInput.value = '';
        priceInput.value = '';
        descriptionInput.value = '';
    })
        .catch((e) => console.log(e.status));
}
const form = document.querySelector('[add-product-form]');
const imageInput = document.querySelector('[image-input]');
const imageInputLabel = document.querySelector('[image-input-label]');
const displayImage = document.querySelector('[display-image]');
const nameInput = document.querySelector('[add-product__name-input]');
const categoryInput = document.querySelector('[add-product__category-input]');
const priceInput = document.querySelector('[add-product__price-input]');
const descriptionInput = document.querySelector('[add-product__description-input]');
let uploadedImage = "";
imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        displayImage.style.backgroundImage = `url(${uploadedImage})`;
        displayImage.style.backgroundRepeat = 'no-repeat';
        displayImage.style.backgroundPosition = 'center';
        displayImage.style.display = 'block';
    });
    reader.readAsDataURL(this.files[0]);
    imageInputLabel.style.display = "none";
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const randomId = Math.ceil(Math.random() * 1000);
    const name = nameInput.value;
    const product = new Product(randomId, name, uploadedImage, parseInt(priceInput.value), categoryInput.value, descriptionInput.value);
    createProduct(product);
});
