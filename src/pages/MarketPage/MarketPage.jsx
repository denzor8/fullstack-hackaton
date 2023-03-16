import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Store/components/Header/Header';
import BaseContent from '../Store/components/BaseContent/BaseContent';
const MarketPage = () => {
	return (
		<>
			<div style={{
				display: 'flex !important',
			}}>
				<Navbar />
				<div>
					<BaseContent />
				</div>
			</div>

		</>
	)
}

export default MarketPage