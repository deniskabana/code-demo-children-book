import { ThemeOptions } from '@mui/material'
import { Rubik as GoogleFont, Playfair_Display as SansGoogleFont } from 'next/font/google'

export const FontPrimary = GoogleFont({ subsets: ['latin', 'latin-ext'] })
export const FontSecondary = SansGoogleFont({ subsets: ['latin', 'latin-ext'] })

export const themeTypography: ThemeOptions['typography'] = {
  allVariants: {
    fontFamily: FontPrimary.style.fontFamily,
    fontWeight: FontPrimary.style.fontWeight,
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '22px',
  },
  body2: {
    // CARTOON FONT
    fontFamily: FontSecondary.style.fontFamily,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '24px',
  },
  fontFamily: FontPrimary.style.fontFamily,
  fontSize: 16,
  h1: {
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: '56px',
  },
  h2: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  h3: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
  },
}
