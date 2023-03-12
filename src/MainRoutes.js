import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages 
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

const MainRoutes = () => {
	const PUBLIC_ROUTES = [
		{
			link: "/register",
			element: <RegistrationPage />,
			id: 1,
		},
		{
			link: "/login",
			element: <LoginPage />,
			id: 2,
		},
		{
			link: "/*",
			element: <NotFound />,
			id: 3,
		},
	]
	return (
		<Routes>
			{PUBLIC_ROUTES.map((item) => (
				<Route path={item.link} element={item.element} key={item.id} />
			))}
		</Routes>
	);
}
