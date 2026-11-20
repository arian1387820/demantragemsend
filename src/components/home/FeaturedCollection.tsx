import { Link } from 'react-router-dom'
import { collections } from '../../data/site'
import { ArrowUpRight } from '../icons'

export default function FeaturedCollection() {
  return (
    <section className="section" aria-labelledby="featured-collection-title">
      <div className="shell">
        <div className="featured__grid">
          <div className="featured__intro">
            <p className="eyebrow">Featured Collection</p>
            <h2 className="heading" id="featured-collection-title">
              Nature’s finest shades of green.
            </h2>
            <p className="lede">
              A curated selection of exceptional natural Demantoid Garnets, from remarkable rough specimens to
              precisely faceted gemstones.
            </p>
            <Link className="text-link" to="/collections">
              View All Collections <ArrowUpRight />
            </Link>
          </div>

          <div className="featured__cards">
            {collections.map((collection) => (
              <Link className="card" key={collection.slug} to={`/collections/${collection.slug}`}>
                <div className="card__media">
                  <img src={collection.image} alt={collection.title} loading="lazy" decoding="async" />
                </div>
                <div className="card__body">
                  <div>
                    <h3 className="card__title">{collection.title}</h3>
                    <p className="card__text">{collection.short}</p>
                  </div>
                  <span className="circle-link" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
