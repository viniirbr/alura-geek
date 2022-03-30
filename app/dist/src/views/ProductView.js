export class ProductView {
    constructor(_product) {
        this._product = _product;
    }
    productInsideListView() {
        const formatedPrice = parseFloat(this._product.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const productView = document.createElement('div');
        productView.classList.add('product');
        productView.innerHTML = `
            <img src=${this._product.imgUrl} alt="Produto XYZ">
            <h3 class="product__title">${this._product.name}</h3>
            <h4>${formatedPrice}</h4>
            <a href=${this._product.linkToPage}>Ver produto</a>
        `;
        return productView;
    }
}
