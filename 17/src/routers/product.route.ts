import { Router } from "express";

import { ProductController } from "../controllers/product.controller";

const ProductRouter = Router();

ProductRouter.get(
    // Rota
    '/',
    // Controle
    ProductController.GetAll
);

ProductRouter.get(
    // Rota
    '/:id',
    // Controle
    ProductController.GetById
);

ProductRouter.post(
    '/',
    ProductController.Create
)

export { ProductRouter };