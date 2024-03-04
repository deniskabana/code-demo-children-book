import { ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material'

import { colors } from './colors'
import { themeTypography } from './typography'

const commonTheme: ThemeOptions = {
  // MUI component overrides (theming/styling)
  components: {},

  // MUI color palette
  palette: {},

  // MUI spacing
  spacing: (factor: number) => `${0.25 * factor}rem`,

  // MUI typography
  typography: { ...themeTypography },
}

const originalLightTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    background: { default: colors.backgroundLight },
    mode: 'light',
    primary: { main: colors.primaryLight },
  },
})

export const lightTheme = responsiveFontSizes(originalLightTheme)
