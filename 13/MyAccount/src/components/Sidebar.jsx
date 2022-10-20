import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import AuthService from '../services/AuthService';

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

    const navigate = useNavigate();

    function Logout() {
        AuthService.Logout();
        navigate('/');
    }

    return (
        <>
            <SidebarLayout>
                <Link to="minha-conta">Minha conta</Link>
                <button onClick={() => { Logout() }}>Sair</button>
            </SidebarLayout>
        </>
    )
}

export default Sidebar;