import { createTheme } from '@mui/material'

const sbtColors = {
  grey: '#b0bdc9',
  lightGrey: '#f5f8fd',
  darkGrey: '#2c2c2e',
  textGrey: '#3d3c40',
  textLightGrey: '#EBF2F9'
}

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif"
  },
  palette: {
    primary: {
      dark: sbtColors.darkGrey,
      main: sbtColors.grey,
      light: sbtColors.lightGrey
    },
    text: {
      primary: sbtColors.textGrey,
      secondary: sbtColors.textLightGrey
    }
  }
})

export default theme
