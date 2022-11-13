---
to: "<%= locals['with-test'] ? `components/${dir}/${name}/${name}.test.tsx` : null %>"
---
import { render } from '@testing-library/react'
import { composeStory } from '@storybook/testing-react'
import * as stories from './<%= name %>.stories'

const Default = composeStory(stories.Default, stories.default)

test('renders <%= name %> with default args', () => {
  const { getByText } = render(<Default />)
  const nameElement = getByText(Default.args.title)
  expect(nameElement).not.toBeNull()
})
