import { ReactNode, useState } from 'react';
import Login from './pages/Login';

interface ProtectedRouteInterface {
  	children: ReactNode;
}

interface ProtextedLayoutInterface {
	children: ReactNode;
}

function App() {

    const testFunc = () => {
        console.log("here");
    }

	return (
		<div>
			<p>Hey</p>
		</div>
	)
}

export default App
