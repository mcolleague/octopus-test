---
to: components/<%= dir %>/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import <%= name %> from '.'

export default {
  title: '<%= dir %>/<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Title'
}
