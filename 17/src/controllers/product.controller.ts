
import { Request, Response } from 'express';

import { StoreContext } from '../contexts/store.contex';

export class ProductController {

    static async GetAll(_: Request, res: Response) {

        const products = await StoreContext.product.findMany();

        return res.status(200).json(products);
    }

    static async GetById(req: Request, res: Response) {

        const idProduct = req.params.id;

        const productFound = await StoreContext.product.findUnique(
            {
                where: { id: Number(idProduct) }
            }
        )

        return res.status(200).json(productFound);
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

        return res.status(201).json(newProduct);
    }

}