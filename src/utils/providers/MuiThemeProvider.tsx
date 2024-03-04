import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from '@/styles/theme'
import { useAppSelector } from '@/redux'
import { selectDarkMode } from '@/redux/ui/selectors'

export const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const usesDarkMode = useAppSelector(selectDarkMode)

  return <ThemeProvider theme={usesDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
}
