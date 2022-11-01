import { Router } from "express";

import { AccountRouter } from "./account.router";

const Routers = Router();

Routers.use('/account', AccountRouter);

export { Routers }