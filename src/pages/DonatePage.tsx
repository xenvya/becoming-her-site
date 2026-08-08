import { Link } from 'react-router-dom'
import { ArrowUpRight, Book, Heart, Spark, Users } from '../components/Icons'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'

const givingPaths = [
  { icon: <Spark />, title: 'Online donations', copy: 'Give securely through the Becoming Her PayPal business profile.' },
  { icon: <Book />, title: 'In-kind support', copy: 'Contribute new school supplies, hygiene products, food, or other requested essentials.' },
  { icon: <Users />, title: 'Corporate sponsorships', copy: 'Explore sponsorship, matching gifts, or workplace-giving opportunities.' },
  { icon: <Heart />, title: 'Volunteer your time', copy: 'Ask about opportunities to support events, programs, and community outreach.' },
]

export function DonatePage() {
  return (
    <>
      <Seo
        title="Donate | Becoming Her"
        description="Support Becoming Her’s work providing mentorship, essential resources, educational opportunities, and positive experiences for young women."
        path="/donate"
        image="/images/donate-background.webp"
      />
      <PageHero
        eyebrow="Support the mission"
        title={<>Be part of a <em>lasting impact.</em></>}
        description="Your generosity helps create opportunities, provide resources, and make meaningful mentorship more accessible to young women."
        image="/images/donate-background.webp"
        imageAlt="Hands joined together in support"
        tone="dark"
      >
        <a className="button button--light" href="https://www.paypal.biz/BecomingHerMentoring" target="_blank" rel="noopener noreferrer">Give with PayPal<ArrowUpRight /></a>
      </PageHero>

      <section className="section donation-reasons">
        <div className="shell donation-reasons__grid">
          <SectionHeading eyebrow="Why give" title={<>When young women thrive, <em>communities thrive.</em></>} />
          <div className="donation-reasons__list">
            <article><span>01</span><div><h3>Support positive pathways</h3><p>Essential supplies and enriching activities can help young women participate, connect, and grow.</p></div></article>
            <article><span>02</span><div><h3>Remove financial barriers</h3><p>Donations help reduce cost as a barrier to programs, events, resources, and opportunities.</p></div></article>
            <article><span>03</span><div><h3>Strengthen community</h3><p>Confidence, connection, and opportunity can create a positive ripple through families and communities.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section section--mist giving-paths">
        <div className="shell">
          <SectionHeading align="center" eyebrow="Ways to support" title="Choose the path that works for you." />
          <div className="giving-grid">
            {givingPaths.map((path, index) => (
              <article key={path.title}><span>0{index + 1}</span>{path.icon}<h3>{path.title}</h3><p>{path.copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section paypal-section">
        <div className="shell paypal-section__grid">
          <div className="paypal-section__media">
            <img src="/images/donate-hands.webp" alt="People joining hands in a circle" width="1200" height="548" loading="lazy" />
          </div>
          <div className="paypal-section__content">
            <p className="eyebrow">Give online</p>
            <h2>A simple, secure way to support Becoming Her.</h2>
            <p>Open our PayPal business profile to review and complete your gift. PayPal processes the payment on its platform.</p>
            <a className="button" href="https://www.paypal.biz/BecomingHerMentoring" target="_blank" rel="noopener noreferrer">Continue to PayPal<ArrowUpRight /></a>
            <div className="paypal-section__qr">
              <img src="/images/donate-qr.png" alt="QR code linking to the Becoming Her PayPal profile" width="160" height="160" loading="lazy" />
              <p><strong>On another device?</strong> Scan the code to open the same verified profile.</p>
            </div>
            <p className="small-copy">Questions about receipts, in-kind gifts, sponsorships, or other ways to give? <Link to="/contact">Contact our team</Link> before donating.</p>
          </div>
        </div>
      </section>

      <section className="donor-thanks">
        <div className="shell donor-thanks__inner"><Heart /><div><p className="eyebrow">Thank you</p><h2>Every act of generosity helps keep the vision moving forward.</h2></div><p>Whether you donate, share our story, volunteer, or introduce a potential partner, your support helps remind young women that they do not have to walk their journey alone.</p></div>
      </section>
    </>
  )
}
