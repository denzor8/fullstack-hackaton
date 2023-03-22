import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.scss'
import { IconButton, } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

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
const HeaderAdmin = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };
  return (
    <div className="wrapper1 clear">
      <header className="d-flex justify-between align-center p-30">
        <div
          className="d-flex align-center cu-p"
          onClick={() => navigate("/market")}
        >
          <IconButton color='primary' >
            <TwitterIcon  />
          </IconButton>
          <div>
            <h3 className="text-uppercase">Админская платформа</h3>
            <p className="opacity-5">РАБОТАЙ</p>
          </div>
        </div>
        <ul className="d-flex">
          <li
            onClick={() => navigate("/addProduct")}
            className='mr-20 cu-p'
          >
            Добавить продукт
          </li>
          <li
            onClick={() => logout()}
            className='mr-20 cu-p'
          >
            Выйти
          </li>
        </ul>
      </header>
    </div>

  )
}

export default HeaderAdmin