import { Product } from "../models/Product.js";
import { ProductView } from "../views/ProductView.js";

export class ProductsController {


    private parent = document.querySelector('.categories-list') as HTMLElement

    constructor(private _products: Array<Product>) { }


    public showProducts() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            let productView = new ProductView(this._products)
            //const width = window.screen.width;
            this.parent.append(productView.template(this._products, category));
            // switch (true) {
            //     case (width < 655):
            //         this.parent.append(productView.template(this._products, category, 2));
            //         break;
            //     case ((width >= 655) && (width < 900)):
            //         this.parent.append(productView.template(this._products, category, 3));
            //         break;
            //     case ((width >= 900) && (width < 1100)):
            //         this.parent.append(productView.template(this._products, category, 4));
            //         break;
            //     case (width >= 1100):
            //         this.parent.append(productView.template(this._products, category, 4));
            //         break;
            // }
        })
    }

    private getCategories(products: Array<Product>) {
        let productsCategory = products.map((product) => {
            return product.category;
        });
        return [...new Set(productsCategory)];
    }


}
