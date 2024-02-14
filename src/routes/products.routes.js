import { Router } from "express";
const router = Router();

import * as productsController from "../controller/products.controller";

router.post("/",productsController.createProduct);

router.get("/",productsController.getProducts);

router.get("/:productId/",productsController.getProductsById);

router.put("/:productId",productsController.upDateProductsById);

router.delete("/:productId",productsController.deleteProductsById);

export default router;
