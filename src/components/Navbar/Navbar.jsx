import React from 'react'
import {
	Typography,
	Button,
	FormControl,
	FormGroup,
	TextField,
	Theme,
} from "@mui/material";
// icons
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = () => {
	return (
		<>
			<ul>
				<TwitterIcon
					color="primary"
					className="loginSideIcon"
				/>
				{/* icon */}
				<HomeIcon
					className="loginSideIcon"
				/>
				<Typography variant="h2" className="loginSideTitle">
					Главное
				</Typography>

				<li><a href=""> Уведомление</a></li>
				<li><a href="">Сообщение</a></li>
				<li><a href="">Закладки</a></li>
				<li><a href="">Профиль</a></li>
			</ul>
		</>
	)
}

export default Navbar