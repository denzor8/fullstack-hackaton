import React from 'react';
import Header from '../Header/Header';
import Basket from '../../components/Basket/Basket';
import { useCart } from '../../contexts/CartContextProvider';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import './BaseContent.scss';
function BaseContent() {
  const { cartOpened } = useCart()
  return (
    <div 
      className="market__content"
    >
      {cartOpened && <Basket />}
      <Header />
      <div className="content p-30 mt-50  ">
        <ProductsPage />
      </div>
    </div>
  );
}

export default BaseContent;