---
to: components/<%= dir %>/<%= name %>/<%= name %>.tsx
---
import s from './<%= name %>.module.scss'

type <%= name %>Props = {
  title: string
}

const <%= name %> = ({ title }: <%= name %>Props) => {
  return (
    <div className={s._}>{ title }</div>
  )
}

export default <%= name %>