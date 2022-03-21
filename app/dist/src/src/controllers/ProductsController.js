import { ProductView } from "../views/ProductView.js";
export class ProductsController {
    constructor(_products) {
        this._products = _products;
        this.parent = document.querySelector('.categories-list');
    }
    showProducts() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            let productView = new ProductView(this._products);
            this.parent.append(productView.template(this._products, category));
        });
    }
    getCategories(products) {
        let productsCategory = products.map((product) => {
            return product.category;
        });
        return [...new Set(productsCategory)];
    }
}
