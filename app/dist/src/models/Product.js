export class Product {
    constructor(_id, _name, _imgUrl, _price, _category, _linkToPage) {
        this._id = _id;
        this._name = _name;
        this._imgUrl = _imgUrl;
        this._price = _price;
        this._category = _category;
        this._linkToPage = _linkToPage;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this.name;
    }
    get imgUrl() {
        return this.imgUrl;
    }
    get price() {
        return this.price;
    }
    get category() {
        return this.category;
    }
    get linkToPage() {
        return this.linkToPage;
    }
}
