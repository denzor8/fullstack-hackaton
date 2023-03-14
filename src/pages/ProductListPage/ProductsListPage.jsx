import React from 'react'
import ProductList from '../../components/ProductList/ProductList'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
const ProductsListPage = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}} >
      <Navbar />
      <ProductList />
      <Search/>
    </div>
  )
}

export default ProductsListPage