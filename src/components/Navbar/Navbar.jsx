import React, { useEffect } from 'react'
import {
  Typography,
  Button,
} from "@mui/material";
// icons
import Home from './img/home.png'
import TwitterIcon from './img/twitter-icon.png'
import icon from './img/notif.png'
import icon1 from './img/mess.png'
import icon2 from './img/book.png'
import icon3 from './img/lists.png'
import icon4 from './img/prof.png'
import icon5 from './img/more.png'
import icon6 from '.././Profile/img/chaika.jpeg'
import StoreIcon from '@mui/icons-material/Store';
//
import { useNavigate } from 'react-router-dom'
import ModalBlock from '../ModalBlock/ModalBlock'
import AddTweet from '../Tweet/AddTweet/AddTweet'
import './Navbar.scss'
import { useProfile } from '../../contexts/profileContext';
import { useAuth } from '../../contexts/authContext';


const Navbar = () => {
  const navigate = useNavigate();
  const [visibleAddTweet, setVisibleAddTweet] = React.useState(false);
  const { avatar, setAvatar } = useProfile();
  const {checkAuth, logout, handleLogout} = useAuth()
  
  React.useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true);
  }
  const onCloseAddTweet = () => {
    setVisibleAddTweet(false);
  }

  <>
    <Button
      onClick={handleClickOpenAddTweet}
      variant="outlined"
      color="primary">Tweet</Button>
    <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
      <div style={{ width: 550 }} >
        <AddTweet maxRows={15} />
      </div>
    </ModalBlock>
  </>
  return (
    <>
      <div className='container_navbar'>
        <div className=''>
          <div className='twitter_icon-img cu-p'>
            <img src={TwitterIcon} alt="" width={27} height={23} />
          </div>

          <div className='twiiter_icons cu-p'>
            <div
              className='d-flex homeIcon'
              onClick={() => navigate('/')}
            >
              <img
                src={Home}
                alt=""
                width={27}
                height={25} />
              <Typography variant="h6" >
                Home
              </Typography>
            </div>
          </div>

          <div className='twiiter_icons cu-p'>
            <div className='d-flex homeIcon'>
              <img
                src={icon}
                alt=""
                width={25}
                height={25} />
              <Typography onClick={() => navigate('/notifications')} variant="h6" >
                Notifications
              </Typography>
            </div>
          </div>

          <div className='twiiter_icons cu-p'>
            <div className='d-flex homeIcon'>
              <img
                src={icon1}
                alt=""
                width={25}
                height={22} />
              <Typography variant="h6" onClick={() => navigate('/message')} >
                Messages
              </Typography>
            </div>
          </div>

          <div className='twiiter_icons cu-p'>
            <div className='d-flex homeIcon'>
              <img
                src={icon2}
                alt=""
                width={25}
                height={22} />
              <Typography variant="h6" onClick={() => navigate('/favorites')} >
                Bookmarks
              </Typography>
            </div>
          </div>

          <div className='twiiter_icons cu-p'>
            <div className='d-flex homeIcon'>
              <img
                src={icon3}
                alt=""
                width={25}
                height={22} />
              <Typography variant="h6"  onClick={() => handleLogout(navigate)} >
                Logout
              </Typography>
            </div>
          </div>

          <div
            onClick={() => navigate('/profile')}
            className='twiiter_icons cu-p'
          >
            <div className='d-flex homeIcon'>
              <img
                src={icon4}
                alt=""
                width={25}
                height={22} />
              <Typography variant="h6" >
                Profile
              </Typography>
            </div>
          </div>

          <div

            className='twiiter_icons cu-p'>
            <div className='d-flex homeIcon'>
              <img
                src={icon5}
                alt=""
                width={25}
                height={22} />
              <Typography variant="h6" >
                More
              </Typography>
            </div>
          </div>
          {/* tweet market */}
          <div
            onClick={() => navigate('/market')}
            className='twiiter_icons cu-p'>
            <div className='d-flex homeIcon'>
              <StoreIcon sx={{ color: '#fff', marginRight: 1 }} />
              <Typography variant="h6" >
                Tweet Market
              </Typography>
            </div>
          </div>

        </div>
        <>
          <Button
            onClick={handleClickOpenAddTweet}
            variant="outlined"
            color="primary">Tweet</Button>
          <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
            <div style={{ width: 550 }} >
              <AddTweet maxRows={15} />
            </div>
          </ModalBlock>
        </>

        <div className='container_navbar__profile' style={{ display: 'flex', alignItems: 'center' }} >
          <div>
            <img src={avatar ? avatar : icon6} alt="" className="card_user_icon" />
          </div>

          <div style={{ paddingLeft: '10px' }} >
            <div>
              <h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }} >Devon Lane</h4>
              <h4 style={{ margin: 1, color: '#8899A6' }} >@johndue 23</h4>
              <button onClick={() => handleLogout(navigate)}>Logout</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar