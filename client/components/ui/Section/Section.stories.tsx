import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Section from '.'

export default {
  title: 'ui/Section',
  component: Section,
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: 'Section title',
  children: <div>Child component</div>,
}
