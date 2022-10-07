
import { Outlet } from 'react-router-dom';

import Sidebar from '@components/Sidebar';

import AccountContext from '@contexts/AccountContext';

import styled from 'styled-components';

const AccountLayout = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 25px;
    min-height: 100vh;
    
    @media (min-width: 720px) {
        grid-template-rows: 1fr;
        grid-template-columns: minmax(100px, 200px) 1fr;
    }
`;

function MainAccount() {

    return (
        <>
            <AccountContext.Provider value={null}>
                <AccountLayout>
                    <Sidebar />
                    <Outlet />
                </AccountLayout>
            </AccountContext.Provider>
        </>
    )
}

export default MainAccount;