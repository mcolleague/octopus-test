import s from './Image.module.scss'
import cn from 'clsx'

type ImageProps = {
  className?: string
  src: string
  alt: string
  withBackground?: boolean
}

const Image = ({ src, alt, withBackground, className }: ImageProps) => {
  const modifiers = [...(withBackground ? [s[`_--withBg`]] : [])]

  return (
    <div className={cn(s._, ...modifiers, className)}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image
