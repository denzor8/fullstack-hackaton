import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import AuthContextProvider from './contexts/authContext';
import ProductContextProvider from './contexts/productContext';

const App = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routing />
        </BrowserRouter>
      </AuthContextProvider>
    </ProductContextProvider>
  )
}

export default App