import { ProductsController } from "../controllers/ProductsController.js";
import { Product } from "../models/Product.js";

let categoryInsideModal = ''
let dataLoaded: Product[];

export function openModal(category: string) {
    const modalTitle = document.querySelector('.modal-title') as HTMLElement;
    modalTitle.innerText = category;
    const modalBody = document.querySelector('.modal-body') as HTMLElement;
    if ((modalBody.childNodes.length == 1)) {
        fetch('https://alura-geek.herokuapp.com/products')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                dataLoaded = data;
                const controller = new ProductsController(data);
                controller.listProductsInsideModal(category);
                categoryInsideModal = category;
            })
    }

    if (categoryInsideModal != category && modalBody.childNodes.length != 1) {
        modalBody.innerHTML = '';
        const controller = new ProductsController(dataLoaded);
        controller.listProductsInsideModal(category);
        categoryInsideModal = category;
    }

} 