import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from '.'

export default {
  title: 'ui/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => (
  <div style={{ width: '400px' }}>
    <Image {...args} alt={args.alt} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://i.ibb.co/2nzwxnQ/bulb.png',
  alt: 'Product image example',
}
