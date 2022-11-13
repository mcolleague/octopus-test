import { useState } from 'react'
import { useCartContext } from '@/context/cart'
import { Product } from '@/types/product'
import { Image, Heading, Section, Table, Button } from '@/components/ui'
import { QuantityControl } from '@/components/product'
import cn from 'clsx'
import s from './ProductSingleView.module.scss'

type ProductSingleViewProps = {
  product: Product
}

const ProductSingleView = ({ product }: ProductSingleViewProps) => {
  const {
    name,
    brand,
    weight,
    width,
    height,
    length,
    model_code,
    colour,
    power,
    quantity: productQuantity,
    description,
  } = product.fields

  const { addToCart } = useCartContext()
  const minQuantity = 1
  const [quantity, setQuantity] = useState<number>(minQuantity)

  const onAdd = () => {
    addToCart({ product, quantity })
    setQuantity(minQuantity)
  }

  return (
    <div className={s._}>
      <div className={s.wrapper}>
        <div className={s.aside}>
          <Image
            className={s.image}
            src={product.fields.img_url}
            alt={product.fields.name}
            withBackground
          />
        </div>
        <div className={s.content}>
          <Section className={s.section}>
            <Heading
              title={name}
              subtitle={`${power} // Packet of ${productQuantity}`}
            />
            <div className={s.cartZone}>
              <div className={s.priceQuantity}>
                <span className={s.price}>{`£${(
                  product.fields.price / 100
                ).toFixed(2)}`}</span>

                <QuantityControl
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              </div>

              <Button className={s.addToCart} onClick={onAdd}>
                Add to cart
              </Button>
            </div>
          </Section>

          <Section
            className={cn(
              s.section,
              s['section--tint-mobile'],
              s['section--light']
            )}
            heading="Description"
          >
            <p>{description}</p>
          </Section>

          <Section className={s.section} heading="Specifications">
            <Table
              data={[
                ['Brand', brand],
                ['Item weight', weight],
                ['Dimensions', `${height} x ${width} x ${length}`],
                ['Item Model number', model_code],
                ['Colour', colour],
              ]}
            />
          </Section>
        </div>
      </div>
    </div>
  )
}

export default ProductSingleView
