import s from './Heading.module.scss'

type HeadingProps = {
  level?: number
  title: string
  subtitle?: string
}

const Heading = ({ level = 1, title, subtitle }: HeadingProps) => {
  return (
    <>
      {/* level prop could be used to render different tags... */}
      <h1 className={s._}>{title}</h1>
      {subtitle && <h4 className={s.subtitle}>{subtitle}</h4>}
    </>
  )
}

export default Heading
