import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description: string
  image: string
  imageAlt: string
  tone?: 'mist' | 'cream' | 'dark'
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, image, imageAlt, tone = 'mist', children }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="shell page-hero__grid">
        <div className="page-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
        <div className="page-hero__media">
          <div className="page-hero__media-shape" aria-hidden="true" />
          <img src={image} alt={imageAlt} width="800" height="900" fetchPriority="high" />
        </div>
      </div>
    </section>
  )
}
