import React, { useState, useEffect } from 'react';
import { display } from '@mui/system';
import TextField from '@mui/material/TextField';
import './ProductCard.scss'
import {
  Button,
  IconButton,
} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AddTweet from '../Tweet/AddTweet/AddTweet'
const ProductCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    setIsVisible(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='card' >


      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
        <h3 className='card_title p16'>Home</h3>
        <img src="../../../image/Group.png" alt="" className="card_icon p16" />
      </div> */}

      <div className='profile__container'>
        {isVisible && (
          <div onClick={scrollToTop}
            className='profile__fixed'>
            <div className='profile__name'>
              <div className='profile__name-name'>Home</div>
            </div>
            <div className="profile_icon">
              {/* <img src="../../../image/Group.png" alt="" className="card_icon p16" /> */}
              <IconButton color='primary' >
                <AutoAwesomeIcon  style={{ fontSize: 26 }}/>
              </IconButton>
            </div>
          </div>
        )}
      </div>


      {/* tweet */}
      <div className='small-scretch' />
      {/* components */}
      <AddTweet />
      {/* components */}
      {/* tweet  end*/}

      <div className='small-scretch'></div>
      <div className='strech' ></div>
      <div className='small-scretch-bottom'></div>


      <div className="card_post p16">
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <div>
            <img src="../../../image/user_icon-2.png" alt="" className="card_user_icon" />
          </div>

          <div style={{ paddingLeft: '10px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }} >
              <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }} >Devon Lane</h4>
              <span style={{ paddingLeft: '5px', color: '#8899A6' }} >@johndue 23</span>
            </div>

            <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '500px' }} >Tom is in a big hurry.</h4>

          </div>
        </div>

        <img style={{ paddingLeft: '3.5rem' }} src="../../../image/post.png" alt="" />
        <div className="card-post_images">
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span' >61</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-1.png" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span' >61</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-2.png" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span_like' >6.2K</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-3.png" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span' >61</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-4.png" alt="" />
          </div>
        </div>
        <h1 style={{ paddingLeft: '3.6rem', color: '#1DA1F2', fontSize: '13px' }} >Show this trend</h1>
        <div className='small-scretch-bottom'></div>
      </div>

      <div className="card_post p16">
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <div>
            <img src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
          </div>

          <div style={{ paddingLeft: '10px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }} >
              <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }} >Devon Lane</h4>
              <span style={{ paddingLeft: '5px', color: '#8899A6' }} >@johndue 23</span>
            </div>

            <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '500px' }} >Tom is in a big hurry.</h4>

          </div>
        </div>

        <img style={{ paddingLeft: '3.5rem' }} src="../../../image/Container.png" alt="" />
        <div className="card-post_images">
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span' >61</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-1.png" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span' >61</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-2.png" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span_like' >6.2K</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-3.png" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <span className='card-post_span' >61</span>
            <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-4.png" alt="" />
          </div>
        </div>
        <h1 style={{ paddingLeft: '3.6rem', color: '#1DA1F2', fontSize: '13px' }} >Show this trend</h1>
        <div className='small-scretch-bottom'></div>
      </div>

    </div>
  )
}

export default ProductCard