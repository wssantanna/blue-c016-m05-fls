
import { Request, Response } from 'express';

import TokenService from '../services/TokenService';

import { StoreContext } from '../contexts/store.contex';

export class AuthController {

    static async Authentication(req: Request, res: Response) {

        const { email, password } = req.body;

        const userFound = await StoreContext.credential.findFirst(
            {
                where: { email, password },
                select: { user: true }
            }
        );

        console.log(userFound)


        if (userFound == null) {
            res.status(404).json({ message: 'Usuario ou senha incorreta' })
        }
        else {

            // Criar o Token
            const token = TokenService.GetToken(userFound);

            res.status(200).json({ ...userFound, token });
        }

    }

}