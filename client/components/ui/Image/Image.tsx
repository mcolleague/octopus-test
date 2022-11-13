import s from './Image.module.scss'
import cn from 'clsx'

type ImageProps = {
  className?: string
  src: string
  alt: string
  withBackground?: boolean
  isFigure?: boolean
}

const Image = ({
  src,
  alt,
  withBackground,
  isFigure,
  className,
}: ImageProps) => {
  const modifiers = [...(withBackground ? [s[`_--withBg`]] : [])]

  return isFigure ? (
    <figure className={cn(s._, ...modifiers, className)}>
      <img src={src} alt={alt} />
    </figure>
  ) : (
    <div className={cn(s._, ...modifiers, className)}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image
