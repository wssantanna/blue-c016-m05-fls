import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SidebarLayout = styled.nav`

    background-color: darkblue;
    display: flex;
    gap: 1rem;
    padding: 2rem 1rem;

    a { 
        color: #fff;
        text-decoration: none; 
    }

    @media (min-width: 720px) {
        flex-direction: column;
        min-height: 100vh;
    }
`;

function Sidebar() {

    return (
        <>
            <SidebarLayout>
                <Link to="minha-conta">Minha conta</Link>
            </SidebarLayout>
        </>
    )
}

export default Sidebar;