import React, { useContext, useEffect, useState } from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TextLimitProgress from '@mui/icons-material/TextSnippetOutlined';
import ModalBlock from '../../ModalBlock/ModalBlock';
import { useProfile } from '../../../contexts/profileContext';
import { Typography, Button, FormControl, FormGroup, TextField, Theme, } from "@mui/material";
import { height } from '@mui/system';

const EditProfile = ({ maxRows }) => {
	const [isVisible, setIsVisible] = useState(true);
	const [value, setValue] = React.useState(0);
	const {
		avatar,
		visibleEditProfile,
		getCurrentUser,
		getProductDetails,
		saveEditedProfile,
		handleClickOpenEditProfile,
		onCloseEditProfile,
		setAvatar
	} = useProfile();
	// profile
	// const [avatar, setAvatar] = useState(null)
	const [name, setName] = useState('')
	const [aboutMe, setAboutMe] = useState('');
	useEffect(() => {
		// setError(false);
	}, []);

	function handleSave() {
		let obj = {
			'avatar': avatar,
			'login': name,
			'aboutMe': aboutMe,
		}
		// saveEditedProfile(obj);
		onCloseEditProfile()
	};

	const handlePhotoChange = (e) => {
    setAvatar(e.target.files[0]);
  };
	return (

		<FormControl
			sx={{ marginBottom: '2px' }}
			component="fieldset"
			fullWidth >
			<FormGroup aria-label="position" >
				<div style={{
					display: 'flex',
					flexDirection: 'column',
				}}>
					<div>
						<TextField
							sx={{ marginBottom: '5px', }}
							autoFocus
							id="name"
							label="Name"
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="name"
							fullWidth
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					{/* about me */}
					<div>
						<TextField
							sx={{ marginBottom: '5px', }}
							autoFocus
							id="aboutMe"
							label="About me"
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="name"
							fullWidth
							onChange={(e) => setAboutMe(e.target.value)}
						/>
					</div>
					<div>
						<TextField
							sx={{ marginBottom: '5px', }}
							autoFocus
							InputLabelProps={{
								shrink: true,
							}}
							variant="filled"
							type="file"
							fullWidth
							onChange={handlePhotoChange}
						/>
					</div>
					{/* about me */}
					<Button onClick={handleSave} variant="contained" color="primary" fullWidth >Save Changes</Button>
				</div>
			</FormGroup>
		</FormControl>
	)
}

export default EditProfile