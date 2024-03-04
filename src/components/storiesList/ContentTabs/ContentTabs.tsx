import { Container, Tabs, Tab, Divider } from '@mui/material'
import { tKeys } from '@/languages'
import { useTranslation } from 'react-i18next'
import { styles } from './ContentTabs.styles'

export const ContentTabs = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <div>
          <Tabs value={0} onChange={() => false} aria-label="">
            <Tab label={t(tKeys.storiesList.contentTabs.stories)} value={0} />
            <Tab label={t(tKeys.storiesList.contentTabs.profiles)} value={1} />
            <Tab label={t(tKeys.storiesList.contentTabs.archived)} value={2} />
          </Tabs>
        </div>
      </Container>

      <Divider css={styles.divider} />
    </>
  )
}
