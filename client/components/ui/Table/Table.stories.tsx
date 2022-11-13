import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '.'

export default {
  title: 'ui/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  headers: ['Header 1', 'Header 2'],
  data: [
    ['Value 1', 'Value 2'],
    ['Value 1', 'Value 2'],
    ['Value 1', 'Value 2'],
  ],
}
