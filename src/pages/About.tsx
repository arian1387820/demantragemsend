import { Link } from 'react-router-dom'
import { approach, projectFacts } from '../data/site'

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="shell page-head__grid">
          <div>
            <p className="eyebrow">About Us</p>
            <h1 className="display">
              From the mountains
              <br />
              of Iran to the world.
            </h1>
          </div>
          <div className="page-head__aside">
            <p className="lede">
              DEMANTRAGEMS works with natural Iranian Demantoid Garnet — a gemstone of extraordinary colour,
              uncommon character, and a supply that cannot be manufactured.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid detail-grid--reverse">
          <div className="detail-grid__media">
            <img
              src="/images/collection-rough.jpg"
              alt="Rough demantoid garnet crystals arranged on a pale surface"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="detail-grid__body">
            <div className="prose">
              <h2>A material worth the patience.</h2>
              <p>
                Demantoid is the green variety of andradite garnet — a stone with a lustre closer to diamond than
                to any other garnet, and a colour that has never been reproduced convincingly in a laboratory.
              </p>
              <p>
                Our work begins with selection. Stones are examined in daylight, judged for colour and clarity,
                and set aside until the right cut is clear. Nothing is rushed to the wheel.
              </p>
              <p>
                From Iran, the material travels to the workshop, where it is oriented, faceted, and finished by
                hand. What leaves us is a stone that can be read honestly: its origin, its characteristics, and
                the decisions made in cutting it.
              </p>
            </div>

            <dl className="facts">
              {projectFacts.map((fact) => (
                <div className="facts__row" key={fact.label}>
                  <dt className="facts__label">{fact.label}</dt>
                  <dd style={{ margin: 0 }}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="approach__head">
            <p className="eyebrow">The Demantragems Approach</p>
            <h2 className="heading">Where nature meets craftsmanship.</h2>
          </div>
          <div className="approach__grid">
            {approach.map((item) => (
              <article className="approach__item" key={item.title}>
                <div className="approach__media">
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="shell cta-band__inner">
          <h2 className="heading">A stone of your own.</h2>
          <p className="lede">
            Tell us what you are looking for — a finished gemstone, a rough specimen, or a commission cut to
            your brief.
          </p>
          <Link className="btn btn--cream" to="/contact">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
