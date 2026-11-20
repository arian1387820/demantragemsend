import { Link } from 'react-router-dom'
import { projectFacts } from '../../data/site'

export default function FeaturedProject() {
  return (
    <section className="section project" aria-labelledby="featured-gemstone-title">
      <div className="shell">
        <div className="project__grid">
          <div className="project__media">
            <img
              src="/images/collection-four.jpg"
              alt="Four small round faceted demantoid garnets resting on amethyst crystals"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="project__copy">
            <p className="eyebrow">Featured Gemstone</p>
            <h2 className="heading" id="featured-gemstone-title">
              A rare expression of nature.
            </h2>
            <p className="lede">
              Every gemstone tells a story. From its natural formation to its final brilliance, Demantoid Garnet
              reveals a remarkable relationship between rarity, colour, and craftsmanship.
            </p>
            <Link className="btn btn--ghost" to="/collections">
              Explore Our Gemstones
            </Link>

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
      </div>
    </section>
  )
}
