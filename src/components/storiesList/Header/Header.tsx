import { Container, Typography, useTheme } from '@mui/material'
import { SVGImage } from '@/components/common/SVGImage/SVGImage'
import { tKeys } from '@/languages'
import { t } from 'i18next'
import LogoSrc from '@/assets/Logo.svg'
import { styles } from './Header.styles'

export const Header = () => {
  const theme = useTheme()

  return (
    <>
      <Container>
        <div css={styles.insideContainer(theme)}>
          <SVGImage src={LogoSrc} alt={t(tKeys.ui.metaTitle)} />
          <div css={styles.divider(theme)} />
          <Typography variant="h1">{t(tKeys.storiesList.title)}</Typography>
        </div>
      </Container>
    </>
  )
}
