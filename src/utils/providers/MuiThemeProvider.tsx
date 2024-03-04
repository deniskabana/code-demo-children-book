import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '@/styles/theme'

export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      {/* BACKGROUND */}
      <GlobalStyles
        styles={`
        html, body, main, #__next { width: 100%; height: 100%; }
        body {
          background: linear-gradient(197.91deg, #930FE4 7.55%, #6336B3 71.48%);
          background-image: url(/app-background.jpg);
          background-size: cover;
        }`}
      />

      {children}
    </ThemeProvider>
  )
}
