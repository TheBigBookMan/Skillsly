import { FC, ReactNode, useState } from 'react';
import Login from './pages/Login';
import useUserContext from './hooks/useUserContext';
import SettingsProvider from './contexts/SettingsContext';
import Navbar from './components/common/Nav/Navbar';
import Header from './components/common/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';

interface ProtectedRouteInterface {
  	children: ReactNode;
}

interface ProtextedLayoutInterface {
	children: ReactNode;
}

const ProtecectedRoute: FC<ProtectedRouteInterface> = ({children}) => {
	const {isLoggedIn} = useUserContext();

	if(!isLoggedIn) {
		return <Navigate to="/login" />;
	}
	return <ProtectedLayout>{children}</ProtectedLayout>;
}

const ProtectedLayout: FC<ProtextedLayoutInterface> = ({children}) => {
	return (
		<SettingsProvider>
			<div className='flex flex-col justify-between w-full h-full'>
				<Header />
				<main className='h-full w-full p-1 flex-1 overflow0auto'>
					{children}
				</main>
				<Navbar />
			</div>
		</SettingsProvider>
	)
}

function App() {

	return (
		<div className='h-screen w-screen font-poppins bg-slate-900'>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
