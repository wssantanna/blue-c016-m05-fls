import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from '@styles';

import Mock from './mock';

import Router from './routers';

new Mock();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterProvider router={Router} />
	</React.StrictMode>
)
