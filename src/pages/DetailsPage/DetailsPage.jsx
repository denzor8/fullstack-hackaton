import React from 'react'
import Details from '../../components/Details/Details'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'

const DetailsPage = () => {
  return (
    <div>
      <Navbar/>
      <div style={{display: 'flex'}} >
        <Details/>
        <Search/>
      </div>
    </div>
  )
}

export default DetailsPage