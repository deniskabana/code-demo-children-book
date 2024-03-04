import { Container, Stack, Button, useTheme } from '@mui/material'
import { SVGImage } from '@/components/common/SVGImage/SVGImage'
import { tKeys } from '@/languages'
import GroupAddSrc from '@/assets/icons/group_add.svg'
import { useTranslation } from 'react-i18next'
import { styles } from './ActionsButtons.styles'

export const ActionButtons = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Container css={styles.wrapper(theme)}>
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
  )
}
