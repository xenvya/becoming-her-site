import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | Becoming Her" description="The page you requested could not be found." path="/404" />
      <section className="not-found">
        <div className="shell not-found__inner">
          <span>404</span>
          <p className="eyebrow">Page not found</p>
          <h1>This page isn’t part of her story.</h1>
          <p>The link may be outdated, or the page may have moved. Return home or contact our team if you need help finding something.</p>
          <div className="button-row"><Link className="button" to="/">Return home<ArrowRight /></Link><Link className="text-link" to="/contact">Contact us<ArrowRight /></Link></div>
        </div>
      </section>
    </>
  )
}
