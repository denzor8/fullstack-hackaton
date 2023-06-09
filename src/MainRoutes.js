import React from 'react';
import { Routes, Route } from 'react-router-dom';
//contexts
import ProductContextProvider from './pages/Store/contexts/ProductContextProvider'
import LikeContextProvider from './pages/Store/contexts/CustomContext'
import CartContextProvider from './pages/Store/contexts/CartContextProvider'
import AuthContextProvider from './contexts/authContext';
import ProfileContextProvider from './contexts/profileContext';
// pages 
import SignIn from './pages/SignIn/SignIn';
import ProductsListPage from './pages/ProductListPage/ProductsListPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import NotyficationPage from './pages/NotyficationPage/NotyficationPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import MarketPage from './pages/MarketPage/MarketPage';
import AddProduct from './components/AddProduct/AddProduct';
import TweetsLogic from '../src/components/TweetsLogic/TweetsLogic'
import DetailsPage from './pages/DetailsPage/DetailsPage';


// store pages
import LikePage from './pages/Store/pages/LikePage/LikePage'
import CheckAdmin from './pages/Store/pages/AdminPage/CheckAdmin';
import EditProductPage from "./pages/Store/pages/EditProductPage/EditProductPage";
import AddProductPage from "./pages/Store/pages/AddProductPage/AddProductPage";
import ProductDetailsPage from "./pages/Store/pages/ProductDetailsPage/ProductDetailsPage";


const MainRoutes = () => {
	// const token = localStorage.getItem('token');
	const token = true;
	const PUBLIC_ROUTES = [
		{
			link: '/',
			element: <ProductsListPage />,
			id: 1,
		},
		{
			link: '/signIn',
			element: <SignIn />,
			id: 2,
		},
		{
			link: '/profile',
			element: <ProfilePage />,
			id: 3,
		},
		{
			link: '/message',
			element: <MessagesPage />,
			id: 4,
		},
		{
			link: '/notifications',
			element: <NotyficationPage />,
			id: 5,
		},
		{
			link: '/favorites',
			element: <FavoritesPage />,
			id: 6,
		},
		{
			link: '/market',
			element: <MarketPage />,
			id: 7,
		},
		{
			link: '/like',
			element: <LikePage />,
			id: 8,
		},
		{
			link: '/admin',
			element: <CheckAdmin />,
			id: 9,
		},
		{
			link: '/details/:id',
			element: <DetailsPage/>,
			id: 8,
		},
    {
      link: "/editProduct/:id",
      element: <EditProductPage />,
      id: 10,
    },
    {
      link: "/addProduct",
      element: <AddProductPage />,
      id: 11,
	},
	{
		link: "/productsDetails/:id",
		element: <ProductDetailsPage/>,
		id: 12,
	},
	]
	return (
		<>
			<ProductContextProvider>
				<LikeContextProvider>
					<CartContextProvider>
						<ProfileContextProvider>
							<AuthContextProvider>
								<Routes>
									{PUBLIC_ROUTES.map((item) => (
										<Route path={item.link} element={token ? item.element : <SignIn />} key={item.id} />
									))}
								</Routes>
							</AuthContextProvider>
						</ProfileContextProvider>
					</CartContextProvider>
				</LikeContextProvider>
			</ProductContextProvider>
		</>
	);
}

export default MainRoutes
