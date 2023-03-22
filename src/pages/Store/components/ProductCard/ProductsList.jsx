import React, { useEffect, useState } from 'react'
import { useProducts } from '../../contexts/ProductContextProvider'
import ProductCard from './ProductCard'
import Pagination from "@mui/material/Pagination";
import './ProductsCard.scss'
const ProductsList = () => {
  const { products, getProducts } = useProducts()
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts()
  }, [])
  
  const itemsOnPage = 8;
  const count = Math.ceil(products.length / itemsOnPage);
  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      <div className="d-flex flex-wrap mb-50">
        {currentData().map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          count={count}
          page={page}
          onChange={handlePage}
        />
      </div>
    </div>
  )
}

export default ProductsList