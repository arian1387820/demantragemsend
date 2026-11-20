import { Link, useParams } from 'react-router-dom'
import { collections } from '../data/site'
import NotFound from './NotFound'

export default function CollectionDetail() {
  const { slug } = useParams()
  const collection = collections.find((item) => item.slug === slug)

  if (!collection) return <NotFound />

  const others = collections.filter((item) => item.slug !== collection.slug)

  return (
    <>
      <section className="page-head">
        <div className="shell page-head__grid">
          <div>
            <p className="eyebrow">Collection {collection.eyebrow}</p>
            <h1 className="display">{collection.title}</h1>
          </div>
          <div className="page-head__aside">
            <p className="lede">{collection.intro}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid">
          <div className="detail-grid__media">
            <img src={collection.image} alt={collection.title} />
          </div>
          <div className="detail-grid__body">
            <div className="prose">
              {collection.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <ul className="notes">
              {collection.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            <Link className="btn btn--solid" to="/contact">
              Enquire About This Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <p className="eyebrow">Continue</p>
          <div className="collection-list collection-list--two">
            {others.map((item) => (
              <Link className="collection-card" key={item.slug} to={`/collections/${item.slug}`}>
                <div className="collection-card__media">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div className="collection-card__body">
                  <p className="label">{item.eyebrow}</p>
                  <h2 className="heading--sm">{item.title}</h2>
                  <p className="muted">{item.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
