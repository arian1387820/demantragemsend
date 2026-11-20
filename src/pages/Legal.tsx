import { Link } from 'react-router-dom'

const content = {
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    body: [
      'DEMANTRAGEMS collects only the information you choose to send us: your name, email address, and the content of an enquiry, or your email address when you subscribe to the newsletter.',
      'Enquiries are used to answer you and to discuss gemstones, collections, or cutting work. Newsletter subscriptions are used to send occasional updates about collections and journal articles.',
      'We do not sell, rent, or share your details with third parties. Messages and subscriptions are stored on our own systems and can be removed on request.',
      'To have your information deleted, contact us through the channels listed on the contact page and we will remove it.',
    ],
  },
  terms: {
    eyebrow: 'Terms & Conditions',
    title: 'Terms & Conditions',
    body: [
      'The content of this website describes natural Demantoid Garnet and the work of DEMANTRAGEMS. It is editorial information, not an offer for sale, and no listing on this site constitutes a binding commercial offer.',
      'Gemstones vary. Colour, size, and internal characteristics differ from stone to stone, and photographs are supplied as a guide rather than an exact representation of any individual stone.',
      'Availability, pricing, and specifications for any gemstone are confirmed only in direct correspondence with DEMANTRAGEMS.',
      'Photographs supplied by DEMANTRAGEMS remain the property of the brand and may not be reproduced without permission. Editorial photographs sourced from third parties are credited on the image credits page.',
      '© 2026 DEMANTRAGEMS. All rights reserved.',
    ],
  },
} as const

export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const page = content[kind]

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="display">{page.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell prose">
          {page.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p>
            <Link className="text-link" to="/contact">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
