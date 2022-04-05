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
export function deleteProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const main = document.querySelector('[all-products-container]');
        const child = document.querySelector('.category');
        try {
            yield fetch(`https://alura-geek.herokuapp.com/products/${product.id.toString()}`, { method: "DELETE" });
            const data = yield fetch("https://alura-geek.herokuapp.com/products");
            const products = yield data.json();
            main.removeChild(child);
            const controller = new ProductsController(products);
            controller.listAllProducts();
        }
        catch (e) {
        }
    });
}
