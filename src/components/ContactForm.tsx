import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from './Icons'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('General question')
  const [message, setMessage] = useState('')
  const [opened, setOpened] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
    setOpened(true)
    window.location.href = `mailto:info.becomingherhq@gmail.com?subject=${encodeURIComponent(`${topic} — ${name}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="form-card form-card--compact" onSubmit={submit}>
      <div className="form-grid">
        <label className="field">
          <span>Name <em>Required</em></span>
          <input autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="field">
          <span>Email <em>Required</em></span>
          <input type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label className="field field--full">
          <span>What can we help with? <em>Required</em></span>
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            <option>General question</option>
            <option>Mentorship application</option>
            <option>Partnership or sponsorship</option>
            <option>In-kind donation</option>
            <option>Volunteer interest</option>
            <option>Safety or privacy question</option>
          </select>
        </label>
        <label className="field field--full">
          <span>Message <em>Required</em></span>
          <textarea rows={6} required value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
      </div>
      <div className="form-card__submit">
        <button className="button" type="submit">Open email to send <ArrowRight /></button>
        <p>Your message opens in your email app and is not stored by this website.</p>
      </div>
      {opened && <p className="form-confirmation" role="status"><Check />Your email app should now be open.</p>}
    </form>
  )
}
