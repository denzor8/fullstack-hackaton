import React, { useState, useEffect } from 'react';
import './ProductCard.scss'
import { IconButton, } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { usePosts } from '../../contexts/postsContext';
import { useNavigate } from 'react-router-dom';
import ModalProduct from '../ModalProduct/ModalProduct';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ProductCard = ({ card, dbcard }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloses = () => setOpen(false);
  const { posts, deletePost, getOnePosts, toggleLike, setLikeStorage, likeProduct } = usePosts()
  const navigate = useNavigate()
  const [like, setLike] = useState(false)


  useEffect(() => {
    setLikeStorage()
  }, [])

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

  // likes
  function addLike() {
    let STlikes = JSON.parse(localStorage.getItem("likes"));
    dbcard.likes += 1;
    likeProduct(dbcard);
    STlikes.push(dbcard);
    localStorage.setItem("likes", JSON.stringify(STlikes));
    setLike(true);
  }

  function disLike(id) {
    dbcard.likes -= 1
    likeProduct(dbcard)
    let STlikes = JSON.parse(localStorage.getItem('likes'))
    STlikes = STlikes.map((elem) => elem.id !== id)
    localStorage.setItem('likes', JSON.stringify(STlikes))
    setLike(false)
  }

  return (
    <div className="card_post p16">
      <div style={{ display: 'flex', alignItems: 'center' }} >
        <div>
          <img src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
        </div>

        <div style={{ paddingLeft: '10px' }} >
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }}>{card.owner}</h4>
            {/* <span style={{ paddingLeft: '5px', color: '#8899A6' }} >@johndue 23</span> */}
            <div style={{ paddingLeft: '18.5rem', color: '#8899A6', fontSize: '13px' }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ padding: '0' }}
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
                <MenuItem onClick={() => deletePost(card.id)} >
                  Delete
                </MenuItem>
              </Menu>
            </div>
          </div>

          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '500px', color: 'white' }} >{card.descriptions}</h4>

        </div>
      </div>

      <img onClick={() => navigate(`/details/${card.id}`)} style={{ paddingLeft: '3.5rem' }} src="../../../image/Container.png" alt="" />
      <div className="card-post_images">
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <span className='card-post_span' >61</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <span className='card-post_span' >61</span>
          <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-2.png" alt="" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }} >
          
          {like ?
            <IconButton
              onClick={() => disLike(dbcard.id)}
              color="error"
            >
              <FavoriteIcon />
            </IconButton>

            :
            <IconButton
              onClick={() => addLike()}
            >
              <FavoriteBorderIcon 
                sx={{color:'white'}}
              />
            </IconButton>
          }
          <h3 style={{color:'white'}}>{dbcard.likes}</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <span className='card-post_span' >61</span>
          <img style={{ paddingLeft: '10px' }} src="../../../image/post_icon-4.png" alt="" />
        </div>
      </div>
      <h1 style={{ paddingLeft: '3.6rem', color: '#1DA1F2', fontSize: '13px' }} >Show this trend</h1>
      <div className='small-scretch-bottom'></div>
    </div >
  )
}

export default ProductCard