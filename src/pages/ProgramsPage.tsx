import { Link } from 'react-router-dom'
import { ArrowRight, Book, Check, Compass, Heart, Shield, Users } from '../components/Icons'
import { CtaBanner } from '../components/CtaBanner'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'

const programAreas = [
  { icon: <Heart />, title: 'Mentorship', copy: 'Encouragement, guidance, reflection, and a consistent connection with a caring mentor.' },
  { icon: <Book />, title: 'Life skills', copy: 'Practical conversations that support decision-making, communication, goals, and everyday confidence.' },
  { icon: <Compass />, title: 'Leadership', copy: 'Opportunities to strengthen voice, character, self-belief, and readiness for future choices.' },
  { icon: <Users />, title: 'Community', copy: 'A wider circle of belonging where young women can learn, connect, and grow alongside one another.' },
]

export function ProgramsPage() {
  return (
    <>
      <Seo
        title="Mentorship Programs | Becoming Her"
        description="Explore Becoming Her’s in-person and virtual mentoring for middle- and high-school young women, centered on life skills, leadership, confidence, and community."
        path="/programs"
        image="/images/application-background.webp"
      />
      <PageHero
        eyebrow="How we mentor"
        title={<>Support for who she is—and who she is <em>becoming.</em></>}
        description="Our mentoring experience centers middle- and high-school young women through encouragement, practical growth, leadership development, and community."
        image="/images/application-background.webp"
        imageAlt="Young woman holding a mobile phone"
      >
        <Link className="button" to="/apply">Express interest<ArrowRight /></Link>
      </PageHero>

      <section className="section program-overview">
        <div className="shell">
          <SectionHeading eyebrow="Four areas of growth" title={<>A mentoring experience with <em>purpose.</em></>} copy={<p>Each area supports the mission at the heart of Becoming Her: helping young women heal, grow, thrive, and prepare to lead.</p>} />
          <div className="program-area-grid">
            {programAreas.map((area, index) => (
              <article key={area.title}>
                <div className="program-area-grid__top"><span>0{index + 1}</span>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section format-section">
        <div className="shell format-section__grid">
          <div className="format-section__image">
            <img src="/images/team-background.webp" alt="Young woman taking part in a group conversation" width="800" height="640" loading="lazy" />
          </div>
          <div className="format-section__content">
            <p className="eyebrow">Where connection happens</p>
            <h2>In person in Maryland. Virtual across the United States.</h2>
            <p>Format and availability are discussed with each family during the interest process. Virtual mentoring helps extend the opportunity to young women beyond Maryland while keeping the first step personal.</p>
            <ul className="check-list">
              <li><Check />Designed for middle- and high-school young women</li>
              <li><Check />A parent or legal guardian begins the process</li>
              <li><Check />Current format and availability are confirmed before enrollment</li>
              <li><Check />Mentorship is educational and supportive—not clinical care</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="shell">
          <SectionHeading align="center" eyebrow="The journey" title="A thoughtful path from interest to next steps." />
          <ol className="journey-grid">
            <li><span>01</span><h3>Interest</h3><p>A parent or guardian shares basic contact and eligibility information.</p></li>
            <li><span>02</span><h3>Conversation</h3><p>Our team follows up to answer questions and understand goals.</p></li>
            <li><span>03</span><h3>Fit</h3><p>Family and program expectations, current availability, and format are discussed.</p></li>
            <li><span>04</span><h3>Next steps</h3><p>Additional consent and program information are requested only when appropriate.</p></li>
          </ol>
        </div>
      </section>

      <section className="section program-safety-callout">
        <div className="shell program-safety-callout__inner">
          <Shield />
          <div><p className="eyebrow">Before you apply</p><h2>Know what mentorship is—and what it is not.</h2></div>
          <div><p>Becoming Her provides mentorship, encouragement, and educational support. It does not replace professional counseling, mental-health treatment, or emergency services.</p><Link className="text-link" to="/safety">Safety & trust information<ArrowRight /></Link></div>
        </div>
      </section>

      <CtaBanner title="Let’s explore whether Becoming Her is the right fit." copy="The interest form is intentionally short. It opens a conversation without asking for sensitive personal history." />
    </>
  )
}
