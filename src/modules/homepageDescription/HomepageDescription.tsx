import { useState } from 'react'
import {
  Box,
  Checkbox,
  Divider,
  FormGroup,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { tKeys } from '@/languages'
import { useTranslation } from 'react-i18next'
import { SVGImage } from '@/components/SVGImage/SVGImage'
import { DarkModeToggle } from '@/components/DarkModeToggle/DarkModeToggle'
import { usePersistentState } from 'react-persistent-state-hook'
import { styles } from './styles'

export const HomepageDescription = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  const [persistent, setPersistent] = useState(true)

  const [user, setUser] = usePersistentState<{ age: number; name: string }>(
    { age: 0, name: '9' },
    { persistent },
  )

  // SX styles used to reduce starter template clutter.
  // NEVER USE SX STYLES IN PRODUCTION!
  return (
    <Paper sx={{ mt: 4, p: 8 }}>
      <Box textAlign="center">
        <Divider sx={{ mb: 4, mt: 8 }} />

        <Typography variant="h1" align="center" color={theme.palette.primary.main}>
          {t(tKeys.homepage.appTitle)}
        </Typography>
      </Box>

      <Divider sx={{ mb: 12, mt: 4 }} />

      <Typography variant="h3">{t(tKeys.homepage.title)}</Typography>

      <br />

      <Typography variant="body1">{t(tKeys.homepage.description)}</Typography>

      <br />

      <Typography variant="body1">{t(tKeys.homepage.nextSteps)}</Typography>

      <Divider sx={{ mb: 8, mt: 8 }} />

      <DarkModeToggle />

      <Stack direction="row" mt={4}>
        <TextField
          value={user.name}
          label="Name"
          variant="outlined"
          onChange={(e) => setUser((prevUser) => ({ ...prevUser, name: e.target.value }))}
        />
        <TextField
          value={user.age}
          label="Age"
          variant="outlined"
          onChange={(e) => setUser((prevUser) => ({ ...prevUser, age: parseInt(e.target.value) }))}
        />
      </Stack>

      <br />

      <FormGroup>
        <FormLabel>
          <Checkbox checked={persistent} onChange={(e) => setPersistent(e.currentTarget.checked)} />
          Use persistent state
        </FormLabel>
      </FormGroup>
    </Paper>
  )
}
