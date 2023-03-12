import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    // palette: {
    //     primary: {
    //         // main: 'rgb(29, 161, 242)',
    //     },
    // }
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          "'Ubuntu'",
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
})