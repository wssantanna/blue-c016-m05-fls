
import { Router } from 'express';

import { AccountController } from '../controllers/account.controller';

const AccountRouter = Router();

AccountRouter.post('/signin', AccountController.SignIn);
AccountRouter.post('/signup', AccountController.SignUp);

export { AccountRouter }