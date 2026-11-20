import { Link } from 'react-router-dom'
import { articles } from '../data/site'
import { ArrowUpRight } from '../components/icons'

export default function Journal() {
  return (
    <>
      <section className="page-head">
        <div className="shell page-head__grid">
          <div>
            <p className="eyebrow">From the Journal</p>
            <h1 className="display">
              Stories carved
              <br />
              by nature.
            </h1>
          </div>
          <div className="page-head__aside">
            <p className="lede">
              Notes on demantoid garnet, the geology behind it, and the decisions made at the cutting wheel.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="journal-list">
            {articles.map((article) => (
              <article className="journal-entry" key={article.slug}>
                <Link className="journal-entry__media" to={`/journal/${article.slug}`} tabIndex={-1} aria-hidden="true">
                  <img src={article.image} alt="" loading="lazy" decoding="async" />
                </Link>
                <div className="journal-entry__body">
                  <p className="post-card__meta">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </p>
                  <h2 className="heading--sm">
                    <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="muted">{article.excerpt}</p>
                  <Link className="text-link" to={`/journal/${article.slug}`}>
                    Read Article <ArrowUpRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
