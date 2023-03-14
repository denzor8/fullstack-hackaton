import React from 'react'
import ProductList from '../../components/ProductList/ProductList'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
const ProductsListPage = () => {
  return (
    <>
      <Navbar />
      <div style={{display:'flex'}}>
        <ProductList />
        <Search />
      </div>
    </>
  )
}

export default ProductsListPage