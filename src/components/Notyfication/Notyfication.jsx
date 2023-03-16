import React from 'react';
import './Notyfication.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Notyfication = () => {
  return (
	<div className='notyfication' >
		 	<h1 style={{color: 'white', padding: '20px'}} >Notification</h1>
			<div className="notifi_block">
			<Accordion sx={{background: '#17202A'}} >
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography sx={{color: 'white'}} >All</Typography>
				</AccordionSummary>
				<AccordionDetails>
				<Typography sx={{color: 'white'}} >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{background: '#17202A'}} >
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography sx={{color: 'white'}} >Verified</Typography>
				</AccordionSummary>
				<AccordionDetails>
				<Typography sx={{color: 'white'}} >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{background: '#17202A'}} >
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography sx={{color: 'white'}} >Mentions</Typography>
				</AccordionSummary>
				<AccordionDetails>
				<Typography sx={{color: 'white'}} >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	</div>
  )
}

export default Notyfication