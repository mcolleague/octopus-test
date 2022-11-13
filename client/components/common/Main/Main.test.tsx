import { render } from '@testing-library/react'
import { composeStory } from '@storybook/testing-react'
import * as stories from './Main.stories'

const Default = composeStory(stories.Default, stories.default)

test('Main should render children', () => {
  const { getByText } = render(<Default />)
  const child = getByText('Child component')
  expect(child).not.toBeNull()
})
