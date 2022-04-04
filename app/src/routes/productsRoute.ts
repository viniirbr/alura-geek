import express from "express";
import { ProductsController } from "../controllers/ProductsController.js";

const router = express.Router();

router
    .get('/', ProductsController.listAllProducts);

export default router;
