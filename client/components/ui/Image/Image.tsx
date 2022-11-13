import s from './Image.module.scss'
import cn from 'clsx'

type ImageProps = {
  className?: string
  src: string
  alt: string
}

const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <div className={cn(s._, className)}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image
