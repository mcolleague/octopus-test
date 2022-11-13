import s from './ProductSingleView.module.scss'
import { Product } from '@/types/product'
import { Image } from '@/components/ui'

type ProductSingleViewProps = {
  product: Product
}

const ProductSingleView = ({ product }: ProductSingleViewProps) => {
  const { name } = product.fields

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
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  )
}

export default ProductSingleView
