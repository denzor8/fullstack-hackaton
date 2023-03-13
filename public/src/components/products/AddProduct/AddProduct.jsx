import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../../../contexts/productContext';

const AddProduct = () => {
  const navigate = useNavigate();
  const { getCategories, categories, createProduct } = useContext(productsContext);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append('title', title);
    newProduct.append('description', desc);
    newProduct.append('price', price);
    newProduct.append('category', category);
    newProduct.append('image', image);
    createProduct(newProduct, navigate);
  };

  return (
    <div>
      <h2>Add Product</h2>

      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Choose category...</option>
        {categories?.map(item => (
          <option key={item.id} value={item.id}>{item.title}</option>
        ))}
      </select>

      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />

      <button onClick={handleSave}>Save Product</button>
    </div>
  )
}

export default AddProduct