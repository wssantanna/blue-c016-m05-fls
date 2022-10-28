import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';

class TokenService {

    TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

    static GetToken(payload: any) {

        const token = Jwt.sign(payload, 'camila');

        return token;
    }

    static Authorize(req: Request, res: Response, next: NextFunction) {

        const currentToken = req.header('Authorization');

        if (currentToken) {
            const payloadDecoded = Jwt.verify(currentToken, 'camila')

            payloadDecoded ? next() : res.status(401).json({ message: 'Token invalido' });
        }
        else {
            res.status(400).json({ message: 'Usuario deslogado' })
        }

    }

}

export default TokenService;