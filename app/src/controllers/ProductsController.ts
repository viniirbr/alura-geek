import { Product } from "../models/Product.js";
import { CategoryView } from "../views/categoryView.js";
import { ProductView } from "../views/ProductView.js";

export class ProductsController {


    private parentOfCategories = document.querySelector('.categories-list') as HTMLElement;
    private allProductsContainer = document.querySelector('[all-products-container]') as HTMLElement
    private similarSection = document.querySelector('[product-similar]') as HTMLElement
    private modalBody = document.querySelector('.modal-body') as HTMLElement

    constructor(private _products: Array<Product>) { }


    public showProductsByCategory() {
        let categories = this.getCategories(this._products);
        categories.forEach(category => {
            const productsFromCategory = this.getProductsFromCategory(this._products, category);
            const categoryOfProductsView = this.categoryOfProductsView(productsFromCategory, category, false);
            this.parentOfCategories.append(categoryOfProductsView);
        })
    }

    public listAllProducts() {
        const categoryOfProductsView = this.categoryOfProductsView(this._products, "Todos os produtos", false);
        this.allProductsContainer.appendChild(categoryOfProductsView);
    }

    public listSimilarProducts(category, id) {
        const productsFromCategory = this.getProductsFromCategory(this._products, category);
        const similarProducts = productsFromCategory.filter(product => {
            if (product.id != id) {
                return product;
            }
        })
        const similarProductsView = this.categoryOfProductsView(similarProducts, category, true);
        this.similarSection.appendChild(similarProductsView)
    }

    public listProductsInsideModal(category: string) {
        const products = this.getProductsFromCategory(this._products, category);
        products.forEach(product => {
            const productView = new ProductView(product);
            this.modalBody.append(productView.getProductInsideModal())
        })
    }


    private categoryOfProductsView(products: Product[], category: string, isSimilarList: boolean): HTMLElement {
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
            productsDiv.appendChild(productViewClass.productInsideListView(hasDeleteButton))
        })
        categoryView.appendChild(productsDiv);
        return categoryView;
    }

    private getProductsFromCategory(products: Product[], category): Product[] {
        products = this._products.filter((product) => {
            if (product.category == category) {
                return product;
            }
        })
        return products;
    }

    private getCategories(products: Array<Product>): string[] {
        let productsCategory = products.map((product) => {
            return product.category;
        });
        return [...new Set(productsCategory)];
    }

}
