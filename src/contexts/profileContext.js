import React, { createContext, useContext, useReducer, useState } from "react";
import axios from 'axios'

export const profileContext = React.createContext();
export const useProfile = () => useContext(profileContext);

// const API = 'http://35.234.109.231/api/account/detail/';

// при регисрации нужно логин прописать 
// avatar 
// name 
// abaout me


const INIT_STATE = {
	profile: [],
	profileDetails: null,
	avatar: null,
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case "GET_PROFILE":
			return { ...state, profile: action.payload };
		case "GET_PROFILE_DETAILS":
			return { ...state, profileDetails: action.payload };
		case "GET_PROFILE_AVATAR":
			return { ...state, avatar: action.payload };
		default:
			return state;
	}
};

const API = 'http://35.234.109.231/api/account/customization/';
const ProfileContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [visibleEditProfile, setVisibleEditProfile] = React.useState(false);
	const [avatar, setAvatar] = useState(null)
	const handlePhotoChange = (e) => {
		setAvatar(e.target.files[0]);
	};
	// const updatedAvatar = (file) => { 
	// 	setAvatar(file);
	// }

	const handleClickOpenEditProfile = () => {
		setVisibleEditProfile(true);
	}
	const onCloseEditProfile = () => {
		setVisibleEditProfile(false);
	}
	const deletePhoto = () => {
		if (avatar) {
			avatar.remove();
		}
	}

	const [state, dispatch] = useReducer(reducer, INIT_STATE);

	const getProfile = async () => {
		const { data } = await axios(`${API}`);
		dispatch({
			type: "GET_PROFILE",
			payload: data,
		});
	}

	const getProductDetails = async () => {
		dispatch({
			type: "GET_PROFILE_DETAILS",
			payload: null,
		});

		const { data } = await axios(`${API}`);
		dispatch({
			type: "GET_PROFILE_DETAILS",
			payload: data,
		});
	};

	async function saveEditedProfile(newProfile) {
		setLoading(true);

		try {
			const tokens = JSON.parse(localStorage.getItem('tokens'));
			// config
			const Authorization = `Bearer ${tokens.access}`;
			const config = {
				headers: {
					Authorization
				}
			};
			const res = await axios.patch(`${API}`, newProfile, config);
			console.log(res);
			getProfile();

		}
		catch (e) {
			console.log(e)
		}
	}
	const values = {
		profile: state.profile,
		profileDetails: state.profileDetails,
		// avatar:state.avatar,
		avatar,
		visibleEditProfile,

		getProfile,
		getProductDetails,
		saveEditedProfile,
		handleClickOpenEditProfile,
		onCloseEditProfile,
		setAvatar,
		handlePhotoChange,
		deletePhoto
	}
	return (
		<profileContext.Provider value={values}>{children}</profileContext.Provider>
	)
}

export default ProfileContextProvider