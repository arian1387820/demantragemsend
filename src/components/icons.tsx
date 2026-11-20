type IconProps = { className?: string }

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M3.5 12h16M13.5 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  )
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M7 17 17 7M8.2 7H17v8.8" strokeLinecap="square" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M4 9h16M4 15h16" strokeLinecap="square" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M20.5 4.2 3.4 10.6l5.2 1.9 1.9 5.6 2.6-3.4 4 2.6 3.4-13.1Z" strokeLinejoin="round" />
      <path d="m8.6 12.5 8-5.1-5.5 6.7" strokeLinejoin="round" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.5 7.4L3.6 20.4l1.3-4.2a8.4 8.4 0 1 1 15.5-4.5Z" strokeLinejoin="round" />
      <path d="M9 8.3c-.5.1-.9.6-1 1.1-.2 1.2.4 2.6 1.4 3.7 1 1.1 2.4 1.9 3.6 1.9.6 0 1.1-.3 1.3-.8l.3-.9-1.9-.9-.8.8c-.9-.3-2-1.4-2.3-2.3l.8-.8-.8-1.9-.6.1Z" strokeLinejoin="round" />
    </svg>
  )
}

export function SocialIcon({ name, className }: { name: 'instagram' | 'telegram' | 'whatsapp'; className?: string }) {
  if (name === 'instagram') return <InstagramIcon className={className} />
  if (name === 'telegram') return <TelegramIcon className={className} />
  return <WhatsAppIcon className={className} />
}
