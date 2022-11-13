import { render } from '@testing-library/react'
import { composeStory } from '@storybook/testing-react'
import * as stories from './Basket.stories'

const Default = composeStory(stories.Default, stories.default)

test('should hide basket items indicator if zero', () => {
  const { getByTitle } = render(<Default />)
  const basketItems = getByTitle('Basket items')
  expect(basketItems).not.toBeVisible()
})
