import { productsQuery } from '../lib/apollo-client'
import Link from 'next/link'
import { Product } from '@/types/product'

type Props = {
  products: Product[]
}

const Products = (props: Props) => {
  const { products } = props
  return (
    <div>
      <h1>Our products</h1>
      {products.map(({ pk, fields: { slug, name } }) => (
        <Link key={pk} href={`/products/${slug}`}>
          {name}
        </Link>
      ))}
    </div>
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
