import s from './Section.module.scss'
import cn from 'clsx'

type SectionProps = {
  className?: string
  heading?: string
  children: React.ReactNode
}

const Section = ({ className, heading, children }: SectionProps) => {
  return (
    <section className={cn(s._, className)}>
      {heading && <h2>{heading}</h2>}
      {children}
    </section>
  )
}

export default Section
