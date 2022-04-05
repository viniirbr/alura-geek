import { ProductsController } from "../controllers/ProductsController.js";
import { Product } from "../models/Product.js";

export async function deleteProduct(product: Product) {
    const main = document.querySelector('[all-products-container]') as HTMLElement;
    const child = document.querySelector('.category') as HTMLElement;
    try {
        await fetch(`https://alura-geek.herokuapp.com/products/${product.id.toString()}`, {method:"DELETE"});
        const data = await fetch("https://alura-geek.herokuapp.com/products");
        const products = await data.json();
        main.removeChild(child);
        const controller = new ProductsController(products);
        controller.listAllProducts();   
    }
    catch(e) {

    }
}