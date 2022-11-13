import {
  ReactNode,
  useMemo,
  useCallback,
  createContext,
  useContext,
  useReducer,
} from 'react'
import { State, Action, ActionPayload } from '@/types/product'

const initialState = {
  cart: [],
}

function cartReducer(state: State, action: Action) {
  let updatedCart

  switch (action.type) {
    case 'ADD_TO_CART':
      const matchedItem = state.cart.find(
        ({ product }) => product.pk === action.payload.product.pk
      )

      if (matchedItem) {
        updatedCart = state.cart.map((item) => {
          return item.product.pk === action.payload.product.pk
            ? {
                product: item.product,
                quantity: item.quantity + action.payload.quantity,
              }
            : item
        })
      } else {
        updatedCart = [
          ...state.cart,
          {
            product: action.payload.product,
            quantity: action.payload.quantity,
          },
        ]
      }

      return { ...state, cart: updatedCart }

    case 'REMOVE_FROM_CART':
      updatedCart = state.cart.filter(
        (item) => item.product.pk !== action.payload.productId
      )
      return { ...state, cart: updatedCart }

    default:
      throw new Error()
  }
}

export const CartContext = createContext<State | any>(initialState)

export function CartProvider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = useCallback((payload: ActionPayload<'Add'>) => {
    dispatch({ type: 'ADD_TO_CART', payload })
  }, [])

  const removeFromCart = useCallback((payload: ActionPayload<'Remove'>) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload })
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      addToCart,
      removeFromCart,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  )

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
