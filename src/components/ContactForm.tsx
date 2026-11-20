import { useState } from 'react'
import { ArrowRight } from './icons'

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

const subjects = [
  'General enquiry',
  'Collection enquiry',
  'Precision cutting',
  'Press & collaboration',
]

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  function update(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (status === 'error' || status === 'success') {
      setStatus('idle')
      setMessage('')
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (values.name.trim().length < 2) {
      setStatus('error')
      setMessage('Please enter your name.')
      return
    }
    if (!EMAIL.test(values.email.trim())) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }
    if (values.message.trim().length < 10) {
      setStatus('error')
      setMessage('Please tell us a little more (at least 10 characters).')
      return
    }

    setStatus('sending')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = (await response.json().catch(() => ({}))) as { error?: string }
      if (!response.ok) throw new Error(data.error || 'Your message could not be sent. Please try again.')
      setStatus('success')
      setMessage('Thank you — your enquiry has reached us. We will reply shortly.')
      setValues({ name: '', email: '', subject: subjects[0], message: '' })
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.')
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update('name', event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update('email', event.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="contact-subject">Subject</label>
        <select
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={(event) => update('subject', event.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
        />
      </div>

      <div className="contact-form__foot">
        <button className="btn btn--solid" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending' : 'Send Enquiry'} <ArrowRight />
        </button>
        <p
          className="form-message"
          data-state={status === 'error' ? 'error' : status === 'success' ? 'success' : undefined}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      </div>
    </form>
  )
}
