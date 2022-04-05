export class Product {

    constructor(private _id: number, private _name: string, private _imgBase64: string, private _price: number, 
        private _category: string, private _description: string) {}  

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

        set price(price: number) {
            
        }

        get category() {
            return this._category;
        }


        get description() {
            return this._description;
        }
}