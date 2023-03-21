import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import AddTweet from '../Tweet/AddTweet/AddTweet'
import TweetsLogic from '../TweetsLogic/TweetsLogic'
import '../../styles/index.scss'
import { usePosts } from '../../contexts/postsContext'
import '../ProductCard/ProductCard.scss'


const ProductList = () => {
  const {getPosts, posts} = usePosts()

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
    <div className="card">
    <TweetsLogic/>
    {posts?.map(item => ( 
        <ProductCard card={item} key={item.id} />
        ))}
        </div>
    </>
  )
}

export default ProductList