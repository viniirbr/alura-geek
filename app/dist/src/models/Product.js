import mongoose from 'mongoose';
const productsSchema = new mongoose.Schema({
    "id": { type: String },
    "name": { type: String, required: true },
    "price": { type: Number, required: true },
    "category": { type: String, required: true },
    "description": { type: String, required: true }
});
const products = mongoose.model('products', productsSchema);
export default products;
