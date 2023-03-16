import React from 'react';
import './Favorites.css'

const Favorites = () => {
  return (
    <div className='favorites' >
       <h1 className='fav_title' >BookMarks</h1>
       <h5 className='fav_span' >@Jolo4iev</h5>
       <img className='fav_static_image' alt draggable="true" src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-800x400.v1.71804389.png"></img>
       <h1 style={{textAlign: 'center', color: 'white'}} >Save Tweets for later</h1>
       <h5 style={{textAlign: 'center', color: 'rgb(136, 153, 166)', width: '300px', paddingLeft: '9rem', paddingTop: '10px'}}  >Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</h5>
    </div>
  )
}

export default Favorites