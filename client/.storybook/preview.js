import '@/styles/global/global.scss'
import { CartProvider } from '@/context/cart'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <CartProvider>
      <Story />
    </CartProvider>
  ),
]
