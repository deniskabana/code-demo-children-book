import { ThemeOptions, createTheme } from '@mui/material'

import { colors } from './colors'
import { themeTypography } from './typography'

const commonTheme: ThemeOptions = {
  // MUI component overrides (theming/styling)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: colors.divider,
          textTransform: 'none',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
  },

  // MUI color palette
  palette: {
    divider: colors.divider,
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },

  // Shape modifications
  shape: { borderRadius: 8 },

  // MUI spacing
  spacing: (factor: number) => `${0.5 * factor}rem`,

  // MUI typography
  typography: { ...themeTypography },
}

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    ...commonTheme.palette,
    background: { default: colors.backgroundLight },
    mode: 'light',
    primary: { main: colors.primaryLight },
  },
})
