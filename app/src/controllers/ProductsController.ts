import { Product } from "../models/Product.js";
import { CategoryView } from "../views/categoryView.js";
import { ProductView } from "../views/ProductView.js";

export class ProductsController {


    private parentOfCategories = document.querySelector('.categories-list') as HTMLElement;
    private allProductsContainer = document.querySelector('[all-products-container]') as HTMLElement

    constructor(private _products: Array<Product>) { 
        console.log(this.parentOfCategories, this.allProductsContainer)
    }


    public showProductsByCategory() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            const productsFromCategory = this.getProductsFromCategory(this._products, category);
            const categoryOfProductsView = this.categoryOfProductsView(productsFromCategory, category);
            this.parentOfCategories.append(categoryOfProductsView);
        })
    }

    public listAllProducts() {
        const categoryOfProductsView = this.categoryOfProductsView(this._products, "Todos os produtos");
        this.allProductsContainer.appendChild(categoryOfProductsView);
    }

    private getCategories(products: Array<Product>): string[] {
        let productsCategory = products.map((product) => {
            return product.category;
        });
        return [...new Set(productsCategory)];
    }

    private categoryOfProductsView(products: Product[], category: string): HTMLElement {
        if (category != "Todos os produtos") {
            products = products.splice(0,4);
        }
        
        const categoryViewClass = new CategoryView(category);
        const categoryView = categoryViewClass.categoryView();
        const productsDiv = document.createElement('div');
        productsDiv.classList.add('products');
        products.forEach((product) => {
            const productViewClass = new ProductView(product);
            productsDiv.appendChild(productViewClass.productInsideListView())
        })
        categoryView.appendChild(productsDiv);
        return categoryView;
    }

    private getProductsFromCategory(products: Product[], category): Product[] {
        products = products.filter((product) => {
            if (product.category == category) {
                return product;
            }
        })
        return products;
    }


}
