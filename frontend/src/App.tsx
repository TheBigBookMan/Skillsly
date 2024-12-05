import { FC, ReactNode, useState } from 'react';
import Login from './pages/Login';
import useUserContext from './hooks/useUserContext';
import SettingsProvider from './contexts/SettingsContext';
import Navbar from './components/common/Nav/Navbar';
import Header from './components/common/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';
import Calendar from './pages/Calendar';
import Inbox from './pages/Inbox';
import Notifications from './pages/Notifications';
import Onboard from './pages/Onboard';
import Settings from './pages/Settings';
import Skills from './pages/Skills';
import VideoCall from './pages/VideoCall';

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
				<Route 
					index
					path="/"
					element={
						<ProtecectedRoute>
							<Homepage />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/profile"
					element={
						<ProtecectedRoute>
							<Profile />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/user-profile/:userId"
					element={
						<ProtecectedRoute>
							<UserProfile />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/calendar"
					element={
						<ProtecectedRoute>
							<Calendar />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/inbox"
					element={
						<ProtecectedRoute>
							<Inbox />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/notifications"
					element={
						<ProtecectedRoute>
							<Notifications />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/onboard"
					element={
						<ProtecectedRoute>
							<Onboard />
						</ProtecectedRoute>
					}
				/>
				<Route
					path="/settings"
					element={
						<ProtecectedRoute>
							<Settings />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/skills/:skillId"
					element={
						<ProtecectedRoute>
							<Skills />
						</ProtecectedRoute>
					}
				/>
				<Route 
					path="/videocall/:videoId"
					element={
						<ProtecectedRoute>
							<VideoCall />
						</ProtecectedRoute>
					}
				/>
			</Routes>
		</div>
	)
}

export default App
