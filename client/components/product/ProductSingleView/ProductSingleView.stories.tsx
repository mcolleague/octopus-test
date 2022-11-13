import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductSingleView from '.'

export default {
  title: 'product/ProductSingleView',
  component: ProductSingleView,
} as ComponentMeta<typeof ProductSingleView>

const Template: ComponentStory<typeof ProductSingleView> = (args) => <ProductSingleView {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Title'
}
