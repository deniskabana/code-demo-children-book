import { tKeys } from '@/languages'
import { StoriesList } from '@/modules/storiesList/StoriesList'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

export const StoriesListView = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>
          {t(tKeys.storiesList.title)} | {t(tKeys.ui.metaTitle)}
        </title>
      </Head>
      <main>
        <StoriesList />
      </main>
    </>
  )
}
