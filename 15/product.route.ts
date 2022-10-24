import { Router } from "express";

import { ProductController } from "./product.controller";

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

export { ProductRouter };