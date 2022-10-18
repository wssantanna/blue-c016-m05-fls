
import { createContext, useEffect, useState } from 'react';

import IAuthorization from '@interfaces/Autorization';
import TokenService from '@services/TokenService';

const AccountContext = createContext<IAuthorization | null>(null);

function AccountContextProvider(props: any) {

    const [token, setToken] = useState(TokenService.GetTokenFromStorage());

    return (
        <AccountContext.Provider value={{ token, setToken }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export { AccountContext, AccountContextProvider }