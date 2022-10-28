import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";

const AuthRouter = Router();

AuthRouter.post(
    '/',
    AuthController.Authentication
);

export { AuthRouter };