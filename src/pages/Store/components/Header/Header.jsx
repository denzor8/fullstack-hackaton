import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider'
import { useCart } from '../../contexts/CartContextProvider'
import { useLike } from '../../contexts/CustomContext';
//icons 
import { IconButton, } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Header.scss'
//
// import '../../style/index.scss'
//
const settings = [
  {
    type: "Register",
    path: "/register",
  },
  {
    type: "Login",
    path: "/login",
  },
];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //
  const navigate = useNavigate();
  // const { logout, user, checkAuth } = useAuth();
  const { cart, openCart, cartLength } = useCart();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     checkAuth();
  //   }
  // }, []);
  return (
    <div className="market clear">
      <header className="d-flex justify-between align-center p-30">
        <div
          className="d-flex align-center cu-p"
          onClick={() => navigate("/market")}
        >
          <IconButton color='primary' >
            <TwitterIcon sx={{ color: '#fff' }} />
          </IconButton>
          <div>
            <h3 style={{ color: '#fff' }} className="text-uppercase">Tweet Market</h3>
          </div>
        </div>
        <ul className="d-flex">
          <li
            onClick={() => navigate("/admin")}
            style={{ color: '#fff' }}
            className='mr-20 cu-p mt-10'
          >
            Войти как админ
          </li>
          <li
            className="mr-10 cu-p"
            onClick={() => navigate("/like")}
          >
            {/* <img
              width={27}
              height={27}
              src="/img/heart.svg"
              alt="" /> */}
            <IconButton color='primary' >
              <FavoriteBorderIcon sx={{ color: '#fff' }} />
            </IconButton>
          </li>
          <li
            className="mr-30 cu-p"
            onClick={() => openCart()}
          >
            {/* <img
              onClick={() => cartLength}
              width={23}
              height={23}
              src="/img/cart.svg"
              alt="" /> */}
            <IconButton color='primary' >
              <LocalGroceryStoreIcon sx={{ color: '#fff' }} />
            </IconButton>
            <b style={{ color: '#fff' }}> ${cart?.totalPrice}</b>
          </li>
        </ul>
      </header>
    </div>

  )
}

export default Header