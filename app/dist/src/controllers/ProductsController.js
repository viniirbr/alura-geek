import { CategoryView } from "../views/categoryView.js";
import { ProductView } from "../views/ProductView.js";
export class ProductsController {
    constructor(_products) {
        this._products = _products;
        this.parentOfCategories = document.querySelector('.categories-list');
        this.allProductsContainer = document.querySelector('[all-products-container]');
        this.similarSection = document.querySelector('[product-similar]');
        this.modalBody = document.querySelector('.modal-body');
    }
    showProductsByCategory() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            const productsFromCategory = this.getProductsFromCategory(this._products, category);
            const categoryOfProductsView = this.categoryOfProductsView(productsFromCategory, category, false);
            this.parentOfCategories.append(categoryOfProductsView);
        });
    }
    listAllProducts() {
        const categoryOfProductsView = this.categoryOfProductsView(this._products, "Todos os produtos", false);
        this.allProductsContainer.appendChild(categoryOfProductsView);
    }
    listSimilarProducts(category, id) {
        const productsFromCategory = this.getProductsFromCategory(this._products, category);
        const similarProducts = productsFromCategory.filter(product => {
            if (product.id != id) {
                return product;
            }
        });
        const similarProductsView = this.categoryOfProductsView(similarProducts, category, true);
        this.similarSection.appendChild(similarProductsView);
    }
    listProductsInsideModal(category) {
        const products = this.getProductsFromCategory(this._products, category);
        products.forEach(product => {
            const productView = new ProductView(product);
            this.modalBody.append(productView.getProductInsideModal());
        });
    }
    categoryOfProductsView(products, category, isSimilarList) {
        let hasDeleteButton = true;
        if (category != "Todos os produtos") {
            products = products.splice(0, 4);
            hasDeleteButton = false;
        }
        const categoryViewClass = new CategoryView(category);
        const categoryView = categoryViewClass.categoryView(isSimilarList);
        const productsDiv = document.createElement('div');
        productsDiv.classList.add('products');
        products.forEach((product) => {
            const productViewClass = new ProductView(product);
            productsDiv.appendChild(productViewClass.productInsideListView(hasDeleteButton));
        });
        categoryView.appendChild(productsDiv);
        return categoryView;
    }
    getProductsFromCategory(products, category) {
        products = this._products.filter((product) => {
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
