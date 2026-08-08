import { InterestForm } from '../components/InterestForm'
import { Check, Shield } from '../components/Icons'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

export function ApplyPage() {
  return (
    <>
      <Seo
        title="Apply for Mentorship | Becoming Her"
        description="Take the first step toward Becoming Her mentorship. Parents and guardians can share basic interest information without submitting sensitive youth data online."
        path="/apply"
        image="/images/application-background.webp"
      />
      <PageHero
        eyebrow="Apply for mentorship"
        title={<>Start with a <em>conversation.</em></>}
        description="The first step is intentionally short. A parent or legal guardian shares basic information, then our team follows up to discuss fit, availability, and expectations."
        image="/images/application-background.webp"
        imageAlt="Young woman holding a mobile phone"
        tone="mist"
      />

      <section className="section apply-expectations">
        <div className="shell apply-expectations__grid">
          <div>
            <p className="eyebrow">Before you begin</p>
            <h2>What to expect from this first step.</h2>
          </div>
          <ul className="check-list check-list--cards">
            <li><Check /><span><strong>A parent or guardian completes it.</strong> Young people should not submit the form independently.</span></li>
            <li><Check /><span><strong>Only basic information is requested.</strong> No birth date, school, street address, therapy status, or family history.</span></li>
            <li><Check /><span><strong>It is not an enrollment decision.</strong> Our team will contact you to discuss current opportunities and next steps.</span></li>
          </ul>
        </div>
      </section>

      <section className="section section--mist apply-form-section">
        <div className="shell apply-form-section__grid">
          <aside className="apply-form-section__aside">
            <Shield />
            <h2>Your family’s information deserves care.</h2>
            <p>This website does not store the responses below. Submitting opens a prepared message in your email app so you can review it before sending.</p>
            <p className="small-copy">Do not include medical information, family history, school details, or other sensitive personal information in the optional note.</p>
          </aside>
          <InterestForm />
        </div>
      </section>
    </>
  )
}
