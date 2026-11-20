import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation, socials } from '../data/site'
import { CloseIcon, MenuIcon, SocialIcon } from './icons'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link to="/" className="wordmark" aria-label="DEMANTRAGEMS — home">
            Demantragems
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div id="site-menu" className={`menu-panel${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="menu-panel__top">
          <span className="wordmark">Demantragems</span>
          <button
            ref={closeRef}
            type="button"
            className="menu-panel__close"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false)
              toggleRef.current?.focus()
            }}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="menu-panel__body">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="menu-panel__foot">
          <span>Iranian Demantoid Garnet</span>
          <span style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer noopener">
                {social.name}
              </a>
            ))}
          </span>
        </div>
      </div>
    </>
  )
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className ?? 'social-list'}>
      {socials.map((social) => (
        <a
          key={social.name}
          className="social-link"
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${social.name} — ${social.handle}`}
        >
          <SocialIcon name={social.icon} />
          <span>{social.handle}</span>
        </a>
      ))}
    </div>
  )
}
