import React from 'react'
import { render } from '@testing-library/react'
import { composeStory } from '@storybook/testing-react'
import * as stories from './Section.stories'

const Default = composeStory(stories.Default, stories.default)

test('Section should render children', () => {
  const { getByText } = render(<Default />)
  const child = getByText('Child component')
  expect(child).not.toBeNull()
})
