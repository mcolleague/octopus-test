import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Page from '.'

export default {
  title: 'common/Page',
  component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Page title',
  description: 'Page description',
  children: <div>Child element</div>,
}
