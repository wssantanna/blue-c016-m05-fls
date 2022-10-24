import Express from 'express';
import { ProductRouter } from './product.route';

const App = Express();

/*
    - [x] Rotas
        - [x] Interceptadores
            - [x] Controles
                - [ ] Modelos (Banco de dados)
                    - [ ] ORM - Prisma, Sequelize, etc.
*/
// Interceptador
App.use(Express.json());
// Rotas
App.use('/produtos', ProductRouter)


App.listen(1234, () => console.log('Server is running'));