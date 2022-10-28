import { Router } from "express";
import TokenService from "../services/TokenService";

const UserRouter = Router();

UserRouter.post(
    '/cadastrar',
    () => { }
);

UserRouter.get(
    '/meus-dados',
    TokenService.Authorize,
    () => { }
)

export { UserRouter };