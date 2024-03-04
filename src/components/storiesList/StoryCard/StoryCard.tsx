import { Button, Card, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { tKeys } from '@/languages'
import { SVGImage } from '@/components/common/SVGImage/SVGImage'
import BookRead from '@/assets/icons/book_read.svg'
import Archive from '@/assets/icons/archive.svg'
import { styles } from './StoryCard.styles'

const MAX_EXCERPT_LENGTH = 100

export type StoryCardProps = {
  data: {
    excerpt: string
    image: string
    title: string
  }
  isActive?: boolean
}

export const StoryCard = ({ data, isActive }: StoryCardProps) => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <div css={styles.wrapper}>
      <Card css={styles.card(!!isActive)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img css={styles.img} src={data.image} alt={data.title} />
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="body1" css={styles.excerpt(!!isActive)}>
          {data.excerpt.slice(0, MAX_EXCERPT_LENGTH)}
        </Typography>

        <div css={styles.buttons(!!isActive, theme)}>
          <Button
            variant="text"
            startIcon={<SVGImage src={BookRead} alt={t(tKeys.storiesList.uiActions.doReadStory)} />}
          >
            {t(tKeys.storiesList.uiActions.doReadStory)}
          </Button>
          <Button
            variant="text"
            startIcon={<SVGImage src={Archive} alt={t(tKeys.storiesList.uiActions.doArchive)} />}
          >
            {t(tKeys.storiesList.uiActions.doArchive)}
          </Button>
        </div>
      </Card>
    </div>
  )
}
