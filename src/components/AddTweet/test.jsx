// @ts-nocheck

import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Ubuntu",
      '"Helvetica Neue"',
      "sans-serif",
    ].join(",")
  },
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(26, 145, 218)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#14171a',
    },
    action: {
      disabledBackground: 'rgb(153 216 255)',
      disabled: '#fff',
    },
  },
  // shadows: [],
  shadows: {
    24: '0px 0px 0px 0px grey, 0px 0px 0px 0px grey, 0px 0px 0px 1px grey',
    1: '0px 0px 0px 0px grey, 0px 0px 0px 0px grey, 0px 0px 0px 1px grey',
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: 'none',
        fontSize: 16,
        height: 40,
        fontWeight: 700,
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      outlinedPrimary: {
        borderColor: 'rgb(29, 161, 243)',
      },
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px',
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px',
        },
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 15,
      },
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8,
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid rgb(204, 214, 221)',
        marginBottom: 10,
        padding: '10px 15px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 800,
        },
        '& button': {
          padding: 8,
          marginRight: 20,
        },
      },
    },
  },
});

export default theme;


<div className="card_user p16">
<div style={{ display: 'flex', alignItems: 'center' }} >
	<img src="../../../image/user_icon.png" alt="" className="card_user_icon" />
	<input
		className='card_user_inp'
		placeholder='What’s happening?'
		type="text"
		maxLength={280}
		label="Multiline"
	/>
</div>

<div style={{ paddingLeft: '3rem', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
	<div>
		<img className='card-sholder' src="../../../image/part-1.png" alt="" />
		<img className='card-sholder' src="../../../image/part-2.png" alt="" />
		<img className='card-sholder' src="../../../image/part-3.png" alt="" />
		<img className='card-sholder' src="../../../image/part-4.png" alt="" />
		<img className='card-sholder' src="../../../image/part-5.png" alt="" />
	</div>

	<button className='card_user_btn'>Tweet</button>

</div>
</div>