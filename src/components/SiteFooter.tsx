import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navigation } from '../data/site'
import { ArrowRight } from './icons'
import { SocialLinks } from './SiteHeader'

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = email.trim()

    if (!EMAIL.test(value)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('sending')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      const data = (await response.json().catch(() => ({}))) as { error?: string }
      if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('success')
      setMessage('Thank you — you are on the list.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label className="visually-hidden" htmlFor="newsletter-email">
        Email address
      </label>
      <div className="newsletter">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            if (status !== 'sending') {
              setStatus('idle')
              setMessage('')
            }
          }}
        />
        <button type="submit" aria-label="Subscribe to the newsletter" disabled={status === 'sending'}>
          <ArrowRight />
        </button>
      </div>
      <p className="form-message" data-state={status === 'error' ? 'error' : status === 'success' ? 'success' : undefined} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  )
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <p className="footer-brand__mark">Demantragems</p>
            <p className="footer-brand__text">Exceptional natural gemstones. From Iran to the world.</p>
            <SocialLinks />
          </div>

          <nav aria-label="Footer">
            <p className="footer-title">Quick Links</p>
            <div className="footer-links">
              {navigation.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label === 'About' ? 'About Us' : item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="footer-title">Newsletter</p>
            <p className="footer-note">
              Stay connected with exceptional gemstones, new collections, and stories from the world of Demantoid.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 DEMANTRAGEMS. All rights reserved.</p>
          <div className="footer-bottom__links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
            <Link to="/credits">Image Credits</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
