import { Button, Container, Divider, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material'
import { SVGImage } from '@/components/SVGImage/SVGImage'
import { tKeys } from '@/languages'
import { useTranslation } from 'react-i18next'
import LogoSrc from '@/assets/Logo.svg'
import GroupAddSrc from '@/assets/icons/group_add.svg'

export const StoriesList = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <>
      <Container>
        {/* HEADER */}
        <Stack direction="row">
          <SVGImage src={LogoSrc} alt={t(tKeys.ui.metaTitle)} />
          <Divider orientation="vertical" />
          <Typography variant="h1">{t(tKeys.storiesList.title)}</Typography>
        </Stack>
      </Container>

      {/* CONTENT TABS */}
      <Container>
        <div>
          <Tabs value={0} onChange={() => false} aria-label="">
            <Tab label={t(tKeys.storiesList.contentTabs.stories)} value={0} />
            <Tab label={t(tKeys.storiesList.contentTabs.profiles)} value={1} />
            <Tab label={t(tKeys.storiesList.contentTabs.archived)} value={2} />
          </Tabs>
        </div>
      </Container>

      {/* ACTION BUTTONS */}
      <Container>
        <Stack direction="row" justifyContent="flex-end" gap={theme.spacing(2)}>
          <Button
            variant="outlined"
            startIcon={<SVGImage src={GroupAddSrc} alt={t(tKeys.ui.metaTitle)} />}
          >
            {t(tKeys.storiesList.uiActions.createProfile)}
          </Button>
          <Button variant="contained">{t(tKeys.storiesList.uiActions.createStory)}</Button>
        </Stack>
      </Container>

      {/* STORIES LIST */}

      {/* SCROLL INDICATOR */}
    </>
  )
}