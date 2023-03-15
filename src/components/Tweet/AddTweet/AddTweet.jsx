import React from 'react'

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TextLimitProgress from '@mui/icons-material/TextSnippetOutlined';
import { useProfile } from '../../../contexts/profileContext';
import {
	IconButton,
	Paper,
	Avatar,
	TextareaAutosize,
	CircularProgress,
	Button,
	ListItemText
} from '@mui/material';

import './AddTweet.scss'
const AddTweet = ({ maxRows }) => {
	// const { avatar, handlePhotoChange } = useProfile();
	const [text, setText] = React.useState('');
	const textLimitPercent = Math.round((text.length / 280) * 100);
	const maxLength = 281 - text.length;
	const textCount = maxLength;
	const [image, setImage] = React.useState(null);
	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};



	const handleChangeTextArea = (e) => {
		if (e.currentTarget && text.length <= 280) {
			setText(e.currentTarget.value)
		}
	}

	const handleClickAddTweet = () => {

		setText('');
	};


	return (
		<div className="addForm">
			<div className="addFormBody">
				<Avatar
					className="tweetAvatar"
					alt={`Аватарка пользователя UserAvatar`}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-8Yfb8rk_qzd6dxIkEyVwA0vLAgqI_hJyHlgC8M2j_gwGCIMs0jgn6sApygyN8vIJik&usqp=CAU"
				/>

				<TextareaAutosize
					onChange={handleChangeTextArea}
					maxRows={maxRows}
					value={text}
					className="addFormTextarea"
					placeholder="What’s happening?" />
			</div>
			<div className="addFormBottom">
				<div className="tweetFooter addFormBottomActions">
					<IconButton color='primary' >
						<label
							className='file__input'
							htmlFor="imageUpload"
						>
							<ImageOutlinedIcon />
						</label>
						<input
							type="file"
							id="imageUpload"
							style={{ display: "none" }}
							onChange={handleImageChange}
						/>
					</IconButton>
					<IconButton color='primary' >
						<EmojiIcon style={{ fontSize: 26 }} />
					</IconButton>
				</div>
				<div className="addFormBottomRight">
					{text && (
						<>
							<span>{textCount}</span>
							<div className="addFormCircleProgress">
								<CircularProgress
									variant="determinate"
									size={20}
									thickness={4}
									style={textCount <= 100 ? { color: 'red' } : null}
									value={textLimitPercent} />
								<CircularProgress
									style={{ color: 'rgba(0, 0, 0, 0.1)' }}
									variant='determinate'
									size={20}
									thickness={4}
									value={100} />

							</div>
						</>
					)}
					<Button onClick={handleClickAddTweet} disabled={text.length >= 280} color='primary' variant="contained" >
						Tweet
					</Button>
				</div>
			</div>
		</div>
	)
}
export default AddTweet