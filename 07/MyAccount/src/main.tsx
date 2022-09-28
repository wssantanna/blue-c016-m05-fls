import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from '@styles';

import Router from './routers';

import Mock from './mock';

Mock.Initialize();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterProvider router={Router} />
	</React.StrictMode>
)
