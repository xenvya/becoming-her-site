import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function AccessibilityPage() {
  return (
    <>
      <Seo title="Accessibility | Becoming Her" description="Becoming Her’s commitment to an inclusive, keyboard-friendly, readable, and accessible website experience." path="/accessibility" />
      <section className="policy-hero">
        <div className="shell policy-hero__inner">
          <p className="eyebrow">Accessibility</p>
          <h1>Everyone should be able to connect with the mission.</h1>
          <p>Becoming Her is committed to improving access to its website for people with disabilities and across different devices, browsers, and assistive technologies.</p>
        </div>
      </section>
      <section className="section policy-content">
        <div className="shell policy-content__grid">
          <aside><p>Our target</p><strong>WCAG 2.1 AA</strong></aside>
          <div className="prose">
            <section><h2>Features included</h2><ul><li>Semantic headings, landmarks, lists, links, and form labels</li><li>Keyboard-operable navigation and visible focus states</li><li>A skip link to bypass repeated navigation</li><li>Alternative text for meaningful images</li><li>Responsive text and controls for mobile and zoomed layouts</li><li>Light and dark color themes with accessible contrast</li><li>Reduced-motion support for users who request it</li></ul></section>
            <section><h2>Need assistance?</h2><p>If something prevents you from accessing information, completing a task, or contacting our team, please tell us what page you were using and what assistance you need.</p><p>Email <a href="mailto:info.becomingherhq@gmail.com">info.becomingherhq@gmail.com</a>, call <a href="tel:+14434104567">(443) 410-4567</a>, or visit the <Link to="/contact">contact page</Link>.</p></section>
            <section><h2>Ongoing improvement</h2><p>Accessibility is an ongoing process. The website should be retested after significant design, content, form, analytics, or platform changes.</p></section>
          </div>
        </div>
      </section>
    </>
  )
}
