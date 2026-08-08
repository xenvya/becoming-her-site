import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { CtaBanner } from '../components/CtaBanner'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { teamMembers } from '../data/team'

export function TeamPage() {
  return (
    <>
      <Seo
        title="Meet the Team | Becoming Her"
        description="Meet the mentors and leaders who support Becoming Her’s mission to help young women grow in confidence, character, leadership, and connection."
        path="/team"
        image="/images/team-background.webp"
      />
      <PageHero
        eyebrow="Meet the team"
        title={<>Women committed to being <em>in her corner.</em></>}
        description="Our team brings warmth, encouragement, lived experience, and a shared belief in the power of meaningful mentorship."
        image="/images/team-background.webp"
        imageAlt="Young woman in conversation with a mentor"
        tone="dark"
      >
        <Link className="button button--light" to="/apply">Apply for mentorship<ArrowRight /></Link>
      </PageHero>

      <section className="section team-section">
        <div className="shell">
          <div className="team-section__intro">
            <p className="eyebrow">The people behind the mission</p>
            <h2>Connection begins with showing up.</h2>
            <p>Meet the women helping create a supportive circle for young women in Maryland and beyond.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article className="team-card" key={member.name}>
                <div className="team-card__image">
                  <span>0{index + 1}</span>
                  <img src={member.image} alt={member.imageAlt} width="640" height="900" loading={index < 2 ? 'eager' : 'lazy'} />
                </div>
                <div className="team-card__content">
                  <p>{member.role}</p>
                  <h2>{member.name}</h2>
                  <details>
                    <summary>Read bio <span aria-hidden="true">+</span></summary>
                    <p>{member.bio}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <div className="team-contact-note">
            <p>To protect individual team members’ privacy and keep communication organized, please direct all program questions to our central inbox.</p>
            <a className="text-link" href="mailto:info.becomingherhq@gmail.com">Email our team<ArrowRight /></a>
          </div>
        </div>
      </section>

      <CtaBanner title="Every young woman deserves someone in her corner." copy="Begin with a short interest form, and our team will help your family understand current opportunities and next steps." />
    </>
  )
}
