import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy | Becoming Her" description="Learn what information the Becoming Her website collects, how email-based forms work, and how to ask a privacy question." path="/privacy" />
      <section className="policy-hero">
        <div className="shell policy-hero__inner">
          <p className="eyebrow">Privacy</p>
          <h1>A simpler website that asks for less.</h1>
          <p>This notice describes the current website experience. It should be reviewed whenever analytics, hosted forms, application systems, or other data-processing services are added.</p>
        </div>
      </section>
      <section className="section policy-content">
        <div className="shell policy-content__grid">
          <aside><p>Last updated</p><strong>August 8, 2026</strong><nav aria-label="Privacy page sections"><a href="#information">Information</a><a href="#email">Email forms</a><a href="#services">External services</a><a href="#children">Children’s privacy</a><a href="#contact-privacy">Contact</a></nav></aside>
          <div className="prose">
            <section id="information"><h2>Information this website collects</h2><p>The current website does not use an analytics platform, advertising tracker, customer account, or hosted application database. The site may receive basic technical request information through its hosting provider, such as IP address, browser type, requested page, and timestamps, for delivery, reliability, and security.</p></section>
            <section id="email"><h2>How the email forms work</h2><p>The mentorship-interest and contact forms prepare an email on your device. Your information is not submitted to or stored by this website. You can review or edit the prepared message before sending it through your email provider.</p><p>Do not include medical information, counseling history, family history, school details, or other sensitive information in an initial message.</p></section>
            <section id="services"><h2>External services</h2><p>Links to PayPal and Instagram take you to third-party platforms governed by their own terms and privacy practices. Becoming Her does not control how those platforms process information.</p></section>
            <section id="children"><h2>Children’s privacy</h2><p>The mentorship-interest form is intended for a parent or legal guardian. Young people should not submit personal information through the website independently. Becoming Her does not intentionally request a child’s birth date, school, street address, health information, or family history through the initial online interest form.</p></section>
            <section id="contact-privacy"><h2>Questions and requests</h2><p>To ask how information sent by email is handled, request a correction, or raise a privacy concern, email <a href="mailto:info.becomingherhq@gmail.com">info.becomingherhq@gmail.com</a> or use the <Link to="/contact">contact page</Link>.</p></section>
          </div>
        </div>
      </section>
    </>
  )
}
