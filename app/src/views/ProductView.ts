import { Product } from "../models/Product.js";

export class ProductView {

    constructor(private _products: Product[]) { }

    public template(products: Array<Product>, category: string) {

        const categoryView = this.categoryView(category)
        const productsList = this.addProductsOfCategory(products, category)
        const productsView = document.createElement('div');
        productsView.classList.add('products');
        productsView.append(...productsList)
        categoryView.append(productsView)

        return categoryView;
    }

    private addProductsOfCategory(products: Array<Product>, category: string): Array<HTMLElement> {
        let productsTemplate: Array<HTMLElement>
        let counter = 0;
        productsTemplate = products.map((product) => {
            if ((product.category == category) && counter < 4) {
                counter++;
                return this.getProductInsideListView(product)
            } else {
                return "";
            }
        }) as Array<HTMLElement>
        return productsTemplate;
    }

    private categoryView(category: string): HTMLElement {
        const categorySection = document.createElement('section');
        categorySection.innerHTML =
            `
            <div class="category-header">
                <h3 class="category-header__title">${category}</h3>
                <div class="see-all">
                    <a class="see-all__title">Ver tudo</a>
                    <img class="see-all__img" src="img/rigth-arrow.svg" alt="Ver tudo">
                </div>
            </div>
            `
        categorySection.classList.add('category');
        return categorySection;
    }

    private getProductInsideListView(product: Product): HTMLElement {
        const formatedPrice = parseFloat(product.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const productView = document.createElement('div');
        productView.classList.add('product');
        productView.innerHTML = `
            <img src=${product.imgUrl} alt="Produto XYZ">
            <h3 class="product__title">${product.name}</h3>
            <h4>${formatedPrice}</h4>
            <a href=${product.linkToPage}>Ver produto</a>
        `;
        return productView;
    }
}