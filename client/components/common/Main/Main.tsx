import s from './Main.module.scss'

type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
  return <main className={s._}>{children}</main>
}

export default Main
