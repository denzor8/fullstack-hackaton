import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages 
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';
import ProductsListPage from './pages/ProductListPage/ProductsListPage';
import AuthContextProvider from './contexts/authContext';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const MainRoutes = () => {
	// const token = localStorage.getItem('token');
	// const token = false;
	const token = true;
	return (
		<>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={token ? <ProductsListPage /> : <SignIn />} />
					<Route path='/signIn' element={<SignIn />} />
					<Route path='/profile' element={<ProfilePage />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default MainRoutes
