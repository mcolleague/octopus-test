import { render, fireEvent } from '@testing-library/react'
import ProductPage from '../pages/products/[slug]'
import { Product } from '@/types/product'
import { CartProvider } from '@/context/cart'
import { products as mockProductsData } from '../../server/db'

const mockProduct = mockProductsData[0]

const renderPage = (product: Product) => {
  return render(
    <CartProvider>
      <ProductPage product={product} />
    </CartProvider>
  )
}

test('should be able to increase and decrease product quantity', async () => {
  const { getByText, getByTitle } = renderPage(mockProduct)

  const increaseQuantity = getByText('+')

  const currentQuantity = getByTitle('Current quantity')
  expect(currentQuantity).toHaveTextContent('1')

  fireEvent.click(increaseQuantity)
  expect(currentQuantity).toHaveTextContent('2')

  const decreaseQuantity = getByText('-')

  fireEvent.click(decreaseQuantity)
  expect(currentQuantity).toHaveTextContent('1')
})

test('should be able to add items to the basket', async () => {
  const { getByText, getByTitle } = renderPage(mockProduct)

  const increaseQuantity = getByText('+')

  const currentQuantity = getByTitle('Current quantity')

  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)

  expect(currentQuantity).toHaveTextContent('4')

  const addToBasketElement = getByText('Add to cart')
  fireEvent.click(addToBasketElement)

  const basketItems = getByTitle('Basket items')
  expect(basketItems).toHaveTextContent('4')
})

test('should be able to clear cart', () => {
  const { getByText, getByTitle } = renderPage(mockProduct)

  const increaseQuantity = getByText('+')

  const basketItems = getByTitle('Basket items')

  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)
  fireEvent.click(increaseQuantity)

  const addToBasketElement = getByText('Add to cart')
  fireEvent.click(addToBasketElement)

  const cartToggle = getByTitle('Cart')
  fireEvent.click(cartToggle)
  expect(basketItems).toHaveTextContent('0')
})
