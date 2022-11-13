import { productsQuery } from '../lib/apollo-client'
import Link from 'next/link'
import { Product } from '@/types/product'
import { Page } from '@/components/common'
import { Container, Grid, Image } from '@/components/ui'
import s from '@/styles/pages/Products.module.scss'

type Props = {
  products: Product[]
}

const Products = (props: Props) => {
  const { products } = props
  return (
    <Page title="Products" description="View our products">
      <Container>
        <h1>Our products</h1>
        <Grid>
          {products.map(({ pk, fields: { slug, img_url, name } }) => (
            <article key={pk} className={s.gridItem}>
              <Link href={`/products/${slug}`}>
                <a>
                  <Image src={img_url} alt={name} isFigure withBackground />
                  <h3>{name}</h3>
                </a>
              </Link>
            </article>
          ))}

          <div className={s.dummyGridItem}></div>
          <div className={s.dummyGridItem}></div>
          <div className={s.dummyGridItem}></div>
          <div className={s.dummyGridItem}></div>
          <div className={s.dummyGridItem}></div>
        </Grid>
      </Container>
    </Page>
  )
}

export async function getStaticProps() {
  const { data } = await productsQuery()

  return {
    props: {
      products: data.allProducts,
    },
  }
}

export default Products
