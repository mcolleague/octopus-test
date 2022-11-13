import s from './ProductSingleView.module.scss'
import { Product } from '@/types/product'
import { Image, Heading, Section, Table } from '@/components/ui'
import cn from 'clsx'

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
    quantity,
    description,
  } = product.fields

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
              subtitle={`${power} // Packet of ${quantity}`}
            />
          </Section>

          <Section
            className={cn(s.section, s['section--tint-mobile'])}
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
