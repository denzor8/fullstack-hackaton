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
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const ProductCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    setIsVisible(true);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='card' >
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
              <div style={{ paddingLeft: '18.5rem', color: '#8899A6', fontSize: '13px'}} >
                            <IconButton
                              size="large"
                              aria-label="account of current user"
                              aria-controls="menu-appbar"
                              aria-haspopup="true"
                              onClick={handleMenu}
                              color="inherit"
                              sx={{padding: '0'}}
                            >
                            <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="menu-appbar"
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                              keepMounted
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                            >
                              <MenuItem>
                                Edit
                              </MenuItem>
                              <MenuItem >
                                Delete
                              </MenuItem>
                            </Menu>
                </div>
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
            <div style={{ display: 'flex', alignItems:'center'}} >
                <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }} >Devon Lane</h4>
                <span style={{ paddingLeft: '5px', color: '#8899A6' }} >@johndue 23</span>
                <div style={{ paddingLeft: '18.5rem', color: '#8899A6', fontSize: '13px'}} >
                            <IconButton
                              size="large"
                              aria-label="account of current user"
                              aria-controls="menu-appbar"
                              aria-haspopup="true"
                              onClick={handleMenu}
                              color="inherit"
                              sx={{padding: '0'}}
                            >
                            <MoreVertIcon />
                            </IconButton>
                            <Menu
                              id="menu-appbar"
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                              keepMounted
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                            >
                              <MenuItem>
                                Edit
                              </MenuItem>
                              <MenuItem >
                                Delete
                              </MenuItem>
                            </Menu>
                </div>
            </div>

            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '500px', color: 'white'}} >Tom is in a big hurry.</h4>

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