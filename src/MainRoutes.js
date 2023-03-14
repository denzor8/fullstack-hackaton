import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages 
import SignIn from './pages/SignIn/SignIn';
import ProductsListPage from './pages/ProductListPage/ProductsListPage';
import AuthContextProvider from './contexts/authContext';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MessagesPage from './pages/MessagesPage/MessagesPage';

const MainRoutes = () => {
	// const token = localStorage.getItem('token');
	const token = true
	return (
		<>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={token ? <ProductsListPage /> : <SignIn />} />
					<Route path='/signIn' element={<SignIn />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/message' element={<MessagesPage/>} />
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default MainRoutes
