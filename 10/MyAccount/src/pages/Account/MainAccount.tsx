import { Outlet } from 'react-router-dom';

import Sidebar from '@components/Sidebar';

import AccountContext from '../../contexts/AccountContext';

function MainAccount() {

    return (
        <>
            <AccountContext.Provider value={null}>
                <Sidebar />
                <Outlet />
            </AccountContext.Provider>
        </>
    )
}

export default MainAccount;