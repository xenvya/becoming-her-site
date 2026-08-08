import { Link } from 'react-router-dom'
import { ArrowRight, Check, Shield } from '../components/Icons'
import { CtaBanner } from '../components/CtaBanner'
import { Seo } from '../components/Seo'

const commitments = [
  {
    title: 'Parent and guardian involvement',
    copy: 'A parent or legal guardian begins the interest process and remains the primary contact for enrollment information and consent.',
  },
  {
    title: 'Age-appropriate information collection',
    copy: 'The initial interest form requests only basic contact, location, grade-band, and format information. Sensitive history is not requested online.',
  },
  {
    title: 'Clear program boundaries',
    copy: 'Becoming Her provides mentoring, encouragement, leadership development, life-skills support, and community—not clinical care.',
  },
  {
    title: 'Centralized communication',
    copy: 'Program questions, concerns, and requests are routed through the organization’s central email and phone rather than personal mentor accounts.',
  },
]

export function SafetyPage() {
  return (
    <>
      <Seo
        title="Safety & Trust | Becoming Her"
        description="Learn how Becoming Her communicates the scope of mentorship, involves parents and guardians, limits initial data collection, and routes questions or concerns."
        path="/safety"
      />
      <section className="policy-hero policy-hero--safety">
        <div className="shell policy-hero__inner">
          <div className="policy-hero__icon"><Shield /></div>
          <p className="eyebrow">Safety & trust</p>
          <h1>Care starts with clarity, boundaries, and family involvement.</h1>
          <p>Young people and their families deserve to understand what Becoming Her provides, what information is requested, and where to direct questions or concerns.</p>
        </div>
      </section>

      <section className="section safety-commitments">
        <div className="shell safety-commitments__grid">
          <div className="safety-commitments__intro"><p className="eyebrow">Our public commitments</p><h2>What families can expect at the first step.</h2></div>
          <div className="safety-commitments__list">
            {commitments.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section section--mist scope-section">
        <div className="shell scope-section__grid">
          <div>
            <p className="eyebrow">Scope of support</p>
            <h2>Mentorship is supportive. It is not therapy.</h2>
            <p>Becoming Her mentors can offer encouragement, share perspective, discuss goals and life skills, and help young women build confidence and connection.</p>
          </div>
          <div className="scope-card">
            <h3>Becoming Her does not provide:</h3>
            <ul>
              <li><Check />Mental-health diagnosis or treatment</li>
              <li><Check />Professional counseling or medical care</li>
              <li><Check />Emergency or crisis-response services</li>
              <li><Check />A substitute for licensed professional support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section concerns-section">
        <div className="shell concerns-section__grid">
          <div><p className="eyebrow">Questions or concerns</p><h2>Speak with program leadership.</h2></div>
          <div><p>Use the central Becoming Her contact information for questions about mentorship, current policies, communications, consent, privacy, or participant wellbeing.</p><Link className="button" to="/contact">Contact our team<ArrowRight /></Link><p className="small-copy">If someone is in immediate danger, contact local emergency services. Becoming Her’s website, phone, email, and social accounts are not crisis services.</p></div>
        </div>
      </section>

      <CtaBanner title="Know the program before sharing personal information." copy="Start with basic interest information, ask questions, and review current expectations with our team before proceeding." />
    </>
  )
}
