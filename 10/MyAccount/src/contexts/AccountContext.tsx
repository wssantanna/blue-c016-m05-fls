
import { createContext } from 'react';

import IAuthorization from '@interfaces/Autorization';

const AccountContext = createContext<IAuthorization | null>(null);

export default AccountContext;