type ProductFields = {
  id: number
  name: string
  slug: string
  power: string
  description: string
  price: number
  quantity: number
  brand: string
  weight: number
  height: number
  width: number
  length: number
  model_code: string
  colour: string
  img_url: string
}

export type Product = {
  model: string
  pk: number
  fields: ProductFields
}
