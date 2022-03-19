import { Product } from "../models/Product.js";
import { ProductView } from "../views/ProductView.js";

export class ProductsController {


    constructor(private _products: Array<Product>) {}


    public showProducts() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            //chama uma função da view para renderizar a lista da primeira categoria
            let productView = new ProductView()
            productView.AddProductsOfCategory(this._products, category, 3)
        })
    }

    private getCategories(products: Array<Product>) {
        let productsCategory = products.map((product) => {
            return product.category;
        });
        return [...new Set(productsCategory)];
    }

    
}
