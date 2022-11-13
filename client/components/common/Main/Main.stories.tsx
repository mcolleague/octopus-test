import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Main from '.'

export default {
  title: 'common/Main',
  component: Main,
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>Child component</div>,
}
