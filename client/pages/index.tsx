import Link from 'next/link'
import { Page } from '@/components/common'
import { Image } from '@/components/ui'
import s from '@/styles/pages/Home.module.scss'

const Home = () => {
  return (
    <Page title="Home" description="Welcome to Octupus Energy">
      <div className={s._}>
        <Image
          src="https://static.octopuscdn.com/logos/logo.svg"
          alt="Octopus Energy Logo"
          isFigure
        />
        <h1>Welcome to Octopus Energy.</h1>
        <p>
          View our <Link href="/products">products</Link>.
        </p>
      </div>
    </Page>
  )
}

export default Home
