// import { Product } from "../models/Product.js";

// function createProduct(product:Product) {
//     const object = {
//         "id": product.id,
//         "name": product.name,
//         "imgUrl": product.imgUrl,
//         "price": product.price,
//         "category": product.category
//     }
//     const options = {
//         method:'POST',
//         body: JSON.stringify(object),
//         headers: {
//             'Content-Type':'application/json'
//         }
//     };

//     fetch('https://alura-geek.herokuapp.com/products', options)
//     .catch((e) => console.log(e.status));
// }

// const submitButton = document.querySelector('.add-product-form__button') as HTMLElement;
// const nameInput = document.querySelector('[add-product__name-input]') as HTMLInputElement;
// const categoryInput = document.querySelector('[add-product__category-input]') as HTMLInputElement;
// const priceInput = document.querySelector('[add-product__price-input]') as HTMLInputElement;
// const descriptionInput = document.querySelector('[add-product__description-input]') as HTMLInputElement;

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     //validation function
//     const randonId = Math.ceil(Math.random()*1000);
//     const imgUrl = "https://raw.githubusercontent.com/viniirbr/alura-geek/main/img/star-wars2.png";
//     const name = nameInput.value;
//     const product = new Product(randonId, name, imgUrl, parseInt(priceInput.value), categoryInput.value, descriptionInput.value)
//     console.log(product)
//     createProduct(product)
// })