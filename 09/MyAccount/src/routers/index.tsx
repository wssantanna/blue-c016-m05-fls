import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';

import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import NotFound from '@pages/Error/NotFound';
import MainAccount from '@pages/Account/MainAccount';
import MyAccount from '@pages/Account/MyAccount';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="conta/autenticar" replace />,
        errorElement: <NotFound />
    },
    {
        path: '/conta',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "autenticar/",
                element: <SignIn />
            },
            {
                path: "registrar/",
                element: <SignUp />
            }
        ]
    },
    {
        path: '/painel-de-controle',
        element: <MainAccount />,
        errorElement: <NotFound />,
        children: [
            {
                path: "minha-conta/",
                element: <MyAccount />
            },
        ]
    }
]);

export default Router;