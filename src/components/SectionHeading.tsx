import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  copy?: ReactNode
  align?: 'left' | 'center'
  inverse?: boolean
}

export function SectionHeading({ eyebrow, title, copy, align = 'left', inverse = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}${inverse ? ' section-heading--inverse' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <div className="section-heading__copy">{copy}</div>}
    </div>
  )
}
