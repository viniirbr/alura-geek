import products from '../routes/productsRoute.js';
import express from 'express';

const routes = (app) => {
    app.use(
        express.json(),
        products
    );
}

export default routes;