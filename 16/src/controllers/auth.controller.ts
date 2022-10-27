
import { Request, Response } from 'express';

import Jwt from 'jsonwebtoken';

import { StoreContext } from '../contexts/store.contex';

export class AuthController {

    static async Autentication(req: Request, res: Response) {

        const { email, password } = req.body;

        const userFound = await StoreContext.user.findFirst(
            {
                where: { email, password }
            }
        );


        if (userFound == null) {
            res.status(404).json({ message: 'Usuario ou senha incorreta' })
        }
        else {

            // Criar o Token
            const token = Jwt.sign({ id: userFound.id }, 'camila');

            userFound.password = '';

            res.status(200).json({ ...userFound, token });
        }

    }

}