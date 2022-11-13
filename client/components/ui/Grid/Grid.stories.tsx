import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Grid from '.'

export default {
  title: 'ui/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>Child component</div>,
}
