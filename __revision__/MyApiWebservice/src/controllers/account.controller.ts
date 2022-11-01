import { Request, Response } from 'express';

import { AccountContext } from '../contexts/account.context';

import { ICredential } from '../models/Credential';

class AccountController {

    static async SignIn(req: Request, res: Response) {

        const credential: ICredential = req.body;

        try {

            const userFound = await AccountContext.Authenticate(credential);

            if (userFound) {
                res.status(200).json({ message: 'Okay!' });
            }
            else {
                res.status(404).json({ message: 'Not found' });
            }

        }
        catch {
            res.status(500).json({ message: 'Server error!' });
        }

    }

    static async SignUp(req: Request, res: Response) {

        const { firstname, lastname, username, password } = req.body;

        try {
            const isRegisted = await AccountContext.Register({ firstname, lastname, username, password });

            if (isRegisted) {
                res.status(201).json({ message: 'Okay!' });
            }
            else {
                res.status(401).json({ message: 'Bad request!' });
            }
        }
        catch {
            res.status(500).json({ message: 'Server error!' });
        }
    }

}

export { AccountController };