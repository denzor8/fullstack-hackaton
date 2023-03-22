import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import AddTweet from '../Tweet/AddTweet/AddTweet'
import TweetsLogic from '../TweetsLogic/TweetsLogic'
import '../../styles/index.scss'
import { usePosts } from '../../contexts/postsContext'
import '../ProductCard/ProductCard.scss'
import ModalProduct from '../ModalProduct/ModalProduct'


const ProductList = () => {
  const {getPosts, posts, getProducts, productsDb} = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <>
    <div className="card">
    <TweetsLogic/>
    {posts?.map(item => ( 
        <>
        <div key={item.id} >
          {productsDb.map((set, index) => (
            <>
              <ProductCard dbcard={set} card={item} key={set.id} />
              <div style={{ display: "block"}}>
                <ModalProduct key={index} dbcard={set} card={item} />
              </div>
            </>
          ))}
        </div>
        </>
        ))}
        </div>
    </>
  )
}

export default ProductList