
import { Request, Response } from 'express';

import { StoreContext } from './store.contex';

export class ProductController {

    static async GetAll(res: Response) {

        const products = StoreContext.product.findMany();

        return res.json(products);
    }

    static async GetById(req: Request, res: Response) {

        const idProduct = req.params.id;

        const productFound = StoreContext.product.findUnique(
            {
                where: { id: Number(idProduct) }
            }
        )

        return res.json(productFound);
    }

    static async Create(req: Request, res: Response) {

        const { name, description, price } = req.body;

        const newProduct = StoreContext.product.create({
            data: {
                name,
                description,
                price
            }
        });

        return res.json(newProduct);
    }

}