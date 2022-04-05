import { Product } from "../models/Product.js";
function createProduct(product) {
    const object = {
        "id": product.id,
        "name": product.name,
        "imgBase64": product.imgBase64,
        "price": product.price,
        "category": product.category
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch('https://alura-geek.herokuapp.com/products', options)
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
        console.log(uploadedImage);
        displayImage.style.backgroundImage = `url(${uploadedImage})`;
        displayImage.style.backgroundRepeat = 'no-repeat';
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
    console.log(product);
    createProduct(product);
});
