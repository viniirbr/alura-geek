import { ProductsController } from "../controllers/ProductsController.js";

export function openModal(category: string) {
    const modalTitle = document.querySelector('.modal-title') as HTMLElement;
    modalTitle.innerText = category;
    const modalBody = document.querySelector('.modal-body') as HTMLElement;
    if (modalBody.childNodes.length == 1) {
        fetch('https://alura-geek.herokuapp.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const controller = new ProductsController(data);
            controller.listProductsInsideModal(category);
        })
    }

} 