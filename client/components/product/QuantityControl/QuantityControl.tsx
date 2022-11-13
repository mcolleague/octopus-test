import { Dispatch } from 'react'
import s from './QuantityControl.module.scss'
import { Button } from '@/components/ui'

type QuantityControlProps = {
  quantity: number
  setQuantity: Dispatch<number>
}

const QuantityControl = (props: QuantityControlProps) => {
  const { quantity, setQuantity } = props

  return (
    <div className={s._}>
      <span className={s.label}>Qty</span>
      <div className={s.controls}>
        <Button
          className={s.button}
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </Button>
        <span className={s.quantity} title="Current quantity">
          {quantity}
        </span>
        <Button className={s.button} onClick={() => setQuantity(quantity + 1)}>
          +
        </Button>
      </div>
    </div>
  )
}

export default QuantityControl
