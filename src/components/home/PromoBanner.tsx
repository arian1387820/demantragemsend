import { Link } from 'react-router-dom'

export default function PromoBanner() {
  return (
    <section className="promo" aria-labelledby="promo-title">
      <div className="promo__inner">
        <div className="promo__copy">
          <p className="eyebrow">Natural Demantoid Garnet</p>
          <h2 id="promo-title">
            Discover the beauty
            <br />
            within every stone.
          </h2>
          <p>
            From the heart of Iran to the world, explore the exceptional character of natural Demantoid Garnet.
          </p>
          <Link className="btn btn--cream" to="/contact">
            Start a Project
          </Link>
        </div>

        <div className="promo__media">
          <img
            src="/images/banner.jpg"
            alt="Vivid green garnet crystals covering a dark mineral matrix"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
