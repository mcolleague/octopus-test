import { render, fireEvent } from '@testing-library/react'
import { default as ProductPage } from '../pages/product'
import { CartProvider } from '@/context/cart'

const renderPage = () => {
  return render(
    <CartProvider>
      <ProductPage />
    </CartProvider>
  )
}

test('should be able to increase and decrease product quantity', async () => {
  const { getByText, getByTitle } = renderPage()

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
  const { getByText, getByTitle } = renderPage()

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
