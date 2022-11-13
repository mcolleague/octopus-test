import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Basket from '.'

export default {
  title: 'product/Basket',
  component: Basket,
} as ComponentMeta<typeof Basket>

const Template: ComponentStory<typeof Basket> = () => <Basket />

export const Default = Template.bind({})
