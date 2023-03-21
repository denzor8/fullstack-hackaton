import React, { useEffect, useState } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AddTweet from '../Tweet/AddTweet/AddTweet';
import '../ProductCard/ProductCard.scss';
import {
    Button,
    IconButton,
} from "@mui/material";
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';

const TweetsLogic = ({card}) => {
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
    <div className='cards' >
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
    </div>
  )
}

export default TweetsLogic