import { Link } from 'react-router-dom'
import { collections } from '../data/site'
import { ArrowUpRight } from '../components/icons'

export default function Collections() {
  return (
    <>
      <section className="page-head">
        <div className="shell page-head__grid">
          <div>
            <p className="eyebrow">Collections</p>
            <h1 className="display">
              Three ways to
              <br />
              know a stone.
            </h1>
          </div>
          <div className="page-head__aside">
            <p className="lede">
              Faceted, rough, and the inclusions within — each collection follows a different stage of the
              demantoid’s life, from the ground to the finished stone.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="collection-list">
            {collections.map((collection) => (
              <Link className="collection-card" key={collection.slug} to={`/collections/${collection.slug}`}>
                <div className="collection-card__media">
                  <img src={collection.image} alt={collection.title} loading="lazy" decoding="async" />
                </div>
                <div className="collection-card__body">
                  <p className="label">{collection.eyebrow}</p>
                  <h2 className="heading--sm">{collection.title}</h2>
                  <p className="muted">{collection.short}</p>
                  <span className="text-link">
                    View Collection <ArrowUpRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
