import { ThemeOptions } from '@mui/material'
import { Rubik as GoogleFont } from 'next/font/google'

export const FontPrimary = GoogleFont({ subsets: ['latin', 'latin-ext'] })

export const fontSizes = {
  large: '1.25rem',
  medium: '1rem',
  mediumLarge: '1.125rem',
  mediumSmall: '0.875rem',
  small: '0.75rem',
  xLarge: '1.5rem',
  xSmall: '0.5rem',
  xxLarge: '1.75rem',
  xxSmall: '0.25rem',
  xxxLarge: '2rem',
  xxxMega: '2.25rem',
} as const

export type FontSizes = keyof typeof fontSizes

export const themeTypography: ThemeOptions['typography'] = {
  allVariants: {
    fontFamily: FontPrimary.style.fontFamily,
    fontWeight: FontPrimary.style.fontWeight,
  },
  body1: {
    fontSize: fontSizes.mediumLarge,
    fontWeight: 400,
  },
  body2: {
    fontSize: fontSizes.mediumSmall,
    fontWeight: 400,
  },
  fontFamily: FontPrimary.style.fontFamily,
  fontSize: 16,
  h1: {
    fontSize: fontSizes.xxxMega,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  h2: {
    fontSize: fontSizes.xxxLarge,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  h3: {
    fontSize: fontSizes.xLarge,
    fontStyle: 'normal',
    fontWeight: 700,
  },
}
