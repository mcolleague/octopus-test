import s from './Grid.module.scss'
import cn from 'clsx'

type GridProps = {
  columns?: number
  children: React.ReactNode
}

const Grid = ({ children, columns = 3 }: GridProps) => {
  return <div className={cn(s._, s[`_--col${columns}`])}>{children}</div>
}

export default Grid
