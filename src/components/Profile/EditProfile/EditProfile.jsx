import React, { useContext, useEffect, useState } from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TextLimitProgress from '@mui/icons-material/TextSnippetOutlined';
import { height } from '@mui/system';
import { TextareaAutosize, IconButton, Typography, Button, FormControl, FormGroup, TextField, Theme, } from "@mui/material";
//icons
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ClearIcon from '@mui/icons-material/Clear';


import ModalBlock from '../../ModalBlock/ModalBlock';
import { useProfile } from '../../../contexts/profileContext';
import icon6 from '../img/chaika.jpeg'
import './EditProfile.scss'

const EditProfile = ({ maxRows }) => {
	const [isVisible, setIsVisible] = useState(true);
	const [value, setValue] = React.useState(0);
	const {
		user,
		avatar,
		saveEditProfile,
		handleClickOpenEditProfile,
		onCloseEditProfile,
		handlePhotoChange,
		deletePhoto
		// visibleEditProfile,
		// getCurrentUser,
		// getProductDetails,
	} = useProfile();

	// profile
	const [userData, setUserData] = useState(user);
	const [name, setName] = useState('')
	const [aboutMe, setAboutMe] = useState('');
	// useEffect(() => {
	// 	// setError(false);
	// }, []);

	function handleSave() {
		let obj = {
			'avatar': avatar,
			'login': name,
			'aboutMe': aboutMe,
		}
		saveEditProfile(obj);
		onCloseEditProfile()
	};


	return (
		<>
			<div className='edit__profile-photo'>
				<div>
					<IconButton
						sx={{ marginRight: 10 }}
						color='primary' >
						<label
							className='file__input'
							htmlFor="imageUpload"
						>
							<AddAPhotoIcon />
						</label>
						<input
							type="file"
							id="imageUpload"
							style={{ display: "none" }}
							onChange={handlePhotoChange}
						/>
					</IconButton>

					<IconButton color='primary' >
						<label
							className='file__input'
						>
							<ClearIcon />
						</label>
						<input
							type="reset"
							style={{ display: "none" }}
							onChange={deletePhoto}
						/>
					</IconButton>

				</div>
			</div>
			<div className='edit__profile'>
				<img src={avatar ? avatar : icon6} alt="Avatar" />
			</div>
			<FormControl
				sx={{ marginBottom: '2px' }}
				component="fieldset"
				fullWidth >
				<FormGroup aria-label="position" >
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '15px',
						marginBottom: '50px'
					}}>
						<div>
							<TextField
								sx={{ marginBottom: '15px', width: '80%' }}
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
							<TextareaAutosize
								autoFocus
								sx={{ marginBottom: '15px', width: '80%' }}
								onChange={(e) => setAboutMe(e.target.value)}
								maxRows={maxRows}
								// value={text}
								className="edit__profile-about-me"
								placeholder="About Me" />
						</div>
						{/* about me */}
						<Button
							sx={{ marginBottom: '5px', width: '80%' }}
							onClick={handleSave}
							variant="contained"
							color="primary"
							fullWidth >Save Changes</Button>
					</div>
				</FormGroup>
			</FormControl>
		</>
	)
}

export default EditProfile