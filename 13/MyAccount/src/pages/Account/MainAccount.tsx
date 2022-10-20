
import { Outlet } from 'react-router-dom';

import Sidebar from '@components/Sidebar';

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

            <AccountLayout>
                <Sidebar />
                <Outlet />
            </AccountLayout>
        </>
    )
}

export default MainAccount;