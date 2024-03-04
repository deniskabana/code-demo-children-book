import { Box, Stack } from '@mui/material'
import { Header } from '@/components/storiesList/Header/Header'
import { ContentTabs } from '@/components/storiesList/ContentTabs/ContentTabs'
import { ActionButtons } from '@/components/storiesList/ActionButtons/ActionsButtons'
import { StoriesDisplay } from '@/components/storiesList/StoriesDisplay/StoriesDisplay'

export const StoriesList = () => {
  return (
    <Stack direction="column" height="100%" maxHeight="100%">
      <Header />
      <ContentTabs />
      <ActionButtons />
      <Box flexGrow={1}>
        <StoriesDisplay />
      </Box>

      {/* STORIES LIST */}
      {/* SCROLL INDICATOR */}
    </Stack>
  )
}
