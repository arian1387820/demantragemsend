import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../../data/site'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <section className="hero" aria-label="Introduction">
      <div className="shell">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Iranian Demantoid Garnet</p>
            <h1 className="hero__title">
              Beyond the ordinary.
              <br />A world of green.
            </h1>
            <p className="hero__text">
              Discover the brilliance of natural Iranian Demantoid Garnet. Exceptional gemstones shaped by nature
              and refined through craftsmanship.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--solid" to="/collections">
                Explore the Collection
              </Link>
              <Link className="btn btn--ghost" to="/about">
                Discover Our Story
              </Link>
            </div>

            <div className="hero__foot">
              <p className="hero__count" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{String(heroSlides.length).padStart(2, '0')}</span>
              </p>
              <p className="hero__caption">Rough &amp; faceted · Iran</p>
            </div>
          </div>

          <div
            className="hero__media"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {heroSlides.map((slide, slideIndex) => (
              <div key={slide.image} className={`hero__slide${slideIndex === index ? ' is-active' : ''}`}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  width={1024}
                  height={1024}
                  loading={slideIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
