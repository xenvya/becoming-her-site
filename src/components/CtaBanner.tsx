import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'

type CtaBannerProps = {
  eyebrow?: string
  title: string
  copy: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CtaBanner({
  eyebrow = 'Your next step',
  title,
  copy,
  primaryLabel = 'Start your application',
  primaryTo = '/apply',
  secondaryLabel = 'Ask a question',
  secondaryTo = '/contact',
}: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="shell cta-banner__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="cta-banner__actions">
          <Link className="button button--light" to={primaryTo}>{primaryLabel}<ArrowRight /></Link>
          <Link className="text-link text-link--inverse" to={secondaryTo}>{secondaryLabel}<ArrowRight /></Link>
        </div>
      </div>
    </section>
  )
}
