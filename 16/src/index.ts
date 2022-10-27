import Express from 'express';

import { ProductRouter } from './routers/product.route';
import { UserRouter } from './routers/user.route';
import { AuthRouter } from './routers/auth.route';

const App = Express();

// Interceptador
App.use(Express.json());
// Rotas
App.use('/conta', UserRouter);
App.use('/produtos', ProductRouter);
App.use('/autenticar', AuthRouter);

App.listen(1234, () => console.log('Server is running'));