import s from './Header.module.scss'
import { Container, Image } from '@/components/ui'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={s._}>
      <Container>
        <div className={s.wrapper}>
          <Link href="/">
            <a>
              <Image
                className={s.logo}
                src="/octopus-logo.svg"
                alt="Octopus Energy Logo"
              />
            </a>
          </Link>

          <Image className={s.cart} src="/basket.svg" alt="Shopping basket" />
        </div>
      </Container>
    </header>
  )
}

export default Header
