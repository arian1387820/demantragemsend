import ContactForm from '../components/ContactForm'
import { SocialLinks } from '../components/SiteHeader'

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="shell page-head__grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display">
              Begin a
              <br />
              conversation.
            </h1>
          </div>
          <div className="page-head__aside">
            <p className="lede">
              For collections, rough specimens, precision cutting, or a commission, write to us. Every enquiry is
              read and answered personally.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-grid__aside">
            <p className="label">Enquiries</p>
            <p className="muted contact-grid__note">
              We work with collectors, jewellers, and private clients. Tell us what you have in mind and we will
              reply with what is available.
            </p>

            <p className="label contact-grid__label">Follow</p>
            <SocialLinks className="social-list social-list--dark" />
          </div>

          <div className="contact-grid__form">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
