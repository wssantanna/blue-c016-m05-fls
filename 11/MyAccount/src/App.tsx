import { Outlet } from 'react-router-dom';

import { AccountContextProvider } from './contexts/AccountContext';

function App() {

	return (
		<>
			<AccountContextProvider>
				<Outlet />
			</AccountContextProvider>
		</>
	)
}

export default App
