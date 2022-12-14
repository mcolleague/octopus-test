import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'

export default {
  title: 'ui/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled button',
  disabled: true,
}
