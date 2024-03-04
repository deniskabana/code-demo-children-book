import { ThemeOptions } from '@mui/material'
import {
  Rubik as GoogleFont,
  Playfair_Display as SansGoogleFont,
  Hanken_Grotesk as GoogleFontSecondary,
} from 'next/font/google'

export const FontPrimary = GoogleFont({ subsets: ['latin', 'latin-ext'] })
export const FontSecondary = GoogleFontSecondary({ subsets: ['latin', 'latin-ext'] })
export const FontSans = SansGoogleFont({ subsets: ['latin', 'latin-ext'] })

export const themeTypography: ThemeOptions['typography'] = {
  allVariants: {
    fontFamily: FontSecondary.style.fontFamily,
    fontWeight: FontSecondary.style.fontWeight,
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '22px',
  },
  body2: {
    // CARTOON FONT
    fontFamily: FontSans.style.fontFamily,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '24px',
  },
  fontFamily: FontSecondary.style.fontFamily,
  fontSize: 16,
  h1: {
    fontFamily: FontPrimary.style.fontFamily,
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: '56px',
  },
  h2: {
    fontFamily: FontPrimary.style.fontFamily,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 700,
  },
  h3: {
    fontFamily: FontPrimary.style.fontFamily,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
  },
}
