import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '@/styles/theme'

export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}
