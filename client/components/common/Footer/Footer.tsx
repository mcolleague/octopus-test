import s from './Footer.module.scss'
import { Container } from '@/components/ui'

const Footer = () => {
  return (
    <footer className={s._}>
      <Container>
        <p>
          Octopus Energy Ltd is a company registered in England and Wales.
          Registered number: 09263424. Registered office: 33 Holborn, London,
          EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
        </p>
      </Container>
    </footer>
  )
}

export default Footer
