import { Link } from 'react-router-dom'
import { articles } from '../../data/site'
import { ArrowUpRight } from '../icons'

export default function JournalPreview() {
  return (
    <section className="section" aria-labelledby="journal-title">
      <div className="shell">
        <div className="journal__grid">
          <div className="journal__intro">
            <p className="eyebrow">From the Journal</p>
            <h2 className="heading" id="journal-title">
              Stories carved
              <br />
              by nature.
            </h2>
            <Link className="text-link" to="/journal">
              Read the Journal <ArrowUpRight />
            </Link>
          </div>

          <div className="journal__cards">
            {articles.map((article) => (
              <Link className="post-card" key={article.slug} to={`/journal/${article.slug}`}>
                <div className="post-card__media">
                  <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
                </div>
                <p className="post-card__meta">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </p>
                <h3 className="post-card__title">{article.title}</h3>
                <div className="post-card__foot">
                  <span className="label">Read Article</span>
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
