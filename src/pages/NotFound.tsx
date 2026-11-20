import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1 className="display">This page is not part of the collection.</h1>
        <p className="lede" style={{ marginTop: '1.5rem' }}>
          The page you were looking for does not exist. Return to the homepage, or explore the collections.
        </p>
        <div className="not-found__actions">
          <Link className="btn btn--solid" to="/">
            Back to Home
          </Link>
          <Link className="btn btn--ghost" to="/collections">
            View Collections
          </Link>
        </div>
      </div>
    </section>
  )
}
