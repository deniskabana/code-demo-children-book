import { describe, expect, it } from '@jest/globals'
import { getByText, render } from '@testing-library/react'
import { HomePage } from '@/views/homepage/HomePage'
import { homepageTranslation } from '@/languages/translations/homepage'
import { TestAppProvider } from './TestAppProvider'

describe('Rendering Homepage view', () => {
  it('works', () => {
    const homepage = render(
      <TestAppProvider>
        <HomePage />
      </TestAppProvider>,
    )
    const title = getByText(homepage.container, homepageTranslation.appTitle.cs)
    expect(title).toBeDefined()
  })
})
