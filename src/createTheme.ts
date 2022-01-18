import { createTheme } from '@material-ui/core/styles'

const theme = {
  palette: {
    primary: {
      main: '#00FFCE'
    },
    secondary: {
      main: '#ffba32'
    }
  },
  typography: {
    fontFamily: 'Barlow, sans-serif',
    fontWeightLight: 500,
    fontWeightBold: 600
  }
}

export default createTheme(theme);
