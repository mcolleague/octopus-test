import Head from 'next/head'
import { Header, Main, Footer } from '..'
import s from './Page.module.scss'

type PageProps = {
  title: string
  description: string
  children: React.ReactNode
}

const Page = ({ title, description, children }: PageProps) => {
  return (
    <div className={s._} data-page={title}>
      <Head>
        <title>{title} | Octopus Energy</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Page
