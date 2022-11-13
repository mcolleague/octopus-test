import s from './Basket.module.scss'
import { useCartContext } from '@/context/cart'
import { CartItem } from '@/types/product'

const Basket = () => {
  const toQuantity = (acc: number, item: CartItem) => acc + item.quantity
  const { cart, removeFromCart } = useCartContext()
  const showQuantity = cart.reduce(toQuantity, 0) > 0

  return (
    <div
      className={s._}
      title="Cart"
      onClick={() => removeFromCart({ productId: 1 })}
    >
      <div className={s.icon}>
        <img className={s.cart} src="/basket.svg" alt="Shopping basket" />
      </div>
      <span className={s.quantity} hidden={!showQuantity} title="Basket items">
        {cart.reduce(toQuantity, 0)}
      </span>
    </div>
  )
}

export default Basket
