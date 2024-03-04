import { useEffect, useState } from 'react'
import { Container, useTheme } from '@mui/material'
import { QueryKeys } from '@/api/queryKeys'
import { storiesApi } from '@/api/storiesApi'
import { useQuery } from '@tanstack/react-query'
import { safeDocument } from '@/utils/ssrSafeDocument'
import { styles } from './StoriesDisplay.styles'
import { StoryCard } from '../StoryCard/StoryCard'

export const StoriesDisplay = () => {
  const theme = useTheme()
  const [sliderIndex, setSliderIndex] = useState(1)
  const [sizes, setSizes] = useState(
    safeDocument?.getElementById('story-slider')?.getBoundingClientRect() ?? {
      width: 0,
    },
  )

  // TODO: none of this works

  useEffect(() => {
    const listener = () => {
      setSizes(
        safeDocument?.getElementById('story-slider')?.getBoundingClientRect() ?? {
          width: 0,
        },
      )
    }

    document.addEventListener('resize', listener)

    return function cleanup() {
      document.removeEventListener('resize', listener)
    }
  })

  const { data: storiesListData } = useQuery(
    [QueryKeys.Stories],
    () => storiesApi.getStoriesList(),
    { onError: (error) => console.error(error) },
  )

  return (
    <Container>
      <div css={styles.wrapper}>
        <div css={styles.slideContainer(theme)} id="story-slider">
          {storiesListData?.stories?.map((story, index) => (
            <div
              key={story.id}
              css={styles.slide(index === sliderIndex, sizes)}
              onClick={() => setSliderIndex(index)}
            >
              <StoryCard isActive={index === sliderIndex} data={story} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
