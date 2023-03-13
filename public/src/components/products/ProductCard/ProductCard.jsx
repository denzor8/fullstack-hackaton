import React, { useContext } from 'react';
import { productsContext } from '../../../contexts/productContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { toggleLike } = useContext(productsContext);

  return (
    <div>
      Title: {item.title};
      Price: {item.price}$;
      Category: {item.category.title};
      Likes: {item.likes}
      <button onClick={() => toggleLike(item.id)}>Like</button>
      {item.is_author ? (
        <>
          <button>Edit</button>
          <button>Delete</button>
        </>
      ) : null}
    </div>
  )
}

export default ProductCard