import { ruRU } from '@mui/material/locale'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme(
  {
    palette: {
      mode: 'light',
      background: { default: 'white' },
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#030092',
      },
    },
    typography: {
      fontSize: 16,
    },
  },
  ruRU
)
