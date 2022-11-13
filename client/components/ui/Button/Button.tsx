import s from './Button.module.scss'
import cn from 'clsx'

type ButtonProps = {
  className?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  disabled?: boolean
}

const Button = ({
  className,
  disabled,
  children,
  onClick = () => void 0,
}: ButtonProps) => {
  return (
    <button
      className={cn(s._, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
