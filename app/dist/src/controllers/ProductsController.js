import { CategoryView } from "../views/categoryView.js";
import { ProductView } from "../views/ProductView.js";
export class ProductsController {
    constructor(_products) {
        this._products = _products;
        this.parentOfCategories = document.querySelector('.categories-list');
        this.allProductsContainer = document.querySelector('[all-products-container]');
    }
    showProductsByCategory() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            const productsFromCategory = this.getProductsFromCategory(this._products, category);
            const categoryOfProductsView = this.categoryOfProductsView(productsFromCategory, category);
            this.parentOfCategories.append(categoryOfProductsView);
        });
    }
    listAllProducts() {
        const categoryOfProductsView = this.categoryOfProductsView(this._products, "Todos os produtos");
        this.allProductsContainer.appendChild(categoryOfProductsView);
    }
    categoryOfProductsView(products, category) {
        if (category != "Todos os produtos") {
            products = products.splice(0, 4);
        }
        const categoryViewClass = new CategoryView(category);
        const categoryView = categoryViewClass.categoryView();
        const productsDiv = document.createElement('div');
        productsDiv.classList.add('products');
        products.forEach((product) => {
            const productViewClass = new ProductView(product);
            productsDiv.appendChild(productViewClass.productInsideListView());
        });
        categoryView.appendChild(productsDiv);
        return categoryView;
    }
    getProductsFromCategory(products, category) {
        products = products.filter((product) => {
            if (product.category == category) {
                return product;
            }
        });
        return products;
    }
    getCategories(products) {
        let productsCategory = products.map((product) => {
            return product.category;
        });
        return [...new Set(productsCategory)];
    }
}
