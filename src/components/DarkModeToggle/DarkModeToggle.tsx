import { useCallback } from 'react'
import { IconButton, Stack, Typography } from '@mui/material'
import { tKeys } from '@/languages'
import { dispatchedActions, useAppSelector } from '@/redux'
import { selectDarkMode } from '@/redux/ui/selectors'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTranslation } from 'react-i18next'

export const DarkModeToggle = () => {
  const { t } = useTranslation()

  const usesDarkMode = useAppSelector(selectDarkMode)

  const toggleDarkMode = useCallback(() => {
    dispatchedActions.ui.setDarkMode(!usesDarkMode)
  }, [usesDarkMode])

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body2">{t(tKeys.ui.toggleDarkMode)}</Typography>
      <img src="/images/dark-mode-toggle.svg" alt="dark-mode-toggle" />
      <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
        {usesDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Stack>
  )
}
