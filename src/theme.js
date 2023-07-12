import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// A custom theme for this app
const In3ightTheme = createTheme({
  palette: {
    primary: {
      light: '#33957a',
      main: '#007B59',
      dark: '#00563e',
    },
    // secondary: {
    //   main: '#19857b',
    // },
    point: {
      light: '#f2cd33',
      main: '#EFC100',
      dark: '#a78700',
    },
    sub1: {
      light: '#646b7a',
      main: '#3E4759',
      dark: '#2b313e',
    },
    sub2: {
      light: '#eeede9',
      main: '#EAE9E4',
      dark: '#a3a39f',
    },
    info: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
    },
    success: {
      light: '#6fbf73',
      main: '#4caf50',
      dark: '#357a38',
    },
    warning: {
      light: '#ff784e',
      main: '#ff5722',
      dark: '#b23c17',
    },
    error: {
      light: '#f6685e',
      main: '#f44336',
      dark: '#aa2e25',
      // main: red.A400,
    },
  },
});

export default In3ightTheme;