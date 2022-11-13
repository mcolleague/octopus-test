import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from '.'

export default {
  title: 'ui/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
}

export const WithSubtitle = Template.bind({})
Default.args = {
  title: 'Title',
  subtitle: 'Subtitle',
}
