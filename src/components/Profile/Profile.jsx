import { Button, } from "@mui/material";
import { height } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//icons
import { IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState, useEffect } from 'react';
import './Profile.scss'
import prev from './img/prev.png'
import profile1 from './img/profile.png'
import bgc from './img/Placeholder.png'
import '../../styles/index.scss'
import EditProfile from "./EditProfile/EditProfile";
import ModalBlock from '../ModalBlock/ModalBlock'
import { useProfile } from "../../contexts/profileContext";
import icon6 from './img/chaika.jpeg'
import { usePosts } from "../../contexts/postsContext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";

// scroll to top
function TabPanel(props) {
	const { children, value, index, ...other } = props;
	

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
// scroll to top end

const Profile = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [value, setValue] = React.useState(0);
	const emailAuth = localStorage.getItem('email')
	const nameAuth = localStorage.getItem('name')
	const {getPosts, posts, deletePost, toggleLike, like} = usePosts()
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate()
	// profile
	const {
		avatar,
		visibleEditProfile,
		getCurrentUser,
		getProductDetails,
		saveEditedProfile,
		handleClickOpenEditProfile,
		onCloseEditProfile,
		setAvatar,
	} = useProfile();
	// scroll to top 
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	
	const handleMenu = (event) => {
	setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
	setAnchorEl(null);
	};

	useEffect(() => {
		getPosts()
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	// scroll to top  end
	return (
		<>
			<div className='profile'>
				<div className='profile__container'>
					{isVisible && (
						<div
							onClick={scrollToTop}
							className='profile__fixed'>
							<div className='profile__scroll'>
								<div className="profile_icon">
									<img
										src={prev}
										alt=""
									/>
								</div>
								<div className='profile__name'>
									<div className='profile__name-name'>Name</div>
									<div className='profile__name-tweet'>9 tweets</div>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className='profile__parent'>
					<div>
						<img src={bgc} alt="" />
					</div>
					<div className='profile__child'>
						<img src={avatar? avatar : icon6}alt="Avatar" />
					</div>
					<div className='profile__block'>
						<div className='profile__info'>
							<h2>{nameAuth}</h2>
							<span style={{color: 'white'}} >{emailAuth}</span>
							<p>Product Designer</p>
							<div className='profile__info-data'>
								{/* location */}
								<div className='profile__location'>
									<IconButton color="secondary" >
										<LocationOnIcon />
									</IconButton>
									<span>London</span>
									{/* location  end*/}
								</div>
								{/* data */}
								<div className='profile__location'>
									<IconButton color="secondary" >
										<CalendarMonthIcon />
									</IconButton>
									<span>Joined March 2023</span>
									{/* data end*/}
								</div>
							</div>

							<div className='profile__info-followers'>
								{/* location */}
								<div className='profile__title'>
									<h5>700</h5>
									<span>Following</span>
									{/* location  end*/}
								</div>
								{/* data */}
								<div className='profile__title'>
									<h5>70</h5>
									<span>Followers</span>
								</div>
							</div>

						</div>
						{/* button */}
						<div className='profile__btn'>
							<>
								<Button
									onClick={handleClickOpenEditProfile}
									variant="outlined"
									color="primary">Edit profile</Button>
								<ModalBlock
									title='Edit profile'
									onClose={onCloseEditProfile}
									visible={visibleEditProfile}>
									<div style={{width: 580,}} >
										<EditProfile maxRows={15} />
									</div>
								</ModalBlock>
							</>
						</div>
						{/* button  end*/}
					</div>
				</div>
				<div className='profile__category'>
					<Box sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
								{/* <Tab label="Tweets" {...a11yProps(0)} />
								<Tab label="Media" {...a11yProps(1)} />
								<Tab label="Likes" {...a11yProps(2)} /> */}
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							Tweets
							{posts.map(card => (
								card.owner == emailAuth? (
						<div className="profile_card">
							<div style={{paddingRight: '1rem'}} className="card_post p16">
							<div style={{ display: 'flex', alignItems: 'center' }} >
								<div>
								<img src="../../../image/user_icon-1.png" alt="" className="card_user_icon" />
								</div>
					
								<div style={{ paddingLeft: '10px' }} >
								<div style={{ display: 'flex', alignItems:'center'}} >
									<h4 style={{ margin: 0, color: 'white', fontSize: '15px', fontWeight: '700px' }}>{card.owner}</h4>
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
													<MenuItem onClick={() => deletePost(card.id)} >
													Delete
													</MenuItem>
												</Menu>
									</div>
								</div>
					
								<h4 style={{ margin: 0, fontSize: '15px', fontWeight: '500px', color: 'white', display: 'flex', flex: 'start'}} >{card.descriptions}</h4>
					
								</div>
							</div>
					
							<img onClick={() => navigate(`/details/${card.id}`)} style={{ paddingLeft: '1.5rem' }} src="../../../image/Container.png" alt="" />
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
								{card.likes.map(item => (
									<h1>{item}</h1>
								))}
								{like ? (
								<>
									{/* <span className='card-post_span_like' >6.2K</span>
									<img onClick={() => toggleLike(card.id)} style={{ paddingLeft: '10px' }} src="../../../image/post_icon-3.png" alt="" /> */}
									<button onClick={() => toggleLike(card.id)}  >DisLike</button>
								</>
								): (
								<button onClick={() => toggleLike(card.id)}  >Like</button>
								)}                  
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
									<h1></h1>
								)
							))}
						</TabPanel>
						<TabPanel value={value} index={1}>
							Media
						</TabPanel>
						<TabPanel value={value} index={2}>
							Likes
						</TabPanel>
					</Box>
				</div>
			</div>
			{/* <hr /> */}
		</>
	)
}

export default Profile