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

export type ValueOf<T> = T[keyof T]

export type ActionMap = {
  Add: {
    type: 'ADD_TO_CART'
    payload: { product: Product; quantity: number }
  }
  Remove: {
    type: 'REMOVE_FROM_CART'
    payload: { productId: number }
  }
}

export type ActionPayload<K extends keyof ActionMap> = ActionMap[K]['payload']

export type Action = ValueOf<ActionMap>

export type CartItem = {
  product: Product
  quantity: number
}

export type State = {
  cart: CartItem[]
}
