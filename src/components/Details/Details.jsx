import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePosts } from '../../contexts/postsContext';
import './Details.css';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
    Button,
    IconButton,
} from "@mui/material";

const Details = () => {
    const {getOnePosts, onePosts, deletePost} = usePosts()
    const [isVisible, setIsVisible] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {id} = useParams()
    const navigate = useNavigate()
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

    useEffect(() => {
        getOnePosts(id)
    }, [])

  return (
    <>
        {onePosts ? (
            <div className='details' >
                <div className="card_post p16">
                <div style={{ display: 'flex', alignItems: 'center' }} >
                <div>
                    <img src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
                </div>
    
                <div style={{ paddingLeft: '10px' }} >
                    <div style={{ display: 'flex', alignItems:'center'}} >
                        <h4  style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }}>{onePosts.owner}</h4>
                        {/* <span style={{ paddingLeft: '5px', color: '#8899A6' }} >@johndue 23</span> */}
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
                                    <MenuItem onClick={() => deletePost(onePosts.id)} >
                                        Delete
                                    </MenuItem>
                                    </Menu>
                        </div>
                    </div>
    
                    <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '500px', color: 'white'}} >{onePosts.title}</h4>
    
                </div>
                </div>
                    <img onClick={() => navigate(`/details/${onePosts.id}`)} style={{ paddingLeft: '3.5rem' }} src="../../../image/Container.png" alt="" />
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
        ) : (
            <h1>Error</h1>
        )}
    </>
  )
}

export default Details