import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import QuantityControl from '.'

export default {
  title: 'product/QuantityControl',
  component: QuantityControl,
} as ComponentMeta<typeof QuantityControl>

const Template: ComponentStory<typeof QuantityControl> = () => {
  const [quantity, setQuantity] = useState<number>(1)
  return <QuantityControl quantity={quantity} setQuantity={setQuantity} />
}

export const Default = Template.bind({})
