import React, { useState } from 'react'

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TextLimitProgress from '@mui/icons-material/TextSnippetOutlined';
import { useProfile } from '../../../contexts/profileContext';
import styles from '../../Messages/styles/Chat.module.scss'
import EmojiPicker from 'emoji-picker-react';
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
import { usePosts } from '../../../contexts/postsContext';
import { useNavigate } from 'react-router-dom';
const AddTweet = ({ maxRows }) => {
	// const { avatar, handlePhotoChange } = useProfile();
	const navigate = useNavigate()
	const [text, setText] = useState('');
	const textLimitPercent = Math.round((text.length / 280) * 100);
	const maxLength = 281 - text.length;
	const textCount = maxLength;
	const [images, setImage] = useState(null);
	const [emoji, setEmoji] = useState(null);
	const [isOpen, setOpen] = useState(false);
	const [users, setUsers] = useState(0);
	const { createdPost, posts } = usePosts()
	const handleChange = ({ target: { value } }) => setText(value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!text) return;
		setText("");
	};


	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};
	const handleChangeTextArea = (e) => {
		if (e.target && text.length <= 280) {
			setText(e.target.value)
		}
		if (!text) {
			return setText("");
		}


		handleChange()
	}

	function handleSave() {
		let newProduct = {
			"media": images,
			"descriptions": text
		}
		createdPost(newProduct, navigate)
		setText('')
	}


	const onEmojiClick = ({ emoji }) => setText(`${text} ${emoji}`);

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
					placeholder="What’s happening?"
				/>
			</div>
			<div className="addFormBottom">
				<div className="tweetFooter addFormBottomActions emoji">
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
							placeholder='Media'
						/>
					</IconButton>
					{/* <div className='emoji'> */}
					<div className='d-flex align-center justify-center'>
						<IconButton
							onClick={() => setOpen(!isOpen)}
							sx={{ marginLeft: 5 }} color='primary' >
							<EmojiIcon
								style={{ fontSize: 26, }} />
						</IconButton>
						{isOpen && (
							<div className='addTweetEmojies'>
								<EmojiPicker onEmojiClick={onEmojiClick} />
							</div>
						)}
					</div>
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
					<Button onClick={handleSave} disabled={text.length >= 280} color='primary' variant="contained" >
						Tweet
					</Button>
				</div>
			</div>
		</div>
	)
}
export default AddTweet