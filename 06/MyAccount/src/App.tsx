import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

	return (
		<>
			<Routes>
				<Route
					path="/autenticar"
					element={<SignIn />}
				/>
				<Route
					path="/cadastrar"
					element={<SignUp />}
				/>
			</Routes>
		</>
	)
}

export default App
