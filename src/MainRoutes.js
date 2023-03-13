import React from 'react';
import { Routes, Route } from 'react-router-dom';
// pages 
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';
import ProductsListPage from './pages/ProductListPage/ProductsListPage';
import AuthContextProvider from './contexts/authContext';

const MainRoutes = () => {
	return (
		<>
		<AuthContextProvider>
			<Routes>
				<Route path='/' element={
				<div style={{display: 'flex', alignItems: 'center'}} >
					<Navbar/>
					<ProductsListPage/>
				</div> }  />
				<Route path='/signIn' element={ <SignIn/> } />
			</Routes>
		</AuthContextProvider>
		</>
	);
}

export default MainRoutes
