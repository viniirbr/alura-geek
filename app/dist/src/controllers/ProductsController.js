import products from "../models/Product.js";
export class ProductsController {
}
ProductsController.listAllProducts = (req, res) => {
    products.find((err, products) => {
        if (err) {
            res.status(400).send({ message: `${err.message}: Produtos não localizados` });
        }
        else {
            res.status(200).json(products);
            console.log(products);
        }
    });
};
