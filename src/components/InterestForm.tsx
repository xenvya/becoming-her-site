import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from './Icons'

type InterestFields = {
  guardianName: string
  email: string
  state: string
  gradeBand: string
  format: string
  note: string
  consent: boolean
}

const initialFields: InterestFields = {
  guardianName: '',
  email: '',
  state: '',
  gradeBand: '',
  format: '',
  note: '',
  consent: false,
}

export function InterestForm() {
  const [fields, setFields] = useState(initialFields)
  const [opened, setOpened] = useState(false)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = `Mentorship interest — ${fields.guardianName}`
    const body = [
      `Parent/guardian: ${fields.guardianName}`,
      `Email: ${fields.email}`,
      `State: ${fields.state}`,
      `Student grade band: ${fields.gradeBand}`,
      `Preferred format: ${fields.format}`,
      '',
      'What we would like the team to know:',
      fields.note || 'No additional note provided.',
    ].join('\n')

    setOpened(true)
    window.location.href = `mailto:info.becomingherhq@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-card__intro">
        <p className="eyebrow">Mentorship interest</p>
        <h2>Tell us how to reach you.</h2>
        <p>This short first step collects only what our team needs to begin a conversation. We will ask for any additional information later, if needed.</p>
      </div>

      <div className="form-grid">
        <label className="field field--full">
          <span>Parent or guardian name <em>Required</em></span>
          <input
            autoComplete="name"
            name="guardian-name"
            required
            value={fields.guardianName}
            onChange={(event) => setFields({ ...fields, guardianName: event.target.value })}
          />
        </label>
        <label className="field">
          <span>Email <em>Required</em></span>
          <input
            autoComplete="email"
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={(event) => setFields({ ...fields, email: event.target.value })}
          />
        </label>
        <label className="field">
          <span>State <em>Required</em></span>
          <input
            autoComplete="address-level1"
            name="state"
            required
            value={fields.state}
            onChange={(event) => setFields({ ...fields, state: event.target.value })}
          />
        </label>
        <label className="field">
          <span>Student’s grade band <em>Required</em></span>
          <select
            name="grade-band"
            required
            value={fields.gradeBand}
            onChange={(event) => setFields({ ...fields, gradeBand: event.target.value })}
          >
            <option value="">Choose one</option>
            <option>Middle school</option>
            <option>High school</option>
          </select>
        </label>
        <fieldset className="choice-group">
          <legend>Preferred format <em>Required</em></legend>
          <label><input type="radio" name="format" value="In person" required checked={fields.format === 'In person'} onChange={(event) => setFields({ ...fields, format: event.target.value })} /><span>In person</span></label>
          <label><input type="radio" name="format" value="Virtual" checked={fields.format === 'Virtual'} onChange={(event) => setFields({ ...fields, format: event.target.value })} /><span>Virtual</span></label>
          <label><input type="radio" name="format" value="Open to either" checked={fields.format === 'Open to either'} onChange={(event) => setFields({ ...fields, format: event.target.value })} /><span>Open to either</span></label>
        </fieldset>
        <label className="field field--full">
          <span>Anything you would like us to know? <small>Optional</small></span>
          <textarea name="note" rows={5} value={fields.note} onChange={(event) => setFields({ ...fields, note: event.target.value })} />
        </label>
        <label className="check-field field--full">
          <input type="checkbox" required checked={fields.consent} onChange={(event) => setFields({ ...fields, consent: event.target.checked })} />
          <span>I am a parent or legal guardian, and I consent to being contacted by Becoming Her about mentorship.</span>
        </label>
      </div>

      <div className="form-card__submit">
        <button className="button" type="submit">Open email to send <ArrowRight /></button>
        <p>Your responses open in your email app and are not stored by this website.</p>
      </div>
      {opened && <p className="form-confirmation" role="status"><Check />Your email app should now be open. Send the prepared message when you are ready.</p>}
    </form>
  )
}
