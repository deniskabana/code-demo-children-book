import { ThemeOptions, createTheme } from '@mui/material'

import { colors } from './colors'
import { themeTypography } from './typography'

// TODO: extrapolate if this gets over 100 lines
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
      variants: [
        {
          props: { variant: 'contained' },
          style: { boxShadow: 'none', color: colors.secondaryLight },
        },
      ],
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.08em',
          lineHeight: '20px',
          marginInlineEnd: theme.spacing(4),
          minWidth: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: colors.highlight,
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
