import { ContactForm } from '../components/ContactForm'
import { Instagram, Mail, MapPin, Phone } from '../components/Icons'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | Becoming Her"
        description="Contact Becoming Her about mentorship, donations, partnerships, volunteering, safety, or general questions."
        path="/contact"
        image="/images/home-portrait.webp"
      />
      <PageHero
        eyebrow="Contact us"
        title={<>We’re here to <em>listen.</em></>}
        description="Have a question about mentorship, giving, volunteering, or partnership? Reach out and help us understand how we can support you."
        image="/images/home-portrait.webp"
        imageAlt="Four young women standing together with their arms around one another"
        tone="cream"
      />

      <section className="section contact-section">
        <div className="shell contact-section__grid">
          <div className="contact-details">
            <p className="eyebrow">Talk with our team</p>
            <h2>Choose the way that works for you.</h2>
            <p>For the fastest routing, use our central contact information rather than contacting individual mentors directly.</p>
            <div className="contact-methods">
              <a href="mailto:info.becomingherhq@gmail.com"><Mail /><div><span>Email</span><strong>info.becomingherhq@gmail.com</strong></div></a>
              <a href="tel:+14434104567"><Phone /><div><span>Call or text</span><strong>(443) 410-4567</strong></div></a>
              <p><MapPin /><span><span>Location</span><strong>Maryland, United States</strong></span></p>
              <a href="https://www.instagram.com/becominghermentoring/" target="_blank" rel="noopener noreferrer"><Instagram /><div><span>Instagram</span><strong>@becominghermentoring</strong></div></a>
            </div>
            <aside className="contact-boundary"><strong>Please note</strong><p>This website and inbox are not monitored as crisis services. If someone is in immediate danger, contact local emergency services.</p></aside>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
