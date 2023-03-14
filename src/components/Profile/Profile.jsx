import React from 'react'
import './Profile.scss'
import prev from './img/prev.png'
import profile from './img/profile.png'
const Profile = () => {
	return (
		<div className='profile' >
			<div className='profile__container'>
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

			<img src="../../../Image/Container.png" alt="" />

		</div>
	)
}

export default Profile
