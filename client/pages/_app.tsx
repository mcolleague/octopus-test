import type { AppProps } from 'next/app'
import '../styles/global/global.scss'
import { CartProvider } from '@/context/cart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
