import { deleteProduct } from "../scripts/deleteProduct.js";
export class ProductView {
    constructor(_product) {
        this._product = _product;
    }
    productInsideListView(hasDeleteButton) {
        const formatedPrice = this._product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const productView = document.createElement('div');
        productView.classList.add('product');
        productView.innerHTML = `
            <img src=${this._product.imgBase64} alt="Produto XYZ">
            <h3 class="product__title">${this._product.name}</h3>
            <h4>${formatedPrice}</h4>
        `;
        const viewProductAnchor = this.viewProductAnchor();
        if (hasDeleteButton) {
            const bottomDiv = document.createElement('div');
            bottomDiv.classList.add('product__bottom-div');
            const deleteImg = document.createElement('img');
            deleteImg.src = "/img/trash-can-solid.svg";
            deleteImg.addEventListener('click', () => deleteProduct(this._product));
            bottomDiv.appendChild(viewProductAnchor);
            bottomDiv.appendChild(deleteImg);
            productView.appendChild(bottomDiv);
        }
        else {
            productView.appendChild(viewProductAnchor);
        }
        return productView;
    }
    getProductInsideModal() {
        const formatedPrice = this._product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const productView = document.createElement('div');
        productView.classList.add('modal-product');
        const viewProductAnchor = this.viewProductAnchor();
        productView.innerHTML = `
            <img src=${this._product.imgBase64}>
            <div class='modal__product-info'>
                <h4>${this._product.name}<h4>
                <p>${formatedPrice}<p>
                <a href=${viewProductAnchor}>Ver produto</a>
            <div/>
        `;
        return productView;
    }
    viewProductAnchor() {
        const viewProductAnchor = document.createElement('a');
        viewProductAnchor.innerText = 'Ver produto';
        viewProductAnchor.href = `product.html?id=${this._product.id}`;
        return viewProductAnchor;
    }
}
