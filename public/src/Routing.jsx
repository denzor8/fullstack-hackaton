import React from 'react';
import { Routes, Route } from 'react-router-dom';
// user
import Loader from './components/Loader/Loader';
import Register from './components/Register/Register';
import RegisterSuccess from './components/RegisterSuccess/RegisterSuccess';
import Login from './components/Login/Login';
// product
import AddProduct from './components/products/AddProduct/AddProduct';
import Details from './components/products/Details/Details';
import ProductList from './components/products/ProductList/ProductList';
import UpdateProduct from './components/products/UpdateProduct/UpdateProduct';

const Routing = () => {
  return (
    <Routes>
        {/* users routes */}
        <Route path="*" element={<Loader />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
        <Route path="/login" element={<Login />} />
        {/* products routes */}
        <Route path="/add" element={<AddProduct />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/products" element={<ProductList  />} />
        <Route path="/edit/:id" element={<UpdateProduct />} />
    </Routes>
  )
}

export default Routing