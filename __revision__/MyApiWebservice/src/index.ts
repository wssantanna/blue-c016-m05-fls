import Express from 'express';

import { Routers } from './routers';

const App = Express();

App.use('/', Routers);

App.listen(1234, () => { console.log('Server is running!') });