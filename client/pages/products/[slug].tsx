import { productsQuery } from '../../lib/apollo-client'
import { Product } from '@/types/product'

type Props = {
  product: Product
}

type Context = {
  params: {
    slug: string
  }
}

const ProductPage = ({ product }: Props) => {
  return <div>{product.fields.name}</div>
}

export async function getStaticPaths() {
  const { data } = await productsQuery()

  return {
    paths: data.allProducts.map(({ fields: { slug } }: Product) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: Context) {
  // Ideally we'd pass the slug as a variable in the query as we don't
  // need to fetch all products here
  const { data } = await productsQuery()
  const product = data.allProducts.find(
    (product: Product) => product.fields.slug === slug
  )

  return {
    props: {
      product,
    },
  }
}

export default ProductPage
