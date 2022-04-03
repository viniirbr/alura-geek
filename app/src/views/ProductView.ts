import { Product } from "../models/Product.js";

export class ProductView {

    constructor(private _product: Product) { }

    public productInsideListView(hasDeleteButton: boolean): HTMLElement {
        console.log(typeof(this._product.price))
        //typeof(this._product.price)==='string'?
        const formatedPrice = this._product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const productView = document.createElement('div');
        productView.classList.add('product');
        productView.innerHTML = `
            <img src=${this._product.imgUrl} alt="Produto XYZ">
            <h3 class="product__title">${this._product.name}</h3>
            <h4>${formatedPrice}</h4>
        `;
        const viewProductAnchor = document.createElement('a');
        viewProductAnchor.innerText = 'Ver produto';
        viewProductAnchor.href = "index.html"
        if (hasDeleteButton) {
            const bottomDiv = document.createElement('div');
            bottomDiv.classList.add('product__bottom-div')
            const deleteImg = document.createElement('img');
            deleteImg.src = "/img/trash-can-solid.svg"
            bottomDiv.appendChild(viewProductAnchor)
            bottomDiv.appendChild(deleteImg);
            productView.appendChild(bottomDiv);
        } else {
            productView.appendChild(viewProductAnchor);
        }
        return productView;
    }

}