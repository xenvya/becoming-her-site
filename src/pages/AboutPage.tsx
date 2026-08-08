import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Spark, Users } from '../components/Icons'
import { CtaBanner } from '../components/CtaBanner'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'

export function AboutPage() {
  return (
    <>
      <Seo
        title="Our Story | Becoming Her"
        description="Meet founder Anaya Cobb and learn why Becoming Her is committed to helping young women feel seen, heard, valued, and supported."
        path="/about"
        image="/images/founder-headshot.webp"
      />
      <PageHero
        eyebrow="Our story"
        title={<>Built from the impact of <em>being believed in.</em></>}
        description="Becoming Her began with a personal understanding: the right encouragement at the right time can change the direction of a young woman’s life."
        image="/images/founder-headshot.webp"
        imageAlt="Anaya Cobb, founder of Becoming Her"
        tone="cream"
      >
        <Link className="button" to="/team">Meet the team<ArrowRight /></Link>
      </PageHero>

      <section className="section story-section">
        <div className="shell story-section__grid">
          <aside className="story-section__aside">
            <p className="eyebrow">In Anaya’s words</p>
            <h2>“I wanted to become that source of support for someone else.”</h2>
            <div className="story-section__signature">Anaya Cobb</div>
            <p>Founder, CEO & Head Mentor</p>
          </aside>
          <div className="prose prose--large">
            <p className="lead">Welcome, and thank you for taking the time to learn more about Becoming Her. This organization is deeply personal to me because I know firsthand the difference that mentorship—and having someone who truly listens—can make.</p>
            <p>There were times in my life when I felt like no one understood me. Having someone encourage, guide, and believe in me had a lasting impact that continues to shape who I am today. That experience inspired me to become a source of support for other young women who may be searching for someone to believe in them.</p>
            <p>I also understand that financial challenges can prevent young women from accessing the resources, mentorship, and opportunities they deserve. That is why Becoming Her was created as a nonprofit: to help ensure support is not limited by a family’s ability to pay.</p>
            <p>My hope is that every young woman who connects with us feels seen, heard, valued, and empowered to become the best version of herself. Whether you donate, volunteer, partner with us, or simply share our mission, your support helps keep this vision alive.</p>
          </div>
        </div>
      </section>

      <section className="section section--dark values-section">
        <div className="shell">
          <SectionHeading inverse align="center" eyebrow="What guides us" title="The way we show up matters." />
          <div className="values-grid">
            <article><Heart /><span>01</span><h3>She is heard</h3><p>We make room for every young woman’s voice, story, questions, and goals.</p></article>
            <article><Spark /><span>02</span><h3>Growth is whole-person</h3><p>Confidence, character, life skills, leadership, and community all shape what comes next.</p></article>
            <article><Users /><span>03</span><h3>Connection is lasting</h3><p>We believe meaningful support can become a foundation a young woman carries forward.</p></article>
          </div>
        </div>
      </section>

      <section className="section mission-reprise">
        <div className="shell mission-reprise__grid">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>Equip her to heal, grow, thrive, and lead.</h2>
          </div>
          <p>Through mentorship, leadership development, and community building, we prepare young women for future success while cultivating connections that can extend far beyond their time in the program.</p>
        </div>
      </section>

      <CtaBanner title="A stronger future starts with showing up." copy="Learn how Becoming Her helps young women build confidence, practical skills, and meaningful connection." primaryLabel="Explore our program" primaryTo="/programs" />
    </>
  )
}
