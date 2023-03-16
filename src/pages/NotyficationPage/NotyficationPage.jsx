import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notyfication from '../../components/Notyfication/Notyfication'
import Search from '../../components/Search/Search'

const NotyficationPage = () => {
  return (
    <>
      <Navbar/>
      <div style={{display: 'flex'}} >
        <Notyfication/>
        <Search/>
      </div>
    </>
  )
}

export default NotyficationPage