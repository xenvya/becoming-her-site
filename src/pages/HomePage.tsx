import { Link } from 'react-router-dom'
import { ArrowRight, Book, Compass, Heart, Shield, Spark, Users } from '../components/Icons'
import { CtaBanner } from '../components/CtaBanner'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'

const focusAreas = [
  {
    icon: <Heart />,
    label: 'Meaningful mentorship',
    copy: 'Consistent encouragement and guidance from women who want every mentee to feel seen, heard, and valued.',
  },
  {
    icon: <Book />,
    label: 'Practical life skills',
    copy: 'Support that helps young women navigate school, relationships, decisions, goals, and everyday growth.',
  },
  {
    icon: <Compass />,
    label: 'Leadership development',
    copy: 'Opportunities to strengthen confidence, character, self-belief, communication, and future readiness.',
  },
  {
    icon: <Users />,
    label: 'Lasting connections',
    copy: 'A community-centered experience designed to create belonging, resilience, and lifelong sisterhood.',
  },
]

export function HomePage() {
  return (
    <>
      <Seo
        title="Becoming Her | Mentorship for Young Women"
        description="Becoming Her equips middle- and high-school young women with mentorship, life skills, leadership development, and lasting connections in Maryland and virtually."
      />

      <section className="home-hero">
        <div className="shell home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">Heal · Grow · Thrive</p>
            <h1>Helping young women become who they are meant to be.</h1>
            <p className="home-hero__lead">Building confidence through meaningful mentorship, practical life skills, leadership development, and lasting connections.</p>
            <div className="button-row">
              <Link className="button" to="/apply">Apply for mentorship<ArrowRight /></Link>
              <Link className="text-link" to="/programs">See how it works<ArrowRight /></Link>
            </div>
            <dl className="hero-details">
              <div><dt>Who</dt><dd>Middle & high school young women</dd></div>
              <div><dt>Where</dt><dd>Maryland in person · Virtual nationwide</dd></div>
            </dl>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__orb" aria-hidden="true" />
            <img className="home-hero__illustration" src="/images/home-portrait.webp" alt="Four young women standing together with their arms around one another" width="1024" height="680" fetchPriority="high" />
            <div className="hero-note hero-note--top"><Spark /><span>A circle that sees her</span></div>
            <div className="hero-note hero-note--bottom"><Heart /><span>Guidance that grows with her</span></div>
          </div>
        </div>
        <div className="hero-marquee" aria-label="Becoming Her values">
          <div>
            <span>Mentorship</span><i>✦</i><span>Confidence</span><i>✦</i><span>Leadership</span><i>✦</i><span>Sisterhood</span><i>✦</i><span>Mentorship</span><i>✦</i><span>Confidence</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Program overview">
        <div className="shell trust-strip__grid">
          <div><span>01</span><p><strong>Young-woman centered</strong>Support shaped around her voice and goals.</p></div>
          <div><span>02</span><p><strong>Parent and guardian connected</strong>Families begin the process together.</p></div>
          <div><span>03</span><p><strong>Mentorship—not therapy</strong>Encouragement and educational support.</p></div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="shell mission-section__grid">
          <div className="mission-section__intro">
            <p className="eyebrow">Why Becoming Her</p>
            <h2>Growth happens when a young woman knows she doesn’t have to walk alone.</h2>
            <Link className="text-link" to="/about">Meet our founder<ArrowRight /></Link>
          </div>
          <article className="statement-card statement-card--mission">
            <span>Our mission</span>
            <p>To equip young women with the tools, guidance, and support needed to heal, grow, and thrive. Through mentorship, leadership development, and community building, we help prepare them for future success and lifelong connection.</p>
          </article>
          <article className="statement-card statement-card--vision">
            <span>Our vision</span>
            <p>Young women confidently becoming who they are meant to be—healed from the past, empowered in the present, prepared to lead in the future, and connected through a lifelong sisterhood.</p>
          </article>
        </div>
      </section>

      <section className="section section--mist focus-section">
        <div className="shell">
          <SectionHeading
            eyebrow="What we nurture"
            title={<>More than advice. <em>A foundation for what’s next.</em></>}
            copy={<p>Every part of Becoming Her is designed to help young women develop confidence for today and tools for the future.</p>}
          />
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <article className="focus-card" key={area.label}>
                <span className="focus-card__number">0{index + 1}</span>
                <div className="focus-card__icon">{area.icon}</div>
                <h3>{area.label}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
          <div className="section-action"><Link className="button button--outline" to="/programs">Explore the program<ArrowRight /></Link></div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-section__grid">
          <div className="process-section__media">
            <img src="/images/application-background.webp" alt="Young woman using a mobile phone" width="800" height="534" loading="lazy" />
            <div className="process-section__badge"><span>Start here</span><strong>Connection begins with a conversation.</strong></div>
          </div>
          <div>
            <SectionHeading eyebrow="A simple first step" title="From interest to connection." copy={<p>We keep the beginning thoughtful and straightforward for young women and their families.</p>} />
            <ol className="process-list">
              <li><span>01</span><div><h3>Share your interest</h3><p>A parent or guardian sends a short introduction with basic eligibility and contact information.</p></div></li>
              <li><span>02</span><div><h3>Connect with our team</h3><p>We follow up to learn more, answer questions, and explain current opportunities and expectations.</p></div></li>
              <li><span>03</span><div><h3>Explore the right fit</h3><p>Together, we consider format, goals, and next steps before requesting more personal information.</p></div></li>
            </ol>
            <Link className="button" to="/apply">Begin the conversation<ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section safety-preview">
        <div className="shell safety-preview__grid">
          <div className="safety-preview__icon"><Shield /></div>
          <div>
            <p className="eyebrow">Safety & trust</p>
            <h2>Care starts with clarity.</h2>
          </div>
          <div className="safety-preview__copy">
            <p>Becoming Her provides mentorship, encouragement, and educational support. It is not a substitute for professional counseling, mental-health care, or emergency services.</p>
            <Link className="text-link" to="/safety">Read our safety commitments<ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="section founder-preview">
        <div className="shell founder-preview__grid">
          <div className="founder-preview__portrait">
            <div aria-hidden="true" />
            <img src="/images/founder-headshot.webp" alt="Anaya Cobb, founder of Becoming Her" width="720" height="960" loading="lazy" />
          </div>
          <div className="founder-preview__content">
            <p className="eyebrow">A note from our founder</p>
            <blockquote>“Having someone encourage, guide, and believe in me had a lasting impact. Becoming Her grew from my desire to offer that same support to other young women.”</blockquote>
            <p>— Anaya Cobb, Founder & CEO</p>
            <Link className="text-link" to="/about">Read Anaya’s story<ArrowRight /></Link>
          </div>
        </div>
      </section>

      <CtaBanner title="Her next chapter can start with one conversation." copy="Tell us a little about your family and what you’re looking for. Our team will help you understand the next step." />
    </>
  )
}
