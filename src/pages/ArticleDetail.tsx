import { Link, useParams } from 'react-router-dom'
import { articles } from '../data/site'
import { ArrowRight } from '../components/icons'
import NotFound from './NotFound'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)

  if (!article) return <NotFound />

  const other = articles.find((item) => item.slug !== article.slug)

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">{article.category}</p>
          <h1 className="display article-title">{article.title}</h1>
          <p className="label article-date">{article.date}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="article-media">
            <img src={article.image} alt={article.title} />
          </div>

          <div className="article-body">
            <div className="prose">
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {other && (
        <section className="section section--tight next-article">
          <div className="shell next-article__inner">
            <div>
              <p className="label">Next in the Journal</p>
              <h2 className="heading--sm">
                <Link to={`/journal/${other.slug}`}>{other.title}</Link>
              </h2>
            </div>
            <Link className="circle-link" to={`/journal/${other.slug}`} aria-label={`Read ${other.title}`}>
              <ArrowRight />
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
