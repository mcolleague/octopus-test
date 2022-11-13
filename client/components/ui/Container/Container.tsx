import cn from 'clsx'
import styles from './Container.module.scss'

interface Props {
  className?: string
  children?: React.ReactNode
}

const Container = ({ children, className }: Props) => {
  return <div className={cn(styles._, className)}>{children}</div>
}

export default Container
