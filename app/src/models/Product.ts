export class Product {

    constructor(private _id: number, private _name: string, private _imgUrl: string, private _price: number, 
        private _category: string, private _linkToPage: string) {}  

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