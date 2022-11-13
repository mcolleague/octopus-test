import { Page } from '@/components/common'
import { Image } from '@/components/ui'
import s from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <Page title="Home" description="Welcome to Octupus Energy">
      <div className={s._}>
        <Image
          src="https://static.octopuscdn.com/logos/logo.svg"
          alt="Octopus Energy Logo"
        />
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{' '}
          <code>client/pages/product.js</code>
        </p>
      </div>
    </Page>
  )
}
