import React from 'react'
import { render } from '@testing-library/react'
import { composeStory } from '@storybook/testing-react'
import * as stories from './Button.stories'

const Disabled = composeStory(stories.Disabled, stories.default)

test('should have disabled attribute if disabled', () => {
  const { getByRole } = render(<Disabled />)
  const button = getByRole('button')
  expect(button).toHaveAttribute('disabled')
})
