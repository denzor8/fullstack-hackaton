import React from 'react'
import Profile from '../../components/Profile/Profile'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
const ProfilePage = () => {
	return (
		<>
			<Navbar />
			<div style={{ display: 'flex' }}>
				<Profile />
				<Search />
			</div>
		</>
	)
}

export default ProfilePage