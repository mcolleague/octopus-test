import { productsQuery } from '../../lib/apollo-client'
import { Product } from '@/types/product'
import { Page } from '@/components/common'

type Props = {
  product: Product
}

type Context = {
  params: {
    slug: string
  }
}

const ProductPage = ({ product }: Props) => {
  return (
    <Page
      title={`${product.fields.name} | Products`}
      description={product.fields.description}
    >
      <div>{product.fields.name}</div>
    </Page>
  )
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
