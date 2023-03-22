import React, { createContext, useContext, useReducer, useState } from "react";
import axios from 'axios'

export const profileContext = React.createContext();
export const useProfile = () => useContext(profileContext);


const INIT_STATE = {
  first_name: "",
  last_name: "",
  email: "",
  profile_image: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CURRENT_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

const API = 'http://35.234.109.231/api/account/customization/';

const ProfileContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [visibleEditProfile, setVisibleEditProfile] = useState(false);
	const [error ,setError] = useState(false);
	const [avatar, setAvatar] = useState(null)
	const handlePhotoChange = (e) => {
		setAvatar(e.target.files[0]);
	};

	const handleClickOpenEditProfile = () => {
		setVisibleEditProfile(true);
	}
	const onCloseEditProfile = () => {
		setVisibleEditProfile(false);
	}

	const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProfile() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));

      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const url = `${API}`;
      const res = await axios(url, config);
      console.log(res);
      const data = res.data[0];
      console.log("CURRENT USER", data);

      dispatch({
        type: "GET_CURRENT_USER",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function saveEditProfile(userData) {
    try {
      const newData = new FormData();

      
      newData.append("first_name", userData.first_name);
      newData.append("last_name", userData.last_name);
      newData.append("name", userData.name);
      // newData.append("date_birth", userData.date_birth);
      // newData.append("email", userData.email);
			// newData.append("password", userData.password);
			// newData.append("bio", userData.bio);
      // newData.append("city", userData.city);

      if (typeof userData.avatar === "object") {
        newData.append("avatar", userData.avatar);
      }
      const tokens = JSON.parse(localStorage.getItem("tokens"));

      //config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization, //ключ со значением
        },
      };

      await axios.post(`${API}`, newData, config);
      getProfile();
    } catch (err) {
      console.log(err);
    }
  }

  // async function resetPassword(email, navigate) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));

  //     //config
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization, //ключ со значением
  //       },
  //     };

  //     console.log(email);

  //     await axios.post(`${API}/account/reset_password/`, email, config);

  //     console.log("RESET PASSWORD WORKED!!!");

  //     getProfile();
  //     navigate("/reset");
  //   } catch (err) {
  //     console.log(err);
  //     setError(Object.values(err.response.data).flat(2));
  //   }
  // }

  // const [checkReset, setCheckReset] = useState(false);

  // async function setNewPassword(newData, handleOpen, navigate) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));

  //     //config
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization, //ключ со значением
  //       },
  //     };

  //     console.log(newData);

  //     await axios.post(
  //       `${API}/account/reset_password_complete/`,
  //       newData,
  //       config
  //     );

  //     setCheckReset(true);
  //     console.log("Password reset WORKED!!!");
  //     handleOpen();
  //     setTimeout(() => navigate("/profile"), 3000);
  //     setCheckReset(false);
  //     getProfile();
  //   } catch (err) {
  //     setError(Object.values(err.response.data).flat(2));
  //     console.log(err);
  //   }
  // }


	const values = {
		user: state.user,
		avatar: state.avatar,
		visibleEditProfile,

		getProfile,
		handleClickOpenEditProfile,
		onCloseEditProfile,
		setAvatar,
		handlePhotoChange,
		saveEditProfile,
	}
	return (
		<profileContext.Provider value={values}>{children}</profileContext.Provider>
	)
}

export default ProfileContextProvider