import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages 
import SignIn from './pages/SignIn/SignIn';
import ProductsListPage from './pages/ProductListPage/ProductsListPage';
import AuthContextProvider from './contexts/authContext';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import ProfileContextProvider from './contexts/profileContext';

const MainRoutes = () => {
	// const token = localStorage.getItem('token');
	const token = true;
	return (
		<>
			<ProfileContextProvider>
				<AuthContextProvider>
					<Routes>
						<Route path='/' element={token ? <ProductsListPage /> : <SignIn />} />
						<Route path='/signIn' element={<SignIn />} />
						<Route path='/profile' element={token ? <ProfilePage /> : <SignIn />} />
						<Route path='/message' element={token ? <MessagesPage /> : <SignIn />} />
					</Routes>
				</AuthContextProvider>
			</ProfileContextProvider>
		</>
	);
}

export default MainRoutes
