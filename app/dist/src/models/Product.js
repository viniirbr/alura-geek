export class Product {
    constructor(_id, _name, _imgBase64, _price, _category, _description) {
        this._id = _id;
        this._name = _name;
        this._imgBase64 = _imgBase64;
        this._price = _price;
        this._category = _category;
        this._description = _description;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get imgBase64() {
        return this._imgBase64;
    }
    get price() {
        return this._price;
    }
    set price(price) {
    }
    get category() {
        return this._category;
    }
    get description() {
        return this._description;
    }
}
