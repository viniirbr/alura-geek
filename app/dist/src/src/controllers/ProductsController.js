import { ProductView } from "../views/ProductView.js";
export class ProductsController {
    constructor(_products) {
        this._products = _products;
    }
    showProducts() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            let productView = new ProductView();
            productView.AddProductsOfCategory(this._products, category, 3);
        });
    }
    getCategories(products) {
        let productsCategory = products.map((product) => {
            return product.category;
        });
        return [...new Set(productsCategory)];
    }
}
