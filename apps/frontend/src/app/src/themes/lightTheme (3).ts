import { createTheme, Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E6D8C9',
      light: '#323232',
      dark: '#E53935',
  
    },
    secondary: {
      main: '#D8C7B5',
      dark: '#3D2B1F',
    },

    error: {
      main: red.A400,
    },

   
  },
 
  typography: {
    fontFamily: 'PT Sans',

    h1: {
      fontSize: '56px',
      marginTop: '-83px',
    },
    subtitle2: {
      fontSize: '18px',
    },
    subtitle1: {
      fontSize: '14px',
      fontWeight: 400,
    },
    body1: {
      fontSize: '16px',
    },
  },
});

export default lightTheme;
