import { Button, } from "@mui/material";
import { height } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

const Profile = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

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
						<img src={profile1} alt="" />
					</div>
					<div className='profile__block'>
						<div className='profile__info'>
							<h2>Davide Biscuso</h2>
							<span>@biscuttu</span>
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
										<CalendarMonthIcon/>
									</IconButton>
									<span>Joined September 2011</span>
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
							{/* <button >Edit profile</button> */}
							<Button variant="outlined" color="primary" >Tweet</Button>
						</div>
						{/* button  end*/}
					</div>
				</div>
				{/*  */}
				{/* <div className='profile__category'>
					<div>Tweets</div>
					<div>Tweets & replies</div>
					<div>Media</div>
					<div>Likes</div>
				</div> */}
				{/*  */}
				<div className='profile__category'>
					<Box sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
								<Tab label="Tweets" {...a11yProps(0)} />
								<Tab label="Media" {...a11yProps(1)} />
								<Tab label="Likes" {...a11yProps(2)} />
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							Tweets
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