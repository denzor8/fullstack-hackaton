import React, { useEffect, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsContext } from '../../../contexts/productContext';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from 'react-bootstrap/Pagination';

const ProductList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  function getPagesCount() {
    let pageCountArr = [];
    for(let i = 1; i < pages + 1; i++){
      pageCountArr.push(i);
    };
    return pageCountArr;
  };

  useEffect(() => {
    getProducts();
  }, [searchParams, ]);

  useEffect(() => {
    setSearchParams({
      page: currentPage
    });
  }, [currentPage, ]);

  return (
    <div>
      <h2>Products List</h2>
      {products?.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}

      <Pagination>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />

        {getPagesCount().map(item => (
          item === currentPage ? <Pagination.Item onClick={() => setCurrentPage(item)} active key={item}>{item}</Pagination.Item> : <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>{item}</Pagination.Item>

        //   <Pagination.Item onClick={() => setCurrentPage(item)} active={item === currentPage ? 'true' : 'false'} key={item}>{item}</Pagination.Item>
        ))}

        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination>
    </div>
  )
}

export default ProductList