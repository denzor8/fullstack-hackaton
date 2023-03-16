import React from 'react'
import Favorites from '../../components/Favorites.jsx/Favorites'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'

const FavoritesPage = () => {
  return (
    <>
    <Navbar/>
    <div style={{display: 'flex'}} >
      <Favorites/>
      <Search/>
    </div>
    </>
  )
}

export default FavoritesPage