import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListPage  from './pages/ProductListPage';
// pages 
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

const MainRoutes = () => {
	const PUBLIC_ROUTES = [
		{
			link: "/*",
			element: <NotFound />,
			id: 1,
		},
	]
	return (
		<Routes>
			{PUBLIC_ROUTES.map((item) => (
				<Route path={item.link} element={item.element} key={item.id} />
			))}
			<div display={{
				display: 'flex',
				justifyContent: "space-between",
			}}>
				<Navbar />
				<ProductListPage />
				
			</div>
		</Routes>
	);
}
