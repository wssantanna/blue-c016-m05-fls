import { Outlet } from 'react-router-dom';

import Sidebar from '@components/Sidebar';

function MainAccount() {


    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default MainAccount;